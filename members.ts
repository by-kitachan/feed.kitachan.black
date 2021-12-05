import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "kitachan-black",
    name: "さとちゃん",
    role: "管理人",
    avatarSrc: "/avatars/icon.png",
    sources: [
      "https://kitachan.black/feed.xml",
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCmhTEFs4WocNys24JXCGeVw",
    ],
    githubUsername: "by-kitachan",
    websiteUrl: "https://kitachan.black",
    excludeUrlRegex:
      "ba9561d9e27c421789bdbcdf6cef9d10|0c1bcd676dce42608a44aca3cfcf4fb7|4eee09df30d64c3abf1a2144a039f846|ea8922452dc245d4808295af3dc9322c|2d4e257f9a0c419db676915dceef19e6|694ae94f0a7c4e1ebeb34e265ba98ea4|f2a7313d8208484387a9b2bea7bac386|647846df6afa4b739d25c1572fc75dca",
    includePageUrls: [],
  },
  {
    id: "oliver",
    name: "おりばー",
    role: "リーダー",
    bio: "「きたちゃんぶらっく」サークルリーダー",
    avatarSrc: "/avatars/oliver.png",
    sources: [],
    twitterUsername: "oliver_uma",
    githubUsername: "minakawa-daiki",
    websiteUrl: "https://kitachan.black",
    includePageUrls: [
      {
        // 「きたちゃんぶらっく」における収益の方針
        url: "https://kitachan.black/ea8922452dc245d4808295af3dc9322c",
        publishedAt: "2021/11/12",
      },
      {
        // サークルページ作成のお手伝いについて
        url: "https://kitachan.black/e472858e2017456b8cc0d821f788bfa3",
        publishedAt: "2021/07/20",
      },
      {
        // 得意練習に3人以上が集まる場合の確率検証
        url: "https://kitachan.black/5eb171a114c94688b68d1a6f6d05b891",
        publishedAt: "2021/05/13",
      },
      {
        // シン・コンジョウイクセイ
        url: "https://kitachan.black/972778c6aed94e3fbbcd776b8e01577b",
        publishedAt: "2021/04/15",
      },
      {
        // ウマ娘サークル「きたちゃんぶらっく」を創設しました
        url: "https://kitachan.black/31c28ef8461c4f2a9121cc49a6081226",
        publishedAt: "2021/04/30",
      },
      {
        // 「きたちゃんぶらっく」のサークルページが完成しました
        url: "https://kitachan.black/d414add33f2942b8802306f5580c7beb",
        publishedAt: "2021/06/02",
      },
      {
        // 「最強の因子を目指すためのキャッチアップ会」（2021/06/11）
        url: "https://kitachan.black/056d4552352d4b9992d99a78bbb13b55",
        publishedAt: "2021/06/11",
      },
      {
        // 【10月】『きたちゃんぶらっく』活動報告
        url: "https://kitachan.black/2d4e257f9a0c419db676915dceef19e6",
        publishedAt: "2021/11/05",
      },
      {
        // 【9月】『きたちゃんぶらっく』活動報告
        url: "https://kitachan.black/647846df6afa4b739d25c1572fc75dca",
        publishedAt: "2021/10/03",
      },
      {
        // 【8月】『きたちゃんぶらっく』活動報告
        url: "https://kitachan.black/d976ffc153b1441cbb9e4375f7bb0b3f",
        publishedAt: "2021/09/12",
      },
      {
        // 【7月】『きたちゃんぶらっく』活動報告
        url: "https://kitachan.black/2b91579354844ec28e19560442545555",
        publishedAt: "2021/08/02",
      },
      {
        // 【6月】『きたちゃんぶらっく』活動報告
        url: "https://kitachan.black/e3b7f02d593341b688661eec2e0f281d",
        publishedAt: "2021/07/01",
      },
      {
        // 【5月】『きたちゃんぶらっく』活動報告
        url: "https://kitachan.black/3dcaf438c1e44ad8b15f0978313ac8c5",
        publishedAt: "2021/06/02",
      },
      {
        // 【4月】『きたちゃんぶらっく』活動報告
        url: "https://kitachan.black/cf203cc4f1e94ba59035f0d8f0ad71ea",
        publishedAt: "2021/05/05",
      },
    ],
  },
  {
    id: "karinto",
    name: "かりんと",
    role: "音楽担当",
    bio: "ウマおん！をサークルページに寄稿中",
    avatarSrc: "/avatars/URA_karinto.png",
    sources: [],
    twitterUsername: "URA_karinto",
    includePageUrls: [
      {
        // ウマおん！ ～ユメヲカケル！編～
        url: "https://kitachan.black/7feb2259662f420a99b850b6faf1c14c",
        publishedAt: "2021/08/03",
      },
      {
        // ウマおん！ ～ウマ娘を巡る音楽譚～
        url: "https://kitachan.black/46cda01094384973a3270193e60a165d",
        publishedAt: "2021/06/13",
      },
    ],
  },
  {
    id: "ogatetsu",
    name: "おがテツ",
    role: "攻略部隊",
    bio: "ブログを運営してる",
    avatarSrc: "/avatars/ogatetsu.png",
    sources: ["https://ogatetsu.shop/feed"],
    twitterUsername: "o_TeT_o",
    githubUsername: "ogatetsu-0501",
    websiteUrl: "https://ogatetsu.shop",
    includePageUrls: [],
  },
  {
    id: "aoneko",
    name: "ポチ",
    role: "統計部隊",
    bio: "集計・統計のプロフェッショナル",
    avatarSrc: "/avatars/aoneko.png",
    sources: [],
    twitterUsername: "aoneko_uma",
    githubUsername: "pochi-uma",
    includePageUrls: [
      {
        // トレーニング失敗の統計
        url: "https://kitachan.black/53866139c06c494f88df9b4ada110dac",
        publishedAt: "2021/07/28",
      },
      {
        // 因子の期待値とレーニング失敗率の計算式
        url: "https://kitachan.black/8aadb7a485e548c081d08e9b14d3e013",
        publishedAt: "2021/07/29",
      },
      {
        // チーム競技場統計（7月31日版）
        url: "https://kitachan.black/f7a234e903f54eda8cc444a65267c3fc",
        publishedAt: "2021/07/31",
      },
      {
        // お休み回復量の統計
        url: "https://kitachan.black/ddacc0927f1545cabced757eb49fbb28",
        publishedAt: "2021/08/02",
      },
      {
        // チーム競技場統計（8月8日版）
        url: "https://kitachan.black/bd0042c070734a87afd1cc5e9c140e9e",
        publishedAt: "2021/08/09",
      },
      {
        // アオハル杯シナリオ、チームステータスランク・トレーニングLvの上昇要因
        url: "https://kitachan.black/c3de9e20340a49faaf4ee4dbd7f5cb1b",
        publishedAt: "2021/09/02",
      },
      {
        // 友人ありなし編成での育成経過におけるメンバー加入数
        url: "https://kitachan.black/ae9736c17cad4ebca4ff707b54ac60ce",
        publishedAt: "2021/09/03",
      },
      {
        // メンバー加入時の初期ステータスからの上昇量について
        url: "https://kitachan.black/27663ac6c2314181b802880a85d5f14e",
        publishedAt: "2021/09/03",
      },
      {
        // アオハル特訓時の、ヒントの取得率と取得Lvについて
        url: "https://kitachan.black/0982db72f1614191bacd73b2aef79b62",
        publishedAt: "2021/09/17",
      },
      {
        // アオハル杯シナリオ、お供(非サポカ)のトレーニング配置率について(得意率が加味されるか)
        url: "https://kitachan.black/2fa3860168be475da8ba8f173650dc6e",
        publishedAt: "2021/09/18",
      },
      {
        // 親祖にURAシナリオ因子持ちがいると、アオハル杯シナリオ因子の取得確率は上昇するか？
        url: "https://kitachan.black/694ae94f0a7c4e1ebeb34e265ba98ea4",
        publishedAt: "2021/10/09",
      },
      {
        // 育成における因子継承数まとめ
        url: "https://kitachan.black/0c1bcd676dce42608a44aca3cfcf4fb7",
        publishedAt: "2021/11/16",
      },
      {
        // ショータイムLv5考察まとめ
        url: "https://kitachan.black/4eee09df30d64c3abf1a2144a039f846",
        publishedAt: "2021/11/16",
      },
      {
        // 非目標レース1着時のヒント取得率
        url: "https://kitachan.black/ba9561d9e27c421789bdbcdf6cef9d10",
        publishedAt: "2021/12/05",
      },
    ],
  },
  {
    id: "BurudebI",
    name: "青い悪魔予備軍",
    role: "動画勢",
    bio: "ささやき検証とかしてる",
    avatarSrc: "/avatars/BurudebI.png",
    sources: [
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCix0FiTnFT7y7iKrGgyJUIg",
    ],
    twitterUsername: "BurudebI",
    websiteUrl: "https://www.youtube.com/c/BurudebI",
    includePageUrls: [],
  },
  {
    id: "hydro",
    name: "はいどろ",
    role: "動画勢",
    bio: "カフェオタク",
    avatarSrc: "/avatars/hydro__game.png",
    sources: [
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCgGQWHSKY7kwlANBIvriIPw",
    ],
    includeWordRegexes: "ウマ娘",
    twitterUsername: "hydro__game",
    websiteUrl: "https://www.youtube.com/c/hydrogamech",
    includePageUrls: [
      {
        url: "https://youtu.be/3vTvy8c7c6M",
        publishedAt: "2021/09/17",
      },
      {
        url: "https://kitachan.black/90c18c939480406f9f8a994a147d55b4",
        publishedAt: "2021/07/10",
      },
    ],
  },
  {
    id: "nnhs_784",
    name: "784",
    role: "筋肉集計部隊",
    bio: "チャンミの呪縛に縛られている",
    avatarSrc: "/avatars/nnhs_784.png",
    sources: [],
    twitterUsername: "nnhs_784",
    includePageUrls: [
      {
        url: "https://kitachan.black/d598923afc3646c095d3b26ddd43a292",
        publishedAt: "2021/09/01",
      },
    ],
  },
  {
    id: "tyomo_kuro",
    name: "ちょも",
    role: "GoC",
    bio: "クレーンゲームガチ勢",
    avatarSrc: "/avatars/tyomo_kuro.png",
    sources: [],
    twitterUsername: "tyomo_kuro",
    includePageUrls: [
      {
        url: "https://kitachan.black/f2a7313d8208484387a9b2bea7bac386",
        publishedAt: "2021/09/27",
      },
    ],
  },
  {
    id: "ruikumae",
    name: "くまこ",
    role: "モデル",
    bio: "YouTubeで活躍中",
    avatarSrc: "/avatars/kumako.png",
    excludeUrlRegex: "WLqYPYOPXLE",
    sources: [
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCecNaAf0KCACXBO45EsZB5Q",
    ],
    websiteUrl: "https://www.youtube.com/channel/UCn16T9OsooqLgV9Sp-_aPQg",
    twitterUsername: "ruikumae",
    includePageUrls: [],
  },
];
