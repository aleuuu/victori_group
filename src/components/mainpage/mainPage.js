import React from 'react';
import './style.scss'
import Photo from '../img/slider-01-1.jpg'
import Photo1 from '../img/lcv_4-medium.jpg'
import Video from '../video/Группа Компаний _Виктори_ г. Тольятти.mp4'
import Beeline from '../img/beeline.png'
import Diadoc from '../img/diadoc_logo_1.png'

import Line from '../img/line.svg'

import { useRef, useEffect } from 'react';

import {gsap} from 'gsap'


function MainPage(props) {

    // let HeadFadeIn = useRef(null);

    // useEffect(() => {
    //     gsap.from(HeadFadeIn,{
    //         delay: 0.1,
    //         duration: 1,
    //         text: 'Hello',
    //         css: {
    //             transition: "all 3 ease-in-out",
    //             opacity: 0,
    //         },
    //     });
    // });

return(
    <div className="container">
        <div className="transpanent_block"></div>
        <h1 className="header">Victory Group</h1>
        <div className="text_container">
            <div className="center" 
            // ref={(el) => (HeadFadeIn = el)}
            >
                <img src={Line} className='line'></img>
                <p>ГРУППА КОМПАНИЙ<br></br>«ВИКТОРИ»</p>
                <img src={Line} className='line'></img>
            </div>
            <p className="title">Это крупная транспортно-экспедиционная организация. Компания имеет 8-ми летний опыт работы в экспедировании грузов и входит в состав крупнейшего в Поволжье холдинга «Виктори Групп», состоящего из восьми филиалов общей численностью 500 человек.</p>
            <img className='photo' src={Photo}></img>
            <p className="title">Более 20 000 клиентов уже воспользовались услугами нашего холдинга. Мы совершаем свыше 200 000 рейсов в год. Сотрудничаем более чем с 30 000 транспортными предприятиями по всей России и СНГ, и количество партнеров растет с каждым днем.<br></br><br></br></p>
            <p className="title">Перевозим грузы любых объёмов, также осуществляем перевозку негабаритных и опасных грузов по всей территории России, СНГ. Беремся за отправку любого тоннажа как отдельными машинами, так и догрузами, включая мультимодальные перевозки с привлечением авто и жд транспорта. Предоставляем страхование всех категорий грузов по желанию заказчика от любых рисков по минимальной ставке. Наша ответственность экспедитора застрахована на сумму 6 000 000 рублей.</p>
            <img className='photo' src={Photo1}></img>
            <p className="title">Персональные менеджеры обеспечивают оперативную обработку Ваших заявок: расчет любых грузов и направлений в течение нескольких минут.<br></br><br></br></p>
            <p className="title">Большой штат юристов гарантирует полную юридическую чистоту сделок. Штат бухгалтеров из 30-ти человек позволяет своевременно давать ответ по запросам налоговой службы на предмет встречных проверок контрагентов.</p>
            <div className="row">
                <div className="left">
                    <video width="100%"  autoPlay muted height="auto" controls >
                        <source src={Video} type="video/mp4"/>
                    </video>
                </div>
                <div className="right">
                    <img src={Diadoc} id="diadoc" alt="" />
                    <p  id="diadoc_p" >Всегда оставаться на связи с клиентами нам помогает Билайн</p>
                    <img src={Beeline} alt="" />
                    <p>Всегда оставаться на связи с клиентами нам помогает Билайн</p>
                </div>
            </div>
            <div className="center" id="margin">
                <div className="send">
                    <div className="text">
                        <div>
                            <h2>Появились вопросы?</h2>
                            <p>Напишите нам письмо, мы будем рады ответить на них!</p>  
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
    </div>
    );
}

export default MainPage();