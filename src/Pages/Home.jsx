//Import Images
import Navbar from "../components/Navbar";
import DarkMode from "../components/DarkMode";
import Footer from "../components/Footer";
import DownloadApp from "../components/DownloadApp";
import Konten from "../components/Konten";
import Iframe from "../components/Iframe";

const Home = () => {
  return (
    <>
      <Navbar />
      <DownloadApp />
      <Konten />
      <Iframe />
      <Footer />
    </>
  );
};

export default Home;
