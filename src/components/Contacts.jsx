import "./Contacts.css";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contacts = () => {
  const form = useRef();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setPopupVisible(true);
          // Reset form fields
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="contactsBgContainer">
      <div className="formContainer">
      <h2 className="formTitle">Contact Me</h2>
        <div className="formBgOuter"> 
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
          </form>

          {isPopupVisible && (
            <div className="popupOverlay">
              <div className="popup">
                <p>Message sent successfully!</p>
                <button onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
