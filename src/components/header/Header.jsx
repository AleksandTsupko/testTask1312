import React from "react";
import '../../pages/main/Main.scss';

export default function Header() {

    return (
        <div className="header">
            <div className="header__title">
                <span className="header__title-span_white">LOREMIPSUM.</span>
                <span className="header__title-span_blue">NET</span>
            </div>
            <div className="header__nav">
                <div className="nav__item">Бизнес</div>
                <div className="nav__item">О нас</div>
                <div className="nav__item">Цены</div>
                <div className="nav__item">Оформить заказ</div>
            </div>
        </div>
    )
}