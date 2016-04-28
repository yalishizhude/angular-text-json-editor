![logo](/angularjs.png)  

![gif](/show.gif)

# angular-text-json-editor

对textarea标签进行了扩展，编辑json字符串时更加智能。

# 依赖
* AngularJS

# 安装
`bower install angular-text-json-editor`

# 使用
[示例](/example.html)

1. 在html文件中引入模块

    <script src="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js"></script>
    <script src="./index.js"></script>

2. 同时在需要使用编辑器的地方引入`jsonEditor`指令

    //indet表示缩进空格数，默认为2
    <json-editor indent="4"></json-editor>

3. 加载模块`ngTextEditor`

    angular.module('app', ['ngTextEditor'])
