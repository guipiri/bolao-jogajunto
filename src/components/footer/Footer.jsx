import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import tiktok from "../../assets/tiktok.svg";
import twitter from "../../assets/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="flex-center columnDirection">
        <div className="socialMedias">
          <a href="https://www.instagram.com/jogajuntobet">
            <img src={instagram} alt="instagram-logo" />
          </a>
          <a href="https://facebook.com/jogajuntobet">
            <img src={facebook} alt="facebook-logo" />
          </a>
          <a href="https://www.tiktok.com/@jogajunto_bet">
            <img src={tiktok} alt="tiktok-logo" />
          </a>
          <a href="https://twitter.com/JogaJuntoBet">
            <img src={twitter} alt="twitter-logo" />
          </a>
          <a href="https://t.me/jogajuntotelegram">
            <img src={telegram} alt="telegram-logo" />
          </a>
        </div>
        <div className="footerLogoButtons">
          <div className="footerButtons">
            <a>Central de Ajuda</a>
            <a>Termos de Uso</a>
            <a>Política de Privacidade</a>
            <a>Blog Joga Junto</a>
            <a>Aprende Junto</a>
          </div>
          <div className="flex-center footerLogo">
            <img className="logo" src={logo} />
            <span>© 2023 - JogaJunto</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
