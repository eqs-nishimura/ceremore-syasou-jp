import type { NextPage } from 'next'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as fs from 'fs'
import * as path from 'path'

export const getStaticProps = async (ctx: { params: { id: string } }) => {

    const jsonPath = path.join(process.cwd(), 'src', 'data', 'games.json');
    const jsonText = fs.readFileSync(jsonPath, 'utf-8');
    const games = JSON.parse(jsonText);

    return {
      props: {
        games
      },
    };
  }

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      // const $ = window.jQuery;
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
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
