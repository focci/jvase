# 提示(Alert)
用于提醒信息的显示
***

## 用法介绍
添加 `.alert` 至块元素
```
<div class="alert">
    Alert, 主要用于提醒信息的显示
</div>
```

## 使用关闭
将 `.close` 添加至 `<a>` 标签或者`<buttton>`标签，然后将 `.close` 添加到 `.alert` 之内，有关close的使用请参照 [关闭(Close)](#close)
```
<div class="alert">
    <button class="close use-invert use-small"></button>
    Alert, 主要用于提醒信息的显示
</div>
```

## 风格
提供4种风格: `.use-danger`、`.use-info`、`.use-warn`、`.use-success`

```
<div class="alert use-danger">
    <button class="close use-invert use-small use-danger"></button>
    Danger 表示危险或者禁用
</div>

<div class="alert use-info mar-top-10">
    <button class="close use-invert use-small use-info"></button>
    Info 表示消息
</div>

<div class="alert use-warn mar-top-10">
    <button class="close use-invert use-small use-warn"></button>
    Warn 主要用于警告
</div>

<div class="alert use-success mar-top-10">
    <button class="close use-invert use-small use-success"></button>
    Success 主要用于表示成功
</div>
```