import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
       title: "Docs",
       description: "Documentation site for https://shortcodeafrica.com",
    },
  },
  // plugins: [
  //   searchProPlugin({
  //     indexContent: true,
  //     hotReload: true,
  //     customFields: [
  //       {
  //         getter: ({ frontmatter }) => frontmatter.tag as string[],
  //         formatter: `Tag: $content`,
  //       },
  //     ],
  //   }),
  // ],

  theme,
  shouldPrefetch: false,
});
