# 评论 (Comment)
评论由头像、评论元信息、评论内容组成。主要用于用户的留言或者反馈.
***

## 用法介绍
添加 `.comment` 到块元素 `<div>`，然后在块元素里面添加Comment项 `.comment-item`，Comment每一项里面包括：头像、头信息、标题、附属信息、内容.

```
<div class="comment">
    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">大山</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>

    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">哪些花儿</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>
</div>
```

## 嵌套
添加 `.comment` 到 `.comment-item`，即可实现嵌套，在 `.comment-item` 上面添加类 `.comment-primary` 可以为此评论项添加背景颜色。</p>
```
<div class="comment">
    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">大山</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>

        <div class="comment">
            <div class="comment-item comment-primary">
                <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
                <div class="comment-header">
                    <h4 class="comment-title">大山</h4>
                    <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
                </div>
                <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
            </div>

            <div class="comment-item">
                <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
                <div class="comment-header">
                    <h4 class="comment-title">哪些花儿</h4>
                    <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
                </div>
                <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
            </div>
        </div>
    </div>

    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">哪些花儿</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>
</div>
```

## Body Offset
添加 `.body-offset` 到最外层的 `.comment` 元素，即可实现 `.comment-body` 中的内容与 `comment-header` 中的内容对齐.</p>
```
<div class="comment body-offset">
    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">大山</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>

    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">哪些花儿</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>
</div>
```

## Header Inline
添加 `.header-inline` 到最外层的 `.comment` 元素，即可实现 `.comment-header` 中的 `comment-title` 与 `comment-meta` 的同一条直线上，在使用 `.header-inline` 时，建议与 `.body-offset` 一起使用
```
<div class="comment body-offset header-inline">
    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">大山</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>

    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">哪些花儿</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>
</div>
```

## 圆形头像
在 `.comment-avantar` 中的 `<img>` 添加类 `.use-circle` 即可.</p>
```
<div class="comment body-offset">
    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img class="use-circle" src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">大山</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>

    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img class="use-circle" src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">哪些花儿</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="javascript:;">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>
</div>
```

## 评论模块
以下是一个完整的评论应用模块，包括输入评论等.
```
<div class="pad-15 bgc-silver clear">
    <a href="#publishcomment" class="btn use-info use-invert use-pull-right">发表评论</a>
    <p class="mar-top-10 mar-bottom-0">共 <span class="text-danger">365</span> 条评论</p>
</div>
<div class="comment">
    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">大山</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="#publishcomment">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>

    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">哪些花儿</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="#publishcomment">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>

    <div class="comment-item">
        <a href="javascript:;" class="comment-avantar"><img src="https://raw.githubusercontent.com/focci/asset/master/img/demo.gif"></a>
        <div class="comment-header">
            <h4 class="comment-title">夕照晚霞</h4>
            <p class="comment-meta">评论于 2014-7-12 15:30 <a href="#publishcomment">回复</a></p>
        </div>
        <div class="comment-body">红海早过了。船在印度洋面上开驶着。但是太阳依然不饶人地迟落早起，侵占去大部分的夜。夜仿佛纸浸了油，变成半透明体；它给太阳拥抱住了，分不出身来，也许是给太阳陶醉了，所以夕照晚霞隐褪后的夜色也带着酡红。</div>
    </div>
</div>
<hr>

<div class="use-center">
    <a href="javascript:;" class="javascript:;">查看更多评论(362)</a>
</div>
<hr>

<div>
    <a name="publishcomment"></a>
    <textarea class="input" rows="6" placeholder="理性上网，文明评论！"></textarea>

    <div class="pad-top-10">
    	<a href="javascript:;" class="btn use-invert use-info">发表评论</a> <span class="text-gray">你还可以输入120个字符</span>
    </div>
</div>
```