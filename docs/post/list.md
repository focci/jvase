# 列表 (List)
列表不仅能用于显示一组简单的元素，还能用于复杂的定制的内容

## 用法介绍
添加类 `.list` 到 `&lt;ul&gt;` 或者 `&lt;div&gt;` 这样的块元素，默认没有分隔线.
```
<ul class="list"></ul>
```
```
<ul class="list" style="max-width: 400px;">
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
</ul>
```

## 分隔线
添加类 `.use-divider` 到 `.list`
```
<ul class="list use-divider"></ul>	
```
```
<ul class="list use-divider" style="max-width: 400px;">
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
</ul>
```

## 边框
添加类 `.use-border` 到 `.list`, 添加 `.use-border` 后，会自动添加分隔线.
```
<ul class="list use-border"></ul>
```
```
<ul class="list use-border" style="max-width: 400px;">
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
    <li><a href="javascript:;">列表可以显示一组简单的数据</a></li>
</ul>
```

## 静态列表
添加类 `.use-static` 到 `.list`，静态列表中，`&lt;li&gt;` 标签下面没有 `&lt;a&gt;`，或者没有直接的子元素 `&lt;a&gt;`.
```
<ul class="list use-static"></ul>
```
```
<ul class="list use-static use-border" style="max-width: 400px;">
    <li>列表可以显示一组简单的数据</li>
    <li>列表可以显示一组简单的数据</li>
    <li>列表可以显示一组简单的数据</li>
    <li>列表可以显示一组简单的数据</li>
</ul>
```

## 其它应用

```
<ul class="list use-static use-border" style="max-width: 400px;">
    <li>
    	<span class="badge pull-right">21</span>
        列表可以显示一组简单的数据
    </li>
    <li>
    	<span class="badge pull-right">158</span>
        列表可以显示一组简单的数据
    </li>
    <li>
    	<span class="badge pull-right">254</span>
        列表可以显示一组简单的数据
    </li>
</ul>
```