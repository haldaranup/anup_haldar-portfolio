import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";
import "./footer.scss";

export default function Footer() {
  return (
    <div id="footer">
      <div className="socials">
        <div>
          <div className="icons">
            <a href="https://github.com/haldaranup">
              <GitHub className="socialIcon" />
            </a>
            <a href="https://linkedin.com/haldar-anup">
              <LinkedIn className="socialIcon" />
            </a>
          </div>
          <div></div>
          
          <div className="contacts">
            <div>
              <Email className="socialIcon" />
             <span> haldaranup.github@gmail.com</span>
              </div>
              <div>
              <Phone className="socialIcon" />
              <span>+91 7351972087</span></div>

          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="copy">
        <p>
          Designed with <span>❤️</span> by Anup Haldar
        </p>
      </div>
    </div>
  );
}
