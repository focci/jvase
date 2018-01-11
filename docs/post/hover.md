# Hover (Hover)
常用于鼠标经过时触发某些模块的显示与隐藏
***

## 用法介绍
在外层添加类 `.use-hover`, 此类没有添加任何CSS样式, 只是用于鼠标经过时触发内部元素的显示与隐藏.

内部元素可包括的类以下几个:

|类					   | 说明							|
|-----------------------|:----------------------------|
|`.hover-inline`		| 等同于: display:inline;		|
|`.hover-block`			| 等同于: display:block;		|
|`.hover-inline-block`	| 等同于: display:inline-block;|
|`.hover-hidden`		| 鼠标经过时隐藏: display:none; |


```
<button class="btn use-hover">
    <span class="sicon pad-right-3 hover-hidden">
		<i class="fa fa-battery-empty"></i>
	</span>
    <span class="sicon pad-right-3 hover-inline-block">
		<i class="fa fa-battery-full"></i>
	</span>
    <span class="pad-left-5">鼠标经过时,更换图标</span>
</button>
```