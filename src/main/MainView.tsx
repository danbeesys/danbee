import './MainView.css';
import Introduce from "./aintro/Introduce";
import MapSection from "./aintro/MapSection";
import Fields from './bfields/Fields';
import Program from './cprogram/Program';
import Process from './dprocess/Process';
import Story from './fstory/Story';
import Footer from "./common/Footer";
import Navigation from "./common/Navigation";
import SwipeableTextMobileStepper from "./common/SwipeableTextBobileStepper";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
            <SwipeableTextMobileStepper />
            <Fields />
            <Program />
            <Process />
            <Story />
            <MapSection />
        </main>
        <Footer />
    </div>
}

export default MainView;
