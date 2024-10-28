import React from "react";
import "./Main.scss";
import arrow from "./images/arrow.png";

const Main = () => {
    return (
        <section id="main">
            <div className="mainText">
                <p>안녕하세요.</p>
                <p>
                    <b>유연</b>하게 <b>소통</b>하는 개발자 김소미입니다.
                </p>
            </div>
            <img className="arrow" src={arrow} alt="아래화살표" />
        </section>
    );
};

export default Main;
