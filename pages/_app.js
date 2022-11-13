import '../styles/globals.css';
import { useEffect, useState } from 'react';
import LeftSidebar from '../components/LeftSidebar';

const MyApp = ({ Component, pageProps }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1220) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    });
  }, []);

  return (
    <div className="flex">
      <LeftSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className={`${isSidebarOpen ? 'ml-[240px]' : 'ml-[80px]'} `} />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
