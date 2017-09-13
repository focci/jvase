# 基础(Base)
初始化各类及标签样式，以及一些常用类
***

## Header
`h1` ... `h6` 所有标题标签，在标题内可以通过 `<small>` 标签来标记副标题.
```
<h1>h1 Heading 1 <small class="text-steel">Small Header</small></h1>
<h2>h2 Heading 2 <small class="text-steel">Small Header</small></h2>
<h3>h3 Heading 3 <small class="text-steel">Small Header</small></h3>
<h4>h4 Heading 4 <small class="text-steel">Small Header</small></h4>
<h5>h5 Heading 5 <small class="text-steel">Small Header</small></h5>
<h6>h6 Heading 6 <small class="text-steel">Small Header</small></h6>
```

## 阴影
容器实现阴影效果, 通过添加类 `.z-depth-*` `.z-depth-*-top` `.z-depth-*-bottom` 来实现, 其中" * "的取值范围为1-5的整数.
```
<div class="grid">
    <div class="row">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-1 pad-15 mar-15">.z-depth-1</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-1-top pad-15 mar-15">.z-depth-1-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-1-bottom pad-15 mar-15">.z-depth-1-bottom</div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-2 pad-15 mar-15">.z-depth-2</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-2-top pad-15 mar-15">.z-depth-2-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-2-bottom pad-15 mar-15">.z-depth-2-bottom</div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-3 pad-15 mar-15">.z-depth-3</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-3-top pad-15 mar-15">.z-depth-3-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-3-bottom pad-15 mar-15">.z-depth-3-bottom</div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-4 pad-15 mar-15">.z-depth-4</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-4-top pad-15 mar-15">.z-depth-4-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-4-bottom pad-15 mar-15">.z-depth-4-bottom</div>
        </div>
    </div>
    <div class="row pad-bottom-60">
        <div class="col-sm-3 col-sm-offset-1">
            <div class="z-depth-5 pad-15 mar-15">.z-depth-5</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-5-top pad-15 mar-15">.z-depth-5-top</div>
        </div>
        <div class="col-sm-3">
            <div class="z-depth-5-bottom pad-15 mar-15">.z-depth-5-bottom</div>
        </div>
    </div>
</div>
```

## 圆
通过添加类 `.circle-*` 来实现.

默认情况下，" * " 号所对应的值即为圆直径的大小，其取值范围为5-60之间(含)5的倍数.
```
<div class="grid">
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-5 bgc-gray"></div>
            <div class="text-gray">.circle-5</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-10 bgc-gray"></div>
            <div class="text-gray">.circle-10</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-15 bgc-gray"></div>
            <div class="text-gray">.circle-15</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-20 bgc-gray"></div>
            <div class="text-gray">.circle-20</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-25 bgc-gray"></div>
            <div class="text-gray">.circle-25</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-30 bgc-gray"></div>
            <div class="text-gray">.circle-30</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-35 bgc-gray"></div>
            <div class="text-gray">.circle-35</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-40 bgc-gray"></div>
            <div class="text-gray">.circle-40</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-45 bgc-gray"></div>
            <div class="text-gray">.circle-45</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-50 bgc-gray"></div>
            <div class="text-gray">.circle-50</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-55 bgc-gray"></div>
            <div class="text-gray">.circle-55</div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 use-center">
            <div class="circle-60 bgc-gray"></div>
            <div class="text-gray">.circle-60</div>
        </div>
    </div>
</div>
```

## 图片形状
通过为 `<img>` 元素添加以下相应的类，可以让图片呈现不同的形状(圆角、圆、外边框).
```
<div class="use-inline-block mar-right-15">
    <img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif" class="use-radius" />
    <div class="use-center pad-top-10 text-gray">.use-radius</div>
</div>
<div class="use-inline-block mar-right-15">
    <img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif" class="use-circle" />
    <div class="use-center pad-top-10 text-gray">.use-circle</div>
</div>
<div class="use-inline-block">
    <img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif" class="thumb" />
    <div class="use-center pad-top-10 text-gray">.thumb</div>
</div>
```

## 胶囊&圆角
通过添加类 `.use-pill` , 可以实现两端呈半圆形的胶囊形状，添加类 `.use-radius` 可实现圆角效果(圆角大小默认为3px).
```
<div class="use-pill use-inline-block bgc-gray-light pad-15" style="width: 100px;"></div>
<div class="use-radius use-inline-block bgc-gray-light pad-15 mar-left-30" style="width: 100px;"></div>
```

