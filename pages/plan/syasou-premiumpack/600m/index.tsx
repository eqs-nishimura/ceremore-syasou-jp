import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { Header } from "@components/header"
import { Footer } from "@components/footer"
import { SelectParameters } from '@aws-sdk/client-s3'
import { Breadcrumb } from "@components/breadcrumb"
import { SyasouManageFee } from '@components/commons'

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.feedInFixedFooter();
      window.pagetop();
      window.smoothscroll();
    }
  });

  return (
    <>
      <Head>
        <title>社葬プレミアムパック │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「社葬プレミアムパック」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <Header/>

      <div id="page-plan-syasou-premiumpack-600m" className='page-plan-syasou-premiumpack-course'>
        <main>
          <section className="s01">
            <div className="wrapper">
              <div className="breadcrum">
              {Breadcrumb({
                pagenames: ['セレモアの社葬トップ', '社葬プレミアムパック'],
                pageurls: ['/', '/plan/syasou-premiumpack'],
                targetpage: '600万円プラン',
              })}
              </div>
              <div className='content'>
                <div className='title'>
                  <img src="/images/spc0100.png" alt="社葬プレミアムパック" className="bg" />
                  <br></br>
                  <span className='price'>600</span><span>万円（660万円 税込）</span>
                </div>
                <div className='content-box'>
                  <div className='content-type'>
                    <div className='type-title'>2タイプより<br></br>お選びいただけます</div>
                    <div className='type-boxes'>
                      <div className='type-box'>
                        <div className='type-name'>&lt;Type A&gt;</div>
                        <div className='type-image'>
                        <img src="/images/spc_600_typea.jpg" alt="社葬プレミアムパック600万円typeA" className="op" />
                        <img src="/images/spc_600_typea_sp.jpg" alt="社葬プレミアムパック600万円typeA" className="os noscale" />
                        </div>
                        <div className='type-size'>（サイズ ： 幅 8.1×高さ 2.7×奥行 2.1m）</div>
                      </div>
                      <div className='type-box'>
                        <div className='type-name'>&lt;Type B&gt;</div>
                        <div className='type-image'>
                        <img src="/images/spc_600_typeb.jpg" alt="社葬プレミアムパック600万円typeB" className="op" />
                        <img src="/images/spc_600_typeb_sp.jpg" alt="社葬プレミアムパック600万円typeB" className="os noscale" />
                        </div>
                        <div className='type-size'>（サイズ ： 幅 8.1×高さ 2.7×奥行 2.1m）</div>
                      </div>
                    </div>
                  </div>
                  <div className='plan-content-1'>
                    <div className='plan-content-top'>
                      <img src="/images/spc0103.png" alt="パック料金に含まれるもの" />
                    </div>
                    <div className='plan-content-section'>
                      <div className='plan-item plan-big-item'>
                        <div className='plan-item-image'>
                          <img src="/images/spc_600_iei.png" alt="遺影" />
                        </div>
                        <div>
                          <div className='plan-item-title'>遺影</div>
                          <div className='plan-item-content'>カラー電照額A1サイズ
                          <br></br>自宅用四切額・手札額
                          <br></br>(白木・桜木・パールよりお選びいただけます)</div>
                        </div>
                      </div>
                      <div className='plan-small-items'>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_02_kaisoureijou.png" alt="会葬礼状" />
                          </div>
                          <div>
                            <div className='plan-item-title'>会葬礼状</div>
                            <div className='plan-item-content'>300枚</div>
                          </div>
                        </div>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_03_annaijou.png" alt="案内状" />
                          </div>
                          <div>
                            <div className='plan-item-title'>案内状</div>
                            <div className='plan-item-content'>400枚</div>
                          </div>
                        </div>
                        <br className='plan-item-3row'></br>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_04_annaijouhensinhagaki.png" alt="案内状返信はがき" />
                          </div>
                          <div>
                            <div className='plan-item-title'>案内状返信はがき</div>
                            <div className='plan-item-content'>400枚</div>
                          </div>
                        </div>
                        <br className='plan-item-2row'></br>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_05_kanban1.png" alt="看板" />
                            <img src="/images/spc_06_kanban2.png" alt="看板" />
                          </div>
                          <div>
                            <div className='plan-item-title'>看板</div>
                            <div className='plan-item-content'>縦型印刷看板(3.2m)
                            <br></br>または横型印刷大型看板(2m)</div>
                          </div>
                        </div>
                        <br className='plan-item-3row'></br>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_07_junrokanban.png" alt="順路看板" />
                          </div>
                          <div>
                            <div className='plan-item-title'>順路看板</div>
                            <div className='plan-item-content'>8枚</div>
                          </div>
                        </div>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_08_goannaitatefuda1.png?v=202207041910" alt="ご案内立札" />
                            <img src="/images/spc_09_goannaitatefuda2.png?v=202207041910" alt="ご案内立札" />
                          </div>
                          <div>
                            <div className='plan-item-title'>ご案内立札</div>
                            <div className='plan-item-content'>受付・記帳所・返礼品など18枚</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='plan-content-section2'>
                      <div className='plan-item plan-big-item'>
                        <div className='plan-item-image'>
                          <img src="/images/spc_600_memorial.png" alt="メモリアルコーナー" />
                        </div>
                        <div>
                          <div className='plan-item-title'>メモリアルコーナー</div>
                          <div className='plan-item-content'>メモリアルコーナー企画演出
                          <br></br>(A3写真パネル15枚・キャプション・経師パネル)
                          </div>
                        </div>
                      </div>
                      <div className='plan-small-items'>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_11_kiroku.png" alt="記録写真" />
                          </div>
                          <div>
                            <div className='plan-item-title'>記録写真<br></br>(アルバム含む)</div>
                            <div className='plan-item-content'>30カット(1日分)</div>
                          </div>
                        </div>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_12_uketuke.png" alt="受付用品" />
                          </div>
                          <div>
                            <div className='plan-item-title'>受付用品</div>
                            <div className='plan-item-content'>受付事務用品一式
                            <br></br>(筆記具・ 文具箱・ファイル・記帳カードなど)</div>
                          </div>
                        </div>
                        <br className='plan-item-3row'></br>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_13_kosaju.png" alt="フューネラルコサージュ" />
                          </div>
                          <div>
                            <div className='plan-item-title'>フューネラルコサージュ</div>
                            <div className='plan-item-content'>胸章20名分
                            <br></br>(バラホワイト・ピンクよりお選びいただけます)</div>
                          </div>
                        </div>
                        <br className='plan-item-2row'></br>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_14_konpanion.png" alt="セレモニーコンパニオン" />
                          </div>
                          <div>
                            <div className='plan-item-title'>セレモニーコンパニオン</div>
                            <div className='plan-item-content'>4名
                            <br></br>(通夜・告別式の合計人数)</div>
                          </div>
                        </div>
                        <br className='plan-item-3row'></br>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_15_sikai.png" alt="司会進行" />
                          </div>
                          <div>
                            <div className='plan-item-title'>司会進行</div>
                            <div className='plan-item-content'>1名</div>
                          </div>
                        </div>
                        <br className='plan-item-6row'></br>
                        <div className='plan-item'>
                          <div className='plan-item-image'>
                            <img src="/images/spc_16_hairei.png" alt="拝礼用具一式" />
                          </div>
                          <div>
                            <div className='plan-item-title'>拝礼用具一式</div>
                            <div className='plan-item-content'>300名分(宗教形態に応じて焼香・ 玉串・献花よりお選びいただけます)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SyasouManageFee />
                    <div className='plan-attention'>
                      <div>※パックにつき、ご使用されない項目の減額はありません。</div>
                      <div>※パックに対する当社個人会員制度・ご契約団体の割引は適用されません。</div>
                      <div>※パック料金  以外に付帯品、式場装飾費、式場内外設備費、式場使用料などが必要です。</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Page

declare global {
  interface Window{
    [key: string]: any,
  }
}
