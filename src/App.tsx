import React from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import CustomDivider from './components/CustomDivider'
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Header />
      <CustomDivider side={'left'} />
      <About />
      <CustomDivider side={'right'} />
      <br />
      <Projects />
      <Footer />
    </Layout>
  )
}

export default App
