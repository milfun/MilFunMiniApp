/*
* @Author: MilFun
* @Date:   2019-11-22 10:18:31
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-22 15:59:41
*/
const beeper = require('beeper');
const colors = require('ansi-colors');
const fancyLog = require('fancy-log');
const argv = require('yargs').argv;
const supportsColor = require('color-support');

/**
 * 创建工具类，放置工具方法。
 */
class Util {
    constructor() {
        this.beep = beeper;
        this.colors = colors;
    }


    addColor(str, type) {
        if (supportsColor() && (typeof argv.color === 'undefined' || argv.color)) {
            if (type === 'warn') {
                return this.colors.yellow(str);
            } else if (type === 'error') {
                return this.colors.red(str);
            } else if (type === 'info') {
                return this.colors.gray(str);
            } else if (type === 'log') {
                return this.colors.green(str);
            }

            return this.colors.green(str);
        }
        return str;
    }

    log(tag, content) {
        if (arguments.length > 1) {
            fancyLog(this.addColor(`MILFUN ${tag}: `, 'log') + content);
        } else {
            fancyLog(arguments[0]);
        }
    }

    warn(tag, content) {
        if (arguments.length > 1) {
            fancyLog(this.addColor(`MILFUN ${tag}: `, 'warn') + content);
        } else {
            fancyLog(arguments[0]);
        }
    }

    error(tag, content) {
        if (arguments.length > 1) {
            fancyLog(this.addColor(`MILFUN ${tag}: `, 'error') + content);
        } else {
            fancyLog(arguments[0]);
        }
    }
}

module.exports = Util;
