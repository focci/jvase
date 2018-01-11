# 安装 (Install)
***

## NPM
推荐使用NPM的安装方式，它能更好地配合 [Gulp](https://gulpjs.com/) 进行使用.
```
- npm install --save jvase
```

## CDN
可以通过 [https://unpkg.com/jvase/dist/](https://unpkg.com/jvase/dist/) 来浏览最新版本的资源文件，通过引入CSS文件来添加Jvase.
```
- 
<!-- 最新版本的 Jvase 核心 CSS 文件 -->
<link rel="stylesheet" href="https://unpkg.com/jvase/dist/jvase.min.css" />
```

## 下载
从 [Github](https://github.com//focci/jvase/archive/master.zip) 下载 Jvase

## Hello
用Jvase快速搭建一个简单的欢迎页面

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello</title>
    <link rel="stylesheet" href="./styles/jvase.min.css" />
</head>
<body>
    <div class="hero use-medium">
        <div class="hero-body use-center text-white">
            <h1 class="use-bold">Hello</h1>
            <p>Welcome to the Jvase CSS library</p>
        </div>
    </div>
</body>
</html>
```