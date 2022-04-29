
import "./contact.scss";



import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vm5f8qb",
        "template_4qli9oo",
        form.current,
        "zzGaGl6ZOZA8uZGhz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact1.png" alt="" />
      </div>
      <div className="right">
        <h1>Get in touch</h1>
        <form ref={form} onSubmit={sendEmail}>
          
          <input type="text" name="user_name" placeholder="Name"/>
          
          <input type="email" name="user_email" placeholder="Email"/>
          
          <textarea name="message" placeholder="Message"/>
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};


// export default function Contact() {
//   const [message, setMessage] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage(true);
//   };
//   return (
//     <div className="contact" id="contact">
//       <div className="left">
//         <img src="assets/contact1.png" alt="" />
//       </div>
//       <div className="right">
//         <h2>Contact.</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" />
//           <input type="text" placeholder="Email" />
//           <textarea placeholder="Message"></textarea>
//           <button type="submit">Send</button>
//           {message && <span>Thanks, I'll reply ASAP :)</span>}
//         </form>
//       </div>
//     </div>
//   );
// }
