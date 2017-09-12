# 栅栏 (Grid)
通过基础的12列，快速实现布局

## 用法介绍
创建一个容器`.grid`, 接着添行容器 `.row`, 再在行容器内添加列容器 `.col-*`, 便可实现栅栏效果.
```
<div class="grid">
    <div class="row">
        <div class="col-*"></div>
    </div>
</div>
```

Grid中的列是通过百分比的方式来控制的, 每一列的宽度为:1/12, Grid还针对不同的显示宽度, 专门设置了对应的响应式类.
<div class="table-responsive">
	<table class="table use-divider use-border">
	    <thead>
	        <tr>
	            <th>/</th>
	            <th>手机<small>(&lt;768px)</small></th>
	            <th>平板<small>(≥768px)</small></th>
	            <th>中等屏幕<small>(≥992px)</small></th>
	            <th>大屏幕<small>(≥1200px)</small></th>
	        </tr>
	    </thead>
	    <tbody>
	        <tr>
	            <td class="nowrap">显示</td>
	            <td>总是水平排列</td>
	            <td colspan="3">开始是堆叠在一起的，当大于这些阈值时将变为水平排列</td>
	        </tr>
	        <tr>
	            <td class="nowrap">类前缀</td>
	            <td>`.col-xs-*`</td>
	            <td>`.col-sm-*`</td>
	            <td>`.col-md-*`</td>
	            <td>`.col-lg-*`</td>
	        </tr>
	    </tbody>
	</table>
</div>
```
<div class="grid">
    <div class="row">
        <div class="col-xs-12">
            <div class="bgc-gray-light pad-10">col-xs-12</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-6">
            <div class="bgc-gray-light pad-10">col-xs-6</div>
        </div>
        <div class="col-xs-6">
        	<div class="bgc-silver-dark pad-10">col-xs-6</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-4">
            <div class="bgc-gray-light pad-10">col-xs-4</div>
        </div>
        <div class="col-xs-4">
        	<div class="bgc-silver-dark pad-10">col-xs-4</div>
        </div>
        <div class="col-xs-4">
            <div class="bgc-gray-light pad-10">col-xs-4</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <div class="bgc-gray-light pad-10">col-xs-3</div>
        </div>
        <div class="col-xs-3">
        	<div class="bgc-silver-dark pad-10">col-xs-3</div>
        </div>
        <div class="col-xs-3">
            <div class="bgc-gray-light pad-10">col-xs-3</div>
        </div>
        <div class="col-xs-3">
        	<div class="bgc-silver-dark pad-10">col-xs-3</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-2">
            <div class="bgc-gray-light pad-10">col-xs-2</div>
        </div>
        <div class="col-xs-2">
        	<div class="bgc-silver-dark pad-10">col-xs-2</div>
        </div>
        <div class="col-xs-2">
            <div class="bgc-gray-light pad-10">col-xs-2</div>
        </div>
        <div class="col-xs-2">
            <div class="bgc-gray-light pad-10">col-xs-2</div>
        </div>
        <div class="col-xs-2">
            <div class="bgc-gray-light pad-10">col-xs-2</div>
        </div>
        <div class="col-xs-2">
        	<div class="bgc-silver-dark pad-10">col-xs-2</div>
        </div>
    </div>
</div>
```

如果要响应式控制grid的宽度，请将添加类 `.use-responsive`, 具体显示宽度为:
<div class="table-responsive">
<table class="table use-divider use-border">
    <thead>
        <tr>
            <th width="30%">设备显示宽度</th>
            <th>Grid宽度</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>` &lt; 768px`</td>
            <td>100%</td>
        </tr>
        <tr>
            <td>` &gt;=768px && &lt;992px`</td>
            <td>750px</td>
        </tr>
        <tr>
            <td>` &gt;=992px && &lt;1200px`</td>
            <td>970px</td>
        </tr>
        <tr>
            <td>` &gt;=1200px`</td>
            <td>1170px</td>
        </tr>
    </tbody>
</table>
</div>

## 偏移
偏移的实现与`.grid`宽度类似, 也是分成12等分，每一份偏移量为1/12，偏移的宽度通过添加类 `.col-*-offset-*` 来实现，其中第一个'*'的值为：xs、sm、md、lg；第二个'*'的值为1-12.
```
<div class="grid">
    <div class="row">
        <div class="col-* col-*-offset-*"></div>
    </div>
</div>
```

在每一行中offset的宽度加上col的宽度和应该为12，否则宽度将超过100%
```
<div class="grid">
    <div class="row">
    	<div class="col-xs-2">
    	    <div class="bgc-silver-dark pad-10">col-xs-2</div>
    	</div>
        <div class="col-xs-6 col-xs-offset-4">
    	    <div class="bgc-silver-dark pad-10">col-xs-6 col-xs-offset-4</div>
    	</div>
    </div>
    <div class="row">
        <div class="col-xs-6">
    	    <div class="bgc-silver-dark pad-10">col-xs-6<br/>&nbsp;</div>
    	</div>
        <div class="col-xs-3 col-xs-offset-3">
    	    <div class="bgc-silver-dark pad-10">col-xs-3<br/>col-xs-offset-4</div>
    	</div>
    </div>
</div>
```

## 行间距
默认行间距是10px, 如果要清除添加类`.use-row-gapless` 即可. 
```
<div class="grid use-row-gapless">...</div>
```
```
<div class="grid use-row-gapless">
    <div class="row">
        <div class="col-xs-12">
            <div class="bgc-gray-light pad-10">col-xs-12</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <div class="bgc-silver pad-10">col-xs-12</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <div class="bgc-gray-light pad-10">col-xs-12</div>
        </div>
    </div>
</div>
```

## 列间距
默认列间距是10px, 如果要清除添加类`.use-col-gapless` 即可. 
```
<div class="grid use-col-gapless">...</div>
```
```
<div class="grid use-col-gapless">
    <div class="row">
        <div class="col-xs-4">
            <div class="bgc-gray-light pad-10">col-xs-4</div>
        </div>
        <div class="col-xs-4">
            <div class="bgc-silver pad-10">col-xs-4</div>
        </div>
        <div class="col-xs-4">
            <div class="bgc-gray-light pad-10">col-xs-4</div>
        </div>
    </div>
</div>
```

## 边框</h2>
添加类 `.use-border` 到 `.grid`, 此类默认包含了 `use-col-gapless`、`use-row-gapless` 两个类.
```
<div class="grid use-border">...</div>
```
```
<div class="grid use-border">
    <div class="row">
        <div class="col-xs-4 pad-10">col-xs-4</div>
        <div class="col-xs-4 pad-10">col-xs-4</div>
        <div class="col-xs-4 pad-10">col-xs-4</div>
    </div>
    <div class="row">
        <div class="col-xs-4 pad-10">col-xs-4</div>
        <div class="col-xs-4 pad-10">col-xs-4</div>
        <div class="col-xs-4 pad-10">col-xs-4</div>
    </div>
    <div class="row">
        <div class="col-xs-4 pad-10">col-xs-4</div>
        <div class="col-xs-4 pad-10">col-xs-4</div>
        <div class="col-xs-4 pad-10">col-xs-4</div>
    </div>
</div>
```