import React, { useState } from 'react';

export function SyasouMoreKokuchi(props: {type: "合同葬" | "お別れの会" | "社葬"}) {
  const { type } = props;
  return(
    <div className="content">
      <ul>
      <li>
        <p className="s1">1. 臨時役員会</p>
        <p className="s2">ご遺族の意向を考慮し、基本方針を決定します。</p>
      </li>
      <li>
        <p className="s1">2.  社内通達</p>
        <p className="s2">社外からの問い合わせに統一した回答ができるよう、情報を{type=="お別れの会" ? "社内で" : ""}共有しておきます。</p>
      </li>
      <li>
        <p className="s1">3.  社外通知</p>
        <p className="s2">{type=="お別れの会" ? "送付リストを作成し、" : ""}通知状（案内状）を発送します。</p>
      </li>
      </ul>
    </div>
  );
}

export function SyasouMoreJunbi(props: {type: "合同葬" | "お別れの会" | "社葬"}) {
  const { type } = props;
  return(
    <div className="content">
      <h4>{type}の具体的準備</h4>
      <ul>
        <li>1. {type=="社葬" ? "葬儀" : type}実行委員会の編成と役割分担</li>
        <li>2. 式次第・タイムスケジュール</li>
        <li>3. 席次・拝礼順の決定</li>
        <li>4. 弔辞者・指名献花者・来賓の決定</li>
        <li>5. 立礼者の決定</li>
        <li>6. 経歴書の作成</li>
        <li>7. 式場レイアウトと動線の決定</li>
        <li>8. 祭壇・遺影・メモリアルコーナーの準備</li>
      </ul>
    </div>
  );
}

export function SyasouMoreToujitsu(props: {type: "合同葬" | "お別れの会" | "社葬"}) {
  const { type } = props;
  return(
    <div className="content">
      <h4>開式2～3時間前</h4>
      <ul>
        <li>1. {type=="お別れの会" ? "会" : "式"}場集合</li>
        <li>2. 遺族のお出迎え</li>
        <li>3. 進行の確認（リハーサル）</li>
        <li>4. 供花・供物・弔電の確認</li>
      </ul>
      <h4>開式1時間前</h4>
      <ul>
        <li>1. 受付開始</li>
        <li>2. 案内・入場</li>
      </ul>
      <h4>開式～閉式</h4>
      {(type=="社葬" || type=="お別れの会") && <>
        <ul>
          <li>1. 開式の辞</li>
          <li>2. 黙祷</li>
          <li>3. 経歴紹介</li>
          <li>4. 弔辞</li>
          <li>5. 弔電奉読</li>
          <li>6. {type=="お別れの会" ? type : "葬儀"}委員長謝辞</li>
          <li>7. 喪主挨拶</li>
          <li>8. 委員長献花</li>
          <li>9. 喪主献花</li>
          <li>10. 遺族・親族献花</li>
          <li>11. 弔辞者・来賓・会葬者献花</li>
          <li>12. 閉式の辞</li>
        </ul>
      </>}
      {type=="合同葬" && <>
        <ul>
          <li>1. 開式の辞</li>
          <li>2. 読経</li>
          <li>3. 葬儀委員長焼香</li>
          <li>4. 喪主焼香</li>      
          <li>5. 遺族・親族焼香</li>
          <li>6. 来賓・会葬者焼香</li>
          <li>7. 閉式の辞</li>
          <li>8. 会食</li>
          <li>9. 弔辞者・来賓・会葬者焼香</li>
          <li>10. お別れ</li>
          <li>11. 出棺挨拶（遺族代表者）</li>
          <li>12. 閉式の辞</li>
          <li>13. 出棺</li>
        </ul>
      </>}
    </div>
  );
}

export function SyasouMoreShuryo(props: {type: "合同葬" | "お別れの会" | "社葬"}) {
  const { type } = props;
  return(
    <div className="content">
      <h4>《関係者への御礼》</h4>
      <ul>
        <li>・{type=="お別れの会" ? type : "葬儀"}委員長（社外の方に依頼したとき）</li>
        <li>・弔辞者（遠方でない限り、会社の代表者が直接訪問）</li>
        <li>・主要な来賓など</li>
        <li>・供花、供物、弔電をいただいた先（御礼状の発送）</li>
      </ul>
      <h4>《記録整理》</h4>
      <ul>
        <li>・弔辞・弔電の整理</li>
        {(type=="社葬" || type=="合同葬") && <>
        <li>・会葬者名簿の整理</li>
        <li>・香典・供花・供物の整理</li>
        <li>・会計報告書の作成</li>
        <li>・{type}報告書の作成など</li>
        </>}
        {(type=="お別れの会") && <>
        <li>・香典・供花・供物の整理</li>
        <li>・会葬者名簿の整理</li>
        <li>・{type}報告書の作成など</li>
        <li>・会計報告書の作成</li>
        </>}
      </ul>
    </div>
  );
}