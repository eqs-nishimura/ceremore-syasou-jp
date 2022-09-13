
const fs = require("fs");
const glob = require('glob');

const pagesFolder = __dirname.substring(0,__dirname.lastIndexOf('/'))+"/pages";
const host = "https://syasou.jp";

(async ()=>{

    var targets = [];

    glob(pagesFolder+'/**/*', (err, files) => {

        targets.push('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">');

        files.forEach(target => {
            if (target.match(/tsx/)) {
                let targetStr = target.split('/');
                    if(targetStr[targetStr.length-1].indexOf('_')==-1) {
                        // targets.push(target);
                        const status = fs.statSync(target);
                        var path = (JSON.stringify(target)).replace(pagesFolder, host).replaceAll('"','').replace('/index.tsx','').replace('.tsx','');
                        // console.log(path);
                        targets.push('<url><loc>'+path+'</loc><lastmod>'+JSON.stringify(status.mtime).replaceAll('"',"")+'</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>');
                    }
            }
        });
        targets.push('');

        // console.log(targets);
        str = targets.join('\n');
        console.log(str);
    });

})()

