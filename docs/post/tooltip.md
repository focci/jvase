# 气泡 (Tooltip)
常用于鼠标触发的提示
***

## 用法介绍
添加类 `.tooltip` 到一个 `<div>` 块元素，接着指定箭头方向，比如 `.use-left-top` 表示箭头位于左上方，要实现圆角效果，请添加类 `.use-radius` 到 `.tooltip`

```
<div class="tooltip use-relative use-left-top">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="tooltip use-radius use-relative use-left-top">
    <b>圆角 Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
```

## 反转
添加类 `.use-invert` 到 `.tooltip`, 背景颜色将变成深色, 而文字颜色将变成灰色.

反转分为两种 `.use-invert` 拥有很深的背景颜色，而 `.use-invert-light` 为浅背景色.
```
<div class="use-relative mar-right-15 tooltip use-invert-light use-left-top">
    <b>Tooltip</b> (use-invert-light)<br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="use-relative tooltip use-invert use-left-top">
    <b>Tooltip</b> (use-invert)<br/>
    <span>箭头方向: use-left-top</span>
</div>
```

## 箭头位置
Jvase 内置了12种箭头位置不同的 `.tooltip`, 鼠标移到按钮上显示相应效果.
```
<div class="center">
	<div class="btn use-hover mar-bottom-20">
		<span>use-top-left</span>
		<div class="tooltip hover-block use-invert use-top-left left to-center" style="top: 70px;">
            <b>use-top-left</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-top-center</span>
		<div class="tooltip hover-block use-invert use-top-center left to-center" style="top: 70px;">
            <b>use-top-center</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-top-right</span>
		<div class="tooltip hover-block use-invert use-top-right left to-center" style="top: 70px;">
            <b>use-top-right</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-bottom-left</span>
		<div class="tooltip hover-block use-invert use-bottom-left left to-center" style="top: -40px;">
            <b>use-bottom-left</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-bottom-center</span>
		<div class="tooltip hover-block use-invert use-bottom-center left to-center" style="top: -40px;">
            <b>use-bottom-center</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-bottom-right</span>
		<div class="tooltip hover-block use-invert use-bottom-right left to-center" style="top: -40px;">
            <b>use-bottom-right</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-left-top</span>
		<div class="tooltip hover-block use-invert use-left-top left to-right to-top" style="left: 145px;top:0px;">
            <b>use-left-top</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-left-center</span>
		<div class="tooltip hover-block use-invert use-left-center left to-right to-center" style="left: 230px;">
            <b>use-left-center</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-left-bottom</span>
		<div class="tooltip hover-block use-invert use-left-bottom left to-right to-bottom" style="left: 170px;top:-25px;">
            <b>use-left-bottom</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-right-top</span>
		<div class="tooltip hover-block use-invert use-right-top left to-right to-top" style="left: -130px;top:-5px;">
            <b>use-right-top</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-right-center</span>
		<div class="tooltip hover-block use-invert use-right-center left to-right to-center" style="left: -85px;">
            <b>use-right-center</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
	<div class="btn use-hover mar-bottom-20">
		<span>use-right-bottom</span>
		<div class="tooltip hover-block use-invert use-right-bottom left to-right to-bottom" style="left: -160px;top:-25px;">
            <b>use-right-bottom</b><br/>
            <span>Tooltip test</span>
        </div>
	</div>
</div>
```

## 风格
tooltip默认内置了4种不同风格，分别是 `.use-success`、`.use-warn`、`.use-danger`、`.use-info`.
```
<div class="tooltip mar-10 use-relative use-left-top use-danger">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="tooltip mar-10 use-relative use-left-top use-danger use-invert-light">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="tooltip mar-10 use-relative use-left-top use-danger use-invert">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<hr>
<div class="tooltip mar-10 use-relative use-left-top use-warn">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="tooltip mar-10 use-relative use-left-top use-warn use-invert-light">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="tooltip mar-10 use-relative use-left-top use-warn use-invert">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<hr>
<div class="tooltip mar-10 use-relative use-left-top use-success">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="tooltip mar-10 use-relative use-left-top use-success use-invert-light">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="tooltip mar-10 use-relative use-left-top use-success use-invert">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<hr>
<div class="tooltip mar-10 use-relative use-left-top use-info">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="tooltip mar-10 use-relative use-left-top use-info use-invert-light">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
<div class="tooltip mar-10 use-relative use-left-top use-info use-invert">
    <b>Tooltip</b><br/>
    <span>箭头方向: use-left-top</span>
</div>
```