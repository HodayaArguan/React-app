// import React from 'react'
// import { useParams } from 'react-router'
// import countries from '../../data/data'

// const CountriesDetails = () => {
//     const { countryId } = useParams()
//     const country = countries.find(p => p.id === Number(countryId));
//     if (!country) return <h2>מדינה לא נמצאה</h2>;
//     return (
//   <div>
//     <h2>Name: {country.name}</h2>
//     <h3>Capital: {country.capital}</h3>
//     <h4>Famous Beer: {country.famousBeer}</h4>
//     <p>Top Attraction: {country.topAttraction}</p>
// <img src={country.flag} alt={`${country.name} flag`} />
//   </div>
//     )
// }

// export default CountriesDetails
import React from 'react'
// import { useParams } from 'react-router'
import { Link, useParams } from 'react-router-dom';
import countries from '../../data/data'

const CountriesDetails = () => {
    const { countryId } = useParams()


    const country = countries.find(p => p.id === Number(countryId))

    if (!country) {
        return <h2>מדינה לא נמצאה</h2>
    }

    return (
        <div style={{ marginTop: "60px", padding: "20px" }}>
            <h2>Name: {country.name}</h2>
            <h3>Capital: {country.capital}</h3>
            <h4>Famous Drink: {country.famousBeer}</h4>
            <p>Top Attraction: {country.topAttraction}</p>
            <img src={country.flag} alt={`${country.name} flag`} style={{ width: "300px" }} />
            <div>            <Link
                to="/countries"
            >
                Back to All Countries
            </Link></div>
        </div>

    )
}

export default CountriesDetails