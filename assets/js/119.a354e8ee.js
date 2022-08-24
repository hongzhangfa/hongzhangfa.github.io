(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{463:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"解决百度无法收录搭建在github上的静态博客的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决百度无法收录搭建在github上的静态博客的问题"}},[t._v("#")]),t._v(" 解决百度无法收录搭建在GitHub上的静态博客的问题")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("如果你正在寻找本博客的搭建文档，博主建议您查看这个仓库的"),s("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("由于GitHub禁止百度爬虫访问，造成托管在GitHub Pages上的博客无法被百度收录。相关问题可以通过百度站长平台的"),s("code",[t._v("抓取诊断")]),t._v("再现，每次都是403 Forbidden的错误。")]),t._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("同时将博客同时同步托管到GitHub Pages（国外访问较快）和国内访问较快的站点，"),s("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("coding pages"),s("OutboundLink")],1),t._v("上或者vercel上，解决百度不收录问题。")]),t._v(" "),s("h3",{attrs:{id:"_1-coding-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-coding-pages"}},[t._v("#")]),t._v(" 1. coding pages")]),t._v(" "),s("p",[t._v("最后发现在国内使用coding pages打开速度特别快，而且还会被百度收录，可以把coding pages的站点作为主站点，原本在github pages的可以作为分站点。")]),t._v(" "),s("p",[t._v("步骤：")]),t._v(" "),s("p",[t._v("1、注册"),s("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("coding"),s("OutboundLink")],1),t._v("账号，创建仓库，把代码推送到coding仓库，并开启pages服务。")]),t._v(" "),s("blockquote",[s("p",[t._v("git 操作部分和使用github的差不多，不了解git操作的可以看我的另一篇文章："),s("a",{attrs:{href:"https://xugaoyi.com/pages/9a7ee40fc232253e/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git使用手册"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("2、我的博客项目使用vuepress搭建的，使用的是如下自动部署脚本，同时将代码推送到github和coding。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# github")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b.songbenblog.com'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CNAME\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" git@github.com:xugaoyi/blog.git master:gh-pages "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布到github")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# coding")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'songbenblog.com'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CNAME\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" git@git.dev.tencent.com:xugaoyi/xugaoyi.git master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布到coding")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" - "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 退回开始所在目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" docs/.vuepress/dist\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("blockquote",[s("p",[t._v("因为我想给两个平台上绑定不同的自定义域名，因此我分开创建了CNAME文件。")])]),t._v(" "),s("p",[t._v("3、有自定义域名的，也可以在coding pages绑定自定义域名，域名DNS解析中添加CNAME记录指向coding pages的站点地址即可。（没有自定义域名的可忽略，同时把自动部署脚本中的创建CNAME文件的脚本去掉）")]),t._v(" "),s("p",[t._v("最后，使用百度站长的抓取诊断，发现抓取成功啦，再使用百度站长的"),s("a",{attrs:{href:"https://ziyuan.baidu.com/linksubmit/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接提交"),s("OutboundLink")],1),t._v("功能，把链接提交给百度，过一段时间就可能在百度搜索中搜索到啦。")]),t._v(" "),s("h3",{attrs:{id:"_2-vercel-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-vercel-部署"}},[t._v("#")]),t._v(" 2. vercel 部署")]),t._v(" "),s("p",[t._v("因为有时候Github 和 Coding 无法访问，搭载的服务不稳定，也可以选择vercel作为博客的搭建服务。因为vercel在境内设有服务器，在境内访问速度比Githhub快，同时还有100G的加速服务，会自动申请免费的Let's Encrypt 证书，自动同步Github仓库部署，不需要同时部署两次啦。")]),t._v(" "),s("p",[t._v("步骤：")]),t._v(" "),s("ol",[s("li",[t._v("登录Vercel官网，选择Github方式登录；")]),t._v(" "),s("li",[t._v("选择 + New Project后，在Import Git Repository中选择Github pages仓库，FRAMEWORK PRESET 选择 Other，点击 Deploy；")]),t._v(" "),s("li",[t._v("部署完毕之后，就需要绑定上自己的域名了：在Setting -> Domains，Add 添加自己申请的域名；")]),t._v(" "),s("li",[t._v("添加后可以看到错误信息Invalid Configuration,因为你光在这里设置域名，还需要在自己申请的域名添加CNAME记录啊，要不然你不是随便填个别人的域名，就把别人的网站内容给改了，这不是太不合理了嘛！！！")])]),t._v(" "),s("p",[t._v("所以需要修改直接的域名解析设置，将它指向vercel的服务器：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("主机记录")]),t._v(" "),s("th",[t._v("记录类型")]),t._v(" "),s("th",[t._v("记录值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@")]),t._v(" "),s("td",[t._v("A")]),t._v(" "),s("td",[t._v("76.76.21.21")])]),t._v(" "),s("tr",[s("td",[t._v("www")]),t._v(" "),s("td",[t._v("CNAME")]),t._v(" "),s("td",[t._v("cname.vercel-dns.com.")])])])]),t._v(" "),s("p",[t._v("含义分别是：")]),t._v(" "),s("ol",[s("li",[t._v("直接解析主域名，也就是你申请的域名，指向vercel的IP地址；")]),t._v(" "),s("li",[t._v("将域名前面加上www.解析，并且将域名指向vercel的域名地址，与其保持相同DNS解析。")])]),t._v(" "),s("p",[t._v("这样，通过Github pages部署时添加自定义域名，结合Vercel部署，可以实现国外访问Github pages，国内访问Vercel站点内容，这样百度蜘蛛可以抓取国内站点内容，提高被收录的几率。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("部署到Vercel上，Github部署会自动同步到Vercel，此处需要设置关联Github 哪个分支触发Vercel自动部署，在"),s("code",[t._v("Setting->Git->Production Branch")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"测试是否部署成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试是否部署成功"}},[t._v("#")]),t._v(" 测试是否部署成功")]),t._v(" "),s("p",[t._v("怎么判断境内访问的是Github page部署的，还是vercel部署的呢？可以通过ping域名来实现：")]),t._v(" "),s("ol",[s("li",[t._v("Window打开Cmd，刷新DNS，ipconfig/flushdns")]),t._v(" "),s("li",[t._v("分别ping 自己的域名，和github pages域名，如果ping的地址和响应不同，则可以判断部署成功啦！")])]),t._v(" "),s("h3",{attrs:{id:"如何知道百度有没有收录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何知道百度有没有收录"}},[t._v("#")]),t._v(" 如何知道百度有没有收录？")]),t._v(" "),s("p",[t._v("在百度搜索框中使用site:<链接地址>，如：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("site:songbenblog.com\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"相关文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[t._v("#")]),t._v(" 相关文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.songbenblog.com/pages/f44d2f9ad04ab8d3",target:"_blank",rel:"noopener noreferrer"}},[t._v("《GitHub Actions 定时运行代码：每天定时百度链接推送》"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);