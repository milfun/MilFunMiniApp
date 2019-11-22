/*
* @Author: MilFun
* @Date:   2019-11-22 10:18:31
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-22 15:38:27
*/
// 文件监控

module.exports = (gulp, milfun) => {
	const taskName = 'watch';
	gulp.task(taskName, (done) => {

		milfun.util.log('Watch', 'MilFun 进入自动监听');

        // 需要监听的内容文件
		milfun.util.log('Watch', 'MilFun 进入自动监听');

		//  Scss转化为 Wxss
		const styleWatch = gulp.watch(['doing/scss/**/*'], gulp.series(['sass']));

		//  图片压缩
		
		//  Js压缩
		
		done();
        
	});
	// sass to wxss
};
