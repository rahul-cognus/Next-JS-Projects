"use client"
import React, { useState } from 'react'
import RestaurantLogin from '../_components/RestaurantLogin'
import RestaurantSignUp from '../_components/RestaurantSignUp'

const Restaurant = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
            {
                login ? <RestaurantLogin /> : <RestaurantSignUp />
            }
            <div>
                <button onClick={() => setLogin(!login)}>{login ? "Do not have Account? SignUp" : "Already have Account? Login"}</button>
            </div>
        </>
    )
}

export default Restaurant