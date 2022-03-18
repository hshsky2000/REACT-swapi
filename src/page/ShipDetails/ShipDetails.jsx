import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/sw-api'

const ShipDetails = (props) => {
    const [shipDetails, setShipDetails] = useState({})
    let location = useLocation()

    useEffect(() => {
        getDetails(location.state.starshipTitle.url)
        .then(shipDetails => setShipDetails(shipDetails))
    },[])

    return (
        <>
            <div className='icon-container'>
                <div id='shipdetailDiv'>
                    <h3>NAME:{shipDetails.name}</h3>
                    <p>MODEL:{shipDetails.model}</p>
                    <a href='/star-ships'>RETURN</a>
                </div>
            </div>
        </>
    )
}

export default ShipDetails;