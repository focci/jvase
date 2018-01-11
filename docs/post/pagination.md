# 分页 (Pagination)
简单、灵活的分页组件
***

## 用法介绍
将类 `.pagination` 添加到 `<ul>` 然后在ul里面添加 li &gt; a 即可。`.use-disabled` 禁用；`.use-active` 当前选中；`.use-ellipsis` 表示省略部份.
```
<ul class="pagination">
    <li><a href="javascript:;">Prev</a></li>
    <li class="use-disabled"><a href="javascript:;">1</a></li>
    <li><a href="javascript:;">2</a></li>
    <li><a href="javascript:;">3</a></li>
    <li class="use-active"><a href="javascript:;">4</a></li>
    <li><a href="javascript:;">5</a></li>
    <li><a href="javascript:;">6</a></li>
    <li class="use-ellipsis"><a href="javascript:;">...</a></li>
    <li><a href="javascript:;">12</a></li>
    <li><a href="javascript:;">13</a></li>
    <li><a href="javascript:;">Next</a></li>
</ul>
```

## 边框
添加类 `.use-border` 添加到 `.pagination` 即可.
```
<ul class="pagination use-border">
    <li><a href="javascript:;">Prev</a></li>
    <li class="use-disabled"><a href="javascript:;">1</a></li>
    <li><a href="javascript:;">2</a></li>
    <li><a href="javascript:;">3</a></li>
    <li class="use-active"><a href="javascript:;">4</a></li>
    <li><a href="javascript:;">5</a></li>
    <li><a href="javascript:;">6</a></li>
    <li class="use-ellipsis"><a href="javascript:;">...</a></li>
    <li><a href="javascript:;">12</a></li>
    <li><a href="javascript:;">13</a></li>
    <li><a href="javascript:;">Next</a></li>
</ul>
```

## 无缝隙
添加类 `.use-gapless` 添加到 `.pagination` 即可，建议与 `.use-border` 一起使用.
```
<ul class="pagination use-gapless">
    <li><a href="javascript:;">Prev</a></li>
    <li class="use-disabled"><a href="javascript:;">1</a></li>
    <li><a href="javascript:;">2</a></li>
    <li><a href="javascript:;">3</a></li>
    <li class="use-active"><a href="javascript:;">4</a></li>
    <li><a href="javascript:;">5</a></li>
    <li><a href="javascript:;">6</a></li>
    <li class="use-ellipsis"><a href="javascript:;">...</a></li>
    <li><a href="javascript:;">12</a></li>
    <li><a href="javascript:;">13</a></li>
    <li><a href="javascript:;">Next</a></li>
</ul>
<ul class="pagination use-border use-gapless">
    <li><a href="javascript:;">Prev</a></li>
    <li class="use-disabled"><a href="javascript:;">1</a></li>
    <li><a href="javascript:;">2</a></li>
    <li><a href="javascript:;">3</a></li>
    <li class="use-active"><a href="javascript:;">4</a></li>
    <li><a href="javascript:;">5</a></li>
    <li><a href="javascript:;">6</a></li>
    <li class="use-ellipsis"><a href="javascript:;">...</a></li>
    <li><a href="javascript:;">12</a></li>
    <li><a href="javascript:;">13</a></li>
    <li><a href="javascript:;">Next</a></li>
</ul>
```

## 对齐
添加类 `.left`、`.use-center`、`.use-right` 可以实现居左、中、右对齐方式.
```
默认左对齐
<ul class="pagination use-border use-gapless">
    <li><a href="javascript:;">Prev</a></li>
    <li class="use-disabled"><a href="javascript:;">1</a></li>
    <li><a href="javascript:;">2</a></li>
    <li><a href="javascript:;">3</a></li>
    <li class="use-active"><a href="javascript:;">4</a></li>
    <li><a href="javascript:;">5</a></li>
    <li><a href="javascript:;">6</a></li>
    <li class="use-ellipsis"><a href="javascript:;">...</a></li>
    <li><a href="javascript:;">12</a></li>
    <li><a href="javascript:;">13</a></li>
    <li><a href="javascript:;">Next</a></li>
</ul>
<hr>

居中对齐
<ul class="pagination use-border use-gapless use-center">
    <li><a href="javascript:;">Prev</a></li>
    <li class="use-disabled"><a href="javascript:;">1</a></li>
    <li><a href="javascript:;">2</a></li>
    <li><a href="javascript:;">3</a></li>
    <li class="use-active"><a href="javascript:;">4</a></li>
    <li><a href="javascript:;">5</a></li>
    <li><a href="javascript:;">6</a></li>
    <li class="use-ellipsis"><a href="javascript:;">...</a></li>
    <li><a href="javascript:;">12</a></li>
    <li><a href="javascript:;">13</a></li>
    <li><a href="javascript:;">Next</a></li>
</ul>
<hr>

右对齐
<ul class="pagination use-border use-gapless use-right">
    <li><a href="javascript:;">Prev</a></li>
    <li class="use-disabled"><a href="javascript:;">1</a></li>
    <li><a href="javascript:;">2</a></li>
    <li><a href="javascript:;">3</a></li>
    <li class="use-active"><a href="javascript:;">4</a></li>
    <li><a href="javascript:;">5</a></li>
    <li><a href="javascript:;">6</a></li>
    <li class="use-ellipsis"><a href="javascript:;">...</a></li>
    <li><a href="javascript:;">12</a></li>
    <li><a href="javascript:;">13</a></li>
    <li><a href="javascript:;">Next</a></li>
</ul>
<hr>

两端对齐
<ul class="pagination use-border use-gapless">
    <li><a href="javascript:;"><i class="fa fa-chevron-left"></i> Prev Page</a></li>
    <li class="use-pull-right"><a href="javascript:;">Next Page <i class="fa fa-chevron-right"></i></a></li>
</ul>
```