## 被删除的文本
对于被删除的文本使用 `<del>` 标签
```
<del>Jvase 演示文本</del>
```

## 插入文本
额外插入的文本使用 `<ins>` 标签
```
<ins>Jvase 演示文本</ins>
```

## 小号文本
小号文本用 `<small>` 标签
```
默认文本大小 <small>小号文本大小</small>
```

## 强调
通过增加类 `.use-bold` 强调一段文本
```
Jvase 演示文本 <span class="use-bold">Jvase 演示文本</span>
```

## 斜体
斜体文本用 `<em>` 标签
```
Jvase 演示文本 <em>Jvase 演示文本</em>
```

## Code
通过 `<code>` 标签定义计算机代码文本
```
<code>.center</code>
```

## 水平对齐
通过文本对齐类，可以简单方便的将文字重新对齐
```
<div class="grid">
    <div class="row">
        <div class="col-xs-6 col-sm-6">
            <div class="bgc-silver-dark pad-10 use-left" style="height:41px;">左对齐 .use-left</div>
        </div>
        <div class="col-xs-6 col-sm-6">
            <div class="bgc-silver-dark pad-10 use-center" style="height:41px;">居中对齐 .use-center</div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-6 col-sm-6">
            <div class="bgc-silver-dark pad-10 use-right" style="height:41px;">右对齐 .use-right</div>
        </div>
        <div class="col-xs-6 col-sm-6">
            <div class="bgc-silver-dark pad-10 use-justify" style="height:41px;">两端对齐 .use-justify</div>
        </div>
    </div>
</div>
```

## 垂直居中对齐
添加类 `.use-middle` 至容器，再对容器中要垂直居中对齐的元素添加类 `.middle-item`	
```
<div class="grid">
    <div class="row">
        <div class="col-xs-6 col-sm-6">
            <div class="bgc-silver-dark use-middle" style="height:200px;">
            	<div class="bgc-steel pad-30 text-white middle-item">垂直居中 .use-middle</div>
        	</div>
        </div>
        <div class="col-xs-6 col-sm-6">
            <div class="bgc-silver-dark use-middle use-center" style="height:200px;">
            	<div class="bgc-steel pad-30 text-white middle-item">水平垂直居中 <br/>.use-middle .use-center</div>
        	</div>
        </div>
    </div>
</div>
```

## 改变大小写
通过这几个类 (`.use-lowercase`、`.use-uppercase`、`.use-capitalize`) 可以改变文本的大小写
```
<p>Jvase Demo -> <span class="use-lowercase">Jvase Demo</span> 全部小写 (use-lowercase)</p>
<p>Jvase Demo -> <span class="use-uppercase">Jvase Demo</span> 全部大写 (use-uppercase)</p>
<p>siKas demo -> <span class="use-capitalize">siKas demo</span> 每个单词开头大写 (use-capitalize)</p>
```

## 引用
在文档中引用其他来源的内容，将任何 HTML 元素包裹在 `<blockquote>` 中即可表现为引用样式.
```
<blockquote class="blockquote-right">
    <p>引用(blockquote) 标题</p>
    <footer>
        引用(blockquote) 内容 在你的文档中引用其他来源的内容<br/>
        内容在右边，添加类 `.blockquote-right`
    </footer>
</blockquote>
<hr>
<blockquote>
    <p>引用(blockquote) 标题</p>
    <footer>引用(blockquote) 内容 在你的文档中引用其他来源的内容</footer>
</blockquote>
```

## 无序列表
排列顺序无关紧要的一列元素
```
<ul>
    <li>排列顺序无关紧要的一列元素</li>
    <li>排列顺序无关紧要的一列元素</li>
    <li>排列顺序无关紧要的一列元素</li>
</ul>
```

## 有序列表
顺序至关重要的一组元素
```
<ol>
    <li>排列顺序无关紧要的一列元素</li>
    <li>排列顺序无关紧要的一列元素</li>
    <li>排列顺序无关紧要的一列元素</li>
</ol>
```

