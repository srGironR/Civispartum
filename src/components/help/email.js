import React from 'react';
import emailjs from 'emailjs-com';
import "./email.css";
import {useState} from 'react';
import Alert from 'react-bootstrap/Alert';

function Email() {

    const [showMess, setShowMess] = useState(false);

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
            <form className="contact-form" onSubmit={sendEmail} >

                <label className="o-title-email">Nombre</label>
                <input type="text" name="name" placeHolder="Escribe tu Nombre" className ="o-item-input"/>

                <label className="o-title-email">Email</label>
                <input type="email" name="email" placeHolder="Escribe tu Correo" className ="o-item-input"/>

                <label className="o-title-email">Mensaje</label>
                <textarea name="message" placeholder="Escribe tu pregunta" className ="o-item-input"/>

                <input type="submit" value="Enviar" className="o-input-email" onClick={() =>setShowMess(true)}/>
            </form>

            <div className="o-alert-container">
                <Alert variant="success" show={showMess} onClose={() =>setShowMess(false)} dismissible>
                    Mensaje enviado, pronto nos estaremos comunicando contigo
                </Alert>
            </div>
            
        </div>
       
    )
}

export default Email
