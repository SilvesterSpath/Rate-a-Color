import React from 'react'
import Color from './Color.js'

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) =>
<div className="color-list">
		{(colors.length === 0) ?
			<p>No Colors Listed. (Add a Color)</p> :
				colors.map(i =>
			<Color key={i.id} {...i} color={i.color} onRate={(rating) => onRate(i.id, rating)} onRemove={() => onRemove(i.id)}/>
		)
	}
</div>
	
export default ColorList;