
import type { Metadata } from "next";

const title = "Futurix - Offical Website";
const description = ""
const url = "";

export const metadata: Metadata = {
  // metadataBase: new URL(url),
  title: {
    default: title,
    template: "%s | " + title,
  },
  description,
  icons: {
    icon: [{ rel: "icon", url: "/favicon.ico" }],
  },
  authors: [
    { name: "Fanyu", url: "https://github.com/fanyuuu2006" },
  ],

  keywords: [
  ],

  // openGraph: {
  //   siteName: title,
  //   title,
  //   description,
  //   url,
  //   images: [
  //     {
  //       url: "/GameShow.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "FanYu Profile Image - Frontend Developer Portfolio",
  //     },
  //   ],
  //   locale: "zh_TW",
  //   alternateLocale: ["en_US"],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title,
  //   description,
  //   images: ["/GameShow.jpg"],
  //   creator: "@fanyuuu2006",
  //   site: "@fanyuuu2006",
  // },
  // robots: "index, follow",

  // verification: {
  //   google: "",
  // },
  alternates: {
    canonical: url,
    languages: {
      "zh-TW": url,
      "en": url,
      "x-default": url,
    },
  },
};
