(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{374:function(t,e,i){"use strict";i.r(e);var a=i(0),l=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"display-none、visibility-hidden、opacity-0-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-none、visibility-hidden、opacity-0-区别"}},[t._v("#")]),t._v(" display:none、visibility:hidden、opacity:0 区别")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}}),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("display:none")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("visibility:hidden")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("opacity:0")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DOM结构")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("浏览器不会渲染，会让元素完全从渲染树中消失，渲染时不占任何空间")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("元素不会在渲染树上消失，继续占据空间，只是内容不可见")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("透明度为100%，不会在渲染树上消失，占据空间，内容不可见")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("事件监听")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无法监听，不能点击")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无法监听，不能点击")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可以监听，可以点击")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("性能")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("修改元素会造成文档重绘与重排，读屏器不会读取元素内容，消耗较大")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("修改只会造成本元素的重绘，性能消耗较少；读屏器读取元素内容")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("提升为合成层，是重建图层，不和动画属性一起则不会产生重绘，性能消耗较少")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("继承")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("非继承属性，元素从渲染树上消失，造成子孙节点消失")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("继承属性，子孙节点消失是由于继承了visibility:hidden，子元素可以设置visibility:visible来取消隐藏")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("会被子元素继承，而且子元素不能通过设置opacity:1来取消隐藏")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("transition")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持display")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持，visibility会立即显示，隐藏时会延迟")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持，opacity可以延时显示和隐藏")])])])]),t._v(" "),e("h2",{attrs:{id:"css隐藏页面元素方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css隐藏页面元素方法"}},[t._v("#")]),t._v(" CSS隐藏页面元素方法")]),t._v(" "),e("ol",[e("li",[t._v("上面说的三种方式；")]),t._v(" "),e("li",[t._v("fixed设置足够大负的left、top值；")]),t._v(" "),e("li",[t._v("使用层叠关系z-index；")]),t._v(" "),e("li",[t._v("文字可以使用text-indent隐藏。")])]),t._v(" "),e("h2",{attrs:{id:"重排与重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重排与重绘"}},[t._v("#")]),t._v(" 重排与重绘")]),t._v(" "),e("ul",[e("li",[t._v("重排：重新生成布局，重新排列元素；")]),t._v(" "),e("li",[t._v("重绘：某些元素的外观被改变，重新绘制元素。")])]),t._v(" "),e("p",[t._v("重绘不一定导致重排，但重排一定会导致重绘。")]),t._v(" "),e("h3",{attrs:{id:"重排"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重排"}},[t._v("#")]),t._v(" 重排")]),t._v(" "),e("p",[t._v("当DOM的变化影响了元素的几何信息（元素的位置和尺寸大小），浏览器需要重新计算元素的几何属性，将其安放在页面中的正确位置，这就是重排的过程，也叫做回流，会重新生成布局，重新排列元素。")]),t._v(" "),e("h3",{attrs:{id:"发生重排的情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发生重排的情况"}},[t._v("#")]),t._v(" 发生重排的情况")]),t._v(" "),e("ul",[e("li",[t._v("页面初始渲染，这是开销最大的一次重排；")]),t._v(" "),e("li",[t._v("添加或删除可见的DOM元素；")]),t._v(" "),e("li",[t._v("改变元素位置、尺寸（边距、填充、边框、宽度和高度）、元素内容、元素字体大小；")])]),t._v(" "),e("p",[t._v("offsetWidth也会触发重排，为什么呢？这就要提到浏览器的性能优化方案了。由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。而获取布局信息的时候，会强制刷新队列，因为该方法需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。")]),t._v(" "),e("h3",{attrs:{id:"发生重绘的情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发生重绘的情况"}},[t._v("#")]),t._v(" 发生重绘的情况")]),t._v(" "),e("p",[t._v("color、visibility、backgroud、border-style等等")]),t._v(" "),e("h3",{attrs:{id:"减少重排次数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#减少重排次数"}},[t._v("#")]),t._v(" 减少重排次数")]),t._v(" "),e("ol",[e("li",[t._v("样式集中改变")]),t._v(" "),e("li",[t._v("分离读写操作")]),t._v(" "),e("li",[t._v("DOM离线")]),t._v(" "),e("li",[t._v("使用absolute或fixed脱离文档流")]),t._v(" "),e("li",[t._v("优化动画GPU（合成层）")])]),t._v(" "),e("p",[t._v("参考链接：")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6844904202867572749",target:"_blank",rel:"noopener noreferrer"}},[t._v("opacity: 0、visibility: hidden、display: none 优劣和适用场景，以及隐藏元素的几种方法"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6844904083212468238",target:"_blank",rel:"noopener noreferrer"}},[t._v("重排(reflow)和重绘(repaint)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_39200185/article/details/115321272",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是重排、重绘,如何优化"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=l.exports}}]);