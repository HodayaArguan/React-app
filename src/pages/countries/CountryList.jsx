// import React from 'react'
// // import { Link } from 'react-router'
// import { RouterProvider } from 'react-router-dom';
// import countries from '../../data/data';

// const CountryList = () => {
//   return (
//     <div>
//         <h2>Hello country list</h2>
//         {countries.map(p => (
//             <div key={p.id}>
//                 <Link to={p.id}>{p.name}</Link>
//             </div>
//         ))}
//     </div>
//   )
// }

// export default CountryList

import React from 'react'
import { Link } from 'react-router-dom'; 
import countries from '../../data/data';

const CountryList = () => {
  return (
    <div style={{ marginTop: "60px" }}>
        <h2>Hello country list</h2>
        {countries.map(p => (
            <div key={p.id}>
            <Link to={p.id.toString()}>{p.name}</Link>
            </div>
        ))}
    </div>
  )
}

export default CountryList