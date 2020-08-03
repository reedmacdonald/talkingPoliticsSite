import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Privacy policy" />
    <h1>Privacy Policy</h1>
    <p>This game does not ask for, or collect, any personal information.</p>
    <p>That's really all I have to say. Hopefully I don't get sued.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
