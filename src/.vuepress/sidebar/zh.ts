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
<<<<<<< HEAD
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
=======
      children: [
        {
          text: "QQNT+DDBOT",
          icon: "lightbulb",
          prefix: "QQNT+DDBOT/",
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
              link: "命令指南/"
            },
            {
              text: "模板",
              icon: "fab fa-markdown",
              prefix: "模板/",
              link: "模板/"
            },
          ],
        },
        {
          text: "原生DDBOT教程",
          icon: "lightbulb",
          prefix: "原生DDBOT教程/",
          // link: "windows/",
          collapsible: true,
          children: [
            {
              text: "前置准备",
              icon: "fab fa-markdown",
              link: "前置准备/"
            },
            {
              text: "下载DDBOT",
              icon: "fab fa-markdown",
              link: "下载DDBOT/"
            },
            {
              text: "运行DDBOT",
              icon: "fab fa-markdown",
              link: "运行DDBOT/"
            },
            {
              text: "命令指南",
              icon: "fab fa-markdown",
              prefix: "命令指南/",
              link: "命令指南/"
            },
            {
              text: "模板",
              icon: "fab fa-markdown",
              prefix: "模板/",
              link: "模板/"
            },
          ],
        },
      ],
    },
  ],
});
>>>>>>> 9a74975 (更新文檔)
