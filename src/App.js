import React, { Component, useContext } from 'react';
import { BrowserRouter, Route, Switch, Link, useLocation } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import { motion, AnimatePresence } from "framer-motion";

import AboutPage from './pages/AboutPage';
import MoneyPage from './pages/MoneyPage';

function App() {
  const location = useLocation()
  const { amount } = useContext(AppContext)

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
    >
      <div>
        <header>
          <Link to="/about">About</Link>
          <Link to="/money">Money</Link>
        </header>
        <h2>{amount}</h2>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/money" component={MoneyPage} />
          </Switch>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper;
