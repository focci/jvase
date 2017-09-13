# 位置 (Position)
通过简的设置，来控制元素的显示位置.
***

## 用法介绍
添加类 `.to-*` 来实现位置定位，参照物是离自身最近的定位祖先元素.

`.to-*` 分别对元素进行9个位置进行控制.
```
<div class="use-relative" style="height: 200px;">
    <div class="bgc-gray pad-10 text-white to-top-left">.to-top-left</div>
    <div class="bgc-gray pad-10 text-white to-top-center">.to-top-center</div>
    <div class="bgc-gray pad-10 text-white to-top-right">.to-top-right</div>
    <div class="bgc-gray pad-10 text-white to-center-left">.to-center-left</div>
    <div class="bgc-gray pad-10 text-white to-center">.to-center</div>
    <div class="bgc-gray pad-10 text-white to-center-right">.to-center-right</div>
    <div class="bgc-gray pad-10 text-white to-bottom-left">.to-bottom-left</div>
    <div class="bgc-gray pad-10 text-white to-bottom-center">.to-bottom-center</div>
    <div class="bgc-gray pad-10 text-white to-bottom-right">.to-bottom-right</div>
</div>
```

## 覆盖
`.to-*-covered` 将铺满整个位置窗口.
```
<div class="use-relative" style="height: 200px;">
    <div class="bgc-gray opacity-7 use-center pad-10 text-white to-top-covered">.to-top-covered</div>
    <div class="bgc-main pad-top-60 opacity-7 pad-10 text-white to-left-covered">.to-left-covered</div>
    <div class="bgc-main pad-top-60 opacity-7 pad-10 text-white to-right-covered">.to-right-covered</div>
    <div class="bgc-gray opacity-7 use-center pad-10 text-white to-bottom-covered">.to-bottom-covered</div>
</div>
```

## Fixed
在 `.to-*` 的基础上，添加 `.use-fixed` 类可以相对于窗口的位置固定元素.