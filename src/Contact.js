import React from 'react';
import { ReactComponent as MailLogo } from './assets/mail.svg';
import { ReactComponent as LinkedInLogo } from './assets/linkedin.svg';
import { ReactComponent as GithubLogo } from './assets/github.svg';
import './styles.css';

function Contact() {
    return(
        <section id="contact" className="footer">
            <div>
                <h2 className="sm:text-2xl text-4xl text-sapphire font-bold pb-5">Let's chat!</h2>
                    <p className="pb-7 font-bold text-teal">rjiang521@gmail.com</p>
                    <a href="https://www.linkedin.com/in/rachel--jiang/"><LinkedInLogo /></a>
                    <a href="https://github.com/rachjiang"><GithubLogo /></a>
                    <a href="mailto:rjiang521@gmail.com"><MailLogo /></a>
                    <p className="pt-5">© 2022 Made by Rachel Jiang</p>
                </div>
        </section>
    )
}

export default Contact;
