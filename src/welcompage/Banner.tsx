import ImageSlider from "./ImageSlider";
import Navigation from "../main/common/Navigation";
import './Banner.css';
import Footer from "../main/common/Footer";

const Banner: React.FC = () => {
    return (
      <div>
        <div className="App-header">
          <Navigation />
          <div className='App-header-left'>
            <p>
              빠른상담문의<br/>
              031.714.1714<br/>
              010.3316.6371
            </p>
          </div>
          <ImageSlider />
        </div>
        <Footer />
      </div>
    );
  };
  
export default Banner;