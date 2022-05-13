import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Error404 } from "../components/componentExport"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Error404 />
  </Layout>
)

export default NotFoundPage
