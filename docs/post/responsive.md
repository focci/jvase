#响应式工具 (Responsive)
根据窗口尺寸不同，显示不同效果
***

## 显示 / 隐藏
根据Media查询来控制元素的显示与否，其中 " * "号对应：xs、sm、md

|工具						  |xs			|sm			  |md			 |说明				   |
|---------------------------|-------------|-------------|--------------|----------------------|
|`.hidden-*`				| ≦768px 隐藏 | ≦991px 隐藏 | ≦1199px 隐藏 | display: none 		|
|`.visible-*-inline`		| ≦768px 显示 | ≦991px 显示 | ≦1199px 显示 | display: inline 		|
|`.visible-*-block`			| ≦768px 显示 | ≦991px 显示 | ≦1199px 显示 | display: block 		|
|`.visible-*-inline-block`	| ≦768px 显示 | ≦991px 显示 | ≦1199px 显示 | display: inline-block|

## 打印
只在打印时才有效

|工具						 	  |说明		   			 |
|-------------------------------|-----------------------|
|`.visible-print-block`			| display: block 		|
|`.visible-print-inline`		| display: inline		|
|`.visible-print-inline-block`	| display: inline-block |
|`.hidden-print`				| display: none 		|

## 响应式图片
在 `<img>` 上添加类 `.use-responsive`, 在窗口宽度小于 768px时, 图度的宽度会变成100%, 且高度自适应, 即: 

```
.use-responsive {
    width: 100%;
    height: auto;
}
```