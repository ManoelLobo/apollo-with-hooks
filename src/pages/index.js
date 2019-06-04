import React from "react"
import { Link } from "gatsby"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CHARACTER_QUERY = gql`
  {
    character(id: 1) {
      name
      species
      gender
      origin {
        name
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>The content below is using react-apollo with the Query component</p>
    <Query query={CHARACTER_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>

        const { name, species, gender, origin } = data.character

        return (
          <p>
            This is the info about {name}, a {species} {gender} from{" "}
            {origin.name}{" "}
          </p>
        )
      }}
    </Query>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
