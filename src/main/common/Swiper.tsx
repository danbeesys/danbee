import opening1 from "../pic/opening1.PNG";
import opening2 from "../pic/opening2.PNG";
import opening3 from "../pic/opening3.PNG";

const image = [opening1, opening2, opening3]

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

const Swiper: React.FC = () => {
    return (
        <div className="swiper-body">
          <img src={image[getRandomInt(3)]}/>
        </div>
      );
    }

export default Swiper;