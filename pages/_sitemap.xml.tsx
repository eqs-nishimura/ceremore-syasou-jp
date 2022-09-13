import type { NextPage } from 'next'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as fs from 'fs'
import * as path from 'path'

const pagesFolder = __dirname.substring(0,__dirname.lastIndexOf('/'))+"/pages";
const host = "https://syasou.jp";
const targets: any[] = [
  {target:"/index.tsx"},
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

export const getStaticProps = async () => {

    var html = [];

    for(const targetData of targets){
        const target = (pagesFolder + targetData.target).replace('.next/server/','');

        console.log(target);

        if (target.match(/tsx/)) {
            let targetStr = target.split('/');
                if(targetStr[targetStr.length-1].indexOf('_')==-1) {
                    // targets.push(target);
                    const status = fs.statSync(target);
                    var path = JSON.stringify(status.mtime).replace(pagesFolder, host);
                    console.log(path);
                    // html.push('<url><loc>'+path+'</loc><lastmod>'+JSON.stringify(status.mtime).replaceAll('"',"")+'</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>');
                }
        }
    }
    html.push('');
    // console.log(html);
    // str = targets.join('\n');
    // console.log(str);
  return {
    props: {

    },
  };
    
}

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
        
    }
  });

  return (
    <>
      
    </>
  )
}

export default Page

declare global {
  interface Window{
    [key: string]: any,
  }
}
