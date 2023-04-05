import CommunityItem from '#components/organisms/Community/CommunityItem';
import ReviewItem, { ReviewItemProps } from '#components/organisms/Community/ReviewItem';
import DesktopFooter from '#components/organisms/Footer/Desktop';
import MobileFooter from '#components/organisms/Footer/Mobile';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import RootTemplate from '#components/Template/RootTemplate';
import { PATH } from '#constants/path';
import { useMobile } from '#hooks/useMobile';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import useBgStore from 'src/store/useTextColor';

const data: ReviewItemProps[] = [
   {
      id: 1,
      isBest: true,
      category: 'Forli',
      star: 5,
      name: '이름이름',
      text: `저희집에는 아기가 있고 고양이가 있어서 가장 눈여겨 봤던 것은 스크래치에 쉽게 망가지지 않는 점과 오염이 잘 되지 않는 것이었어요.
      고양이 키우시는 분들은 아실텐데 소파는 그냥 고양이 큰 스크래처일 뿐이라서 몇개 해먹었기 때문에 망설였었는데 진짜 바닥에서 위, i made it out the gutter.
      여젼히 더 올라가기 위해 매일 난 또 걸어. 뻔한 swaggin 가끔 철없게도 뵐지라도 어련일들 해낼일을 부정못할 어쩌구 저쩌구 도전 예예예예예예예예예예`,
   },
   {
      id: 2,
      isBest: true,
      category: 'Forli',
      star: 5,
      name: '이름이름',
      text: `저희집에는 아기가 있고 고양이가 있어서 가장 눈여겨 봤던 것은 스크래치에 쉽게 망가지지 않는 점과 오염이 잘 되지 않는 것이었어요.
      고양이 키우시는 분들은 아실텐데 소파는 그냥 고양이 큰 스크래처일 뿐이라서 몇개 해먹었기 때문에 망설였었는데 진짜 바닥에서 위, i made it out the gutter.
      여젼히 더 올라가기 위해 매일 난 또 걸어. 뻔한 swaggin 가끔 철없게도 뵐지라도 어련일들 해낼일을 부정못할 어쩌구 저쩌구 도전 예예예예예예예예예예`,
   },
   {
      id: 3,
      isBest: false,
      category: 'Forli',
      star: 4,
      name: '이름이름',
      text: `저희집에는 아기가 있고 고양이가 있어서 가장 눈여겨 봤던 것은 스크래치에 쉽게 망가지지 않는 점과 오염이 잘 되지 않는 것이었어요.
      고양이 키우시는 분들은 아실텐데 소파는 그냥 고양이 큰 스크래처일 뿐이라서 몇개 해먹었기 때문에 망설였었는데 진짜 바닥에서 위, i made it out the gutter.
      여젼히 더 올라가기 위해 매일 난 또 걸어. 뻔한 swaggin 가끔 철없게도 뵐지라도 어련일들 해낼일을 부정못할 어쩌구 저쩌구 도전 예예예예예예예예예예`,
   },
];

const Review = () => {
   const { setImageId } = useBgStore();
   React.useEffect(() => {
      setImageId(3);
   }, []);
   const mobile = useMobile();

   return (
      <RootTemplate>
         <div className='flex w-screen bg-bg-default pb-[100px] flex-col min-h-screen'>
            {mobile ? (
               <MobileNavbar />
            ) : (
               <motion.div className={'w-full sticky top-0 backdrop-blur-sm'} layoutId='navbar'>
                  <DesktopNavbar />
               </motion.div>
            )}
            <div className='center column w-screen'>
               <span className='text-h1 font-medium my-[60px]'>Community</span>
               <div className='row w-full justify-center space-x-40'>
                  <Tab.Group defaultIndex={2}>
                     <Tab.List className={'flex flex-col space-y-5 items-start w-16'}>
                        <Link href={PATH.promotion}>
                           <Tab className={'outline-none text-p3 text-gray-2 font-medium aria-selected:text-black'}>프로모션</Tab>
                        </Link>
                        <Link href={PATH.info}>
                           <Tab className={'outline-none text-p3 text-gray-2 font-medium aria-selected:text-black'}>공지</Tab>
                        </Link>
                        <Link href={PATH.review}>
                           <Tab className={'outline-none text-p3 text-gray-2 font-medium aria-selected:text-black'}>리뷰</Tab>
                        </Link>
                     </Tab.List>
                     <Tab.Panels className={'column w-[686px]'}>
                        <Tab.Panel className={'space-y-10'}></Tab.Panel>
                        <Tab.Panel className={'space-y-10'}></Tab.Panel>
                        <Tab.Panel className={'grid grid-cols-2 gap-y-10'}>
                           {data.map(a => (
                              <ReviewItem {...a} />
                           ))}
                        </Tab.Panel>
                     </Tab.Panels>
                  </Tab.Group>
               </div>
            </div>
         </div>
         {mobile ? <MobileFooter /> : <DesktopFooter />}
      </RootTemplate>
   );
};

export default Review;