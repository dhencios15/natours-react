import React from 'react';
import tw from 'twin.macro';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import Layout from 'containers/Layout';
import Navbar from 'components/Navbar';

const queryCache = new QueryCache();

const AppWrapper = tw.div`min-h-screen m-4 bg-gray-800 rounded-lg overflow-hidden`;

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AppWrapper>
        <Navbar />
        <Layout />
        <ReactQueryDevtools initialIsOpen />
      </AppWrapper>
    </ReactQueryCacheProvider>
  );
}

export default App;
