import { Box, Divider, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import style from '../styles/home.module.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { WorkCard } from '../components/WorkCard';
import { Layout } from '../components/Layout';
import { PhotoSlider } from '../components/PhotoSlider';
import { Profile } from '../components/Profile';
import { FadeIn } from '../components/FadeIn';
import { WorkCardList } from '../components/WorkCardList';
import { SkillList } from '../components/SkillList.';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const fragment = router.asPath;
  useEffect(() => {
    if (fragment) {
      setIsOpen(false);
      setLoading(false);
    }
  }, []);

  setTimeout(() => {
    setIsOpen(false);
  }, 3000);
  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <>
      <Layout>
        {loading ? (
          <div
            style={{
              transition: '1s',
              opacity: isOpen ? 1 : 0,
              width: isOpen ? '60vw' : 0,
            }}
          >
            <Box zIndex="1000" left="50%" top="50%" position="fixed" display={{ base: 'none', sm: 'block' }} transform="translate(-50%, -50%)">
              <img src="/anime.svg" alt="" />
            </Box>

            <div className={style.loading}>
              <div className={style.spinner}></div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <Box w="90%" mx="auto" minHeight="80vh">
          <Box h="30px" position="fixed" zIndex="100" backdropFilter="blur(5px)" w="93%" ml="-3"></Box>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em" position="fixed" zIndex="10" w="90.1%" mt="30px">
              <Tab
                _selected={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid white',
                  textColor: 'black',
                }}
                _focus={{ _focus: 'none' }}
                fontWeight="bold"
                textColor="gray.500"
                backdropFilter="blur(5px)"
              >
                WORKS
              </Tab>
              <Tab
                _selected={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid white',
                  textColor: 'black',
                }}
                _focus={{ _focus: 'none' }}
                fontWeight="bold"
                textColor="gray.500"
                backdropFilter="blur(5px)"
              >
                ABOUT
              </Tab>
            </TabList>
            <TabPanels className={style.tabPanel}>
              <TabPanel>
                <Flex wrap="wrap" px={{ sm: 2, md: 4, lg: 4 }} justify="center" pt="20" maxWidth="1400px" mx="auto">
                  <WorkCardList />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex pt="28" justify="center" wrap="wrap">
                  <Box w={{ base: '380px', sm: '600px' }}>
                    <PhotoSlider />
                  </Box>
                  <Box w={{ base: '96%', sm: '600px' }}>
                    <Profile />
                  </Box>
                </Flex>
                <Box py="16">
                  <SkillList />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
