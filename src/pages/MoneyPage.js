import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { motion } from "framer-motion"
import { Amount } from '../components/Amount';
import { Controls } from '../components/Controls';

const variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { 
    opacity: 0,
    scale: 0.5 
  }
}

const MoneyPage = () => {
  const { amount } = useContext(AppContext)

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="app-container">
        <Amount value={amount} />
        <div className="separator" />
        <Controls />
      </div>
    </motion.div>
  )
}

export default MoneyPage
