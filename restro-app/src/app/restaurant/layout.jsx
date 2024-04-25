import React from 'react'
import RestaurantHeader from '../_components/RestaurantHeader'

const layout = ({ children }) => {
    return (
        <div>
            <RestaurantHeader />
            {children}</div>
    )
}

export default layout