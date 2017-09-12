#响应式工具 (Responsive)
根据窗口尺寸不同，显示不同效果

## 显示 / 隐藏
根据Media查询来控制元素的显示与否，其中 " * "号对应：xs、sm、md

<div class="table-responsive">
	<table class="table use-border use-divider use-colbar">
	    <thead>
	        <tr>
	            <th width="20%">工具</th>
	            <th>xs</th>
	            <th>sm</th>
	            <th>md</th>
	            <th>说明</th>
	        </tr>
	    </thead>
	    <tbody>
	        <tr>
	            <td class="nowrap">`.hidden-*`</td>
	            <td> ≦768px 隐藏 </td>
	            <td> ≦991px 隐藏 </td>
	            <td> ≦1199px 隐藏 </td>
	            <td> display: none </td>
	        </tr>
	        <tr>
	            <td class="nowrap">`.visible-*-inline`</td>
	            <td rowspan="3"> ≦768px 显示 </td>
	            <td rowspan="3"> ≦991px 显示 </td>
	            <td rowspan="3"> ≦1199px 显示 </td>
	            <td> display: inline </td>
	        </tr>
	        <tr>
	            <td class="nowrap">`.visible-*-block`</td>
	            <td> display: block </td>
	        </tr>
	        <tr>
	            <td class="nowrap">`.visible-*-inline-block`</td>
	           <td> display: inline-block </td>
	        </tr>
	    </tbody>
	</table>
</div>


## 打印
只在打印时才有效

<div class="table-responsive">
	<table class="table use-border use-divider use-colbar">
	    <thead>
	        <tr>
	            <th width="30%">工具</th>
	            <th>说明</th>
	        </tr>
	    </thead>
	    <tbody>
	        <tr>
	            <td class="nowrap">`.visible-print-block`</td>
	            <td> display: block </td>
	        </tr>
	        <tr>
	            <td class="nowrap">`..visible-print-inline`</td>
	            <td> display: inline </td>
	        </tr>
	        <tr>
	            <td class="nowrap">`.visible-print-inline-block`</td>
	            <td> display: inline-block </td>
	        </tr>
	        <tr>
	            <td class="nowrap">`.hidden-print`</td>
	           <td> display: none </td>
	        </tr>
	    </tbody>
	</table>
</div>

## 响应式图片
在 `<img>` 上添加类 `.use-responsive`, 在窗口宽度小于 768px时, 图度的宽度会变成100%, 且高度自适应, 即: 

```
.use-responsive {
    width: 100%;
    height: auto;
}
```