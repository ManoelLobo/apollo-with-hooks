import React from "react"
import { Link } from "gatsby"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { client } from "../services/apollo/client"

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

const IndexPage = () => {
  const { loading, error, data } = useQuery(CHARACTER_QUERY, { client })

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>
        The content below is now using the useQuery hook from
        @apollo/react-hooks!
      </p>
      <p>
        {loading
          ? `Loading...`
          : error
          ? `Error: ${error.message}`
          : data.character
          ? `This is the info about ${data.character.name}, a ${
              data.character.species
            } ${data.character.gender} from ${data.character.origin.name}`
          : `We couldn't show anything :(`}
      </p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
