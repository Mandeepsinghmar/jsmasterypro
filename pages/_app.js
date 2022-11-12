import '../styles/globals.css';
import LeftSidebar from '../components/LeftSidebar';

const MyApp = ({ Component, pageProps }) => (
  <div className="flex">
    <LeftSidebar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
