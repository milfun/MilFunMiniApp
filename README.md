# MilFunMiniApp
Gulp For  Wechat MiniApp Develop

MILFUN 最近公司在开发微信小程序项目，为了方便项目的开发，我先是参考`FakerPHP`，写出了自己的第一个PHP框架，目的是实现：开发接口模拟数据返回。不会笨拙，也不是所谓`mock`的硬编码，自觉成就感满满。然后为了实现前端UI的自由掌控，参考`QMUI`然后搭建了这个前端框架。初次尝试`GULP`，语法结构都并不是很明白，但是也是一点一点，接着这个框架写了出来。

>只为学习而用，不合并任何请求！

功能特性
======

通过内置`_Var.scss `能够进行项目基本样式的定义与修改
项目初始化，能够根据小程序目录，自动拉取生成scss；修改scss文件后自动写回wxss文件里
能够自动修改图片大小

为了方便使用，还用`python`写了快速命令，运行输入数字即可操作。

项目说明
======

项目目录为自己定义，自己使用的开发目录。使用微信`原生开发`。
'''
项目根目录
├─dist          // `小程序项目目录`

│  ├─pages           // 小程序页面

│     ├─index       // 小程序index页

│     ├─image       // 静态资源 img 文件

│     ├─img       // 自动修改完大小的目录

│     └─log    

│  └─app.json      

│  └─app.js        

├─doing          // `实际进行开发的目录`

│  ├─scss      // 项目相关 SASS ，由 gulp 生成

│  └─_var.scss   //  基本样式配置

│  └─_tool.scss     // scss一些工具

│  ├─image     // 图片拷贝目录

├─MilFun         // 核心代码目录，不用操作

└─node_modules  // node

└─gulpfile.js        

└─milfun.py     //  `快捷使用   `     

└─package.json
'''



谢谢您的观看，

