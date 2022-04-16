import React from 'react';
import './style.scss'




function Contact(props) {
return(
    <div className="container" id="contacts">
            <div className="center" id="contacts">
                <div className="send">
                    <div className="text">
                        <div>
                            <h2>Требуется первозка грузов?</h2>
                            <p className="write">Свяжитесь с нами, используя следующую форму</p>
                        </div>
                        <div className="contact">
                            <h4>Или по этим контактам:</h4>
                            <p>тел: 8 (800) 500-46-97</p>
                            <p>тел: 8 (8482) 65-04-70</p>
                            <p>почта: atk@gruzoviktory.ru</p>
                        </div>
                    </div>
                    <form action="" method="POST">
                        <input type="name" placeholder="Имя"></input>
                        <input type="phone" placeholder="Телефон"></input>
                        <input type="email" placeholder="Почта"></input>
                        <textarea type="text" placeholder="Текст письма"></textarea>
                        <button type="submit" className="btn">Отправить</button>
                    </form>
                </div>
            </div>
    </div>
    );
}

export default Contact();