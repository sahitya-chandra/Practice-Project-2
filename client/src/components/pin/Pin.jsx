import { Marker, Popup } from "react-leaflet";
import "./Pin.css"
import { Link } from "react-router-dom";

const Pin = ({item}) => {


    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.img} alt="" />
                    <div className="txtContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedroom} bedroom</span>
                        <b>${item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin;