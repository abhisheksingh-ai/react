const RestaurantCard = (props) => {
    console.log(props)
    return (
        <div className="card">
            <img src="https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg"/>
            <h4>{ props.data.resName}</h4>
            <h4>{ props.data.rating}</h4>
            <h4>{ props.data.cuisine}</h4>
            <h4>{props.data.time}</h4>
            <h4>{ props.data.ratings}</h4>
        </div>
    )
}

export default RestaurantCard;