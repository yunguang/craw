/**
 * Created by zhouyg on 2017/3/26.
 */
const async=require('async');
let read=require('./read');
let write=require('./write');
let logger=require('debug')('crawl:main');
let url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
logger('开始执行任务!');
async.waterfall([
    function (callback) {
        read(url,callback);
    },
    function (movies,callback) {
        write(movies,callback);
    }
],function () {
    logger('全部任务执行完毕');
});