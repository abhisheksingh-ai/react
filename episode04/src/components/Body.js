import RestaurantCard  from "./RestaurantCard";
import config from "../utils/sampleData";

const Body = () => {
    return (
        <div className="body">
            <div className="serach"><h3>Search</h3></div>
            <div className="restaurant-container">
                {config.map((hotel, idx) => {
                    return (
                        <RestaurantCard key={idx} data={hotel} />
                    )
                })}
            </div>
        </div>
    )
}

export default Body;