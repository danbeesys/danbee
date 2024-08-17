import Introduce from "./aintro/Introduce";
import MapSection from "./aintro/MapSection";
import Fields from './bfields/Fields';
import Program from './cprogram/Program';
import Process from './dprocess/Process';
import Story from './fstory/Story';
import Footer from "./common/Footer";
import Navigation from "./common/Navigation";
import SwipeableTextMobileStepper from "./common/SwipeableTextBobileStepper";

const MainView: React.FC = () => {
    return <div>
        <Navigation />
        <main>
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
