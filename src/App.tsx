import React from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import About from './components/About'
import ShapeDivider from './components/ShapeDivider/ShapeDivider'

function App() {
  return (
    <Layout>
      <Header />
      <About />
      <ShapeDivider />
    </Layout>
  )
}

export default App
