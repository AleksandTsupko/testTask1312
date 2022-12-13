import React from "react";
import '../../pages/main/Main.scss';

export default function Order() {


    return (
        <div className="order">
            <div className="order__header">
                <div className="header__item_color">
                    <span className="header__item-span_white">ОФОРМЛЕНИЕ </span>
                    <span className="header__item-span_blue">ЗАКАЗА</span>
                </div>
                <span className="header__item-span_grey">Перед заполнением формы ознакомьтесь с нашей схемой работы!</span>

            </div>
            <div className="order__circles">
                <div className="order__circles-item">
                    <div className="circles-item__circle">
                        <img src="1cir.png" alt="img"/>
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                    </div>
                </div>
                <div className="order__circles-item">
                    <div className="circles-item__circle">
                        <img src="2cir.png" alt="img"/>
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                    </div>
                </div>
                <div className="order__circles-item">
                    <div className="circles-item__circle">
                        <img src="3cir.png" alt="img"/>
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                    </div>
                </div>
                <div className="order__circles-item">
                    <div className="circles-item__circle">
                        <img src="4cir.png" alt="img"/>
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                        Lorem ipsum dolorsit ametLorem ipsum dolorsit amet
                    </div>
                </div>
                <div className="order__circles-item">
                    <div className="circles-item__circle">
                        <img src="5cir.png" alt="img"/>
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                    </div>
                </div>

            </div>
            <div className="order__form">
                <select className="form__item-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <input type="text" className="form__item-input" placeholder="Ваш e-mail"/>
                <input type="text" className="form__item-input" placeholder="Ваше имя"/>
                <div className="form__item-slider">4</div>
                <button className="form__item-buttonFile">ПРИКРЕПИТЬ ФАЙЛ</button>
                <button className="form__item-buttonSend">ОТПРАВИТЬ</button>
            </div>
        </div>
    )
}