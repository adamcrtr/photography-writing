// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';

// Step 2: Define your component
const AboutPage = () => {
  return (
   
      
      <Layout pageTitle="About Me">
      
      <p>Hello, this site is created with gatsby, which I am new to</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage