import imgs from "../src/assets/NEW PICTURE FOR REACT/Rectangle 2187.png";
import imgsa from "../src/assets/NEW PICTURE FOR REACT/Rectangle 2188.png";
import imgsaa from "../src/assets/NEW PICTURE FOR REACT/Rectangle 2190.png";
import imgsaaa from "../src/assets/NEW PICTURE FOR REACT/Rectangle 2191.png";
import imgsaaaa from "../src/assets/NEW PICTURE FOR REACT/Rectangle 2192.png";
import imgsaaaaa from "../src/assets/NEW PICTURE FOR REACT/Rectangle 2193.png";
function location() {
  return (
    <>
      <div className="l-cont">
        <div className="featured">Featured Location</div>
        <div className="borders">
          <div className="border-1"></div>
          <div className="border-2"></div>
        </div>
        <div className="myimg">
          <div className="img-card">
            <img src={imgs} alt="" />
            <div className="card-text">Candy</div>
          </div>
          <div className="img-cards">
            <div className="cimg">
              <img src={imgsa} alt="" />
              <div className="card-texts">Anuradhapura</div>
              <img src={imgsaa} alt="" />
              <div className="card-textss">Badulla</div>
            </div>
            <span className="sp-img">
              <img src={imgsaaaaa} alt="" />
            <div className="card-textsss">Gampaha</div>

              <img src={imgsaaa} alt="" />
            <div className="card-textssss">Jaffna</div>
            </span>
          </div>
          <div className="img-card">
            <img src={imgsaaaa} alt="" />
            <div className="card-text">Colombo</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default location;
