import logo from "../src/assets/NEW PICTURE FOR REACT/logo 1.png";

function Nav() {
  return (
    <>
      <div className="Nav-parent">
        <div className="nav-img">
          <img src={logo} alt="gidok" />
        </div>
        <div className="Nav-link">
          <a href="">Home</a>
          <a href="">Rentals</a>
          <a href="">Categories</a>
          <a href="">About us</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>
        <div className="Nav-3">
          <div className="Nav-sign">
            <i className="fa-regular fa-user" id="icon"></i> Sign in
          </div>
          <div>
            <button className="Post">+ Post Listing</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
