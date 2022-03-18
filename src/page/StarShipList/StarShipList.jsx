import React, {useState, useEffect} from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarShips = (props) => {
    const [results, setResults] = useState([])
        
    useEffect(()=> {
        getAllStarships()
        .then(shipData => setResults(shipData.results))
    }, [])

return (
    <>
      <div>
      <h3>Ship List</h3>
      <div className="icon-container">
          {results.map((starshipTitle) => (
            <Link key={starshipTitle.index} state={{ starshipTitle }} to='/ship-details'>
                    <div id="starshipDiv" >
                    {starshipTitle.name}
                    </div>
             </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default StarShips