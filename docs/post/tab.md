# Tab (Tab)
不同样式的标签选项卡
***

## 用法介绍
添加类 `.tabs` 到 `<ul>` 标签，默认下面有一条细线.
```
<ul class="tabs">
    <li><a>tab-item</a></li>
</ul>
```

添加类 `.use-disabled` 可以禁用Tab项，如果要设置选中状态, 需添加类 `.use-active`.
```
<ul class="tabs">
    <li class="use-active"><a>默认Tab</a></li>
    <li><a>Tab Item</a></li>
    <li class="use-disabled"><a>Disabled</a></li>
</ul>
```

## 边框
添加类 `.use-border` 到 `.tabs`
```
<ul class="tabs use-border">
    <li class="use-active"><a>默认Tab</a></li>
    <li><a>Tab Item</a></li>
    <li class="use-disabled"><a>Disabled</a></li>
</ul>
```

## 按钮式
添加类 `.use-button` 到 `.tabs`
```
<ul class="tabs use-button">
    <li class="use-active"><a>默认Tab</a></li>
    <li><a>Tab Item</a></li>
    <li class="use-disabled"><a>Disabled</a></li>
</ul>
```

## 竖式Tab
添加类 `.use-vleft`(文字在左边) 或者 `.use-vright`(文字在右边) 到 `.tabs`
```
<div class="grid">
    <div class="row">
        <div class="col-xs-5 use-right">
            <ul class="tabs use-vleft">
                <li class="use-active"><a>默认Tab</a></li>
                <li><a>Tab Item</a></li>
                <li class="use-disabled"><a>Disabled</a></li>
            </ul>
        </div>
        <div class="col-xs-5 col-xs-offset-1">
            <ul class="tabs use-vright">
                <li class="use-active"><a>默认Tab</a></li>
                <li><a>Tab Item</a></li>
                <li class="use-disabled"><a>Disabled</a></li>
            </ul>
        </div>
    </div>
</div>
```

有边框的竖式Table `.use-vleft.use-border` 或者 `.use-vright.use-border`.
```
<div class="grid">
    <div class="row">
        <div class="col-xs-5 use-right">
            <ul class="tabs use-vleft use-border">
                <li class="use-active"><a>默认Tab</a></li>
                <li><a>Tab Item</a></li>
                <li class="use-disabled"><a>Disabled</a></li>
            </ul>
        </div>
        <div class="col-xs-5 col-xs-offset-1">
            <ul class="tabs use-vright use-border">
                <li class="use-active"><a>默认Tab</a></li>
                <li><a>Tab Item</a></li>
                <li class="use-disabled"><a>Disabled</a></li>
            </ul>
        </div>
    </div>
</div>
```

按钮式竖式Table `.use-vleft.use-button` 或者 `.use-vright.use-button`.
```
<ul class="tabs use-vleft use-button">
    <li class="use-active"><a>默认Tab</a></li>
    <li><a>Tab Item</a></li>
    <li class="use-disabled"><a>Disabled</a></li>
</ul>
```

## 对齐
添加类 `.use-left`、`.use-right`、`.use-center` 到 `.tabs` 可以实现左中右对齐.
```
左对齐
<ul class="tabs use-border use-left">
    <li class="use-active"><a>默认Tab</a></li>
    <li><a>Tab Item</a></li>
    <li class="use-disabled"><a>Disabled</a></li>
</ul>
<hr>

居中对齐
<ul class="tabs use-border use-center">
    <li class="use-active"><a>默认Tab</a></li>
    <li><a>Tab Item</a></li>
    <li class="use-disabled"><a>Disabled</a></li>
</ul>
<hr>

右对齐
<ul class="tabs use-border use-right">
    <li class="use-active"><a>默认Tab</a></li>
    <li><a>Tab Item</a></li>
    <li class="use-disabled"><a>Disabled</a></li>
</ul>
```