# express脚手架

你用vue你就用vue-cli，项目的原型(包含webpack)

express的脚手架，express-generator

```bash
npm install -g express-generator@4
```

全局安装都会在cmd里面有命令的用

```bash
gulp              ->gulp
vue-cli           ->vue
express-generator ->express
```
用命令来创建express的项目，一键安装好这个项目的框架
```
express [文件夹路径]
```
定位到该文件夹目录
```
cd cms
```
安装以来
```
npm install
```
运行该项目
```
npm start
```

生成文件夹，我们一般就是写`routes`文件夹，在`routes`创建`account,js`，并且把`user.js`拷贝进来使用
```js
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountRouter = require('./routes/account');//添加这一句

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/account', accountRouter);//添加这一句
```

# 登录在线

前端发送用户名，和密码到express的路由（后端）去接受