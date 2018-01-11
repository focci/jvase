# 浏览器检测 (Support)
检测浏览器是否支持Jvase
***

## 用法介绍
添加类 `.support` 至元素, 默认里面的内容是显示的, 如果浏览器支持Jvase, 则 `.support` 将会隐藏, 此类主要用于避免不支持Jvase的浏览器发生CSS渲染错误.


```
<p>用IE9以下版本浏览器浏览，将会提示不支持信息
<h1 class="support text-danger">你的浏览器不支持Jvase</h1>
```