import { Box, Link, Text } from '@chakra-ui/react';
import { WorkCard } from './WorkCard';

export const WorkCardList = () => {
  return (
    <>
      <WorkCard
        id="nosight"
        title="農Sight"
        img="/nosight.png"
        skill="Next.js, TypeScript, Firebase"
        link="nosight"
        role="フロント開発"
        description="デモ動画"
      >
        <Text>
          学生スタートアップの株式会社DOKOSOREにて開発をお手伝い。
          受託開発している農業DXサービスの業務用ダッシュボードを制作。チャット機能やデータのグラフ化等を実装。ユーザーがどういった機能を求めているかを聞きながら現在も改良中。
          <br />
          <Link href="https://expo.agrijournal.jp/booth/Sight/912071466345744720715/" target="_blank" textColor="blue.600">
            詳細はコチラ
          </Link>
        </Text>
      </WorkCard>
      <WorkCard
        title="株式会社FUTUREWOODS サービスページ"
        img="/futuresearch.png"
        link="https://www.future-search.jp/"
        skill="Next.js, TypeScript, TailWindCSS"
        role="フロント開発 (UIの実装)"
        description=""
      >
        <Text>
          株式会社FUTUREWOODSの長期インターンにて、学生3人で共同開発したサービスLP。初の業務だったためGithubの使い方や命名法、コンポーネント粒度など先輩のコードを見て真似した。レスポンシブ対応に注意して制作した。
        </Text>
      </WorkCard>

      <WorkCard
        id="tukete"
        title="Tukete"
        img="/tukete.png"
        skill="Next.js, TypeScript, Kotlin, Python"
        link="tukete"
        role="フロント開発"
        description="WFデモ動画"
      >
        <Text>
          Sansan株式会社のインターンにて制作。ビジネスモデルの設計、ユーザーインタビューからプロトタイプの開発まで行った。UI/UXデザイン、Webフロントを担当した。
        </Text>
        <Link href="https://note.com/preview/n4efc6e342fe9?prev_access_key=eda5c5b9025665fdf67de640ab1d7a68" target="_blank" textColor="blue.600">
          詳細はコチラ
        </Link>
      </WorkCard>

      <WorkCard
        id="terada"
        title="Reborn to 寺田蘭世"
        img="/terada.png"
        link="https://reborn-to-teradaranze.vercel.app/"
        skill="Next.js, TypeScript, Flask, OpenCV, Tensorflow"
        role="全体の進捗管理、フロント開発、プレゼン"
        description="製作中です。。"
      >
        <Text>
          2Daysのハッカソンにてチーム4人で共同開発した、理想の芸能人と顔を比較してくれるサイト。顔を公正に評価することは難しいが、理想の顔との差なら分かるのではと思い制作。動きのあるUIと、初心者にも分かりやすいコード記法を意識した。
          <br />
          デザイン性の高さと短期間で画像認識に挑戦した点を評価され入賞(28チーム中)。
        </Text>
      </WorkCard>
      <WorkCard
        id="cocktail"
        title="カクテル検索くん"
        img="/search.png"
        link="https://marceaucocktail.vercel.app/cocktailread"
        skill="Next.js, TypeScript, React, Firebase"
        role="すべて"
        description="閲覧専用ページ"
      >
        <Text>
          業務用のカクテル検索ページ。バイト先のバーのレシピが多すぎること、オリジナルカクテルをバイトメンバーで共有したいと思ったことをきっかけに個人的に制作。材料名でも検索できるようにしたのが工夫した点。これから機能を追加していきたい。
        </Text>
      </WorkCard>
      <WorkCard title="自動出校bot" img="/syukkou.png" link="syukkou" skill="Node.js, Puppeteer" role="すべて" description="デモ動画">
        <Text>
          GoogleForm自動入力bot。研究室の出校フォーム入力が面倒なので制作した。インターンでスクレイピングに使用していたPuppeteerを用いており、日付・時間を自動入力してくれる。
        </Text>
      </WorkCard>
      {/* <WorkCard
        id="raksul"
        title="ラクスルクイズ404ページ"
        img="/tukete.png"
        skill="Next.js, TypeScript, Kotlin, Python"
        link="tukete"
        role="フロント開発"
        description="製作中です。。。"
      >
        <Text>Sansan株式会社のインターンにて制作。</Text>
      </WorkCard> */}
      {/* <WorkCard
        title="株式会社FUTUREWOODS 企業ページ"
        img="/futurewoods.png"
        link="https://www.futurewoods.co.jp/"
        skill="Next.js, TypeScript, TailWindCSS"
        role="フロント開発 (UIの実装)"
        description=""
      >
        <Text>
          株式会社FUTUREWOODSの長期インターンにて、学生3人で共同開発した企業HP。Webデザイナーさんが用意した概形のデザインをうまくcssを用いてコード化した。動きがうるさすぎず、かつ飽きないといった程よいアニメーションとモダンなデザインが特徴。
        </Text>
      </WorkCard> */}
      {/* <WorkCard
        title="株式会社FUTUREWOODS 業務用ダッシュボード"
        img="/fs-admin.png"
        link="fs-admin"
        skill="Nest.js, Next.js, MySQL"
        role="フロント開発、バックエンド開発(追加機能の実装、コードの整形)"
        description="デモ動画"
      >
        <Text>
          株式会社FUTUREWOODSの長期インターンにて、先輩から引き継ぎ、運用している業務用ダッシュボード。フロントをMUIを用いたデザインにリニューアルした後、バックエンドをexpressからNest.jsに移行・整形した。通知機能や新たなソート等の機能を適宜追加している。
        </Text>
      </WorkCard> */}
      {/* <WorkCard
        title="Cell Festival"
        img="/cellfestival.png"
        link="https://cell-festival.vercel.app/"
        skill="Next.js, TypeScript, React, Firebase"
        role="フロント開発、記事の校閲、追加機能の考案"
        description="制作中です。。"
      >
        <Text>
          生物系の学習プラットフォーム制作を目指す学生団体Cell
          Festivalのお手伝いにて、ホームページを制作。自分が生物専攻なのもあり、記事を実際に読んだり、追加機能を考えたりしながら開発している。記事の投稿、校閲をできる機能を作ったのが工夫した点。
        </Text>
      </WorkCard> */}
      {/* <WorkCard
        id="tapple"
        title="Tapple風チャットアプリ"
        img="/tapple.png"
        link="none"
        skill="Next.js, Nest.js, TypeScript, MySQL, Prisma"
        role="Webフロントエンド"
        description="非公開です。"
      >
        <Text>
          株式会社サイバーエージェントのインターンにて制作(約2週間、4人)。Webフロントを担当し、MUI, TailwindCSSを用いたUIや自動生成のOpenAPI,
          SWRを使用してのデータフェッチを実装。
        </Text>
      </WorkCard> */}
      {/* <WorkCard
        id="replace"
        title="Re:place"
        img="/replace.png"
        skill="Next.js, Rails, PostgreSQL, GCP, Firebase"
        link="replace"
        role="Webフロント開発(UI中心)"
        description="デモ動画(7/1リリース予定)"
      >
        <Text>
          学生ITスタートアップの株式会社DOKOSOREにて制作した、エンジニア向けのオンラインイベント開催プラットフォーム。主催者も参加者もワクワクできるような機能を多数搭載。本サービスの強みである「流れるようなUI/UX」の作製を主に担当した。
        </Text>
      </WorkCard> */}
    </>
  );
};
