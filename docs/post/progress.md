# 进度条 (Progress)
显示加载进度
***

## 用法介绍
添加类 `.progress` 到类似 `<div>` 的块元素，然后在里面添加 `.progress-bar` 元素，通过设置其长度百分比，就可以显示progress的进度.
```
<div class="progress">
    <span class="progress-bar" style="width: 40%;">40%</span>
</div>
```

## 进度条组
在 `.progress` 中添加多个 `.progress-bar`，但所有 `.progress-bar` 的长度百分比加起来不能超过100%.
```
<div class="progress">
    <span class="progress-bar bgc-black" style="width: 20%;">20%</span>
    <span class="progress-bar bgc-steel" style="width: 30%;">30%</span>
    <span class="progress-bar bgc-gray" style="width: 50%;">50%</span>
</div>
```

## 尺寸
在 `.progress` 元素上添加类 `.use-large` 、`.use-small` 可以控制尺寸大小.
```
<div class="progress use-large">
    <span class="progress-bar" style="width: 30%;">30%</span>
</div>
<div class="progress">
    <span class="progress-bar" style="width: 30%;">30%</span>
</div>
<div class="progress use-small">
    <span class="progress-bar" style="width: 30%;"></span>
</div>
```

## 流光式进度条
添加 `.use-lighter` 类，建议在页面加载进度中使用，置于顶部.
```
<div class="progress use-lighter">
    <span class="progress-bar" style="width: 75%;">75%</span>
</div>
```

## 条纹进度条
添加类 `.use-stripe`
```
<div class="progress use-stripe">
    <span class="progress-bar" style="width: 50%;">50%</span>
</div>
```

## 其它使用场景
添加类 `.use-pill` 可以实现胶囊形状进度条；添加类 `.use-center` 可以让进度条剧中.
```
<div class="progress use-pill">
    <span class="progress-bar" style="width: 50%;">50%</span>
</div>
<div class="progress use-center">
    <span class="progress-bar" style="width: 50%;">50%</span>
</div>
```