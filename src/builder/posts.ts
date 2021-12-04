import fs from "fs-extra";
import Parser from "rss-parser";
import { members } from "../../members";
import { PostItem, Member } from "../types";
import axios from "axios";
import { JSDOM } from "jsdom";
import dayjs from "dayjs";
export default {};

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  description?: string;
  isoDate?: string;
  dateMiliSeconds: number;
  ogImageUrl?: string;
};

const parser = new Parser();
let allPostItems: PostItem[] = [];

const fetchHtml = async (
    url: string
): Promise<{ ogImageUrl?: string; title: string; url: string }> => {
  const res = await axios.get(url);
  const html = res.data;
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const title = dom.window.document.title;
  const ogImageNode = document.querySelector("meta[property='og:image']");
  return {
    ogImageUrl: ogImageNode?.getAttribute("content") || undefined,
    title,
    url,
  };
};

async function fetchFeedItems(url: string) {
  const feed = await parser.parseURL(url);
  if (!feed?.items?.length) return [];

  // return item which has title and link
  const promises = feed.items.map(
      async ({ title, contentSnippet, link, isoDate, content }) => {
        const res = link ? await fetchHtml(link) : undefined;
        return {
          title,
          contentSnippet: contentSnippet?.replace(/\n/g, ""),
          link,
          isoDate,
          dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
          ogImageUrl: res?.ogImageUrl,
          content,
        };
      }
  );
  return (await Promise.all(promises)).filter(
      ({ title, link }) => title && link
  ) as FeedItem[];
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
  if (!sources?.length) return [];
  let feedItems: FeedItem[] = [];
  for (const url of sources) {
    const items = await fetchFeedItems(url);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
}

async function getMemberFeedItems(member: Member): Promise<PostItem[]> {
  const {
    id,
    sources,
    name,
    includeUrlRegex,
    excludeUrlRegex,
    includePageUrls,
    includeWordRegexes,
  } = member;
  const feedItems = await getFeedItemsFromSources(sources);
  if (!feedItems) return [];

  let postItems: PostItem[] = feedItems.map((item) => {
    return {
      ...item,
      authorName: name,
      authorId: id,
    };
  });

  // remove items which not matches includeUrlRegex
  if (includeUrlRegex) {
    postItems = postItems.filter((item) => {
      return item.link.match(new RegExp(includeUrlRegex));
    });
  }

  // remove items which matches excludeUrlRegex
  if (excludeUrlRegex) {
    postItems = postItems.filter((item) => {
      return !item.link.match(new RegExp(excludeUrlRegex));
    });
  }

  // TODO 直指定URL
  const responses = await Promise.all(
      includePageUrls.map((item) => fetchHtml(item.url))
  );
  for (const response of responses) {
    const target = includePageUrls.find((t) => t.url === response.url);
    const publishedAt = dayjs(target!.publishedAt, "YYYY/MM/DD");
    postItems.push({
      authorId: id,
      authorName: name,
      title: response.title,
      link: response.url,
      isoDate: publishedAt.toISOString(),
      dateMiliSeconds: parseInt(`${publishedAt.unix()}000`),
      ogImageUrl: response.ogImageUrl,
    });
  }
  return postItems;
}

(async function () {
  for (const member of members) {
    const items = await getMemberFeedItems(member);
    if (items) allPostItems = [...allPostItems, ...items];
  }
  allPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);
  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/posts.json", allPostItems);
})();
