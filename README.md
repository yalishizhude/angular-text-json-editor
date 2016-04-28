![logo](/angularjs.png)  

# angular-text-json-editor
![gif](/show.gif)

>Extends the "textarea" html tag and makes it intelligent to edit json's format string.

对textarea标签进行了扩展，编辑json字符串时更加智能。

# 功能 (feature)
> Double quote automatically close
> Add double quote for selected rows
> Multiple rows indent/anti indent
> Automatically indent when enter key pressed

* 双引号/括号自动闭合
* 为选中行添加双引号
* 多行缩进/反缩进
* 回车自动换行缩进

# 依赖 (dependency)
* AngularJS

# 安装 (install)
`bower install angular-text-json-editor`

# 使用 (use)
[示例 (example)](/example.html)

>## include angularjs and the module in html file
## 在html文件中引入模块   

    <script src="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js"></script>
    <script src="./index.js"></script>

>## use the directive just like other directives
## 同时在需要使用编辑器的地方引入`jsonEditor`指令  

    //space numbers,default 2
    //indet表示缩进空格数，默认为2  
    <json-editor indent="4"></json-editor>

>## load module 'ngTextEditor'
## 加载模块`ngTextEditor`  

    angular.module('app', ['ngTextEditor'])
