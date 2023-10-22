import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Amin Aeenmehr</span>
        <div className="social">
          <a href="#">
            <img src="./facebook.png" alt="facebookimg" />
          </a>
          <a href="#">
            {" "}
            <img src="./instagram.png" alt="instagramimg" />
          </a>
          <a href="#">
            {" "}
            <img src="./youtube.png" alt="youtubeimg" />
          </a>
          <a href="#">
            <img src="./dribbble.png" alt="dribbbleimg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
