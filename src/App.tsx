import React from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import CustomDivider from './components/CustomDivider'

function App() {
  return (
    <Layout>
      <Header />
      <CustomDivider side={'left'} />
      <About />
      <CustomDivider side={'right'} />
      <Projects />
      <CustomDivider side={'left'} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <ShapeDivider /> */}
    </Layout>
  )
}

export default App
