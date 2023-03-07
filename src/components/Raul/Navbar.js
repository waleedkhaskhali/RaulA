import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import raulLogo from "../../assets/raullogo.png";
import "./Raul.css";

const Navbar = ({ scrollPosition }) => {
  const [decorativeHover, setDecorativeHover] = useState(false);

  const [userLoginBtn, setUserLoginBtn] = useState(false);
  const [userLogoutBtn, setUserLogoutBtn] = useState(false);

  const [registerClick, setRegisterClick] = useState(false);
  const [loginClick, setLoginClick] = useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const {
    currentUser,
    login,
    register,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  } = useAuth();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerPassword !== confirmRegisterPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await register(registerEmail, registerPassword);
      history.push("/cart");
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  const handleLoginSubmit = async () => {
    try {
      setError("");
      setLoading(true);
      await login(loginEmail, loginPassword);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <nav
        className={scrollPosition < 50 ? "raulNav" : "navScroll"}
        style={{ zIndex: "1000" }}
      >
        <ul className="topNav">
          <div className="topDivs">
            <li className="link" id="phoneIcon">
              phone
            </li>
            <li className="link" id="locationIcon">
              location
            </li>
          </div>
          <div>
            <img className="link" id="logo" src={raulLogo} alt=""></img>
          </div>
          <div className="topDivs">
            <Link to="/Home" className="link" id="homeIcon">
              Home
            </Link>
            <div
              className={currentUser?.email ? "hides" : "link"}
              onClick={() => setUserLoginBtn(true)}
            >
              Login
              {userLoginBtn ? (
                <div>
                  <div
                    className={userLoginBtn ? "hoverDiv" : "hides"}
                    title="Login or Register"
                  >
                    <span>
                      <a onClick={() => setLoginClick(true)}>Login</a>
                    </span>
                    <br />
                    <span>
                      <a onClick={() => setRegisterClick(true)}>Register</a>
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <li
              className={currentUser?.email ? "link" : "hides"}
              id="registerIcon"
              onClick={() => setUserLogoutBtn(true)}
            >
              Logout
              <div
                className={userLogoutBtn ? "hoverDiv" : "hides"}
                title="Login or Register"
              >
                <span>
                  <a href="#">Profile</a>
                </span>
                <br />
                <span>
                  <a href="#" onClick={logout}>
                    Logout
                  </a>
                </span>
                <br />
                <span>
                  <Link to="/sellproducts">SellProducts</Link>
                </span>
              </div>
            </li>

            <Link to="/cart" className="link" id="cartIcon">
              Cart
            </Link>
          </div>
        </ul>
        <ul className={scrollPosition < 50 ? "hide" : "bottomNav"}>
          <Link
            to="/Decorative-accessories"
            className="btmlink"
            onMouseEnter={() => setDecorativeHover(true)}
          >
            decorative accessories
          </Link>

          <Link to="/Furniture" className="btmlink">
            furniture
          </Link>

          <Link to="/Floral" className="btmlink">
            floral
          </Link>

          <Link to="/Sale" className="btmlink">
            sale
          </Link>

          <Link to="/Venue" className="btmlink">
            venue bookings
          </Link>
        </ul>
        <ul className={decorativeHover ? "decorativeLinks" : "hides"}>
          <Link to="/candlelight" className="btmlink">
            candlelight
          </Link>
          <Link to="/decorative-objects" className="btmlink">
            decorative objects
          </Link>
          <Link to="/urns" className="btmlink">
            urns
          </Link>
          <Link to="/vases&cachepots" className="btmlink">
            vases and cachepots
          </Link>
          <Link to="/dinnerware" className="btmlink">
            dinnerware
          </Link>
        </ul>
      </nav>
      <div id="id01" className={registerClick ? "modal" : "hides"}>
        <form class="modal-content animate" onSubmit={handleRegisterSubmit}>
          <div class="imgcontainer">
            <p> REGISTER</p>
            <span
              onClick={() => setRegisterClick(false)}
              className="close"
              title="Close Register Pop-up"
            >
              ×
            </span>
          </div>
          <div>
            <div class="centerIt">
              <p>
                <label>email address:</label>{" "}
                <input
                  type="text"
                  name="username"
                  required=""
                  onChange={(e) => {
                    setRegisterEmail(e.target.value);
                  }}
                />
              </p>
              <p>
                <label>Password:</label>{" "}
                <input
                  type="password"
                  name="password"
                  required=""
                  onChange={(e) => {
                    setRegisterPassword(e.target.value);
                  }}
                />
              </p>
              <p>
                <label>Password:</label>{" "}
                <input
                  type="password"
                  name="password"
                  required=""
                  onChange={(e) => {
                    setConfirmRegisterPassword(e.target.value);
                  }}
                />
              </p>
              <button
                value="Login"
                name="login"
                type="submit"
                onClick={handleRegisterSubmit}
              >
                Register
              </button>
            </div>
          </div>

          <div class="centerIt" id="links">
            <span class="psw">
              <a href="/password-reset/">Forgot password?</a>
            </span>
            <span class="psw" id="accountCreate">
              <a href="/login/">Create an Account</a>
            </span>
          </div>
        </form>
      </div>
      <div id="id01" className={loginClick ? "modal" : "hides"}>
        <form class="modal-content animate" onSubmit={handleLoginSubmit}>
          <div class="imgcontainer">
            <p> LOGIN</p>
            <span
              onClick={() => setLoginClick(false)}
              className="close"
              title="Close Register Pop-up"
            >
              ×
            </span>
          </div>
          <div>
            <div class="centerIt">
              <p>
                <label>email address:</label>
                <input
                  type="text"
                  name="username"
                  required=""
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                />
              </p>
              <p>
                <label>password:</label>
                <input
                  type="password"
                  name="password"
                  required=""
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                />
              </p>
              <button
                value="Login"
                name="login"
                type="submit"
                onClick={handleLoginSubmit}
              >
                Login
              </button>
            </div>
          </div>

          <div class="centerIt" id="links">
            <span class="psw">
              <a href="/password-reset/">Forgot password?</a>
            </span>
            <span class="psw" id="accountCreate">
              <a href="/login/">Create an Account</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
