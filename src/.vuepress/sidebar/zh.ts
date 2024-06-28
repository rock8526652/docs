import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "教程",
      icon: "laptop-code",
      prefix: "docs/",
      // link: "docs/",
      collapsible: true,
      children:[
          {
            text: "Windows",
            icon: "lightbulb",
            prefix: "windows/",
            // link: "windows/",
            collapsible: true,
            children: [
              {
                text: "前置准备",
                icon: "fab fa-markdown",
                link: "前置准备/"
              },
              {
                text: "安装DDBOT",
                icon: "fab fa-markdown",
                link: "安装DDBOT/"
              },
              {
                text: "连接DDBOT",
                icon: "fab fa-markdown",
                link: "连接DDBOT/"
               },
               {
                text: "命令指南",
                icon: "fab fa-markdown",
                prefix: "命令指南/",
                link: "命令指南/",
               },
               {
                   text: "模板",
                   icon: "fab fa-markdown",
                   prefix: "模板/",
                   link: "模板/",
               }
            ]
          },
            ],
          },
        ],
    },
)