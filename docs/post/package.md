# 打包 (Package)
***
Jvase 使用 Gulp 作为编译系统，并且对外提供了一些方便的方法用于编译整个框架。下面讲解的就是如何编译源码。

## Gulp
使用Gulp前，需要先安装 [node.js](https://nodejs.org) 与 [npm](https://www.npmjs.com/) , 不过现在node.js安装包里面都包含了npm，安装完成后，就可以通过Gulp来编译Jvase了。

* [下载Jvase](https://github.com//focci/jvase/archive/master.zip) 依赖文件至本地.
* 进入 `jvase-master` 目录 然后执行 `npm install` 命令。npm 将读取 `package.json` 文件并自动安装此文件中列出的所有被依赖的扩展包。

安装完成后，就可以使用Gulp进行打包了.
```
- gulp
```
如果要监听文件修改，使用以下命令即可。
```
- gulp watch
```