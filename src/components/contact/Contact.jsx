
import "./contact.scss";
import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="heading">
      <h2>Get in touch</h2>
      </div>
      
      <div className="left">
        <img src="assets/contact1.png" alt="contact" />
      </div>

      <div className="right">
        <div className="email">
          {/* <h2>Contact</h2> */}
          <form action="">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" />

            <input type="submit" id="btn" onClick={handleSubmit} />
          </form>
        </div>

        <div className="social">
          {/* <h2>Socials</h2> */}
          <div className="socialIcon">
          
          <a href="#contact"> 
              <Phone className="icons"/>+91 7351972087
            </a>

            <a
              href="haldaranup.github@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <Email className="icons"/>haldaranup.github@gmail.com
            </a>
            <a
              href="https://github.com/haldaranup"
              rel="noreferrer"
              target="_blank"
            >
              <GitHub className="icons"/>github.com/haldaranup
            </a>
            

            <a
              href="https://linkedin.com/haldar-anup"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedIn className="icons"/>linkedin.com/haldar-anup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
