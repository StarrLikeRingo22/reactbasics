import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Planecard from './planecard'
import TVModel from './TVModel'
import NavBar from './NavBar'
import { OrbitControls } from '@react-three/drei'

const Scene = () => {

  const [showTV, setShowTV] = useState(false)
  const [tvPosition, setTvPosition] = useState([0, 0, 0])
  const [activeCard, setActiveCard] = useState(null) // Track the active card
  

  const handleCardClick = (position, cardId) => {
    setTvPosition(position)
    setActiveCard(cardId) // Set the active card when clicked
    setShowTV(prev => !prev)
    if (showTV && activeCard === cardId) {
      setShowTV(false) // Hide TV (spring back in)
    } else {
      setShowTV(true)  // Show TV (spring out)
    }



  }

  console.log('TV positioning:', tvPosition)

  return (
    <>
    <NavBar />
    <Canvas>

      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />
      { /*  only show if card is click       v */}
      <TVModel position={tvPosition} show={showTV} activeCard={activeCard} />

      
      <Planecard position={[-2.6, 0, 0]} args={[1, 1.4, 1, 1]} onClick={(position) => handleCardClick(position, 0)} cardId={0} activeCard={activeCard} setActiveCard={setActiveCard} />
      <Planecard position={[0.9, 0, 0]} args={[1, 1.4, 1, 1]} onClick={(position) => handleCardClick(position, 1)} cardId={1} activeCard={activeCard} setActiveCard={setActiveCard} />

      <Planecard position={[2.6, 0, 0]} args={[1, 1.4, 1, 1]} onClick={(position) => handleCardClick(position, 2)} cardId={2} activeCard={activeCard} setActiveCard={setActiveCard} />
      <Planecard position={[-0.8, 0, 0]} args={[1, 1.4, 1, 1]} onClick={(position) => handleCardClick(position, 3)} cardId={3} activeCard={activeCard} setActiveCard={setActiveCard} />
    {/* <OrbitControls /> */}
    </Canvas>
    

    </>
    // <>
    //    {/* <NavBar />  */}
    //    <Resume /> 
    // </>

  )
}

export default Scene
