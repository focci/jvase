# 表格 (Table)
简单快速的创建不同样式的表格.
***

## 用法介绍
添加类 `.table` 到 `<table>` 元素

```
<table class="table">
    <thead>
        <tr>
            <th width="25">#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        	<td>
                <label class="checkbox">
        		    <input type="checkbox" name="a">
        		    <span></span>
        	    </label>
            </td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
        	<td>
                <label class="checkbox">
        		    <input type="checkbox" name="a">
        		    <span></span>
        	    </label>
            </td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
        	<td>
                <label class="checkbox">
        		    <input type="checkbox" name="a">
        		    <span></span>
        	    </label>
            </td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
    </tbody>
</table>
```

## 行/列分隔条
添加 `.use-divider`(行分隔条)、`.use-colbar`(列分隔条) 到 `<table>` 元素
```
<div class="table-responsive use-inline-block col-md-5 col-xs-12">
    <table class="table use-divider">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="table-responsive use-inline-block col-md-5 col-xs-12 col-md-offset-1">
    <table class="table use-colbar">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
```

行列分隔条同时加上
```
<div class="table-responsive">
	<table class="table use-divider use-colbar">
	    <thead>
	            <tr>
	                <th width="25">#</th>
	                <th>Header</th>
	                <th>Header</th>
	                <th>Header</th>
	            </tr>
	        </thead>
	        <tbody>
	            <tr>
	                <td>
	                    <label class="checkbox">
	            		    <input type="checkbox" name="a">
	            		    <span></span>
	            	    </label>
	                </td>
	                <td>Table Data</td>
	                <td>Table Data</td>
	                <td>Table Data</td>
	            </tr>
	            <tr>
	                <td>
	                    <label class="checkbox">
	            		    <input type="checkbox" name="a">
	            		    <span></span>
	            	    </label>
	                </td>
	                <td>Table Data</td>
	                <td>Table Data</td>
	                <td>Table Data</td>
	            </tr>
	            <tr>
	                <td>
	                    <label class="checkbox">
	            		    <input type="checkbox" name="a">
	            		    <span></span>
	            	    </label>
	                </td>
	                <td>Table Data</td>
	                <td>Table Data</td>
	                <td>Table Data</td>
	            </tr>
	        </tbody>
	</table>
</div>
```

## 边框
添加 `.use-border` 到 `<table>`.
```
<table class="table use-border">
    <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
</table>
```

行/列分隔条加上 `.use-border` 后效果
```
<div class="table-responsive use-inline-block col-md-5 col-xs-12">
    <table class="table use-divider use-border">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="table-responsive use-inline-block col-md-5 col-xs-12 col-md-offset-1">
    <table class="table use-colbar use-border">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
```

同时加上行/列分隔条，如果要突出header，可以为其添加底色
```
<table class="table use-border use-divider use-colbar">
    <thead>
        <tr class="bgc-silver">
            <th width="25">#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        	<td>
                <label class="checkbox">
        		    <input type="checkbox" name="a">
        		    <span></span>
        	    </label>
            </td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
        	<td>
                <label class="checkbox">
        		    <input type="checkbox" name="a">
        		    <span></span>
        	    </label>
            </td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
        	<td>
                <label class="checkbox">
        		    <input type="checkbox" name="a">
        		    <span></span>
        	    </label>
            </td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
    </tbody>
</table>
```

## 尺寸
添加 `.use-large` 到 `<table>` 元素便可以实现大行距表格；添加 `.use-small` 到 `<table>` 元素便可以实现小行距表格
```
<div class="table-responsive use-inline-block col-md-5 col-xs-12">
    <table class="table use-divider use-border use-large">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="table-responsive use-inline-block col-md-5 col-xs-12 col-md-offset-1">
    <table class="table use-divider use-border use-small">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
```

## Hover / Active
添加 `.use-hover` 到 `<table>` 元素，鼠标经过 `<td>` 时显示背景；如果向 `<tr>` 添加 `.use-acitve` 类将直接添加背景颜色.
```
<div class="table-responsive use-inline-block col-md-5 col-xs-12">
    <table class="table use-divider use-hover">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="table-responsive use-inline-block col-md-5 col-xs-12 col-md-offset-1">
    <table class="table use-divider">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr class="use-active">
            	<td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a" checked>
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
            	<td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
            	<td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
```

## 奇(偶)数行背景
添加 `.use-*-odd`(奇数行) 或者 `.use-*-even`(偶数行) 到 `<table>` 元素，其中 * 可以是 `default`、`success`、`warn`、`info`、`danger`.
```
<div class="table-responsive use-inline-block col-md-5 col-xs-12">
    <table class="table use-divider use-border use-default-even">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a" >
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a" checked>
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="table-responsive use-inline-block col-md-5 col-xs-12 col-md-offset-1">
    <table class="table use-divider use-border use-info-odd">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a" checked>
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a" checked>
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
```

## 着重提示
添加 `.use-*`类到 `<tr>` 或者 `<td>` 元素，其中 * 可以是 `default`、`success`、`warn`、`info`、`danger`.
```
<div class="table-responsive use-inline-block col-md-5 col-xs-12">
    <table class="table">
        <thead>
            <tr>
                <th width="25">#</th>
                <th class="bgc-success text-white">Header</th>
                <th class="bgc-warn text-white">Header</th>
                <th class="bgc-danger text-white">Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            	<td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
            	<td class="use-success">Table Data</td>
                <td class="use-warn">Table Data</td>
                <td class="use-danger">Table Data</td>
            </tr>
            <tr>
            	<td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td class="use-success">Table Data</td>
                <td class="use-warn">Table Data</td>
                <td class="use-danger">Table Data</td>
            </tr>
            <tr>
            	<td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td class="use-success">Table Data</td>
                <td class="use-warn">Table Data</td>
                <td class="use-danger">Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="table-responsive use-inline-block col-md-5 col-xs-12 col-md-offset-1">
    <table class="table">
        <thead>
            <tr>
                <th width="25">#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
            </tr>
        </thead>
        <tbody>
            <tr class="use-info">
            	<td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a" checked>
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
            	<td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
            	<td>
                    <label class="checkbox">
            		    <input type="checkbox" name="a">
            		    <span></span>
            	    </label>
                </td>
                <td class="use-success">Table Data</td>
                <td class="use-warn">Table Data</td>
                <td class="use-danger"><i class="fa fa-user"></i> Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
```

## 响应式表格
在 `<table>` 元素的外层，添加类名为 `.table-responsive` 的块元素.<br/>响应式表格在设备显示宽度小于768px时才生效，其特点就是内容不会换行，如果表格超出外层宽度，则会自动产生滚动条.