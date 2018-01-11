# 标签 (Tag)
标记重要内容或者需要着重提示的文字.
***

## 用法介绍
添加类 `.tag` 到 `<span>` 或者 `<a>`即可，要实现圆角效果，请添加类 `.use-radius` 到 `.tag`

```
<span class="tag">TAG</span>
<span class="tag">
    <em class="sicon use-small"><i class="fa fa-user"></i></em> ICON TAG
</span>
<a class="tag" href="javascript:;">LINK TAG</a>
<span class="tag">CLOSE TAG
    <em class="sicon use-small"><i class="close use-small"></i></em>
</span>
```

## 风格
默认提供其它4种不同风格 `.use-success`、`.use-info`、`.use-warn`、`.use-danger`.
```
<span class="tag use-success">SUCCESS</span>
<span class="tag use-info">INFO</span>
<span class="tag use-warn">WARN</span>
<span class="tag use-danger">DANGER</span>
<span class="tag use-info">
    <em class="sicon use-small"><i class="fa fa-user"></i></em> 图标
</span>
```

## 尺寸
除了默认尺寸，还提供其它三种尺寸规格 `.use-small`、`.use-medium`、`.use-large`.
```
<span class="tag use-large">
	<em class="sicon"><i class="fa fa-user"></i></em> LARGE
</span>
<span class="tag use-medium">
	<em class="sicon"><i class="fa fa-user"></i></em> MEDIUM
</span>
<span class="tag">
	<em class="sicon use-small"><i class="fa fa-user"></i></em> DEFAULT
</span>
<span class="tag use-small">
	<em class="sicon use-small"><i class="fa fa-user"></i></em> SMALL
</span>
```

## 丝带
添加类 `.use-ribbon-left` 或者 `.use-ribbon-right` 至 `.tag` 即可。
```
<div class="bgc-gray-light relative use-inline-block mar-30 pad-30" style="width: 200px; height: 100px;">
    <span class="tag use-ribbon-left" style="margin-left:-44px;">LEFT RIBBON</span>
    <span class="tag use-ribbon-right pull-right" style="margin-right:-44px;">RIGHT RIBBON</span>
</div>
<div class="bgc-gray-light relative use-inline-block mar-30 pad-30" style="width: 200px; height: 100px;">
    <span class="tag use-info use-ribbon-left" style="margin-left:-44px;">LEFT RIBBON</span>
    <span class="tag use-info use-ribbon-right pull-right" style="margin-right:-44px;">RIGHT RIBBON</span>
</div>
<hr>
<div class="bgc-gray-light relative use-inline-block mar-30 pad-30" style="width: 200px; height: 100px;">
    <span class="tag use-danger use-small use-ribbon-left" style="margin-left:-44px;">LEFT RIBBON</span>
    <span class="tag use-danger use-small use-ribbon-right pull-right" style="margin-right:-44px;">RIGHT RIBBON</span>
</div>
<div class="bgc-gray-light relative use-inline-block mar-30 pad-30" style="width: 300px; height: 100px;">
    <span class="tag use-warn use-medium use-ribbon-left" style="margin-left:-44px;">LEFT RIBBON</span>
    <span class="tag use-warn use-medium use-ribbon-right pull-right" style="margin-right:-44px;">RIGHT RIBBON</span>
</div>
<div class="bgc-gray-light relative use-inline-block mar-30 pad-30" style="width: 400px; height: 100px;">
    <span class="tag use-success use-large use-ribbon-left" style="margin-left:-44px;">LEFT RIBBON</span>
    <span class="tag use-success use-large use-ribbon-right pull-right" style="margin-right:-44px;">RIGHT RIBBON</span>
</div>	
```

## 贴纸标签
添加类 `.use-sticker-left` 或者 `.use-sticker-right` 至 `.tag` 即可。
```
<span class="tag use-sticker-left">LEFT STICKER</span>
<span class="tag use-sticker-right">RIGHT STICKER</span>
<span class="tag use-info use-sticker-left">LEFT STICKER</span>
<span class="tag use-info use-sticker-right">RIGHT STICKER</span>
<hr>

<span class="tag use-success use-sticker-left">LEFT STICKER</span>
<span class="tag use-success use-sticker-right">RIGHT STICKER</span>
<hr>

<span class="tag use-medium use-danger use-sticker-left">LEFT STICKER</span>
<span class="tag use-medium use-danger use-sticker-right">RIGHT STICKER</span>
<hr>

<span class="tag use-large use-warn use-sticker-left">LEFT STICKER</span>
<span class="tag use-large use-warn use-sticker-right">RIGHT STICKER</span>
```