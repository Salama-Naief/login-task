import VideoFeature from "../featurs/VideoFeature";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="h-auto text-right font-sans relative bg-[url('https://tknka.com/build/assets/auth-bg.22907c93.png')] bg-no-repeat bg-center">
      <Navbar />
      {children}
      <Footer />
      <VideoFeature />
    </div>
  );
}
