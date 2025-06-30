import React from "react"
import ReactDOM from "react-dom/client"

/*
    Header
        - logo
        - Nav Items
    Body
        - Search
        - RestaurantContainer
            -RestaurantCard
                - image
                - Cuisines
                - ratings
                - Time 
    Footer
        -Copyright
        -Links
        -Adress
        -Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="img"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="card">
            <img src="https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg"/>
            <h4>{ props.resName}</h4>
            <h4>{ props.rating}</h4>
            <h4>{ props.cuisine}</h4>
            <h4>{ props.time}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="serach"><h3>Search</h3></div>
            <div className="restaurant-container">
                <RestaurantCard resName="Karni Restaurant" cuisine="Dal bati churma" rating="5⭐️" time="30 Minutes" />
                <RestaurantCard resName="Balaji Restaurant" cuisine="Sweets" rating="5⭐️" time="30 Minutes"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)