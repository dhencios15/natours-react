import React, { lazy, Suspense } from 'react';
import tw from 'twin.macro';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import Navbar from 'components/Navbar';
import Spinner from 'components/Spinner';
const Layout = lazy(() => import('containers/Layout'));

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const AppWrapper = tw.div`min-h-screen m-4 bg-gray-800 rounded-lg overflow-hidden`;

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AppWrapper>
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Layout />
          <ReactQueryDevtools initialIsOpen />
        </Suspense>
      </AppWrapper>
    </ReactQueryCacheProvider>
  );
}

export default App;
