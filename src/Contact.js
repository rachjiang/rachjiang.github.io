import React from 'react';
import { ReactComponent as MailLogo } from './assets/mail.svg';
import { ReactComponent as LinkedInLogo } from './assets/linkedin.svg';
import { ReactComponent as GithubLogo } from './assets/github.svg';
import './App.css';

function Contact() {
    return(
        <section id="contact" className="footer">
            <div>
                <h2 className="text-4xl text-sapphire font-bold pb-10">Let's chat!</h2>
                    <a href="https://www.linkedin.com/in/rachel--jiang/"><LinkedInLogo /></a>
                    <a href="https://github.com/rachelj521"><GithubLogo /></a>
                    <a href="mailto:rjiang521@gmail.com"><MailLogo /></a>
                    <p className="pt-8">© 2022 Made by Rachel Jiang</p>
                </div>
        </section>
    )
}

export default Contact;
