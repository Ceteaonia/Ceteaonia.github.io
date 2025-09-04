---
title: Ubuntu使用Fcitx5在部分应用无效的可能解决方法
date: 2025-08-11 00:01:00 +0800
categories: [杂项]
tags: [实用]
pin: false
author: 

toc: true
comments: true
typora-root-url: ../../ceteaonia.github.io
math: false
mermaid: true

---
字面意思...被Fcitx折磨的不轻，至少折腾了两天才把输入法在微信和VSCode输入不了中文的问题解决了。故此记录一下。

使用的输入法是Fcitx+Rime。

在主文件夹创建或者修改**.pam_environment**，加入以下内容：

> **GTK_IM_MODULE DEFAULT=fcitx**<br>
> **QT_IM_MODULE DEFAULT=fcitx**<br>
> **XMODIFIERS DEFAULT=@im=fcitx**<br>
> **SDL_IM_MODULE DEFAULT=fcitx**<br>

反正似乎是环境变量什么的问题，这样操作姑且是可以使用了，具体探究原因和更多问题请移步[ArchLinux论坛的原帖](https://forum.archlinuxcn.org/t/topic/11403)。
