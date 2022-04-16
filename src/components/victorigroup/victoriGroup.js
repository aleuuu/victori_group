import React from 'react';
import './style.scss'

import Photo from '../img/slider-01-1.jpg'
import Photo1 from '../img/lcv_4-medium.jpg'
import Video from '../video/Группа Компаний _Виктори_ г. Тольятти.mp4'
import Beeline from '../img/beeline.png'
import Diadoc from '../img/diadoc_logo_1.png'

import { YMaps, Map, Placemark, Panorama, FullscreenControl } from 'react-yandex-maps';



function Group(props) {

    const FirstMap = () => ( 
        <YMaps>
            <Map defaultState = {{ center: [53.516168, 49.303711], zoom: 16, height: 50, width: 50 } }>
                <Panorama defaultPoint = {[53.516168, 49.303711] }/> 
                <Placemark geometry = {[53.516168, 49.303711] }/>
                <FullscreenControl/></Map> 
            </YMaps>
    );

    const SecondMap = () => ( 
        <YMaps>
            <Map defaultState = {{ center: [53.535882, 49.283876], zoom: 16, height: 50, width: 50 } }>
                <Panorama defaultPoint = {[53.535882, 49.283876] }/> 
                <Placemark geometry = {[53.535882, 49.283876] }/>
                <FullscreenControl/></Map> 
            </YMaps>
    );

    const ThirdMap = () => ( 
        <YMaps>
            <Map defaultState = {{ center: [53.539452, 49.441800], zoom: 16, height: 50, width: 50 } }>
                <Panorama defaultPoint = {[53.539452, 49.441800] }/> 
                <Placemark geometry = {[53.539452, 49.441800] }/>
                <FullscreenControl/></Map> 
            </YMaps>
    );

    const FourMap = () => ( 
        <YMaps>
            <Map defaultState = {{ center: [53.516168, 49.303711], zoom: 16, height: 50, width: 50 } }>
                <Panorama defaultPoint = {[53.516168, 49.303711] }/> 
                <Placemark geometry = {[53.516168, 49.303711] }/>
                <FullscreenControl/></Map> 
            </YMaps>
    );


    return ( 
        <div className="container">
            <div className="transpanent_block"></div>
            <h1 className="header">ГК Victory Group</h1>
            <div className="text_container">
                <div className="row_map">
                    <div className="map_item" id='first'>
                        <div className="map"><FirstMap></FirstMap></div>
                            <div className="collumn">
                                <p>ООО «Виктори Групп»</p>
                                <p>Самарская обл.г.Тольятти</p>
                                <p>8(800) 707-66-18</p>
                                <p>office @gruzoviktory.ru</p>
                            </div>
                    </div>
                    <div className="map_item" id='second'>
                        <div className="map"><SecondMap></SecondMap></div>
                            <div className="collumn"><p> ООО «ФТК ЭКСПРЕСС»</p>
                                <p>Самарская обл.г.Тольятти </p>
                                <p>8(800) 707-04-62</p>
                                <p>ftk.tlt@gruzoviktory.ru</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row_map">
                    <div className="map_item" id='second'>
                        <div className="map"><ThirdMap></ThirdMap></div>
                        <div className="collumn">
                            <p>Оптимальные решения</p>
                            <p>Самарская обл.г.Тольятти</p>
                            <p>8(800) 707-55-94</p>
                            <p>t.arterii@gruzoviktory.ru</p>
                        </div>
                    </div>
                    <div className="map_item" id='first'>
                        <div className="map"><FourMap></FourMap></div>
                        <div className="collumn">
                            <p>Транспортные Решения</p>
                            <p>Самарская обл.г.Тольятти</p>
                            <p>8(8482) 65-04-70</p>
                            <p>atk@gruzoviktory.ru</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Group()