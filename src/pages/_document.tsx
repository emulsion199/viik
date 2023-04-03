import { AnimatePresence } from 'framer-motion';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html lang='en'>
         <Head />
         <link
            rel='stylesheet'
            as='style'
            href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css'
         />
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
