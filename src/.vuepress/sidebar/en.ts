import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Introduction",
      icon: "note",
      prefix: "intro/",
      children: ["/guide/introduction.md", "/guide/intro/getstarted.md"],
    },
    {
      text: "Quick Start",
      icon: "note",
      prefix: "quickstart/",
      children: ["/guide/quickstart/menus", 
      "/guide/quickstart/navigation",
      "/guide/quickstart/walkthroughfirstapp","/guide/quickstart/emulator"
    ], 
    },
    {
      text: "Menus and Naviation",
      icon: "note",
      prefix: "menus/",
      children: ["/guide/menus/addmenu", 
      "/guide/menus/menunaming",
      "/guide/menus/menunavigation","/guide/menus/retrievingmenuinput"
    ],
    },
    {
      text: "Variables & Methods",
      icon: "note",
      prefix: "variables/",
      children: ["/guide/variables/session", 
      "/guide/variables/menu", 
      "/guide/variables/actions", 
      "/guide/variables/variableref", 
      "/guide/variables/actionresultref"
    ],
    },
    {
      text: "Actions",
      icon: "note",
      prefix: "actions/",
      children: ["/guide/actions/callingrest.md", 
      "/guide/actions/javascript.md",
      "/guide/actions/database.md",
      "/guide/actions/sendingsms.md"
    ], 

    },
    {
      text: "Videos",
      icon: "note",
      prefix: "videos/",
      children: ["/guide/videos"],
    },
    {
      text: "ShortCode Providers",
      icon: "note",
      prefix: "providers/",
      children: ["/guide/providers"],
    },
    {
      text: "Going Live with your app",
      icon: "config",
      prefix: "deployment/",
      children: ["/guide/deployment/gettingshortcode.md", 
      "/guide/deployment/connectionyourapp.md",
      "/guide/deployment/onpremisedeployment.md"],
    },
    {
      text: "Walkthrough: Build Sample Apps",
      icon: "note",
      prefix: "walkthroughs/",
      children: ["/guide/walkthroughs/mtnmobilemoney.md", 
      "/guide/walkthroughs/zeepay.md",
      "/guide/walkthroughs/etranzact.md",
      "/guide/walkthroughs/loanapp.md",
      "/guide/walkthroughs/mpesa.md",
      "/guide/walkthroughs/mpesaloan.md",
      "/guide/walkthroughs/ussdbanking.md",
    ],
    },
    {
      text: "Code Recipes",
      icon: "note",
      prefix: "recipes/",
      children: ["/guide/recipes/checkregisteration.md",
      "/guide/recipes/setsessionvalue.md",
      "/guide/recipes/retrieveactionresult.md",
      "/guide/recipes/gotomenufromcode.md"
    ],  
    },
    {
      text: "How Tos",
      icon: "config",
      prefix: "recipes/",
      children: ["/guide/howtos/retrieveactionresult.md", "/guide/howtos/retrievesessionvar.md"],

    },
    "",
  ],
});
