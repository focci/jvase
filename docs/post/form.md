# 表单 (Form)
创建多种样式的表单.
***

## 用法介绍
`<form>` 包含以下子元素.

| 样式名称		| 描述			|
| -------------| :-------------: |
| `.input`     | 添加至 `<input>`、`<select>`、`<textarea>`元素 |
| `.radio`     | 添加至 `<input type="radio">`元素 |
| `.checkbox`  | 添加至 `<input type="checkbox">`元素 |

一个常见的表单
<div class="z-depth-1 pad-25 col-xs-12">
```
<form class="form">
    <div class="form-items">
        <div class="form-item col-xs-8">
            <label class="form-label">用户名</label>
            <div class="form-ctrl">
                <input type="text" class="input" placeholder="用户名">
            </div>
        </div>
        <div class="form-item col-xs-4">
            <label class="form-label">妮称</label>
            <div class="form-ctrl">
                <input type="text" class="input" placeholder="妮称">
            </div>
        </div>
    </div>
    <div class="form-items">
	    <div class="form-item form-inline">
	        <label class="form-label">性别</label>
	        <div class="form-ctrl">
	            <label class="radio"><input type="radio" name="a" checked/> <span>男生</span></label>
	            <label class="radio"><input type="radio" name="a"/> <span>女生</span></label>
	        </div>
        </div>
    </div>
    <div class="form-items">
        <div class="form-item col-xs-8">
            <label class="form-label">邮箱</label>
            <div class="form-ctrl">
            	<input type="text" class="input" placeholder="@">
            </div>
        </div>
        <div class="form-item col-xs-4">
            <label class="form-label">国家</label>
        	<div class="form-ctrl">
        		<div class="select use-fullwidth">
            		<select class="input">
		                <option value="">中国</option>
		                <option value="">法国</option>
		            </select>
        		</div>
        	</div>
        </div>
    </div>
    <div class="form-item">
        <label class="form-label">备注</label>
        <div class="form-ctrl">
        	<textarea class="input" rows="4"></textarea>
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<label class="checkbox">
        		<input type="checkbox" name="a"/>
        		<span>是否同意<a href="javascript:;">《用户使用协议》</a></span>
        	</label>
        </div>
    </div>
    <div class="form-item">
    	<label class="form-label"></label>
        <div class="form-ctrl">
        	<input type="button" class="btn btn-invert use-info use-invert" value="提交用户信息" />
        </div>
    </div>
</form>
```

## 风格
针对 `<input>`、`<textarea>`、`<select>` 元素内置了4种不同风格.

```
<form class="form col-xs-12 col-md-6">
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input use-success" placeholder="success" />
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input use-warn" placeholder="warn" />
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input use-info" placeholder="info" />
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input use-danger" placeholder="danger" />
        </div>
    </div>
</form>
```

## 尺寸
可以通过添加类 `.use-large`、`.use-medium`、`.use-small` 到 `<input type="text">` 或者 `<select>` 来设置尺寸.
```
<form class="form col-xs-12 col-md-6">
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input use-small" placeholder="SMALL" />
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input" placeholder="Normal" />
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input use-medium" placeholder="MEDIUM" />
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input use-large" placeholder="LARGE" />
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<div class="select use-fullwidth use-large">
	        	<select class="input">
			        <option value="">SELECT LARGE</option>
			        <option value="">SELECT LARGE</option>
			    </select>
		    </div>
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<div class="select use-fullwidth use-medium">
	        	<select class="input">
			        <option value="">SELECT MEDIUM</option>
			        <option value="">SELECT MEDIUM</option>
			    </select>
		    </div>
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<div class="select use-fullwidth">
	        	<select class="input">
			        <option value="">SELECT ITEM1</option>
			        <option value="">SELECT ITEM2</option>
			    </select>
		    </div>
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<div class="select use-fullwidth use-small">
	        	<select class="input">
			        <option value="">SELECT ITEM1</option>
			        <option value="">SELECT ITEM2</option>
			    </select>
		    </div>
        </div>
    </div>
</form>
```

## 圆角&胶囊
在 `.input` 上添加类 `.use-radius` 或者 `.use-pill` 即可.
```
<form class="form">
    <div class="form-item form-inline">
        <div class="form-ctrl mar-bottom-15">
            <input type="text" class="input use-radius" placeholder="Radius" />
        </div>
        <div class="form-ctrl mar-bottom-15">
        	<div class="select">
	            <select class="input use-radius">
		            <option value="">SELECT Radius</option>
		            <option value="">SELECT Radius</option>
		        </select>
        	</div>
        </div>
        <div class="form-ctrl mar-bottom-15 use-icon-left use-icon-right">
            <input type="text" class="input use-radius" placeholder="Radius" />
            <span class="sicon input-sicon-left"><i class="fa fa-user"></i></span>
            <span class="sicon input-sicon-right"><i class="fa fa-check"></i></span>
        </div>
    </div>
    <div class="form-item form-inline">
        <div class="form-ctrl mar-bottom-15">
            <input type="text" class="input use-pill" placeholder="Pill" />
        </div>
        <div class="form-ctrl mar-bottom-15">
        	<div class="select">
	            <select class="input use-pill">
		            <option value="">SELECT Pill</option>
		            <option value="">SELECT Pill</option>
		        </select>
        	</div>
        </div>
        <div class="form-ctrl mar-bottom-15 use-icon-left use-icon-right">
            <input type="text" class="input use-pill" placeholder="Pill" />
            <span class="sicon input-sicon-left"><i class="fa fa-user"></i></span>
            <span class="sicon input-sicon-right"><i class="fa fa-check"></i></span>
        </div>
    </div>
</form>
```

