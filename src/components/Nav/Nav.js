import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import Login from "../../components/Nav/Login";
import Signup from "../../components/Nav/Signup";
import "./Nav.scss";
class Nav extends Component {
  state = {
    isLogin: false,
    loginModalOpen: false,
    signupModalOpen: false
  };
  componentDidMount(){
    if(localStorage.getItem("token")){
      this.setState({isLogin:true})
    }
  }
  isLoginTrue = () => {
    this.setState({ isLogin: true });
  };
  loginOpen = () => {
    this.setState({ loginModalOpen: true });
  };
  loginClose = () => {
    this.setState({ loginModalOpen: false });
  };
  signupOpen = () => {
    this.setState({ signupModalOpen: true });
  };
  signupClose = () => {
    this.setState({ signupModalOpen: false });
  };
  render() {
    const { transparent } = this.props;
    const { loginModalOpen, signupModalOpen } = this.state;
    const {
      loginOpen,
      loginClose,
      signupOpen,
      signupClose,
      isLoginTrue
    } = this;
    return (
      <>
        <nav className={`Nav ${transparent ? "" : "Transpa"}`}>
          <div className="navbarBox">
            <div className="navbarLeft">
              <Link to="/">
                <img
                  className="navbarLogo"
                  src="/logo2.png"
                  alt="whatcha_log"
                />
              </Link>
              <Link to="/" className="navbarMovie">
                영화
              </Link>
            </div>
            <div className="navbarRight">
              <SearchOutlined className="searchIcon" alt="search_icon" />
              <input
                className="search"
                type="search"
                placeholder="작품 제목,배우,감독을 검색해보세요."
              />
              {this.state.isLogin ? (
                <>
                  <Link to="/rating" className="navbarRating">
                    평가하기
                  </Link>
                  <Link to="/profile">
                    <UserOutlined className="userProfile" alt="profile_icon" />
                  </Link>
                </>
              ) : (
                <>
                  <div className="loginFrame">
                    <button onClick={loginOpen}>로그인</button>
                  </div>
                  <div className="singUpFrame">
                    <button onClick={signupOpen}>회원가입</button>
                  </div>
                  <Login
                    isLogin={isLoginTrue}
                    open={loginModalOpen}
                    close={loginClose}
                  />
                  <Signup open={signupModalOpen} close={signupClose} />
                </>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default withRouter(Nav);