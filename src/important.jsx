import link1 from "../src/assets/NEW PICTURE FOR REACT/Link → i-parallax-12-1024x683.jpeg.png";
import link2 from "../src/assets/NEW PICTURE FOR REACT/Link → i-parallax-13-1024x683.jpeg.png";
import link3 from "../src/assets/NEW PICTURE FOR REACT/Link → i-parallax-14-1024x683.jpeg.png";
import link4 from "../src/assets/NEW PICTURE FOR REACT/Link → i-parallax-15-1024x683.jpeg.png";
import link5 from "../src/assets/NEW PICTURE FOR REACT/i-parallax-11-1024x683.jpeg.png";
function important() {
  return (
    <>
      <div className="featured-i">Important Articles</div>
      <div className="borders">
        <div className="border-1"></div>
        <div className="border-2"></div>
      </div>
      <div className="impt">
        <div className="impt-1">
          <img src={link5} alt="" id="imgsrc" />
          <div className="impt-11">Feburary 4, 2023</div>
          <div className="impt-111">
            Top Tips fir Finding the Perfect Rental
          </div>
          <div className="impt-1111">
            Discover expert advice on how to find the ideal rental property that
            meets your needs and budget.
          </div>
        </div>
        <div className="impt-2">
          <div className="imp-22">
            <img src={link4} alt="" id="imglink" />
            <div className="cont-img">
              <div className="imp-222">May 7, 2023</div>
              <div className="imp-2222">
                Car Rental Hacks for a Smooth Journey
              </div>
              <div className="imp-22222">
                Learn insider tips for getting the best deals and makng the most
                of your rental car experience
              </div>
            </div>
          </div>
          <div className="imp-3">
            <img src={link3} alt="" id="imglink" />
            <div className="cont-img">
              <div className="imp-222">April 25, 2023</div>
              <div className="imp-2222">
                Managing Your Rental Items: A Comprehensive Guide
              </div>
              <div className="imp-22222 ">
                Get valuable insights on how to effectively manage and maintain
                your rented items.
              </div>
            </div>
          </div>
          <div className="imp-4">
            <img src={link1} alt="" id="imglink" />
            <div className="cont-img">
              <div className="imp-222">January 2, 2023</div>
              <div className="imp-2222">
                Navigating the Rental Market: Insights for New Rentals
              </div>
              <div className="imp-22222">
                Explore key considerations and useful tips for individuals news
                to rental market.
              </div>
            </div>
          </div>
          <div className="imp-5">
            <img src={link2} alt="" id="imglink" />
            <div className="cont-img">
              <div className="imp-222">April 7, 2023</div>
              <div className="imp-2222">
                Maximizing Returns: Strategies for Rental Property Owners
              </div>
              <div className="imp-22222">
                Learn strategies to optimize the return on investment for your
                rental property.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default important;
