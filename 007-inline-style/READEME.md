Compile React Component

install package

npm i -D react babel-core babel-loader  babel-preset-es2015 babel-preset-react babel-preset-stage-0 webpack
ref

import React, { Component } from 'react';
why: http://haoduoshipin.com/v/179
1.安装 npm i-D babel-preset-react
2.配置 修改babelrc {}里添加"react"
3.在src里创建button.js文件，在Index.js中引用button.js文件
  因为index.js文件中有对id为app的节点使用，所以在index.html文件中添加app节点，并将对bundle.js的引用移到此节点之下
4.npm i-D react ,npm i -D react-dom
5.npm run build
