// import Layout from '@/components/Layout';
// import '@/styles/globals.css'
// import { SessionProvider } from 'next-auth/react';
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <SessionProvider>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </SessionProvider>
//     </>
//   );
// }

import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
