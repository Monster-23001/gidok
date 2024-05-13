import logo from "../src/assets/NEW PICTURE FOR REACT/logo 1.png";

function filter() {
  return (
    <>
      <div className="cont-filter">
        <div className="filter-1">
          <img src={logo} alt="" />
          <div className="filter-11">
            Sri Lanka&apos;s first & largest platform design to create <br /> an
            online marketplace exclusively for Rent
          </div>
          <div className="filtericon">
            <i id="ic" className="fa-brands fa-instagram"></i>
            <i id="ic" className="fa-brands fa-x-twitter"></i>
            <i id="ic" className="fa-brands fa-youtube"></i>
            <i id="ic" className="fa-brands fa-youtube"></i>
            <i id="ic" className="fa-brands fa-facebook"></i>
            <i id="ic" className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div className="filter-2">
          <div className="filter2">Navigatio</div>
          <div className="filter22">
            <div>About Us</div>
            <div>Blog</div>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
          </div>
        </div>
        <div className="filter-2">
          <div className="filter2">Featured Location</div>
          <div className="filter22">
            <div>Kandy</div>
            <div>Anuradhapura</div>
            <div>Badulla</div>
            <div>COlombo</div>
            <div>Kaluthara</div>
          </div>
        </div>
        <div className="filter-2">
          <div className="filter2">Help</div>
          <div className="filter22">
            <div>FAQ</div>
            <div>Contact Us</div>
          </div>
        </div>

        <div className="subscribe">
          <div className="filter2">Subcribe to Our Newsletter</div>
          <div className="filter22">
            Stay updated with the lates listings and <br />
            rental tips
          </div>
          <div className="input">
            <label htmlFor="email"></label>
            <input id="email" type="email" placeholder="Email Address" />{" "}
          </div>
          <button className="sub">Subcribe</button>
        </div>
      </div>
    </>
  );
}

export default filter;
