import React from 'react'
import PropTypes from 'prop-types'
import { DojoPageTemplate } from '../../templates/dojo-page'

const DojoPagePreview = ({ entry, widgetFor }) => {
  return (
    <DojoPageTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

DojoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DojoPagePreview
