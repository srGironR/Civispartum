import React from 'react';
import emailjs from 'emailjs-com';
import "./email.css";

function Email() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_3nzuy98', 'template_zvnyotj', e.target, 'user_mkYW0C88rMN6ewelPuFHl')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <div className = "o-email-container">
            <form className="contact-form" onSubmit={sendEmail}>

                <label className="o-title-email">Nombre</label>
                <input type="text" name="name" placeHolder="Escribe tu Nombre" className ="o-item-input"/>

                <label className="o-title-email">Email</label>
                <input type="email" name="email" placeHolder="Escribe tu Correo" className ="o-item-input"/>

                <label className="o-title-email">Mensaje</label>
                <textarea name="message" placeholder="Escribe tu pregunta" className ="o-item-input"/>

                <input type="submit" value="Enviar" className="o-input-email"/>
            </form>
        </div>
    )
}

export default Email
