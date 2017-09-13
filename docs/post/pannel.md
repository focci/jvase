# 面板 (Pannel)
用于弹出性对话框，也可用于对描述性内容进行展示
***

## 用法介绍
Pannel的创建是十分简单的，创建一个 `.pannel` 元素，然后再在里面依次添加 `.pannel-top-btn`、`.pannel-header`、`.pannel-body`、`.pannel-footer` 即可.

```
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel z-depth-3">
        <div class="pannel-top-btn">
            <a href="javascript:;" class="close"></a>
        </div>
        <h4 class="pannel-header">标题</h4>
        <div class="pannel-body">
            <p>Modal常用于弹出性对话框，也可用于对描述性内容进行展示</p>
        </div>
        <div class="pannel-footer use-right">
            <a href="javascript:;" class="btn">取消</a>
            <a href="javascript:;" class="btn use-info use-invert">知道了</a>
        </div>
    </div>
</div>
```

嵌入表格
```
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel z-depth-3">
        <div class="pannel-body">
            <table class="table use-divider mar-0">
			    <thead>
			        <tr>
			            <th>TABLE HEADER</th>
			            <th>TABLE HEADER</th>
			            <th>TABLE HEADER</th>
			            <th>TABLE HEADER</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td>Table Data</td>
			            <td>Table Data</td>
			            <td>Table Data</td>
			            <td>Table Data</td>
			        </tr>
			        <tr>
			            <td>Table Data</td>
			            <td>Table Data</td>
			            <td>Table Data</td>
			            <td>Table Data</td>
			        </tr>
			        <tr>
			            <td>Table Data</td>
			            <td>Table Data</td>
			            <td>Table Data</td>
			            <td>Table Data</td>
			        </tr>
			    </tbody>
			</table>
        </div>
    </div>
</div>
```

## 状态</h2>
添加类 `.pannel-state` 到 `.pannel-body` 上，然后在里面添加类名为 `.pannel-state-icons` 的 `<span>` 标签

```
<div class="tag mar-top-15 mar-bottom-15">成功</div>
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel z-depth-3">
        <div class="pannel-body pannel-state">
            <span class="pannel-state-icons text-success"><i class="fa fa-check-circle"></i></span>
            <h4>操作成功</h4>
            <p>操作成功提示框，图标添加 `.text-success`类即可.</p>
        </div>
        <div class="pannel-footer use-right">
            <a href="javascript:;" class="btn use-info use-invert">确定</a>
        </div>
    </div>
</div>

<div class="tag mar-top-15 mar-bottom-15">禁用</div>
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel z-depth-3">
        <div class="pannel-body pannel-state">
            <span class="pannel-state-icons text-danger"><i class="fa fa-minus-circle"></i></span>
            <h4>禁用</h4>
            <p>操作成功提示框，图标添加 `.text-danger`类即可.</p>
        </div>
        <div class="pannel-footer use-right">
            <a href="javascript:;" class="btn use-info use-invert">确定</a>
        </div>
    </div>
</div>

<div class="tag mar-top-15 mar-bottom-15">警告</div>
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel z-depth-3">
        <div class="pannel-body pannel-state">
            <span class="pannel-state-icons text-warn"><i class="fa fa-exclamation-circle"></i></span>
            <h4>警告</h4>
            <p>操作成功提示框，图标添加 `.text-warn`类即可.</p>
        </div>
        <div class="pannel-footer use-right">
            <a href="javascript:;" class="btn use-info use-invert">确定</a>
        </div>
    </div>
</div>

<div class="tag mar-top-15 mar-bottom-15">信息</div>
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel z-depth-3">
        <div class="pannel-body pannel-state">
            <span class="pannel-state-icons text-info"><i class="fa fa-question-circle"></i></span>
            <h4>信息</h4>
            <p>操作成功提示框，图标添加 `.text-info`类即可.</p>
        </div>
        <div class="pannel-footer use-right">
            <a href="javascript:;" class="btn use-info use-invert">确定</a>
        </div>
    </div>
</div>
```

## Divider
添加类 `.use-divider` 会在标题、内容、底部信息间加一条横线.</p>
```
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel use-divider z-depth-3">
        <div class="pannel-top-btn">
            <a href="javascript:;" class="close"></a>
        </div>
        <h4 class="pannel-header">标题</h4>
        <div class="pannel-body">
            <p>Modal常用于弹出性对话框，也可用于对描述性内容进行展示</p>
        </div>
        <div class="pannel-footer use-right">
            <a href="javascript:;" class="btn">取消</a>
            <a href="javascript:;" class="btn use-info use-invert">知道了</a>
        </div>
    </div>
</div>
```

## 其它应用</h2>
```
<div class="tag mar-top-15 mar-bottom-15">DIALOG</div>
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel z-depth-3">
        <div class="pannel-top-btn">
            <a href="javascript:;" class="close"></a>
        </div>
        <div class="pannel-body">
            <p class="pad-top-15">Modal常用于弹出性对话框，也可用于对描述性内容进行展示</p>
        </div>
    </div>
</div>

<div class="tag mar-top-15 mar-bottom-15">ALERT</div>
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel use-divider z-depth-3">
        <div class="pannel-body">
            <p>Modal常用于弹出性对话框，也可用于对描述性内容进行展示</p>
        </div>
        <div class="pannel-footer use-right">
            <a href="javascript:;" class="btn use-info use-invert">确定</a>
        </div>
    </div>
</div>

<div class="tag mar-top-15 mar-bottom-15">CONFIRM</div>
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel use-divider z-depth-3">
        <div class="pannel-body">
            <p>Modal常用于弹出性对话框，也可用于对描述性内容进行展示</p>
        </div>
        <div class="pannel-footer use-right">
            <a href="javascript:;" class="btn">取消</a>
            <a href="javascript:;" class="btn use-info use-invert">确定</a>
        </div>
    </div>
</div>

<div class="tag mar-top-15 mar-bottom-15">PROMPT</div>
<div class="use-center pad-40 bgc-steel-light">
    <div class="pannel use-divider z-depth-3">
        <div class="pannel-body">
            <input type="text" class="input" placeholder="请输入名称" style="width: 380px;">
        </div>
        <div class="pannel-footer use-right">
            <a href="javascript:;" class="btn">取消</a>
            <a href="javascript:;" class="btn use-info use-invert">确定</a>
        </div>
    </div>
</div>
```