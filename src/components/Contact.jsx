import { ArrowUpRight, CodeXml, Link, Mail, MessageCircle, Phone } from 'lucide-react';
import '../App.css';

const contactMethods = [
    {
        name: 'Email',
        value: 'sarobidy10rakotoarison@gmail.com',
        href: 'mailto:sarobidy10rakotoarison@gmail.com',
        Icon: Mail,
    },
    {
        name: 'Téléphone',
        value: '+261 32 511 82',
        href: 'tel:+2613251182',
        Icon: Phone,
    },
    {
        name: 'WhatsApp',
        value: '+261 32 347 15',
        href: 'https://wa.me/2613234715',
        Icon: MessageCircle,
        external: true,
    },
    {
        name: 'LinkedIn',
        value: 'linkedin.com/in/sarobidy10rakotoarison',
        href: 'https://www.linkedin.com/in/sarobidy10rakotoarison',
        Icon: Link,
        external: true,
    },
    {
        name: 'GitHub',
        value: 'github.com/sarobidy10rakotoarison',
        href: 'https://github.com/sarobidy10rakotoarison',
        Icon: CodeXml,
        external: true,
    },
];

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-header">
                <div className="contact-title">
                    <span className="contact-heading-icon" aria-hidden="true"><Mail /></span>
                    <h2>Me contacter</h2>
                </div>
                <span>05 moyens de contact</span>
            </div>

            <div className="contact-methods">
                {contactMethods.map(({ name, value, href, Icon, external }) => (
                    <a
                        key={name}
                        className="contact-method"
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer' : undefined}
                    >
                        <span className="contact-method-icon" aria-hidden="true"><Icon /></span>
                        <span className="contact-method-content">
                            <span className="contact-method-name">{name}</span>
                            <span className="contact-method-value">{value}</span>
                        </span>
                        <ArrowUpRight className="contact-method-arrow" aria-hidden="true" />
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contact;