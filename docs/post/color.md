# 颜色 (Color)
为了视觉传达上达到统一，Jvase特规定以下一组颜色来快速搭建系统
***

## 主色调
<div class="bgc-main pad-10">
	<h6 class="nowrap text-white">main</h6>
	<p class="text-white opacity-8">#00c6a9</p>
</div>
	
## 辅助色
除主色调外，主要用于着重提示(比如说警告等)
<div class="grid">
	<div class="row">
		<div class="col-xs-3">
			<div class="bgc-danger pad-10">
				<h5 class="nowrap text-white">danger</h6>
				<p class="text-white opacity-8">#f44336</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-warn pad-10">
				<h6 class="nowrap text-white">warn</h6>
				<p class="text-white opacity-8">#ffab40</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-info pad-10">
				<h5 class="nowrap text-white">info</h6>
				<p class="text-white opacity-8">#21baf3</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-success pad-10">
				<h5 class="nowrap text-white">success</h6>
				<p class="text-white opacity-8">#15cf7e</p>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-3">
			<div class="bgc-danger-light pad-10">
				<h5 class="nowrap text-danger">danger-light</h6>
				<p class=" text-danger opacity-8">#fef0ef</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-warn-light pad-10">
				<h5 class="nowrap text-warn">warn-light</h6>
				<p class=" text-warn opacity-8">#fffaef</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-info-light pad-10">
				<h5 class="nowrap text-info">info-light</h6>
				<p class=" text-info opacity-8">#edfcfc</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-success-light pad-10">
				<h5 class="nowrap text-success">success-light</h6>
				<p class=" text-success opacity-8">#f1ffef</p>
			</div>
		</div>
	</div>
</div>

## 中性色
主要用于文字、背景等颜色
<div class="grid">
	<div class="row">
		<div class="col-xs-12 col-sm-6 col-md-3">
			<div class="pad-10 bgc-black-dark">
				<h6 class="nowrap text-white">black-dark</h6>
				<p class="text-white opacity-8">#222735</p>
			</div>
			<div class="pad-10 bgc-black">
				<h6 class="nowrap text-white">black</h6>
				<p class="text-white opacity-8">#3a4156</p>
			</div>
			<div class="pad-10 bgc-black-light">
				<h6 class="nowrap text-white">black-light</h6>
				<p class="text-white opacity-8">#4e5773</p>
			</div>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-3">
			<div class="pad-10 bgc-steel-dark">
				<h6 class="nowrap text-white">steel-dark</h6>
				<p class="text-white opacity-8">#6a728c</p>
			</div>
			<div class="pad-10 bgc-steel">
				<h6 class="nowrap text-white">steel</h6>
				<p class="text-white opacity-8">#7e869e</p>
			</div>
			<div class="pad-10 bgc-steel-light">
				<h6 class="nowrap text-white">steel-light</h6>
				<p class="text-white opacity-8">#9097ae</p>
			</div>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-3">
			<div class="pad-10 bgc-gray-dark">
				<h6 class="nowrap text-white">gray-dark</h6>
				<p class="text-white opacity-8">#a2a7b8</p>
			</div>
			<div class="pad-10 bgc-gray">
				<h6 class="nowrap text-white">gray</h6>
				<p class="text-white opacity-8">#b2b6c6</p>
			</div>
			<div class="pad-10 bgc-gray-light">
				<h6 class="nowrap text-white">gray-light</h6>
				<p class="text-white opacity-8">#ccd1e1</p>
			</div>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-3">
			<div class="pad-10 bgc-silver-dark">
				<h6 class="nowrap text-steel">silver-dark</h6>
				<p class=" text-steel opacity-8">#e8ebef</p>
			</div>
			<div class="pad-10 bgc-silver">
				<h6 class="nowrap text-steel">silver</h6>
				<p class=" text-steel opacity-8">#f2f2f2</p>
			</div>
			<div class="pad-10 bgc-white">
				<h6 class="nowrap text-steel">white</h6>
				<p class=" text-steel opacity-8">#ffffff</p>
			</div>
		</div>
	</div>
</div>

## 应用
通过添加类 `.bgc-*` 设置背景颜色；`.text-*` 设置文字颜色
```
<p class="pad-15 bgc-steel text-white">背景颜色：.use-steel</p>
<p class="pad-15 text-steel">文字颜色：.text-steel</p>
```