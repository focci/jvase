# 颜色 (Color)
为了视觉传达上达到统一，Jvase特规定以下一组颜色来快速搭建系统
***

## 主色调
<div class="bgc-main pad-10">
	<h5 class="nowrap text-white">主色调</h5>
	<p class="text-white opacity-8">#00c6a9</p>
</div>
	
## 辅助色
除主色调外，主要用于着重提示(比如说警告等)
<div class="grid">
	<div class="row">
		<div class="col-xs-3">
			<div class="bgc-danger pad-10">
				<h5 class="nowrap text-white">Danger</h5>
				<p class="text-white opacity-8">#f44336</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-warn pad-10">
				<h5 class="nowrap text-white">Warn</h5>
				<p class="text-white opacity-8">#ffab40</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-info pad-10">
				<h5 class="nowrap text-white">Information</h5>
				<p class="text-white opacity-8">#21baf3</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-success pad-10">
				<h5 class="nowrap text-white">Success</h5>
				<p class="text-white opacity-8">#15cf7e</p>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-3">
			<div class="bgc-danger-light pad-10">
				<h5 class="nowrap text-danger">Danger Light</h5>
				<p class=" text-danger opacity-8">#fef0ef</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-warn-light pad-10">
				<h5 class="nowrap text-warn">Warn Light</h5>
				<p class=" text-warn opacity-8">#fffaef</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-info-light pad-10">
				<h5 class="nowrap text-info">Information Light</h5>
				<p class=" text-info opacity-8">#edfcfc</p>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="bgc-success-light pad-10">
				<h5 class="nowrap text-success">Success Light</h5>
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
				<h5 class="nowrap text-white">Black Dark</h5>
				<p class="text-white opacity-8">#222735</p>
			</div>
			<div class="pad-10 bgc-black">
				<h5 class="nowrap text-white">Black</h5>
				<p class="text-white opacity-8">#3a4156</p>
			</div>
			<div class="pad-10 bgc-black-light">
				<h5 class="nowrap text-white">Black Light</h5>
				<p class="text-white opacity-8">#4e5773</p>
			</div>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-3">
			<div class="pad-10 bgc-steel-dark">
				<h5 class="nowrap text-white">Steel Dark</h5>
				<p class="text-white opacity-8">#6a728c</p>
			</div>
			<div class="pad-10 bgc-steel">
				<h5 class="nowrap text-white">Steel</h5>
				<p class="text-white opacity-8">#7e869e</p>
			</div>
			<div class="pad-10 bgc-steel-light">
				<h5 class="nowrap text-white">Steel Light</h5>
				<p class="text-white opacity-8">#9097ae</p>
			</div>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-3">
			<div class="pad-10 bgc-gray-dark">
				<h5 class="nowrap text-white">Gray Dark</h5>
				<p class="text-white opacity-8">#a2a7b8</p>
			</div>
			<div class="pad-10 bgc-gray">
				<h5 class="nowrap text-white">Gray</h5>
				<p class="text-white opacity-8">#b2b6c6</p>
			</div>
			<div class="pad-10 bgc-gray-light">
				<h5 class="nowrap text-white">Gray Light</h5>
				<p class="text-white opacity-8">#ccd1e1</p>
			</div>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-3">
			<div class="pad-10 bgc-silver-dark">
				<h5 class="nowrap text-steel">Silver Dark</h5>
				<p class=" text-steel opacity-8">#e8ebef</p>
			</div>
			<div class="pad-10 bgc-silver">
				<h5 class="nowrap text-steel">Silver</h5>
				<p class=" text-steel opacity-8">#f2f2f2</p>
			</div>
			<div class="pad-10 bgc-white">
				<h5 class="nowrap text-steel">White</h5>
				<p class=" text-steel opacity-8">#ffffff</p>
			</div>
		</div>
	</div>
</div>

## 背景/文字颜色应用
通过添加类 `.bgc-*` 设置背景颜色；`.text-*` 设置文字颜色
<div class="grid">
	<div class="row">
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-main">bgc-main</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-danger">bgc-danger</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-warn">bgc-warn</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-info">bgc-info</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-success">bgc-success</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-danger pad-10 bgc-danger-light">bgc-danger-light</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-warn pad-10 bgc-warn-light">bgc-warn-light</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-info pad-10 bgc-info-light">bgc-info-light</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-success pad-10 bgc-success-light">bgc-success-light</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-black-dark">bgc-black-dark</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-black">bgc-black</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-black-light">bgc-black-light</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-steel-dark">bgc-steel-dark</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-white pad-10 bgc-steel">bgc-steel</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-black pad-10 bgc-steel-light">bgc-steel-light</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-black pad-10 bgc-gray-dark">bgc-gray-dark</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-black pad-10 bgc-gray">bgc-gray</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-black pad-10 bgc-gray-light">bgc-gray-light</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-black pad-10 bgc-silver-dark">bgc-silver-dark</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-black pad-10 bgc-silver">bgc-silver</div>
		<div class="col-xs-6 col-sm-4 col-md-3 center nowrap text-black pad-10 bgc-white">bgc-white</div>
	</div>
</div>