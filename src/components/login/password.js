import React from 'react';
import Nnavbar from "../navbar/navbar.js";
import Email from "../help/email.js";
import "./password.css"

const password = () => {

    return (
        <div>
            <Nnavbar/>
        <div className="o-pass-body-component">
            <div className="o-recover-pass">
                <h3>Recupera tu contraseña</h3>
                <p>Envia un mensaje a los desarrolladores para que puedan enviarte una nueva contraseña</p>
                <div className="o-email-box"><Email servicesId="service_c19cppl"  templateId="template_s1qqpua"  userId="user_mkYW0C88rMN6ewelPuFHl"  placeHold="Información extra"/></div>
            </div>
        </div>
        </div>
    )
}

export default password
