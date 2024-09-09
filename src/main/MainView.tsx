import './MainView.css';
import Introduce from "./aintro/Introduce";
import MapSection from "./aintro/MapSection";
import Fields from './bfields/Fields';
import Program from './cprogram/Program';
import Process from './dprocess/Process';
import Story from './fstory/Story';
import Footer from "./common/Footer";
import Navigation from "./common/Navigation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FixedRightNav from './right_nav/FixedRightNav';
import ShowPhotos from './counselPhoto/ShowPhotos';

const MainView: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
    return <div>
        <Navigation />
        <main className="main_css">
            <Introduce />
            <ShowPhotos />
            <Fields />
            <Program />
            <Process />
            <Story />
            <MapSection />
        </main>
        <Footer />
        <FixedRightNav />
    </div>
}

export default MainView;
