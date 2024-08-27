import { listData } from "../../lib/dummyData";
import Card from "../card/Card";
import "./List.css"

const List = () => {


    return (
        <div className="listt">
            {listData.map(item=> (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List;