如果要在表单组件上实现圆角或者胶囊形状，需要在 `.form-addons` 上添加 `.use-pill` 或者 `.use-radius`
```
<form class="form">
    <div class="form-item form-addons use-pill">
        <div class="form-ctrl">
            <input type="text" class="input" placeholder="Email" />
        </div>
        <div class="form-ctrl">
            <a href="javascript:;" class="btn use-static">@gmail.com</a>
        </div>
    </div>
    <div class="form-item form-addons use-radius">
        <div class="form-ctrl">
            <input type="text" class="input" placeholder="Email" />
        </div>
        <div class="form-ctrl">
            <a href="javascript:;" class="btn use-static">@gmail.com</a>
        </div>
    </div>
</form>
```

## 状态
`<input>` 上添加类 `.use-hover`、`.use-active` 分别与鼠标经过与选中时的样式相同.
```
<form class="form col-xs-12 col-md-6">
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input" placeholder="NORMAL" />
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input use-hover" placeholder="HOVER" />
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl">
        	<input type="text" class="input use-active" placeholder="ACTIVE" />
        </div>
    </div>
</form>
```

## 图标
为 `<input type="text">` 添加前置/后置图标
```
<form class="form col-xs-12 col-md-6">
    <div class="form-item">
        <div class="form-ctrl use-icon-right">
        	<input type="text" class="input" placeholder="Right" />
        	<span class="sicon input-sicon-right"><i class="fa fa-check"></i></span>
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl use-icon-left">
        	<input type="text" class="input" placeholder="User" />
        	<span class="sicon input-sicon-left"><i class="fa fa-user"></i></span>
        </div>
    </div>
</form>
```

`<select>` 与 `<textarea>`也可以添加图标.
```
<form class="form col-xs-12 col-md-6">
    <div class="form-item">
        <div class="form-ctrl">
        	<div class="select use-icon-left">
	            <select class="input">
		            <option value="">SELECT ITEM1</option>
		            <option value="">SELECT ITEM2</option>
		        </select>
		        <span class="sicon input-sicon-left"><i class="fa fa-user"></i></span>
	        </div>
        </div>
    </div>
    <div class="form-item">
        <div class="form-ctrl use-icon-left use-icon-right">
            <textarea class="input" placeholder="输入字母将自动匹配用户名"></textarea>
            <span class="sicon input-sicon-left"><i class="fa fa-user"></i></span>
            <span class="sicon input-sicon-right"><i class="fa fa-circle-o-notch fa-spin"></i></span>
        </div>
    </div>
</form>
```

图标允许尺寸说明

|尺寸|允许图标大小|
|----------|:----------------:|
|`.input.use-small`|`.sicon.use-small`|
|`.input`|`.sicon.use-normal`、`.sicon.use-small`|
|`.input.use-medium`|`.sicon.use-medium`、`.sicon.use-normal`、`.sicon.use-small`|
|`.input.use-large`|`.sicon.use-large`、`.sicon.use-medium`、<br>`.sicon.use-normal`、`.sicon.use-small`|

## 图标按钮
在图标(`.sicon`)上添加 `.use-sicon-btn` 类.
```
<form class="form col-xs-12 col-md-6">
    <div class="form-item">
        <div class="form-ctrl use-icon-left use-icon-right">
        	<input type="text" class="input" placeholder="User" />
        	<span class="sicon input-sicon-left"><i class="fa fa-user"></i></span>
        	<span class="sicon input-sicon-right use-sicon-btn"><i class="close"></i></span>
        </div>
    </div>
</form>
```

## 表单组件
可以将 `.input`、`.btn` 整合在一起，只需在 `.form-item` 上添加类 `.form-addons` 即可.
```
<form class="form">
    <div class="form-item form-addons">
        <div class="form-ctrl">
        	<input type="text" class="input" placeholder="Email" />
        </div>
        <div class="form-ctrl">
        	<a href="javascript:;" class="btn use-static">@gmail.com</a>
        </div>
    </div>
    <div class="form-item form-addons">
        <div class="form-ctrl">
        	<input type="text" class="input" placeholder="User" />
        </div>
        <div class="form-ctrl">
        	<a href="javascript:;" class="btn">添加</a>
        </div>
    </div>
    <div class="form-item form-addons">
    	<div class="form-ctrl">
        	<div class="select">
	        	<select class="input">
			        <option value="">http</option>
			        <option value="">ftp</option>
			    </select>
        	</div>
        </div>
        <div class="form-ctrl">
        	<input type="text" class="input" placeholder="www.example.com" />
        </div>
        <div class="form-ctrl">
        	<a href="javascript:;" class="btn">访问</a>
        </div>
    </div>
</form>
```

## 禁用
在 `<input>`、`<textarea>`、`<select>` 添加 `disabled` 即可.

```
<div class="z-depth-1 pad-25">
    <ul class="list">
        <li class="pad-bottom-10">
            <input type="text" class="input" placeholder="用户名" disabled>
        </li>
        <li class="pad-bottom-10">
            <label class="radio"><input type="radio" name="a" checked disabled/> <span>Radio</span></label>
        </li>
        <li class="pad-bottom-10">
            <label class="checkbox"><input type="checkbox" name="b" disabled/> <span>Checkbox</span></label>
        </li>
        <li class="pad-bottom-10">
    	    <div class="select">
    	    	<select class="input" disabled>
    	    	    <option value="">滑冰</option>
    	    	    <option value="">画画</option>
    	    	</select>
    	    </div>
        </li>
        <li class="pad-bottom-10">
            <textarea class="input" rows="4" disabled></textarea>
        </li>
    </ul>
</div>
```