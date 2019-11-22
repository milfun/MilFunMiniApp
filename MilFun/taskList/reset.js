/*
* @Author: MilFun
* @Date:   2019-11-22 15:54:33
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-22 15:55:54
*/
module.exports = (gulp, milfun) => {
	const del = require('del');

	const taskName = 'reset';
	const delList = [
	    'doing/image/*',
	    'dist/*',
	    
	    // 我们不希望删掉这个文件，所以我们取反这个匹配模式
	    '!doing/scss/_var.scss',
	    // 这里我们使用一个通配模式来匹配 `scss` 文件夹中的所有东西
	    'doing/scss/**/*',
	  ]
	gulp.task(taskName, (done) => {
		milfun.util.log('\n')
		milfun.util.log('Del', ' 进入重置...');
		// force: true 即不允许 del 控制本目录以外的文件
		del(delList, {force: false});
		milfun.util.log('Del', ' 项目已重置，请重新拷贝项目到 dist 目录...！');
		milfun.util.log('\n')
		done();
	});
}