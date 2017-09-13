# 图标 (Icon)
Jvase没有内置的图标库，因为第三方图标库提供的图标已经很丰富了，比如[Awesome](http://www.fontawesome.com.cn).
<hr/>


## 用法介绍
使用类 `.sicon` 将图标包裹起来，引入图标请用 `<i>` 标签，否则样式会失效.
```
<span class="sicon">
    <i class="fa fa-user"></i>
</span>
```

## 尺寸
使用类 `.use-small`、`.use-medium`、`.use-large` 实现图标大小控制.

|样式名称				 |图标字体大小| 容器大小		|
|-----------------------|-----------|---------------|
|`.sicon .use-small`	|14px		|1rem 1rem		|
|`.sicon`				|21px		|1.5rem 1.5rem	|
|`.sicon .use-medium`	|28px		|2rem 2rem		|
|`.sicon .use-large`	|42px		|3rem 3rem		|
