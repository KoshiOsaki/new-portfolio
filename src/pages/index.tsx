import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import style from '../styles/home.module.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { WorkCard } from '../components/WorkCard';
import { Layout } from '../components/Layout';
import { PhotoSlider } from '../components/PhotoSlider';
import { Profile } from '../components/Profile';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <>
      {loading ? (
        <>
          <div className={style.loading}>
            <div className={style.spinner}></div>
            <section className={style.typing}>
              <span className={style.typing_span}>Koshi&apos;s Portfolio</span>
            </section>
          </div>
        </>
      ) : (
        <>
          <Layout>
            <Box p="4">
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab _focus={{ _focus: 'none' }}>WORKS</Tab>
                  <Tab _focus={{ _focus: 'none' }}>ABOUT</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Flex wrap="wrap" p="10">
                      <WorkCard
                        title="株式会社FUTUREWOODS サービスページ"
                        img="/futuresearch.png"
                        link="https://www.future-search.jp/"
                        skill="Next.js, TypeScript, React, TailWindCSS"
                        role="フロント開発 (UIの実装)"
                      >
                        <Text>
                          インターン生3人での共同開発。初の業務だったためコミットコメントや命名法、コンポーネント粒度など先輩のコードを見て真似した。レスポンシブ対応を特に意識して制作した。
                        </Text>
                      </WorkCard>
                      <WorkCard
                        title="株式会社FUTUREWOODS 企業ページ"
                        img="/futurewoods.png"
                        link="https://www.futurewoods.co.jp/"
                        skill="Next.js, TypeScript, React, TailWindCSS"
                        role="フロント開発 (UIの実装)"
                      >
                        <Text>
                          インターン生3人での共同開発。Webデザイナーさんが用意した概形のデザインをうまくcssを用いてコード化した。動きがうるさすぎず、かつ飽きないといった程よいアニメーションとモダンなデザインが特徴。
                        </Text>
                      </WorkCard>
                      <WorkCard
                        title="カクテル検索くん"
                        img="/search.png"
                        link="https://marceaucocktail.vercel.app/cocktailread"
                        skill="Next.js, TypeScript, React, Firebase"
                        role="すべて"
                      >
                        <Text>
                          バイト先のバーのレシピが多すぎること、オリジナルカクテルをバイトメンバーで共有したいと思ったことをきっかけに個人的に制作。材料名で検索できるようにしたのが工夫した点。これから機能を追加していく予定。
                          <br />
                          リンク先は閲覧専用ページ。
                        </Text>
                      </WorkCard>
                      <WorkCard title="自動出校bot" img="/syukkou.png" link="" skill="Node.js, Puppeteer" role="すべて">
                        <Text>
                          研究室の出校フォーム入力が面倒なので制作。インターンでスクレイピングに使用していたPuppeteerを用いた。日付、時間を自動入力してくれる。
                        </Text>
                      </WorkCard>
                      <WorkCard
                        title="農Sightダッシュボード"
                        img="/nosight.png"
                        skill="Next.js, TypeScript, React, Firebase"
                        link="https://expo.agrijournal.jp/booth/Sight/912071466345744720715/"
                        role="フロント開発、ヒアリング"
                      >
                        <Text></Text>
                      </WorkCard>
                      <WorkCard
                        title="Reborn To 寺田蘭世"
                        img="/teradaranze.png"
                        link="https://reborn-to-teradaranze.vercel.app/"
                        skill="Next.js, TypeScript, Flask, OpenCV, Tensorflow"
                        role="全体の進捗管理、フロント開発、プレゼン"
                      >
                        <Text></Text>
                      </WorkCard>
                      <WorkCard
                        title="Cell Festival"
                        img="/cellfestival.png"
                        link=""
                        skill="Next.js, TypeScript, React, Firebase"
                        role="フロント開発、記事の校閲、追加機能の考案"
                      >
                        <Text></Text>
                      </WorkCard>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <HStack>
                      <Box w="40%">
                        <PhotoSlider />
                      </Box>

                      <Profile />
                    </HStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Layout>
        </>
      )}
    </>
  );
};

export default Home;
