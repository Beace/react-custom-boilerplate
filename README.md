# React-boilerplate

本项目继承自 [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

## 场景

为了固定开发场景和习惯，快速理解 react 周边技术栈的应用场景和概念原理，建立此项目。

本项目基本上可以囊括80%以上的 react 相关技术（栈），你可以通过书写相对底层的代码来建立整个开发流程，并且兼顾性能。

## 特性

- 包含了 [react-boilerplate#features](https://github.com/react-boilerplate/react-boilerplate#features) 所有优点
- 支持 HTTPS `npm run start:https` **需要在项目根目录下配置名为 localhost.pem 和 localhost-key.pem 的公私钥**
- 强制 `eslint` 检查
- 去除了 `i18n`
- 去除了`immutable`，采用了[immer](https://github.com/mweststrate/immer)
- 自定义的 [react-loadable](https://github.com/jamiebuilds/react-loadable)
- 采用 [css in js](https://github.com/styled-components/styled-components) 写法
- 默认包含 antd 样式，默认进行了引用优化 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
- [redux-actions](https://github.com/redux-utilities/redux-actions) 将 `switch case` 转化为 `hash map`

## 使用

1. npm install
2. npm start

### 如何新建 container

[![asciicast](https://asciinema.org/a/194047.png)](https://asciinema.org/a/194047)

仿照上面的命令行的方式新建一个`container`，会发现再 `app/container` 目录下增加了 Y 目录，最终再 `containers/App` 下修改增加路由，即可。

```jsx
<Route exact path="/test" component={TestPage} />
```

### 开发套路

可以通过浏览 `app/containers/HomePage` 中的内容查看套路

### 重点阐述

#### 关于reducer actions constants saga selectors immutable 之间的关系

- [immutable](http://facebook.github.io/immutable-js) 初始化数据，并且将所有的数据都转为immutable对像，保证每次修改都是新的数据，旧数据不可变
- constants 这里定义了一些actions的类型
- actions 直接暴露给外界的方法，通过dispatch直接调用
- reducer 通过action返回的类型，修改相应的数据，是最底层触发数据修改的人员
- selectors 本质上是通过闭包来缓存数据，主要是选择数据，从相应的reducer中选取你想要的数据
- sagas 主要是用来控制异步事件，不只是API层面的异步请求，包括用户交互页面逻辑等

#### 举个例子

假如，用户输入一个name，查询name的列表

```
1. 从reducer中初始化name ->
2. constants 定义触发获取列表的类型 GET_LIST ->
3. actions 中定义getList方法，并且接受用户输入的参数name, 并返回给saga ->
4. saga 接收到name参数后开始 ajax请求获取数据 调用 call 方法 ->
5. 数据传递给reducer进行修改，因此saga进行watch了请求方法，调用takelatest方法，当ajax请求结束后告诉reducer，同时将相应的type传递给reducer ->
6. reducer 通过类型和新的数据重新set/update数据 ->
7. selectors 进行数据对比，获取数据 ->
8. react开始进行diff算法，重新渲染页面
```

## TODO

1. redux-auth-wrapper