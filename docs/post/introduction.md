# 介绍 (Introduction)
***

![Jvase](https://raw.githubusercontent.com/focci/asset/master/img/jvase/logo/logo-bgc.jpg)

***
当前版本：`v1.0.3`
***

当我们面对一个web项目时，往往会涉及到许多CSS文件，而书写CSS本来是一种简单、重复、无聊的工作，[Jvase](http://jvase.com) 就是为了解决这些问题、提交工作效率而生的。

Jvase遵循渐进式的设计原则，比如一个按钮，默认是没有圆角的，如果要实现圆角效果，只需要添加`.use-radius`类便可实现。

如果要实现其它效果呢? 同样添加相应的类即可！

```
<p>
    <button class="btn">Button</button>
    <code>.btn</code>
</p>
<p>
    <button class="btn use-radius">Button</button>
    <code>.btn .use-radius</code>
</p>
<p>
    <button class="btn use-radius use-info">Button</button>
    <code>.btn .use-radius .use-info</code>
</p>
<p>
    <button class="btn use-radius use-info use-invert">Button</button>
    <code>.btn .use-radius .use-info .use-invert</code>
</p>
```

# 修饰语法

Jvase中有大量的修饰语法，这些语法的规则都是统一的 `.use-*`，这些语法涉及到颜色、尺寸、形状等各方面。

```
不同颜色：
<hr>
<p>
    <button class="btn use-radius use-info use-invert"">Button</button>
    <code>.use-info</code>
</p>
<p>
    <button class="btn use-radius use-success use-invert"">Button</button>
    <code>.use-success</code>
</p>
<p>
    <button class="btn use-radius use-warn use-invert"">Button</button>
    <code>.use-warn</code>
</p>
<p>
    <button class="btn use-radius use-danger use-invert"">Button</button>
    <code>.use-danger</code>
</p>


<hr>
不同尺寸：
<hr>
<p>
    <button class="btn use-small">Button</button>
    <code>.use-small</code>
</p>
<p>
    <button class="btn">Button</button>
    <code>.btn</code>
</p>
<p>
    <button class="btn use-medium">Button</button>
    <code>.use-medium</code>
</p>
<p>
    <button class="btn use-large">Button</button>
    <code>.use-large</code>
</p>
```

## 浏览器兼容性
尽可能兼容所有现代浏览器，使其显示结果保持一致。

|IE     |Edge   |Chrome |Firfox |Safari |Opera  |
|-------|-------|-------|-------|-------|-------|
|9+     |12+    |13+    |16+    |8+     |29+    |


## Issue
你可以在Github [Issue](https://github.com/focci/jvase/issues) 上提交Bug或者讨论问题

## 捐赠
***
![Wechat](https://raw.githubusercontent.com/focci/asset/master/pay/wechat.jpg)
&nbsp;&nbsp;&nbsp;&nbsp;
![Alipay](https://raw.githubusercontent.com/focci/asset/master/pay/alipay.jpg)