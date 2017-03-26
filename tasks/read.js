/**
 * Created by zhouyg on 2017/3/26.
 */
//url 这是一个要读取的url地址
//callback 回调函数
const request=require('request');
const iconv=require('iconv-lite');
const cheerio=require('cheerio');
const debug=require('debug');
let logger=debug('crawl:read');
module.exports=function (url,callback) {
    request({url,encoding:null},function (err,response,body) {
        //因为响应体
        body=iconv.decode(body,'gbk');
        let movies=[];
        //把响应体
        let $=cheerio.load(body);
        $('.keyword .list-title').each(function () {
            let $this=$(this);
            let movie={
                name:$this.text(),
                url:$this.attr('href')
            };
            logger(`读取到电影：${movie.name}`);
            movies.push(movie);
        });
        console.log(movies);
        callback(err,movies);
    })
};

