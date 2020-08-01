import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SearchInput from "../components/search-input"
import SearchResult from '../components/search-result'

const IndexPage = () => (
  <Layout>
    Louis search advisor
    <Helmet>
      <meta charSet="utf-8" />
      <title>company background search</title>
    </Helmet>

    <div>
      <div>
        <SearchInput />
      </div>
      <div>
        <SearchResult />
      </div>
    </div>
  </Layout>
)

export default IndexPage
