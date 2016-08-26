import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

class ItemContainer extends React.Component {
	static propTypes = {
		item: PropTypes.obj.isRequired
	 , active: PropTypes.bool.isRequired
	}
	
	render() {
		return (
		    <Item
		        text={this.props.item.text}
		        active={this.props.active}
		    />
		)
	}
}

mapStateToProps = (state) => {
    return {
        active: state.get('active')
    }
}

export default connect(mapStateToProps)(ItemContainer)
