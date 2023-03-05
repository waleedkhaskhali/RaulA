import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link } from "react-router-dom";
import raulLogo from "../../assets/raullogo.png";
import "./Raul.css";

const Navbar = ({ scrollPosition }) => {
  const [userLoginBtn, setUserLoginBtn] = useState(false);
  const [userLogoutBtn, setUserLogoutBtn] = useState(false);

  const [registerClick, setRegisterClick] = useState(false);
  const [loginClick, setLoginClick] = useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
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
              className={user?.email ? "hides" : "link"}
              onMouseEnter={() => setUserLoginBtn(true)}
              onMouseLeave={() => setUserLoginBtn(false)}
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
              className={user?.email ? "link" : "hides"}
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
          <Link to="Decorative-accessories" className="btmlink">
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
      </nav>
      <div id="id01" className={registerClick ? "modal" : "hides"}>
        <form class="modal-content animate">
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
              <button
                value="Login"
                name="login"
                type="submit"
                onClick={register}
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
        <form class="modal-content animate">
          <div class="imgcontainer">
            <p> LOGIN</p>
            <span
              onClick={() => (loginClick(true) ? setLoginClick(false) : null)}
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
              <button value="Login" name="login" type="submit" onClick={login}>
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
