(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{468:function(v,t,_){"use strict";_.r(t);var s=_(0),a=Object(s.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("在浏览器输入url后发生了什么？")]),v._v(" "),t("p",[v._v("可以分成两部分来讲：第一部分是输入url到请求到资源；第二部分是请求到的资源渲染过程。")]),v._v(" "),t("h1",{attrs:{id:"与服务器建立连接过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与服务器建立连接过程"}},[v._v("#")]),v._v(" 与服务器建立连接过程")]),v._v(" "),t("ol",[t("li",[v._v("输入地址，回车")]),v._v(" "),t("li",[v._v("浏览器解析url，解析出域名host")]),v._v(" "),t("li",[v._v("DNS 域名解析：浏览器将域名转换成服务器IP地址，通过IP地址与服务器建立TCP连接（三次握手）")]),v._v(" "),t("li",[v._v("客户端向服务端发送http请求")]),v._v(" "),t("li",[v._v("服务器收到请求并响应HTTP请求，返回请求资源给浏览器")]),v._v(" "),t("li",[v._v("浏览器开始解析并渲染页面")]),v._v(" "),t("li",[v._v("有多个资源，重复456，直至加载全部资源")]),v._v(" "),t("li",[v._v("关闭连接（四次握手）")])]),v._v(" "),t("h1",{attrs:{id:"浏览器渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染"}},[v._v("#")]),v._v(" 浏览器渲染")]),v._v(" "),t("ol",[t("li",[v._v("HTML 解析构建DOM 树")])]),v._v(" "),t("p",[v._v("浏览器无法识别html文件，需要将html解析成DOM树；解析是一个深度遍历的过程，只有当某个节点下所有的子节点都遍历完成后才会解析下一个兄弟节点。")]),v._v(" "),t("p",[v._v("在遇到外链时候会发起请求。")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("CSS 解析")])]),v._v(" "),t("p",[v._v("和HTML的解析过程同步进行，浏览器识别所有的CSS样式信息，构建形成CSSOM树。")]),v._v(" "),t("blockquote",[t("p",[v._v("注意：HTML、CSS的解析过程可能会被JS引擎线程所阻塞；\n样式为display：none的节点也会被构建到树结构里面去，只有后面在render树会做过滤。")])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("样式与结构合并形成render树")])]),v._v(" "),t("p",[v._v("CSSOM和DOM树合并，形成render树。形成render树的过程中，浏览器会筛选出所有可见的节点，针对可见节点匹配CSSOM树的CSS规则。")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("布局阶段")])]),v._v(" "),t("p",[v._v("将render树遍历，将元素嵌套关系以盒子模型的形式写入文档流。这个阶段会计算出每个树节点应该占据的空间以及在视图中的位置，一些布局样式（如float、absolute、fixed）造成的偏移会在这个阶段生效。（负责尺寸和位置的计算）")]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[v._v("绘制阶段")])]),v._v(" "),t("p",[v._v("将渲染树转换成像素，并对所有媒体文件进行解码。")]),v._v(" "),t("h1",{attrs:{id:"回流和重绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘"}},[v._v("#")]),v._v(" 回流和重绘")]),v._v(" "),t("p",[v._v("页面加载完成后，由于交互或者JS操作，导致页面布局或者样式发生变化，导致触发浏览器重新渲染，会有回流和重绘两种情况。")]),v._v(" "),t("h2",{attrs:{id:"回流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回流"}},[v._v("#")]),v._v(" 回流")]),v._v(" "),t("p",[v._v("当改变了DOM元素的尺寸时，因为有可能导致其他元素的属性和位置受到影响，浏览器需要重新计算元素的几何属性，需要重新布局，再将计算结果绘制出来，即重排。")]),v._v(" "),t("h2",{attrs:{id:"重绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[v._v("#")]),v._v(" 重绘")]),v._v(" "),t("p",[v._v("修改样式但是未改变尺寸和位置，不需要重新计算元素的几何属性，直接为该元素绘制新样式，即重绘。")]),v._v(" "),t("h2",{attrs:{id:"css、dom与javascript三者阻塞关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css、dom与javascript三者阻塞关系"}},[v._v("#")]),v._v(" CSS、DOM与JavaScript三者阻塞关系")]),v._v(" "),t("p",[v._v("javascript 加载会阻塞 css和dom的解析和渲染，所以一般写在最后边；")]),v._v(" "),t("p",[v._v("css 加载对 Dom 的解析没有阻塞，但是对于 Dom 的渲染造成了阻塞，css 加载对 JavaScript 的执行会造成阻塞，一般写在最上边。")]),v._v(" "),t("h2",{attrs:{id:"减少重排和重绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少重排和重绘"}},[v._v("#")]),v._v(" 减少重排和重绘")]),v._v(" "),t("p",[v._v("重排一定会重绘，但重绘不一定重排。")]),v._v(" "),t("ul",[t("li",[v._v("使用tranfrom 替代top")]),v._v(" "),t("li",[v._v("不用一条一条修改DOM样式，放在预先定义class卸载css样式表里，通过设置className一块修改；")]),v._v(" "),t("li",[v._v("多次修改的DOM元素设置display：none，因为这样设置元素会解析到DOM树，不会包含在render树中；（先将DOM离线，即display：none；修改后显示）")]),v._v(" "),t("li",[v._v("opacity替代visibility；")])]),v._v(" "),t("blockquote",[t("p",[v._v("v-show 与 v-show 都可以动态控制DOM元素的显示和隐藏；\nv-if 显示隐藏是将DOM元素整个添加或删除，而v-show 隐藏则是控制css的display属性，DOM元素依然存在。\nv-if 是惰性的，初始条件为false时什么也不会做，只有第一次为true时才会开始局部编译；而v-show 在任何条件下都被编译，然后被缓存；\nv-if 有更高的切换消耗；v-show有更高的初始渲染消耗。")])]),v._v(" "),t("h1",{attrs:{id:"页面阻塞问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面阻塞问题"}},[v._v("#")]),v._v(" 页面阻塞问题")]),v._v(" "),t("ul",[t("li",[v._v("CSS不会阻塞DOM解析，但会阻塞DOM渲染；（因为CSS会阻塞render tree 生成，进而阻塞DOM渲染）")]),v._v(" "),t("li",[v._v("JS会阻塞DOM解析；（因为JS会操作dom元素，如果等dom解析完成操作后又改变，dom还得重新解析）因此JS一般都放在 body结束标签前")]),v._v(" "),t("li",[v._v("CSS会阻塞JS的执行；（JS执行需要依赖最新的元素节点class、id等属性）")]),v._v(" "),t("li",[v._v("通过script的defer和async两个属性来解决DOM渲染阻塞的问题\n"),t("ul",[t("li",[v._v("defer 延迟执行的引用，保证DOM解析完成之后再执行JS脚本")]),v._v(" "),t("li",[v._v("async 异步执行，保证DOM树解析和JS脚本异步并行执行")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);