import '#styles/globals.scss';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <AnimatePresence mode='wait'>
         <motion.div
            key={router.route}
            initial='pageInitial'
            animate='pageAnimate'
            transition={{ duration: 0.4 }}
            variants={{
               pageInitial: {
                  opacity: 0,
               },
               pageAnimate: {
                  opacity: 1,
               },
            }}
         >
            <Component {...pageProps} />
         </motion.div>
      </AnimatePresence>
   );
}
