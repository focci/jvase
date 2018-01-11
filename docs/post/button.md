# 按钮 (Button)
创建多风格的按钮
***

## 用法介绍
添加类 `.btn` 至行内元素(比如: a、button).
```
<button class="btn">BUTTON</button>
<a href="javascript:;" class="btn">LINK</a>
```
## 风格
不同颜色的按钮，有着不同的意义，Jvase 默认提供其它4种不同风格的按钮: `.use-success`、`.use-warn`、`.use-info`、`.use-danger`		
```
<button class="btn use-success">SUCCESS</button>
<button class="btn use-warn">WARN</button>
<button class="btn use-info">INFO</button>
<button class="btn use-danger">DANGER</button>
```

反转效果，添加类 `.use-invert` 即可实现

```
<button class="btn use-invert">DEFAULT</button>
<button class="btn use-invert use-success">SUCCESS</button>
<button class="btn use-invert use-warn">WARN</button>
<button class="btn use-invert use-info">INFO</button>
<button class="btn use-invert use-danger">DANGER</button>
```
圆角(`.use-radius`)、圆(`.circle-*`)、胶囊(`.use-pill`)、正方形(`.use-square`)、拉伸(`.use-fullwidth`)按钮，有关圆形按钮的使用，请查看[基础有关圆的介绍](#base).
```
<button class="btn use-radius">圆角按钮</button>
<button class="btn use-pill">胶囊按钮</button>

<button class="btn btn-square">
    <span class="sicon"><i class="fa fa-user"></i></span>
</button>
<button class="btn circle-35">
	<span class="sicon"><i class="fa fa-user"></i></span>
</button>

<button class="btn mar-top-5 use-fullwidth">拉伸按钮</button>
```
## 尺寸
Jvase 内置了其它三种尺寸的按钮, 分别为 `.use-large`、`.use-medium`、`.use-small`.
```
<button class="btn use-large mar-bottom-10">LARGE</button>
<button class="btn use-medium mar-bottom-10">MEDIUM</button>
<button class="btn mar-bottom-10">DEFAULT</button>
<button class="btn use-small mar-bottom-10">SMALL</button>
```
## Wrap
在 `.btn` 外面包裹一层类名为 `.btn-wrap`的行内元素.
```
<div class="btn-wrap">
    <button class="btn use-pill">默认按钮</button>
</div>
<div class="btn-wrap">
    <button class="btn circle-40">圆</button>
</div>
```
## 投影
添加类 `.btn-shadow` 即可实现有投影效果的按钮.
```

<button class="btn btn-shadow">有投影的按钮</button>
<button class="btn use-warn use-invert btn-shadow mar-left-15">有投影的按钮</button>

```
## 3D按钮
添加类 `.btn-3d` 即可实现3D按钮效果.
```
<button class="btn use-invert mar-bottom-20 btn-3d">DEFAULT</button>
<button class="btn use-invert mar-bottom-20 use-success btn-3d">SUCCESS</button>
<button class="btn use-invert mar-bottom-20 use-warn btn-3d">WARN</button>
<button class="btn use-invert mar-bottom-20 use-info btn-3d">INFO</button>
<button class="btn use-invert mar-bottom-20 use-danger btn-3d">DANGER</button>
```
## 按钮组
用 `.btn-group` 类把若干个 `.btn` 包裹起来，便实现了按钮组.
```
<div class="btn-group">
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
</div>
<div class="btn-group">
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn btn-square">
        <span class="sicon"><i class="fa fa-angle-down"></i></span>
    </a>
</div>
```

垂直显示按钮组 `.btn-group-block`.
```
<div class="btn-group-block">
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
</div>
```

水平拉伸按钮组 `.btn-group-justified`.
```
<div class="btn-group-justified">
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
</div>
```

圆角按钮组与胶囊按钮组，只需分别添加 `.use-radius` 与 `.use-pill` 到 `.btn-group`即可.
```
<div class="mar-bottom-10 btn-group use-radius">
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
</div>
<div class="mar-bottom-10 btn-group use-pill">
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
    <a href="javascript:;" class="btn">BUTTON</a>
</div>
```

## 图标
在 `.btn` 中添加类 `.sicon` 然后再在 `.sicon` 添加对应的图标.
```
<button class="btn">
    <span class="sicon"><!--图标, 用i标签引入--></span>
    按钮文字
</button>
```

`.sicon` 可以通过 `.use-large`、`.use-medium`、`.use-small` 来控制大小，请查看[图标 (doc/icon)](#icon)相关介绍

```
<button class="btn use-large mar-bottom-10">
    <span class="sicon"><i class="fa fa-user"></i></span> BUTTON
</button>
<button class="btn use-medium mar-bottom-10">
    <span class="sicon"><i class="fa fa-user"></i></span> BUTTON
</button>
<button class="btn mar-bottom-10">
    <span class="sicon"><i class="fa fa-user"></i></span> BUTTON
</button>
<button class="btn use-small mar-bottom-10">
    <span class="sicon"><i class="fa fa-user"></i></span> BUTTON
</button>
```
		
各尺寸的按钮允许图标大小

<div class="table-responsive">
    <table class="table use-divider use-border">
        <thead>
            <tr>
                <th>按钮尺寸</th>
                <th>允许图标大小</th>
                <th>预览</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td width="30%">`.btn .use-small`</td>
                <td width="30%">`.sicon .use-small`</td>
                <td>
                    <button class="btn btn-square use-small">
                        <span class="sicon"><i class="fa fa-user"></i></span>
                    </button>
                </td>
            </tr>
            <tr>
                <td width="30%">`.btn`</td>
                <td width="30%">`.sicon .use-normal`、`.sicon .use-small`</td>
                <td>
                    <button class="btn btn-square">
                        <span class="sicon"><i class="fa fa-user"></i></span>
                    </button>
                    <button class="btn btn-square">
                        <span class="sicon use-small"><i class="fa fa-user"></i></span>
                    </button>
                </td>
            </tr>
            <tr>
                <td width="30%">`.btn .use-medium`</td>
                <td width="30%">`.sicon .use-medium`、`.sicon .use-normal`、<br/>`.sicon .use-small`</td>
                <td>
                    <button class="btn btn-square use-medium">
                        <span class="sicon"><i class="fa fa-user"></i></span>
                    </button>
                    <button class="btn btn-square use-medium">
                        <span class="sicon use-normal"><i class="fa fa-user"></i></span>
                    </button>
                    <button class="btn btn-square use-medium">
                        <span class="sicon use-small"><i class="fa fa-user"></i></span>
                    </button>
                </td>
            </tr>
            <tr>
                <td width="30%">`.btn .use-large`</td>
                <td width="30%">`.sicon .use-large`、`.sicon .use-medium`、<br/>`.sicon .use-normal`、`.sicon .use-small`</td>
                <td>
                    <button class="btn btn-square use-large">
                        <span class="sicon"><i class="fa fa-user"></i></span>
                    </button>
                    <button class="btn btn-square use-large">
                        <span class="sicon use-medium"><i class="fa fa-user"></i></span>
                    </button>
                    <button class="btn btn-square use-large">
                        <span class="sicon use-normal"><i class="fa fa-user"></i></span>
                    </button>
                    <button class="btn btn-square use-large">
                        <span class="sicon use-small"><i class="fa fa-user"></i></span>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## 禁用
添加类 `.use-disabled` 到 `.btn`, 或者添加 `type="disabled"`属性.
```
<button class="btn use-pill use-invert mar-bottom-20 btn-3d" disabled>DEFAULT</button>
<button class="btn mar-bottom-20" disabled>
    <span class="sicon"><i class="fa fa-user"></i></span> BUTTON
</button>
<div class="btn-group mar-bottom-20">
    <a href="javascript:;" class="btn" disabled>BUTTON</a>
    <a href="javascript:;" class="btn btn-square" disabled>
        <span class="sicon"><i class="fa fa-angle-down"></i></span>
    </a>
</div>
<button class="btn use-warn mar-bottom-20 use-invert btn-shadow" disabled>有投影的按钮</button>
<button class="btn use-invert use-success mar-bottom-20" disabled>SUCCESS</button>
<button class="btn use-warn mar-bottom-20" disabled>WARN</button>
<button class="btn mar-bottom-20" disabled>BUTTON</button>
```