## 内联列表
通过添加类 `.list-inline`，将所有元素放置于同一行
```
<ul class="list-inline">
    <li>排列顺序无关紧要的一列元素</li>
    <li>排列顺序无关紧要的一列元素</li>
    <li>排列顺序无关紧要的一列元素</li>
</ul>
```

## 描述列表
带有描述的短语列表，添加 `.dl-horizontal` 后水平排列
```
<dl>
    <dt>compact</dt>
    <dd>不赞成使用。请使用样式取代它。规定列表呈现的效果比正常情况更小巧。</dd>
    <dt>type</dt>
    <dd>不赞成使用。请使用样式取代它。规定列表的项目符号的类型。</dd>
</dl>
<hr>
<dl class="dl-horizontal">
    <dt>compact</dt>
    <dd>不赞成使用。请使用样式取代它。规定列表呈现的效果比正常情况更小巧。</dd>
    <dt>type</dt>
    <dd>不赞成使用。请使用样式取代它。规定列表的项目符号的类型。</dd>
</dl>
```

## 用户输入
标签 `<kbd>` 表示用户输入
```
在链盘中输入 <kbd>ctrl+shift+i</kbd> 就可以设置一组快捷键
```

## Pre
标签 `<pre>` 用来表示计算机的源代码
```
<pre>console.log('pre')</pre>
```

## 透明度
通过添加类 `.opacity-*` 来实现，其中" * "的取值范围为0-10的整数，其中0表示完全透明；10表示完全不透明.
```
<div class="grid">
    <div class="row">
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-10">.opacity-10</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-9">.opacity-9</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-8">.opacity-8</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-7">.opacity-7</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-6">.opacity-6</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-5">.opacity-5</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-4">.opacity-4</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-3">.opacity-3</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-2">.opacity-2</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-1">.opacity-1</div>
        <div class="col-xs-4 col-sm-3 col-md-2 bgc-steel text-white pad-15 opacity-0">.opacity-0</div>
    </div>
</div>
```

## Padding &amp; Margin
通过添加类 `.pad-*` `.pad-left-*` `.pad-right-*` `.pad-top-*` `.pad-bottom-*` 来实现，margin的实现也与之相同.

默认情况下 * 号所对应的数字就是值的大小(px)，其取值范围为 0至60之间（含）的5的倍数（即0,5,10,15,20...60）.
```
<div class="bgc-gray-light mar-top-5 pad-left-20">.pad-left-20</div>
<div class="bgc-gray-light mar-top-5 pad-left-40">.pad-left-40</div>
<div class="bgc-gray-light mar-top-5 pad-left-60">.pad-left-60</div>
<hr>
<div class="bgc-gray-light mar-top-5 mar-left-20">.mar-left-20</div>
<div class="bgc-gray-light mar-top-5 mar-left-40">.mar-left-40</div>
<div class="bgc-gray-light mar-top-5 mar-left-60">.mar-left-60</div>
```

## 文字大小
添加类 `.font-*`来设置字体大小.

默认情况下 * 号所对应的值就是字体大小(px)，其取值范围为 12至60区间（含）的偶数
```
<div class="font-20">font-20 (=20px)</div>
<div class="font-40">font-40 (=40px)</div>
<div class="font-60">font-60 (=60px)</div>
```

## 其它

| 类标签                     | 说明                     |
| -----------------------   |:-------------------------:|
| `<hr>`                    | 分隔                      |
| `.covered`                | 铺满(position: absolute; top: 0; right: 0; left: 0; bottom: 0;)                      |
| `.mask`                   | 遮罩(继承 <code>.covered</code> 所有样式，同时新增: opacity: 0.3; z-index: 999; background-color: #000;)                      |
| `.pull-left`              | float: left               |
| `.pull-right`             | float: right              |
| `.use-hide`               | display: none             |
| `.use-block`              | display: block            |
| `.use-inline-block`       | display: inline-block     |
| `.use-inline`             | display: inline           |
| `.use-invisible`          | visibility:hidden         |
| `.use-clear`              | 清除浮动                   |
| `.use-nowrap`             | 不换行(white-space: nowrap)|
| `.use-circle`             | border-radius: 50%        |
| `.use-fullwidth`          | width:100%                |
| `.use-absolute`           | position: absolute        |
| `.use-relative`           | position: relative        |
| `.use-ellipsis`           | 文本超出显示省略号          |
