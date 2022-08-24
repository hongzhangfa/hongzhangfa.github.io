const frontend = require("../nav/fontend");
const framework = require("../nav/framework");
const technology = require("../nav/technology");
const tools = require("../nav/tools");
const more = require("../nav/more");

module.exports = [
  { text: "首页", link: "/" },
  frontend,
  framework,
  tools,
  technology,
  more,
  { text: "关于", link: "/about/" },
];
