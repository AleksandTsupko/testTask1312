import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Info from "../../components/info/Info";
import Order from "../../components/order/Order";
import './Main.scss';

export default function Main() {

    return (
        <>
            <Header />
            <Info />
            <Order />
            <Footer />
        </>
    )
}