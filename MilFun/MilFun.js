/*
* @Author: MilFun
* @Date:   2019-11-22 10:52:07
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-22 15:59:29
*/

// 声明插件以及配置文件的依赖
const packageInfo = require('../package.json');
const util = new (require('./Util'))();

// 创建 common 对象
class MilFun {
    constructor() {
        this.packageInfo = packageInfo;
        this.util = util;
    }
}

module.exports = MilFun;
