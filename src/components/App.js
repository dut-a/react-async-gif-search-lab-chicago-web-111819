import React from 'react'
import "../css/additional.css"

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

const App = () => {
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <GifListContainer />
    </div>
  )
}

export default App
