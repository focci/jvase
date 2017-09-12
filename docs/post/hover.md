# Hover (Hover)
常用于鼠标经过时触发某些模块的显示与隐藏

## 用法介绍
在外层添加类 <code>.use-hover</code>, 此类没有添加任何CSS样式, 只是用于鼠标经过时触发内部元素的显示与隐藏.
```
<div class="use-hover">
    <div class="hover-block"></div>
</div>
```

内部元素可包括的类以下几个:
<div class="table-responsive">
	<table class="table use-divider use-bordered">
		<thead>
			<tr>
				<th width="20%">类</th>
				<th>说明</th>
			</tr>
		</thead>
	    <tbody>
	        <tr>
	            <td class="nowrap"><code>.hover-inline</code></td>
	            <td>等同于: display:inline;</td>
	        </tr>
	        <tr>
	            <td><code>.hover-block</code></td>
	            <td>等同于: display:block;</td>
	        </tr>
	        <tr>
	            <td><code>.hover-inline-block</code></td>
	            <td>等同于: display:inline-block;</td>
	        </tr>
	        <tr>
	            <td><code>.hover-hidden</code></td>
	            <td>鼠标经过时隐藏: display:none;</td>
	        </tr>
	    </tbody>
	</table>
</div>

```
<button class="btn use-hover">
    <span class="sicon pad-right-3 hover-hidden"><i class="fa fa-battery-empty"></i></span>
    <span class="sicon pad-right-3 hover-inline-block"><i class="fa fa-battery-full"></i></span>
    <span class="pad-left-5">鼠标经过时,更换图标</span>
</button>
```