import Header from "../header/Header";
import {useEffect} from "react";
import style from "./Direction.module.css"

function Directions() {
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
            center: new window.kakao.maps.LatLng(37.358864, 127.125568),
            level: 3
        };
        var map = new window.kakao.maps.Map(container, options);
        var markerPosition  = new window.kakao.maps.LatLng(37.358864, 127.125568);
        var marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [])
    return (
        <div>
            <Header />
            <div className={style.map__box}>
                <div id="map" className={style.map}></div>
            </div>
        </div>);
}

export default Directions;