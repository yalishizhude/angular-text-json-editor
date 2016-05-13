(function(angular){
  'use strict';
  angular.module('ngTextEditor', []).directive('jsonEditor', ['$interval', function($interval){
    var rowHeight = 14;
    return {
      replace: true,
      template: '<div class="json-textarea"><ul><li ng-repeat="row in rowNum track by $index" ng-bind="$index+1"></li></ul><textarea rows={{rows}}></textarea></div>',
      link: function ($scope, element, attrs) {
        var textarea = element.find('textarea');
        var ul = element.find('ul');
        $interval(function () {
          ul[0].style.height = textarea[0].clientHeight + 'px';
          ul[0].scrollTop = textarea[0].scrollTop;
          var length = parseInt(Math.max(textarea[0].clientHeight, textarea[0].scrollHeight)/rowHeight, 10);
          $scope.rowNum = new Array(length).join().split(',');
        }, 16);
        $scope.rows = attrs.rows || 20;
        textarea.on('keydown', function (e) {
          var indent = new Array(parseInt((attrs.indent||2),10)+1).join(' ');
          var node = textarea[0];
          var value = textarea.val();
          var start = node.selectionStart;
          var end = node.selectionEnd;
          var selection = value.substring(start,end);
          var before = value.substring(0, start);
          var after = value.substring(end, value.length);
          if (222 === e.keyCode) { //双引号
            e.preventDefault();
            e.stopPropagation();
            if ('"' === value.charAt(start)) {
              node.selectionStart = start + 1;
              node.selectionEnd = start + 1;
            } else if('"' === value.charAt(end)){
              node.selectionStart = end + 1;
              node.selectionEnd = end + 1;
            } else {
              node.value = before + '"' + selection + '"' + after;
              node.selectionStart = start + 1;
              node.selectionEnd = end + 1;
            }
          } else if (219 === e.keyCode) { //括号
            e.preventDefault();
            e.stopPropagation();
              node.value = before + (e.shiftKey ? '{' : '[') + selection + (e.shiftKey ? '}' : ']') + after;
              node.selectionStart = start + 1;
              node.selectionEnd = before.length +selection.length + 1;
          } else if (9 === e.keyCode) { //tab
            e.preventDefault();
            e.stopPropagation();
            if (e.shiftKey){
              if(start === end) {  //单行反缩进
                var rows = before.split('\n');
                var srow = rows.pop().replace(indent, '');
                rows.push(srow);
                before = rows.join('\n');
                node.value = before + after;
                node.selectionStart = start - indent.length;
                node.selectionEnd = start - indent.length;
              } else {  //多行反缩进
                var selectionRows = [];
                var beforeList = before.split('\n');
                var afterList = after.split('\n');
                selection = beforeList.pop() + selection + afterList.shift();
                angular.forEach(selection.split('\n'), function(row, i){
                  selectionRows.push(row.replace(indent, ''));
                });
                selection = selectionRows.join('\n');
                before = beforeList.join('\n') + '\n';
                after = '\n' + afterList.join('\n');
                node.value = before + selection + after;
                node.selectionStart = before.length;
                node.selectionEnd = before.length + selection.length;
              }
            } else {
              if(start === end) {  //单行缩进
                node.value = before + indent + after;
                node.selectionStart = start + indent.length;
                node.selectionEnd = start + indent.length;
              } else {  //多行缩进
                var length = selection.match(/(.+)(\n)?/g).length;
                node.value = before + selection.replace(/(.+)(\n)?/g, indent + '$1$2') + after;
                node.selectionStart = start + indent.length;
                node.selectionEnd = end + length*(indent.length);
              }
            }
          } else if (13 === e.keyCode) { //回车
            e.preventDefault();
            e.stopPropagation();
            var row = before.split('\n').pop();
            var space = '\n' + row.split(/[^\s]/)[0];
            var wrap = '';
            if (start > 0) {
              var previous = value.charAt(start - 1);
              if ('{' === previous || '[' === previous) {
                space += indent;
              }
            }
            if (/[\}|\]]/.test(node.value.charAt(start))) {
              wrap = '\n' + space.substring(indent.length+1);
            }
            node.value = before + space + wrap + after;
            node.selectionStart = start + space.length;
            node.selectionEnd = start + space.length;
          }
        });
      }
    };
  }]);
}(window.angular));
