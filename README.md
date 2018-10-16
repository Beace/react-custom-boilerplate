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

- `reducer` 中建立 `initialState` 初始化数据
- `constants` 这里定义了一些 `actions` 的类型
- `actions` 直接暴露给外界的方法，通过 `dispatch` 直接调用
- `reducer` 通过 `action` 返回的类型，修改相应的数据，是最底层触发数据修改的人员
- `selectors` 本质上是通过闭包来缓存数据，主要是选择数据，从相应的 `reducer` 中选取你想要的数据
- `sagas` 主要是用来控制异步事件，不只是API层面的异步请求，包括用户交互页面逻辑等

#### 举个例子

假如，用户输入一个name，查询name的列表

1. 从 `reducer` 中初始化 `name` ->
2. `constants` 定义触发获取列表的类型 `GET_LIST` ->
3. `actions` 中定义 `getList` 方法，并且接受用户输入的参数 `name`, 并返回给 `saga` ->
4. `saga` 接收到 `name` 参数后开始 `ajax` 请求获取数据 调用 `call` 方法 ->
5. 数据传递给 `reducer` 进行修改，因此 `saga` 进行 `watch` 了请求方法，调用 `takelatest` 方法，当 `ajax` 请求结束后告诉 `reducer` ，同时将相应的 `type` 传递给 `reducer` ->
6. `reducer` 通过类型和新的数据重新 `set/update` 数据 ->
7. `selectors` 进行数据对比，获取数据 ->
8. `react` 重新渲染页面


## TODO

[ ] redux-auth-wrapper
[ ] webpack progress
[ ] webpack notify
[ ] immer handleActions 重写