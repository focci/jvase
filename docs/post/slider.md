# 滑动条 (Slider)
滑动条，拖动控制点在指定区域内滑动
***

## 用法介绍
添加类 `.slider` 到一个块元素，然后在里面添加 `.slider-active` 元素，用于控制进度。而 `.slider-active` 里面的 `<span>` 乃控制点.
```
<div class="slider">
    <div class="slider-active" style="width:40%"><span></span></div>
</div>
```

## 标尺
添加类 `.use-rules` 到 `.slider` 默认会添加10等分长度的标尺.</p>
```
<div class="slider use-rules">
    <div class="slider-active" style="width:40%"><span></span></div>
</div>
```

## Tooltip
在 `<span>` 中添加 `.tooltip`.</p>
```
<div class="slider mar-top-60">
    <div class="slider-active" style="width:40%">
        <span><em class="tooltip use-invert use-bottom-center">40%</em></span>
    </div>
</div>
```