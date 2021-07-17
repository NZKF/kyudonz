import React from 'react'
import PropTypes from 'prop-types'
import { LocationPageTemplate } from '../../templates/location-page'

const LocationPagePreview = ({ entry, widgetFor }) => {
  return (
    <LocationPageTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

LocationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LocationPagePreview
