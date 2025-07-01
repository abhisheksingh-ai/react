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

const config = [
  {
    resName: "Spice Hub",
    cuisine: "North Indian, Mughlai",
    ratings: "4.3",
    time: "30 mins",
    img: "https://hungrybynature.com/wp-content/uploads/2017/09/pinch-of-yum-workshop-19.jpg"
  },
  {
    resName: "Tandoori Nights",
    cuisine: "Punjabi, BBQ",
    ratings: "4.5",
    time: "35 mins",
    img: "https://source.unsplash.com/featured/?tandoorichicken"
  },
  {
    resName: "Dosa Delight",
    cuisine: "South Indian",
    ratings: "4.2",
    time: "25 mins",
    img: "https://source.unsplash.com/featured/?dosa"
  },
  {
    resName: "The Biryani Project",
    cuisine: "Hyderabadi, Biryani",
    ratings: "4.6",
    time: "40 mins",
    img: "https://source.unsplash.com/featured/?biryani"
  },
  {
    resName: "Chaat Wala",
    cuisine: "Street Food, Chaat",
    ratings: "4.1",
    time: "20 mins",
    img: "https://source.unsplash.com/featured/?chaat"
  },
  {
    resName: "Curry Kingdom",
    cuisine: "North Indian, Curry",
    ratings: "4.3",
    time: "28 mins",
    img: "https://source.unsplash.com/featured/?curry"
  },
  {
    resName: "Idli Express",
    cuisine: "South Indian",
    ratings: "4.0",
    time: "22 mins",
    img: "https://source.unsplash.com/featured/?idli"
  },
  {
    resName: "Rajma Roti Rasoi",
    cuisine: "North Indian, Vegetarian",
    ratings: "4.4",
    time: "30 mins",
    img: "https://source.unsplash.com/featured/?rajmachawal"
  },
  {
    resName: "Kathi Roll Corner",
    cuisine: "Wraps, Rolls",
    ratings: "4.2",
    time: "18 mins",
    img: "https://source.unsplash.com/featured/?kathiroll"
  },
  {
    resName: "Paratha Junction",
    cuisine: "Punjabi, Breakfast",
    ratings: "4.3",
    time: "26 mins",
    img: "https://source.unsplash.com/featured/?paratha"
  },
  {
    resName: "Vada Pav Adda",
    cuisine: "Street Food, Maharashtrian",
    ratings: "4.0",
    time: "15 mins",
    img: "https://source.unsplash.com/featured/?vadapav"
  },
  {
    resName: "Thali Tales",
    cuisine: "Rajasthani, Gujarati",
    ratings: "4.6",
    time: "35 mins",
    img: "https://source.unsplash.com/featured/?thali"
  },
  {
    resName: "Kolkata Biryani House",
    cuisine: "Bengali, Biryani",
    ratings: "4.4",
    time: "38 mins",
    img: "https://source.unsplash.com/featured/?kolkatabiryani"
  },
  {
    resName: "Samosa Junction",
    cuisine: "Snacks, Street Food",
    ratings: "4.1",
    time: "15 mins",
    img: "https://source.unsplash.com/featured/?samosa"
  },
  {
    resName: "Butter Naan & More",
    cuisine: "North Indian",
    ratings: "4.3",
    time: "27 mins",
    img: "https://source.unsplash.com/featured/?butternaan"
  },
  {
    resName: "Madras Curry House",
    cuisine: "Tamil, South Indian",
    ratings: "4.5",
    time: "30 mins",
    img: "https://source.unsplash.com/featured/?sambhar"
  },
  {
    resName: "Paneer Paradise",
    cuisine: "Vegetarian, North Indian",
    ratings: "4.4",
    time: "28 mins",
    img: "https://source.unsplash.com/featured/?paneer"
  },
  {
    resName: "Andhra Spice",
    cuisine: "Andhra, South Indian",
    ratings: "4.6",
    time: "32 mins",
    img: "https://source.unsplash.com/featured/?andhrafood"
  },
  {
    resName: "Gujarati Rasoi",
    cuisine: "Gujarati, Vegetarian",
    ratings: "4.2",
    time: "29 mins",
    img: "https://source.unsplash.com/featured/?gujaratifood"
  },
  {
    resName: "Bombay Bistro",
    cuisine: "Mumbai Street Food",
    ratings: "4.1",
    time: "20 mins",
    img: "https://source.unsplash.com/featured/?bombaystreetfood"
    },
  {
    resName: "Bombay Bistro",
    cuisine: "Mumbai Street Food",
    ratings: "4.1",
    time: "20 mins",
    img: "https://source.unsplash.com/featured/?bombaystreetfood"
    }
];


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