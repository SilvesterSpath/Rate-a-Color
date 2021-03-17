import React, {Component} from 'react'
import StarRating from './StarRating.js'
import PropTypes from 'prop-types'


class Color extends Component {
	
	componentWillMount() {
		this.style = { backgroundColor: "#CCC" }
		}

	render() {
		const { title, rating, color, onRate, onRemove } = this.props
		console.log("color", color)
		return (
			<section className="color" style={this.style}>
				<h1 ref="title">{title}</h1>
				<button onClick={onRemove}>X</button>
				<div className="color"
				style={{ backgroundColor: color }}>color
				</div>
				<StarRating starsSelected={rating} onRate={onRate} />
		</section>
		)
	}
}
	Color.propTypes = {
		title: PropTypes.string,
		rating: PropTypes.number,
		color: PropTypes.string,
		onRate: PropTypes.func
}
	Color.defaultProps = {
		title: undefined,
		rating: 0,
		color: "#000000",
		onRate: f=>f
}

export default Color;