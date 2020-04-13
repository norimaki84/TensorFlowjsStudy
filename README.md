# TensorFlowjsStudy

## Overview
VueCLIベースのTensorFLowJSのデモ環境です。

## Requirements
- node.js v10.15.1
- Vue v2.6.11 
- vue-router v3.1.6 
- vue-router v3.1.3 

## Description
(1) HTML 
- テンプレートエンジンは[EJS](https://github.com/mde/ejs)を使用
- ページごとのmeta情報は[metaData.json](https://github.com/Teraguchi0804/frontend_base_ver06/blob/master/development/src/assets/ejs/inc/metaData.json)で一括管理

(2) CSS 
- ベースはSCSS記法

(3) JavaScript
- モジュールバンドルはwebpackで行う 

(4) Path
- 開発時のPathの設定は[config.js](https://github.com/Teraguchi0804/frontend_base_ver06/blob/master/development/config.js)で設定

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost
$ gulp default

# build for production
$ gulp publish
```

## License
Public domain

## Authors
[Norikazu Teraguchi](https://nrmk.jp/)