import React from "react";
import '../../pages/main/Main.scss';

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer__copy">© 2018 «LoremIpsum.net» Все права защищены.</div>
            <div className="footer__pay">
                <div className="footer__pay-item">
                    <div className="pay-item__img-qw"></div>
                    <span className="pay-item__span">QIWI wallet</span>
                </div>
                <div className="footer__pay-item">
                    <div className="pay-item__img-ym"></div>
                    <span className="pay-item__span">Yandex money</span>
                </div>
                <div className="footer__pay-item">
                    <div className="pay-item__img-wm"></div>
                    <span className="pay-item__span">Web Money</span>
                </div>
            </div>
            <div className="footer__links">
                <div className="footer__links-item">
                    <div className="links-item__img-em"></div>
                    <span className="pay-item__span-email">info@ipsum228.com</span>
                </div>
                <div className="footer__links-item">
                    <div className="links-item__img-vk"></div>
                    <span className="pay-item__span-vk">Мы вконтакте</span>
                </div>
            </div>
        </div>
    )
}