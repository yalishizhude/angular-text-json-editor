![logo](/angularjs.png)  

# [angular-text-json-editor](https://github.com/yalishizhude/angular-text-json-editor)
![gif](/show.gif)

*Extends the "textarea" html tag and makes it intelligent to edit json's format string.*

对textarea标签进行了扩展，编辑json字符串时更加智能。

# 功能 (feature)
*Show line numbers*<br>
*Double quote automatically close*<br>
*Add double quote for selected rows*<br>
*Multiple rows indent/anti indent*<br>
*Automatically indent when enter key pressed*<br>

* 显示行号
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

*include angularjs and the module in html file*

## 在html文件中引入模块   

    <link rel="stylesheet" href="angular-text-json-editor/json-textarea.css">

    <script src="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js"></script>
    <script src="angular-text-json-editor/json-textarea.js"></script>

*use the directive just like other directives*

## 同时在需要使用编辑器的地方引入`jsonEditor`指令  

    <json-editor></json-editor>


## 设置参数(options)

    /*
      indent    space numbers,default 2
      rows      textarea rows
      line-num  default show line numbers unless it's "off"
     */
    /* 
      indet   表示缩进空格数，默认为2  
      rows    textarea行数
      line-num  默认显示行数，当为"off"时关闭行数
    */


*load module 'ngTextEditor'*

## 加载模块`ngTextEditor`  

    angular.module('app', ['ngTextEditor'])
