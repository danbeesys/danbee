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
import BreakA from './breaks/BreakA';
import BreakB from './breaks/BreakB';
import BreakC from './breaks/BreakC';
import BreakD from './breaks/BreakD';

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
            <BreakA/>
            <ShowPhotos />
            <BreakB/>
            <Fields />
            <Program />
            <BreakC/>
            <Process />
            <BreakD/>
            <Story />
            <MapSection />
        </main>
        <Footer />
        <FixedRightNav />
    </div>
}

export default MainView;
