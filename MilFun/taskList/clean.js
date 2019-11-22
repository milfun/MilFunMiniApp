/*
* @Author: MilFun
* @Date:   2019-11-22 14:56:59
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-22 15:56:44
*/
module.exports = (gulp, milfun) => {
	const del = require('del');

	const taskName = 'clean';
	const delList = [
	    'doing/image/*',
	    // 我们不希望删掉这个文件，所以我们取反这个匹配模式
	    '!doing/scss/_var.scss',
	    // 这里我们使用一个通配模式来匹配 `scss` 文件夹中的所有东西
	    'doing/scss/**/*',
	  ]
	gulp.task(taskName, (done) => {
		milfun.util.log('\n')
		milfun.util.log('Del', ' 进入清理，doing 目录重置...');
		// force: true 即不允许 del 控制本目录以外的文件
		del(delList, {force: false});
		milfun.util.log('Del', ' doing已重置， 清理完成...！');
		milfun.util.log('\n')
		done();
	});
}