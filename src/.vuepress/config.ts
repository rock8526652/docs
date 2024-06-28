import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "DDBOT",
      description: "这是一个安装DDBOT的教程文档",
    }
  },

  theme,
});
