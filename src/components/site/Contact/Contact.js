import React, { useState, useEffect } from 'react'
import { Button, Input, Form } from 'antd';

import 'antd/dist/antd.css';
import TextArea from 'antd/lib/input/TextArea';
import ContactForm from './ContactForm';
import Contactdetail from './Contactdetail';


function Contact() {
    return (
        <>
            <section id="contact-us" className="contact-us section">
                <div className="container">
                    <div className="contact-head">
                        <div className="row">
                            
                            <ContactForm></ContactForm>
                            <Contactdetail></Contactdetail>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
