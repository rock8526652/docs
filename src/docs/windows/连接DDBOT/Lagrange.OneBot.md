---
title: 使用Lagrange连接DDBOT
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

[https://lagrangedev.github.io/Lagrange.Doc/Lagrange.OneBot/Config](https://lagrangedev.github.io/Lagrange.Doc/Lagrange.OneBot/Config)

## 连接DDBOT

#### 安装完成需修改配置文件连接部分

```
{
  "Type": "ReverseWebSocket",
  "Host": "127.0.0.1",
  "Port": 15630,
  "Suffix": "/ws",
  "ReconnectInterval": 5000,
  "HeartBeatInterval": 5000,
  "AccessToken": ""
}
```