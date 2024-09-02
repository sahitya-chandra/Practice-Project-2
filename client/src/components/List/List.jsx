import Card from "../card/Card";
import "./List.css"

const List = ({posts}) => {

    return (
        <div className="listt">
            {posts.map(item=> (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List;