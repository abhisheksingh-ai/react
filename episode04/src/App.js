import React from "react"
import ReactDOM from "react-dom/client"
import Header from "../src/components/Header"
import Body from "../src/components/Body"
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