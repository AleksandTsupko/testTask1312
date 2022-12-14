import React, { useState } from "react";
import '../../pages/main/Main.scss';

export default function Order() {
    const [isOpen, setIsOpen] = useState(false)
    const [buttonTxt, setButtonTxt] = useState("Выберите тип системы")
    const [rangeValue, setRangeValue] = useState(50)

    const selectHandler = (e) => {
        setButtonTxt(e.target.innerText)
    }

    const rangeHandler = (e) => {
        setRangeValue(e.target.value)
    }

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
                        <img src="1cir.png" alt="img" />
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                    </div>
                </div>
                <div className="order__circles-item">
                    <div className="circles-item__circle">
                        <img src="2cir.png" alt="img" />
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                    </div>
                </div>
                <div className="order__circles-item">
                    <div className="circles-item__circle">
                        <img src="3cir.png" alt="img" />
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                    </div>
                </div>
                <div className="order__circles-item">
                    <div className="circles-item__circle">
                        <img src="4cir.png" alt="img" />
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                        Lorem ipsum dolorsit ametLorem ipsum dolorsit amet
                    </div>
                </div>
                <div className="order__circles-item">
                    <div className="circles-item__circle">
                        <img src="5cir.png" alt="img" />
                    </div>
                    <div className="circles-item__signature">
                        Lorem ipsum dolorsit amet
                    </div>
                </div>

            </div>
            <div className="order__form">
                <div className={isOpen ? "form__item-wrapper_open" : "form__item-wrapper_closed"}>
                    {/* <select className="item-wrapper__select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select> */}
                    <button className="item-wrapper__button-select" onClick={() => setIsOpen(!isOpen)}>{buttonTxt}</button>
                    <ul className={isOpen ? "button-select__list_open" : "button-select__list_closed"} onClick={selectHandler}>
                        <li className="button-select__list-item" data-value="test1">TEst1</li>
                        <li className="button-select__list-item" data-value="test2">Test2</li>
                        <li className="button-select__list-item" data-value="test3">Test3</li>
                        <li className="button-select__list-item" data-value="test4">Test4</li>
                        <li className="button-select__list-item" data-value="test5">Test5</li>
                        <li className="button-select__list-item" data-value="test6">Test6</li>
                        <li className="button-select__list-item" data-value="test7">Test7</li>
                    </ul>
                </div>

                <input type="text" name="emailInput" className="form__item-input" placeholder="Ваш e-mail" />
                <input type="text" name="nameInput" className="form__item-input" placeholder="Ваше имя" />
                <div className="form__item-range">
                    <div className="item-range__header">
                        <span className="item-range__header-span">Sed ut perspiciatis, unde omnis iste natus</span>
                        <span className="item-range__header-span">{`${rangeValue}%`}</span>
                    </div>
                    <input type="range" min="0" max="100" step="1" name="rangeInput" onChange={rangeHandler} className="item-range__input-range" />
                </div>
                <button className="form__item-buttonFile">ПРИКРЕПИТЬ ФАЙЛ</button>
                <button className="form__item-buttonSend">ОТПРАВИТЬ</button>
            </div>
        </div>
    )
}