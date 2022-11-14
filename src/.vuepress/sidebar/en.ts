import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    // {
    //   icon: "discover",
    //   text: "Demo",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "Guide",
      icon: "note",
      prefix: "guide/",
      children: ["/guide/introduction.md", "/guide/GettingStarted.md"],
    },
    // {
    //   text: "Getting Started",
    //   icon: "discover",
    //   prefix: "gettingstarted/",
    //   link: "gettingstarted/",
    //   children: "structure",
    // },
    "slides",
  ],
});
