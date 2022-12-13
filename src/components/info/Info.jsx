import React from "react";
import '../../pages/main/Main.scss';

export default function Info() {


    return (
        <div className="info">
            <div className="info__content">
                <div className="content__header">
                    <span className="content__header-item_blue">LOREM IPSUM</span>
                    <span className="content__header-item_black"> DOLOR SIT</span>
                    <br />
                    <span className="content__header-item_black">AMETCONSECTETUR</span>
                    <span className="content__header-item_blue"> ADIPISCING</span>
                </div>
                <div className="content__infoBlock">
                    <span className="content__infoBlock-header">At vero eos et accusamus et iusto odio dignissimos ducimus!</span>
                    <ul className="content__infoBlock-list">
                        <li>Totam rem aperiam eaque ipsa</li>
                        <li>Sit voluptatem accusantium doloremque laudantium</li>
                        <li>Sed ut perspiciatis, unde omnis iste natus error</li>
                    </ul>
                </div>
                <div className="content__buttons">
                    <button className="content__buttons-item_blue">ЗАКАЗАТЬ</button>
                    <button className="content__buttons-item_white">ПОДРОБНЕЕ</button>
                </div>
            </div>
        </div>
    )
}