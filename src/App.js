import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import tw from 'twin.macro';

import Navbar from 'components/Navbar';
import Spinner from 'components/Spinner';
import Footer from 'components/Footer';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import { AuthProvider } from 'context/authContext';
const Layout = lazy(() => import('containers/Layout'));

const AppWrapper = tw.div`min-h-screen md:m-1 bg-gray-800 md:rounded-lg overflow-hidden`;
const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const fetchDevTools = process.env.NODE_ENV === 'development' && (
  <ReactQueryDevtools initialIsOpen />
);

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AuthProvider>
        <AppWrapper>
          <Suspense fallback={<Spinner />}>
            <Router>
              <Navbar />
              <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/' component={Layout} />
              </Switch>
              <Footer />
            </Router>
            {fetchDevTools}
          </Suspense>
        </AppWrapper>
      </AuthProvider>
    </ReactQueryCacheProvider>
  );
}

export default App;
