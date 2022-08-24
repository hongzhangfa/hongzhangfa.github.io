// 前端 导航栏
module.exports = {
  text: "前端",
  link: "/frontend/", 
  items: [
    {
      text: "html",
      link: "/html/",
    },
    {
      text: "css",
      link: "/css/",
    },
    {
      text: "JavaScript",
      link: "/js/",
    },
    {
      text: '学习笔记',
      link: "/notes",
          items: [
            { text: '《JavaScript教程》', link: '/note/javascript/' },
            { text: '《JavaScript高级程序设计》', link: '/note/js/' },
            { text: '《ES6 教程》', link: '/note/es6/' },
            {
              text: 'JS设计模式总结',
              link: '/pages/4643cd/',
            },
          ],
    },
  ],
};
