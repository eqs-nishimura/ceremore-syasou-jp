import React, { useState } from 'react';

export function SyasouDialogJizenjunbi(props: {type: "合同葬" | "お別れの会" | "社葬"}) {
  const { type } = props;
  return(
    <div className="syasouDialog jizenjunbi">
      {type=="社葬" && <>
      </>}
      {type=="社葬" && <>
      </>}
      {type=="社葬" && <>
      </>}
      <div className="syasouDialogWrapper">
        <div className="syasouDialogClose"></div>
        <div>[ {type}の事前準備 ]</div>
        <div className="step jouhou">
          <h5>1. 基本情報の作成</h5>
          <div className="content">
            <ul>
              <li>
                <span className="s1">{type}の対象となる方</span>
                <span className="s2">/</span>
                <span className="s3">氏名、役職、グループ関連会社、自宅住所、本籍地、ご家族、連絡先、家族構成、受賞歴、所属団体など</span>
              </li>
              <li>
                <span className="s1">入院・療養先</span>
                <span className="s2">/</span>
                <span className="s3">施設名、住所、病室、電話番号</span>
              </li>
              <li>
                <span className="s1">ご安置先の候補</span>
                <span className="s2">/</span>
                <span className="s3">施設名、住所、電話番号など</span>
              </li>
              <li>
                <span className="s1">宗教形式</span>
                <span className="s2">/</span>
                <span className="s3">宗旨、宗派など</span>
              </li>
              {type=="社葬" || type=="お別れの会" && <>
                <li>
                  <span className="s1">密葬の式場候補</span>
                  <span className="s2">/</span>
                  <span className="s3">式場名、住所、電話番号など</span>
                </li>
              </>}
            </ul>
          </div>
        </div>
        <div className="step">
          <h5>2. 社葬取扱規程の作成</h5>
          <div className="content">
            <div className="t01">「社葬取扱規程」とは、{type}の対象となる方や会社が負担する費用、葬儀委員長などの基本的な規程を役員会で取り決め、社内の共通認識としたものです。<br />セレモアでは、社葬取扱規程の作成のサポートをさせていただきます。</div>
            <img src="/images/jb001.jpg" alt="社葬取扱規程の作成" />
          </div>
        </div>
        <div className="step kihon">
          <h5>3. 基本方針の検討</h5>
          <div className="content">
            <div className="t01">社葬取扱規程に従い{type}実施の有無、規模、式場、宗教形式（仏教・神道・キリスト教・無宗教ほか）、概算予算など、予め検討しておくことによりスムーズに進められます。</div>
            <ul>
              <li>{type}実施の有無</li>
              {type=="社葬" || type=="合同葬" && <>
              <li>宗教形式</li>
              </>}
              <li>{type}規模</li>
              <li>式場の選定</li>
              <li>{type=="お別れの会" ? type : "葬儀"}委員長</li>
              <li>{type=="お別れの会" ? type : "葬儀"}実行委員長</li>
              <li>弔辞者</li>
              <li>喪主</li>
              <li>香典、供花等の取扱い</li>
              <li>概算予算</li>
              {type=="合同葬" && <>
              <li>葬儀費用の配分</li>
              </>}
            </ul>
          </div>
        </div>
        <div className="step">
          <h5>4. 社内緊急連絡網の作成</h5>
          <div className="content">
            <div className="t01">総務・人事・秘書のご担当者はご家族から受けたご逝去の知らせを、各部門の担当者へ速やかに緊急連絡できるよう準備しておきましょう。</div>
            <img src="/images/jb002.jpg" alt="社内緊急連絡網の作成" />
          </div>
        </div>
        <div className="step sougishasentei">
          <h5>5. 葬儀社の選定</h5>
          <div className="content">
            <div className="t01">確かな{type}を実施するためには、豊富な経験と実績に基づいた企画提案とすべてをサポートできる知識、技術、ノウハウを持った葬儀社を選定することが重要です。<br />セレモアでは、100名～4万人規模の社葬・お別れの会・合同葬・公葬の実績がございます。貴社の社会的存在を高める場である儀式を、スタッフ一同、誠心誠意サポートいたします。</div>
            <div className="box02">
              <h6>{type}を成功に導ける５つのポイント</h6>
              <ol>
                <li>迅速な機動力</li>
                <li>企画提案力</li>
                <li>執行技術力</li>
                <li>経済性</li>
                <li>サポート力</li>
                <li>徹底した機密管理</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SyasouDialogGoseikyo() {
  return(
    <div className="syasouDialog goseikyo">
      <div className="syasouDialogWrapper">
        <div className="syasouDialogClose"></div>
        <h4>[ ご逝去直後の対応 ]</h4>
        <div className="step goanchi">
          <h5>1. ご安置先について</h5>
          <div className="content">
            <div>
              <p>病院や施設などからご自宅へお帰りになれない場合には、ご安置施設の手配が必要です。</p>
              <div className="box02">
                <h6>ご安置施設選定のポイント</h6>
                <ol>
                  <li>ご安置後も故人との面会が可能かどうか</li>
                  <li>365日、24時間ご安置が可能かどうか</li>
                  <li>ご安置に際し、納棺が必要かどうか</li>
                </ol>
              </div>
            </div>
            <div>
              <img src="/images/gs001.jpg" alt="ご安置先について" />
              <p>セレモアでは首都圏エリアにご紹介できるご安置施設が多数ございます</p>
            </div>
          </div>
        </div>
        <div className="step">
          <h5>2. 枕花の手配</h5>
          <div className="content">
            <div className="t01">枕花とは、故人の枕元にお供えするお花です。ご逝去の知らせを受けた際には、会社としての哀悼の気持ちをご家族にいち早くお伝えするために、枕花をお届けいたしましょう。</div>
            <img src="/images/gs002.jpg" alt="枕花の手配" />
          </div>
        </div>
        <div className="step gokazoku">
          <h5>3. ご家族への対応</h5>
          <div className="content">
            <div className="t01">ご家族からご逝去の知らせを受け、まず会社として弔問に伺い、今後、どのような形式で葬儀を執り行うのか、ご家族の心情を踏まえ相談します。社葬（お別れの会・合同葬）の同意を得た後、準備を始めます。ご家族との連絡を密にして意思疎通を図ることが大切です。</div>
            <div className="box02">
              <h6>ご家族へ確認しておくこと</h6>
              <ol>
                <li>社葬の形態
                  <ul className="ul-disc">
                    <li>密葬を行い、後日の社葬(お別れの会) </li>
                    <li>ご遺族と会社との合同葬</li>
                  </ul>
                </li>
                <li>社葬執行の同意</li>
                <li>宗教形式</li>
                <li>宗教家の有無</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="step syanai">
          <h5>4. 社内での情報共有</h5>
          <div className="content">
            <div className="t01">ご逝去の知らせを受け、社内においては、事前に作成した社内緊急連絡網に基づき各部門の担当者へ連絡を入れます。社外に情報が広がることによって問い合わせが殺到することもありますので、この時点でどこまでの範囲の方に伝えるのか、社内で共有しておくとよいでしょう。</div>
            <div className="box02">
              <h6>社内で共有しておくこと</h6>
              <ol>
                <li>故人名</li>
                <li>退去日</li>
                <li>年齢</li>
                <li>知らせる範囲</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SyasouDialogMissou() {
  return(
    <div className="syasouDialog missou">
      <div className="syasouDialogWrapper">
        <div className="syasouDialogClose"></div>        
        <h4>[ 密葬について ]</h4>
        <div className="step kaishanokakawarikata">
          <h5>1. 密葬における会社の関わり方</h5>
          <div className="content">
            <div>
              <div className="t01 full">密葬は、ご遺族が中心の葬儀となるため、会社の関わり方をご遺族に確認しておくことが大切です。密葬を滞りなく執り行えるようにご遺族にお手伝いを申し出ることによってさりげない気配りや会社関係の対応など、ご遺族にとって大変心強いものになります。。</div>
              <div className="box02">
                <h6>密葬における会社の関わり方</h6>
                <ol>
                  <li>ご逝去を伝える範囲</li>
                  <li>密葬にご会葬いただく範囲</li>
                  <li>香典・供花・供物の取り扱い</li>
                  <li>対応する部署</li>
                </ol>
              </div>
            </div>
            <img src="/images/ms001.jpg" alt="密葬における会社の関わり方" />
          </div>
        </div>
        <div className="step missounoshikijou">
          <h5>2. 密葬の式場の選び方</h5>
          <div className="content">
            <div>
              <div className="t01 full">密葬の式場を選ぶ際には、まずご遺族の希望をうかがい会社関係の会葬人数などもふまえて検討します。</div>
              <div className="box02">
                <h6>密葬の式場の選び方</h6>
                <ol>
                  <li>ご遺族の希望に沿った式場か</li>
                  <li>式場の規模は適切か</li>
                  <li>アクセスのしやすさ</li>
                  <li>式場での仮眠が可能か</li>
                  <li>設備は整っているか</li>
                </ol>
              </div>
            </div>
            <div>
            <img className="full" src="/images/ms002.png" alt="密葬の式場の選び方" />
              <div className="box03">セレモアではサービスエリア内に1,000ヵ所以上のご紹介式場がございます。</div>
            </div>
          </div>
        </div>
        <div className="step">
          <h5>3. 密葬当日</h5>
          <div className="content">
            <div className="t01">密葬当日は、ご遺族が故人としっかりとお別れができるよう、ご遺族の気持ちに寄り添い、会社側として最大限のサポートと配慮が必要です。</div>
            <img src="/images/ms003.jpg" alt="密葬当日" />
          </div>
        </div>
      </div>
    </div>
  );
}