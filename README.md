# single-message

基于 Vue 和 ElementUI，限制只有一个消息提示

使用方式

```bash
$ npm i single-message
```

引入

```js
import Vue from "vue";
import SingleMessage from "single-message";

Vue.prototype.$msg = Message;
```

vue 文件中中调用

```js
// 完整写法
this.$msg.message({
  message: "成功",
  type: "成功",
});

// 快捷写法
this.$msg.success("成功");
this.$msg.warning("提醒");
this.$msg.info("信息");
this.$msg.error("错误");
```

js 文件中调用

```js
import SingleMessage from "single-message";

SingleMessage.success("成功");
```

options 参数可参考 ElementUI 文档

[https://element.eleme.cn/#/zh-CN/component/message](https://element.eleme.cn/#/zh-CN/component/message)
