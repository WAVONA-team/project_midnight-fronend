import { useStore } from '@/store';

import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from './ui/Loader/Loader';

const App: React.FC = React.memo(() => {
  const { isChecked, checkAuth } = useStore(({ isChecked, checkAuth }) => ({
    isChecked,
    checkAuth,
  }));

  useEffect(() => {
    checkAuth();
  }, []);

  if (!isChecked) {
    return <Loader size={{ height: 'h-8', width: 'w-8' }} />;
  }

  return (
    <>
      <header>Header</header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
});

export default App;
