import React from 'react'

import Header from './components/Header'
import Location from './components/Location'

import locationsData from './data'

export default function App() {

    const locations = locationsData.map(location => {
        return (
            <Location 
                key={location.id}
                {...location}
            />
        )
    })

    return (
        <div>
            <Header />
            {locations}
        </div>
    )
}