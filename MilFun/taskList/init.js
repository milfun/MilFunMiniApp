/*
* @Author: MilFun
* @Date:   2019-11-22 09:46:15
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-22 15:37:59
*/

module.exports = (gulp, milfun) => {
	const { src, dest} = require('gulp');
	const rename = require('gulp-rename');
	const taskName = 'init';
	gulp.task(taskName, (done) => {
		// 创建一个新项目
		milfun.util.log('\n')
		milfun.util.log('Init', ' 初始化中。。。');
		milfun.util.log('Init', ' 开始拉取项目初始文件...');
	    
	    // 复制拉取 wxss文件
	    src('dist/**/*.wxss')
	    //.pipe(sass()) // Using gulp-sass
	    .pipe(rename((path) => path.extname = '.scss'))
	    .pipe(dest('doing/scss'))
	    milfun.util.log('Init', ' 拉取 Wxss 成功，请在 doing/scss 文件夹中进行修改！');

	    // 复制拉取 img 文件
	    src('dist/pages/image/**/*')
	    .pipe(dest('doing/image'))
	    milfun.util.log('Init', ' 拉取 Image 成功，请在 doing/image 文件夹中进行修改！');
	    milfun.util.log('Init', ' 初始化结束！');
	    milfun.util.log('\n')
	    done();
	});
}

