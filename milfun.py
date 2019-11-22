# -*- coding: utf-8 -*-
# @Author: MilFun
# @Date:   2019-11-22 11:25:52
# @Last Modified by:   Administrator
# @Last Modified time: 2019-11-22 15:58:59
import os

path = os.getcwd()

def cmd(cmd):
	res = os.system(cmd)
	print(res)
dic = {
	'1':'hello',
	'2':'init',
	'3':'watch',
	'4':'image',
	'5':'clean',
	'6':'reset'
}
print('  ************ MilFun Wechat Tool *************')
print('* 请输入命令:\t\t\t\t\t*')
print('* 1、SayHello Test\t- 体验一下\t\t*')
print('* 2、初始化项目 \t- 自动拉取代码\t\t*')
print('* 3、自动监听项目\t- 自动修改样式并刷新\t*')
print('* 4、图片压缩\t\t- 自动压缩图片大小\t*')
print('* 5、清理 Doing 目录\t- 自动清理doing目录\t*')
print('* 6、重置项目\t\t- 清理doing 和dist目录\t*')
print('* 0、退出\t\t\t\t\t*')
print('  **************** --- * * --- ****************')

while True:
	a = input()
	if a in dic.keys():
		cmd('gulp ' + dic[a])
	else:
		if a == '0':
			exit()
		else:
			print('* 请输入正确的命令！ *')
			continue;
