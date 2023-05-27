import logoo from "./macaroons.jpeg";
import logos from "./jumper.png";
import pic from "./salty.png";
import lo from "./sing.png";
import img from "./swim.png";
import l from "./music.png";
import ima from "./yoga.png";
import image from "./gituar.png";
import pac from "./hands-cooking.jpg";

export default function Main() {
  return (
    <div className="main-pics">
      <img src={logoo} alt="" className="macaroon" />
      <img src={logos} alt="" className="jump" />
      <img src={pic} alt="" className="salt" />
      <img src={lo} alt="" className="sing" />
      <img src={img} alt="" className="swim" />
      <img src={l} alt="" className="music" />
      <img src={ima} alt="" className="yog" />
      <img src={image} alt="" className="gituar" />
      <img src={pac} alt="" className="cooking" />
    </div>
 
  );
}
