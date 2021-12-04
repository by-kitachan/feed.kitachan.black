export const config = {
  siteMeta: {
    title: "Feed by きたちゃんぶらっく",
    teamName: "きたちゃんぶらっく",
    description: "ウマ娘サークル「きたちゃんぶらっく」によるフィードです。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://feed.kitachan.black"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "HP",
      href: "https://kitachan.black",
    },
    {
      title: "GitHub",
      href: "https://github.com/by-kitachan",
    },
  ],
};
