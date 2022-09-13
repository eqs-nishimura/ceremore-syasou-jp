const prefixURL = "https://grow-cloud.com/syaso/";
const downloadFolder = `/Users/takahashi/git/ceremore-syasou-jp/public/`;

(async ()=>{
  const fs = require("fs");
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

  const har = fs.readFileSync('/Users/takahashi/git/ceremore-syasou-jp/development/grow-cloud.com.har',
    { encoding: 'utf-8' })
  const harJson = JSON.parse(har);
  // const version = harJson.log.version;
  // const creator = harJson.log.creator;
  // const pages = harJson.log.pages;
  // const typeSet = new Set();
  const urls = {};
  const entries = harJson.log.entries;
  for(const entry of entries){
    // 'document','stylesheet','image','script','font','xhr','fetch','other'
    const resourceType = entry._resourceType;
    const url = entry.request.url;
    if(!url.startsWith(prefixURL))
      continue;
    const set = urls[resourceType] || (urls[resourceType]=new Set());
    set.add(url);
  }

  // console.log(urls.stylesheet)
  // console.log(urls.script)
  // console.log(urls.image)
  // console.log(urls.font)

  for(const url of urls.font){
    const res = await fetch(url, {
      "headers": {
        "accept": "*/*",
        "Authorization": "Basic c3lhc286dGVzdA==",
        "accept-language": "ja,en-US;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
      },
      "method": "GET",
    });
    const buffer = await res.buffer();

    const path = url.replace(prefixURL,'');
    console.log(path);
    let d = downloadFolder;
    for(const dir of path.split('/').slice(0,-1)){
      d += dir+'/';
      if(!fs.existsSync(d)){
        fs.mkdirSync(d);
      }
    }
    fs.writeFileSync(downloadFolder+path, buffer);
  }
})()
