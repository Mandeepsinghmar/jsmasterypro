import '../styles/globals.css';
import LeftSidebar from '../components/LeftSidebar';

const MyApp = ({ Component, pageProps }) => (
  <div className="flex">
    <LeftSidebar />
    <div className="ml-[80px] xl:ml-[240px] " />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
