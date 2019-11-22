/*
* @Author: MilFun
* @Date:   2019-11-22 14:04:48
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-22 15:37:54
*/
module.exports = (gulp, milfun) => {
	const { task,src, dest,watch} = require('gulp');
	const rename = require('gulp-rename');
	const tiny = require('gulp-tinypng-nokey');

	// 需要遍历的文件
	const sourceArr = ['doing/image/**/*.{png,jpg,jpeg,gif,ico}'];

	const taskName = 'image';
	gulp.task(taskName, (done) => {
		milfun.util.log('\n')
		milfun.util.log('Image', ' Image 进入自动化压缩...');
		src(sourceArr)
	    .pipe(tiny()) // Using gulp-sass
		.pipe(dest('dist/pages/img'))
		milfun.util.log('Image', ' Image 自动化压缩...进行中...！');
		milfun.util.log('\n')
		done();
	});
	
}