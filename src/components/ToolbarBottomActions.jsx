import React from 'react'

import SitesIcon from './presentational/Icons/Sites'
import CoverIcon from './presentational/Icons/Cover'
import InfoIcon from './presentational/Icons/Info'

function ToolbarBottomActions (props) {
  function renderToggles () {
    return [
      <div className='bottom-action-block'>
        {process.env.features.USE_SITES ? <SitesIcon
          isActive={props.sites.enabled}
          onClickHandler={props.sites.toggle}
        /> : null}
      </div>,
      <div className='botttom-action-block'>
        <InfoIcon
          isActive={props.info.enabled}
          onClickHandler={props.info.toggle}
        />
      </div>,
      <div className='botttom-action-block'>
        {process.env.features.USE_COVER ? <CoverIcon
          onClickHandler={props.cover.toggle}
        /> : null}
      </div>
    ]
  }

  return (
    <div className='bottom-actions'>
      {renderToggles()}
    </div>
  )
}

export default ToolbarBottomActions
