const fs = require("fs");
const pagesFolder = __dirname.substring(0,__dirname.lastIndexOf('/'))+"/pages"
const targets = [
  // {target:"/index.tsx"},
  // {target:"/seminar/index.tsx"},
  // {target:"/seminar/detail.tsx"},
  // {target:"/emergency.tsx"},
  // {target:"/beginner.tsx"},
  // {target:"/plan/syasou.tsx"},
  // {target:"/plan/owakarenokai.tsx"},
  // {target:"/plan/goudousou.tsx"},
  // {target:"/plan/syasou-premiumpack.tsx"},
  // {target:"/price.tsx"},
  // {target:"/case/index.tsx"},
  // {target:"/case/detail.tsx"},
  // {target:"/sougijou/index.tsx"},
  // {target:"/sougijou/detail.tsx"},
  // {target:"/contact/form/[step].tsx"},
  // {target:"/contact/online.tsx"},
  // {target:"/contact/syasou-desk.tsx"},
  // {target:"/company.tsx"},
  // {target:"/faq/index.tsx"},
  // {target:"/faq/category/index.tsx"},
  // {target:"/faq/category/detail.tsx"},
  // {target:"/covid19.tsx"},
]
targets.forEach(d => d.target = pagesFolder+d.target);

(async ()=>{
  for(const targetData of targets){
    const target = targetData.target;
    const output = targetData.output ?? target;

    const buffer = fs.readFileSync(target);
    let tsx = Buffer.from(Uint8Array.from(buffer)).toString();

    // ヘッダー
    // if(target!=pagesFolder+"/company/recruit.tsx"){
    //   tsx = tsx.replace(/<header [\s\S]+? _active"[\s\S]+? href="(.+?)\/index.html"[\s\S]+?<\/header>/,'<Header activeMenu="$1"/>');
    //   tsx = tsx.replace(/<Header activeMenu="[\./]+?"\/>/,'<Header activeMenu="home"/>');
    //   tsx = tsx.replace(/<Header activeMenu=".+\/([\w-]+)"\/>/,'<Header activeMenu="$1"/>');
    //   tsx = tsx.replace(/<header [\s\S]+?<\/header>/,'<Header/>');
    // }

    // フッター
    // tsx = tsx.replace(/<footer [\s\S]+?<\/footer>/,'<Footer/>');

    // 一般
    tsx = tsx.replaceAll(/<!--(.+)-->/g,'{/*$1*/}');
    tsx = tsx.replaceAll(/ class=/g,' className=');
    tsx = tsx.replaceAll(/<(br|input|img)(.*?)>/g,'<$1$2/>');
    // tsx = tsx.replaceAll(/ src="[^"]*?\/assets(\/(js|img)\/.+?)"/g,' src="$1"');
    tsx = tsx.replaceAll(/ (href|src)="\/syaso(\/.+?)"/g,' $1="$2"');
    tsx = tsx.replaceAll(/ href="([^"]+)\/(|#[^"]*)"/g,' href="$1$2"');
    tsx = tsx.replaceAll(/(<script(.*?)>(.*?)<\/script>)/g,'{/* $1 */}');
    // tsx = tsx.replaceAll(/ href="[.\/]+/g,' href="/');
    // tsx = tsx.replaceAll(' href="/index.html"',' href="/"');
    // tsx = tsx.replaceAll(/ href="(\/[^"]+)\/index.html"/g,' href="$1"');
    // tsx = tsx.replaceAll(/ href="(\/[^"]+).html"/g,' href="$1"');
    tsx = tsx.replaceAll(/<a([^>]*?)( href="\/.*?")([^>]*?)>([\s\S]*?)<\/a>/g,'<Link$2><a$1$3>$4</a></Link>');
    tsx = tsx.replaceAll(/ (cols|rows)="(\d+)"/g,' $1={$2}');

    // 24時間365日 深夜早朝いつでもご連絡ください
    // tsx = tsx.replaceAll(/<div className="(([^"]+) |)cmnBlks-1([^"]*)">[\s\S]+?<\/div>[\r\n\s]+<\/div>[\r\n\s]+<\/div>[\r\n\s]+<\/div>[\r\n\s]+<\/div>/g,'<CmnBlks1 className="$2$3"/>');

    // 個別対応
    // tsx = tsx.replaceAll(/ style="(\w+?):0;?"/g,' style={{$1:0}}');
    // tsx = tsx.replaceAll(/ allowfullscreen/g,' allowFullScreen');
    // tsx = tsx.replaceAll(/ frameborder/g,' frameBorder');
    // tsx = tsx.replaceAll(' href="/ceremore"',' href="/beginner/ceremore"');
    // tsx = tsx.replaceAll(/ href="(\/(kazokusou|ichinichisou|ippansou|kasou|saidan|ceremore-packsou)[^"]*)"/g,' href="/plan$1"');
    // tsx = tsx.replaceAll(/ href="(\/category\/id)"/g,' href="/funeral-knowledge$1"');
    // tsx = tsx.replaceAll(/ href="(\/(philosophy|service|event|recruit|business)[^"]*)"/g,' href="/company$1"');
    // tsx = tsx.replaceAll(/ href="(\/(family-life-club)[^"]*)"/g,' href="/club$1"');
    // tsx = tsx.replaceAll(/ href="(\/(form|quotation|online)[^"]*)"/g,' href="/contact$1"');
    // tsx = tsx.replaceAll(/ href="(\/(anchijou|search|detail)[^"]*)"/g,' href="/sougijou$1"');

    // TOP
    // if(target==pagesFolder+"/index.tsx" || target==pagesFolder+"/plan/ceremore-packsou.tsx"){
    //   tsx = tsx.replaceAll(/<a href="#">(<img src="[^"]+cmn_btn01.png" alt="埼玉県"\s*\/>)<\/a>/g,'<Link href="/sougijou/saitama"><a>$1</a></Link>');
    //   tsx = tsx.replaceAll(/<a href="#">(<img src="[^"]+cmn_btn02.png" alt="山梨県"\s*\/>)<\/a>/g,'<Link href="/sougijou/yamanashi"><a>$1</a></Link>');
    //   tsx = tsx.replaceAll(/<a href="#">(<img src="[^"]+cmn_btn03.png" alt="東京都"\s*\/>)<\/a>/g,'<Link href="/sougijou/tokyo"><a>$1</a></Link>');
    //   tsx = tsx.replaceAll(/<a href="#">(<img src="[^"]+cmn_btn04.png" alt="千葉県"\s*\/>)<\/a>/g,'<Link href="/sougijou/chiba"><a>$1</a></Link>');
    //   tsx = tsx.replaceAll(/<a href="#">(<img src="[^"]+cmn_btn05.png" alt="神奈川県"\s*\/>)<\/a>/g,'<Link href="/sougijou/kanagawa"><a>$1</a></Link>');
    // }

    // if(target==pagesFolder+"/beginner/ceremore.tsx"){
    //   tsx = tsx.replaceAll(' href="/"',' href="/beginner"');
    // }
    // if(target.startsWith(pagesFolder+"/plan/kazokusou/")){
    //   tsx = tsx.replaceAll(/ href="(\/(simple|omotenashi|ohana)[^"]*)"/g,' href="/plan/kazokusou$1" scroll={false}');
    // }
    // if(target.startsWith(pagesFolder+"/plan/ichinichisou/")){
    //   tsx = tsx.replaceAll(/ href="(\/(simple|omotenashi|ohana)[^"]*)"/g,' href="/plan/ichinichisou$1" scroll={false}');
    // }
    // if(target.startsWith(pagesFolder+"/plan/ippansou/")){
    //   tsx = tsx.replaceAll(/ href="(\/(simple|omotenashi|ohana)[^"]*)"/g,' href="/plan/ippansou$1" scroll={false}');
    // }
    // if(target.startsWith(pagesFolder+"/company/")){
    //   tsx = tsx.replaceAll(' href="/"',' href="/company"');
    // }
    // if(target==pagesFolder+"/company/event/index.tsx"){
    //   tsx = tsx.replaceAll(' href="/id"',' href="/company/event/id"');
    // }

    fs.writeFileSync(output, tsx);
  }
})()

