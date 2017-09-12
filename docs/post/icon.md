# 图标 (Icon)
Jvase没有内置的图标库，因为第三方图标库提供的图标已经很丰富了，比如[Awesome](http://www.fontawesome.com.cn).


## 用法介绍
使用类 `.sicon` 将图标包裹起来，引入图标请用 `&lt;i&gt;` 标签，否则样式会失效.
```
<span class="sicon">
    <i class="fa fa-user"></i>
</span>
```
```
<span class="sicon">
    <i class="fa fa-user"></i>
</span>
```

## 尺寸
使用类 `.use-small`、`.use-medium`、`.use-large` 实现图标大小控制.
```
<span class="sicon use-large">
    <i class="fa fa-user"></i>
</span>
```
<div class="table-responsive">
	<table class="table use-divider use-border">
	    <thead>
	        <tr>
	            <th>样式名称</th>
	            <th>图标</th>
	            <th>图标字体大小</th>
	            <th>容器大小</th>
	        </tr>
	    </thead>
	    <tbody>
	        <tr>
	            <td width="30%">`.sicon .use-small`</td>
	            <td width="20%">
	            	<span class="sicon use-small">
					    <i class="fa fa-user"></i>
					</span>
	            </td>
	            <td>14px</td>
	            <td>1rem 1rem</td>
	        </tr>
	        <tr>
	            <td width="30%">`.sicon`</td>
	            <td width="20%">
	            	<span class="sicon">
					    <i class="fa fa-user"></i>
					</span>
	            </td>
	            <td>21px</td>
	            <td>1.5rem 1.5rem</td>
	        </tr>
	        <tr>
	            <td width="30%">`.sicon .use-medium`</td>
	            <td width="20%">
	            	<span class="sicon use-medium">
					    <i class="fa fa-user"></i>
					</span>
	            </td>
	            <td>28px</td>
	            <td>2rem 2rem</td>
	        </tr>
	        <tr>
	            <td width="30%">`.sicon .use-large`</td>
	            <td width="20%">
	            	<span class="sicon use-large">
					    <i class="fa fa-user"></i>
					</span>
	            </td>
	            <td>42px</td>
	            <td>3rem 3rem</td>
	        </tr>
	    </tbody>
	</table>
</div>