/*
* @Author: MilFun
* @Date:   2019-11-22 10:28:28
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-22 15:38:03
*/

module.exports = (gulp, milfun) => {
	const { task,src, dest,watch} = require('gulp');
	const gsass = require('gulp-sass');
	const rename = require('gulp-rename');
	// 需要遍历的文件
	const sourceArr = ['doing/scss/**/*.scss'];

	const taskName = 'sass';
	gulp.task(taskName, (done) => {
		milfun.util.log('\n')
		milfun.util.log('Sass', ' Scss To Wxss 进入自动转化...');
		src(sourceArr)
	    .pipe(gsass()) // Using gulp-sass
	    .pipe(rename((path) => path.extname = '.wxss'))
		.pipe(dest('dist/'))
		milfun.util.log('Sass', ' Scss To Wxss 转化完成！');
		milfun.util.log('\n')
		done();
	});
	
}