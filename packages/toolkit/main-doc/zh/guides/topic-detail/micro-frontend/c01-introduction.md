---
sidebar_position: 1
title: 微前端介绍
---

微前端是一种类似于微服务的架构，是一种由独立交付的多个前端应用组成整体的架构风格，将前端应用分解成一些更小、更简单的能够独立开发、测试、部署的应用，而在用户看来仍然是内聚的单个产品。

它主要解决了两个问题：

* 随着项目迭代应用越来越庞大，难以维护。
* 跨团队或跨部门协作开发项目导致效率低下的问题。

## 微前端关键词

在微前端研发模式中，应用会被分成 **主应用**、和 **子应用**。

- 主应用：微前端项目的基座工程，所有子应用都会由它来加载。
- 子应用：独立开发、独立部署的应用，最终会被主应用加载。

## 功能简介

* 基于 [Garfish](https://www.garfishjs.org/guide)
* 生成器支持微前端应用
* 支持 React 组件式引用微前端子应用
* 支持 loading
* 支持主应用线上、子应用线下调试模式

可以在 [开发微前端](/docs/guides/topic-detail/micro-frontend/development) 一节学习如何开发微前端主子应用。
