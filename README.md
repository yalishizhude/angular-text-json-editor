![logo](/angularjs.png)  

# angular-text-json-editor
![gif](/show.gif)

>Extends the "textarea" html tag and makes it intelligent to edit json's format string.

对textarea标签进行了扩展，编辑json字符串时更加智能。

# 依赖 (dependency)
* AngularJS

# 安装 (install)
`bower install angular-text-json-editor`

# 使用 (use)
[示例 (example)](/example.html)

## 在html文件中引入模块   (include angularjs and the module in html file)

    <script src="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js"></script>
    <script src="./index.js"></script>

## 同时在需要使用编辑器的地方引入`jsonEditor`指令  (use the directive just like other directives)

    //indet表示缩进空格数，默认为2  (space numbers,default 2)
    <json-editor indent="4"></json-editor>

## 加载模块`ngTextEditor`  (load module 'ngTextEditor')

    angular.module('app', ['ngTextEditor'])
