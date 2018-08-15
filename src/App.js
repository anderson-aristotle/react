import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import { Route, Link } from 'react-router-dom'

const Dashboard = () => (
  <p>Dashboard</p>
)

const App = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <div>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </div>
)

export default App
