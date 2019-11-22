/*
* @Author: MilFun
* @Date:   2019-11-21 16:41:01
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-22 15:05:50
*/

const gulp = require('gulp');

const fs = require('fs');

const corePath = 'MilFun';

// 载入所有基础任务
const taskPath = 'MilFun/taskList';
const MilFun = new (require('./MilFun/MilFun.js'))();


const taskPathFilter = (file) => file.match(/js$/); // 排除非 JS 文件，如 Vim 临时文件
fs.readdirSync(taskPath).filter(taskPathFilter).forEach((file) => {
    require('./' + taskPath  + '/' + file)(gulp, MilFun);
});

// 载入 watch 任务
require('./' + corePath + '/watch')(gulp, MilFun);


// 载入 start 和 initProject 任务
// ['hello','watch'].forEach((file) => {
//     require('./' + corePath + '/' + file)(gulp, MilFun);
// });
