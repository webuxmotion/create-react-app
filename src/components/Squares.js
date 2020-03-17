import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext';
import { shuffle } from 'lodash'

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--purp)",
  "var(--green)",
]

const Squares = () => {
  const [ colorsList, setColorsList ] = useState(COLORS)
  const { amount } = useContext(AppContext)
  const colorsLength = colorsList.length; 

  return <div>
    <button
      onClick={() => setColorsList(
        shuffle(colorsList)
      )}
    >Shuffle</button>
      {[...Array(amount)].map((index, i) => {
        const randomIndex = Math.floor(Math.random() * colorsLength); 
        const color = colorsList[randomIndex];

        return (
          <motion.div 
            key={'k-' + i + color + randomIndex}
            positionTransition={{
              damping: 50,
              stiffness: 10
            }}
            style={{
              background: color,
              height: 100,
              width: 100
            }}
          />
        )
    })}
  </div>
}

export default Squares
