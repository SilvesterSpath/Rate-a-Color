import React from 'react';
import PropTypes from 'prop-types'

const Star = ({ selected=false, onClick=f=>f }) =>
<div className='container'>
	<div className={(selected) ? "star selected" : "star"}
		onClick={onClick}>
	</div>
	</div>
	Star.propTypes = {
		selected: PropTypes.bool,
		onClick: PropTypes.func
}


export default Star;