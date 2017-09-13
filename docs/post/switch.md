# 开关 (Switch)
用于真/假切换，两种不同状态的控制
***

## 用法介绍
添加类 `.switch` 至行 `<div>`，然后在添加开启与关闭状态下的文字 `.switch-on-label` 与 `.switch-off-label`，当然也可以不添加文字.

```
<div class="switch">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch"></div>
```

## 关闭状态
添加类 `.use-off` 至 `.switch`
```
<div class="switch use-off">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-off"></div>
```

## 圆角与胶囊
添加类 `.use-radius` 或者 `.use-pill` 至 `.switch`
```
<div class="switch use-radius">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-pill"></div>
```

## 尺寸
内置了三种不同尺寸的开关 `.use-large`、`.use-medium`、`.use-small`

```
<div class="switch use-large">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-off use-large">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-large"></div>
<div class="switch use-off use-large"></div>
<hr>
<div class="switch use-medium">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-off use-medium">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-medium"></div>
<div class="switch use-off use-medium"></div>
<hr>
<div class="switch">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-off">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch"></div>
<div class="switch use-off"></div>
<hr>
<div class="switch use-small">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-off use-small">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-small"></div>
<div class="switch use-off use-small"></div>
```

## 禁用
添加类 `.use-disabled` 禁用开关

```
<div class="switch use-disabled">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-off use-disabled">
    <span class="switch-on-label">ON</span>
    <span class="switch-off-label">OFF</span>
</div>
<div class="switch use-disabled"></div>
<div class="switch use-off use-disabled"></div>
```