# 基础(Base)
初始化各类及标签样式，以及一些常用类

## Header
`h1` ... `h6` 所有标题标签，在标题内可以通过 `<small>` 标签来标记副标题.
```
<h1>h1 Heading 1 <small class="text-steel">Small Header</small></h1>
<h2>h2 Heading 2 <small class="text-steel">Small Header</small></h2>
<h3>h3 Heading 3 <small class="text-steel">Small Header</small></h3>
<h4>h4 Heading 4 <small class="text-steel">Small Header</small></h4>
<h5>h5 Heading 5 <small class="text-steel">Small Header</small></h5>
<h6>h6 Heading 6 <small class="text-steel">Small Header</small></h6>
```

## 阴影
容器实现阴影效果, 通过添加类 `.z-depth-*` `.z-depth-*-top` `.z-depth-*-bottom` 来实现, 其中" * "的取值范围为1-5的整数.

```
<div class="grid">
    <div class="row">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-1 pad-15 mar-15 use-center">.z-depth-1</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-1-top pad-15 mar-15 use-center">.z-depth-1-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-1-bottom pad-15 mar-15 use-center">.z-depth-1-bottom</div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-2 pad-15 mar-15 use-center">.z-depth-2</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-2-top pad-15 mar-15 use-center">.z-depth-2-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-2-bottom pad-15 mar-15 use-center">.z-depth-2-bottom</div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-3 pad-15 mar-15 use-center">.z-depth-3</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-3-top pad-15 mar-15 use-center">.z-depth-3-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-3-bottom pad-15 mar-15 use-center">.z-depth-3-bottom</div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-4 pad-15 mar-15 use-center">.z-depth-4</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-4-top pad-15 mar-15 use-center">.z-depth-4-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-4-bottom pad-15 mar-15 use-center">.z-depth-4-bottom</div>
        </div>
    </div>
    <div class="row pad-bottom-60">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-5 pad-15 mar-15 use-center">.z-depth-5</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-5-top pad-15 mar-15 use-center">.z-depth-5-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-5-bottom pad-15 mar-15 use-center">.z-depth-5-bottom</div>
        </div>
    </div>
</div>
```

## 圆
通过添加类 `.circle-*` 来实现.

注意：默认情况下，" * " 号所对应的值即为圆直径的大小，其取值范围为5-60之间(含)5的倍数.

```
<div class="grid">
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-5 bgc-gray"></div>
            <div class="text-gray">.circle-5</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-10 bgc-gray"></div>
            <div class="text-gray">.circle-10</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-15 bgc-gray"></div>
            <div class="text-gray">.circle-15</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-20 bgc-gray"></div>
            <div class="text-gray">.circle-20</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-25 bgc-gray"></div>
            <div class="text-gray">.circle-25</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-30 bgc-gray"></div>
            <div class="text-gray">.circle-30</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-35 bgc-gray"></div>
            <div class="text-gray">.circle-35</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-40 bgc-gray"></div>
            <div class="text-gray">.circle-40</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-45 bgc-gray"></div>
            <div class="text-gray">.circle-45</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-50 bgc-gray"></div>
            <div class="text-gray">.circle-50</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-55 bgc-gray"></div>
            <div class="text-gray">.circle-55</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-60 bgc-gray"></div>
            <div class="text-gray">.circle-60</div>
        </div>
    </div>
</div>
```

## 图片形状
通过为 `<img>` 元素添加以下相应的类，可以让图片呈现不同的形状(圆角、圆、外边框).

```
<div class="use-inline-block mar-right-15">
    <img src="data:image/gif;base64,R0lGODlheAB4AIAAALW1xf///yH5BAAHAP8ALAAAAAB4AHgAAAKQhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusraelIAADs=" class="use-radius">
    <div class="use-center pad-top-10 text-gray">.use-radius</div>
</div>
    <div class="use-inline-block mar-right-15">
    <img src="data:image/gif;base64,R0lGODlheAB4AIAAALW1xf///yH5BAAHAP8ALAAAAAB4AHgAAAKQhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusraelIAADs=" class="use-circle">
    <div class="use-center pad-top-10 text-gray">.use-circle</div>
</div>
<div class="use-inline-block">
    <img src="data:image/gif;base64,R0lGODlheAB4AIAAALW1xf///yH5BAAHAP8ALAAAAAB4AHgAAAKQhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusraelIAADs=" class="thumb">
    <div class="use-center pad-top-10 text-gray">.thumb</div>
</div>
```