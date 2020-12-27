import React from "react"

import Layout from "../components/layout"
import '../components/css/shop.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Shop = (props) => (
  <Layout>
    <div className="background">
      <BackgroundImage
        className="background"
        fluid={props.data.backgroundImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
      </BackgroundImage>
    </div>
    <div className="title">
      <h2>SHOP</h2>
    </div>
  </Layout>
)

export default Shop;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "point.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;