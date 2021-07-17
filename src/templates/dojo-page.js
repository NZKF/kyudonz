import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const DojoTemplate = ({
  title,
  helmet,
  address,
  googleMaps,
  president,
  contactPerson,
  contactPosition,
  contactEmail,
  content,
  contentComponent,

}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title} Kyudo Club
            </h1>
            <p>
              We practice at <a href={googleMaps}>{address}. Our club president is <strong>{president}</strong></a>
            </p>
            <p>For enquiries please contact:</p>
            <p>
              <strong>{contactPerson}</strong> - {contactPosition}<br />
              <a href={contactEmail}>{contactEmail}</a>
            </p>
            <PageContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

DojoTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
  address: PropTypes.string.isRequired,
  googleMaps: PropTypes.string,
  president: PropTypes.string,
  contactPerson: PropTypes.string.isRequired,
  contactPosition: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
}

const Dojo = ({ data }) => {
  const { markdownRemark: post } = data
  const field = post.frontmatter;

  return (
    <Layout>
      <DojoTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Dojo">
            <title>{`${field.title} - Kyudo Club`}</title>
            <meta
              name="description"
              content={`${field.title} based Japanese archery club. We practice weekly and welcome new members.`}
            />
          </Helmet>
        }
        title={field.title}
        address={field.address}
        googleMap={field.googleMap}
        president={field.president}
        contactPerson={field.contactPerson}
        contactPosition={field.contactPosition}
        contactEmail={field.contactEmail}
      />
    </Layout>
  )
}

Dojo.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Dojo

export const pageQuery = graphql`
  query DojoByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        address
        googleMaps
        president
        contactPerson
        contactPosition
        contactEmail
      }
    }
  }
`
