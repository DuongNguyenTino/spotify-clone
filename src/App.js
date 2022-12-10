import React from 'react'
import Sidebar from './components/Sidebar'
import Playing from './components/Playing'
import Router from './routes'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className='overflow-hidden'>
            <Sidebar/>
            <Navbar />
            <div className='lg:ml-80 ml-64 mt-16 mb-32'>
                <Router />
            </div>
            <Playing />
        </div>
    )
}

export default App
