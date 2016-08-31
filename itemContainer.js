import {PropTypes} from 'react'
import {connect} from 'react-redux'

import Item from './item.js'

const ItemContainer = ({item, active}) => (
    <Item
        text={item.text}
        active={active}
    />
)

ItemContainer.propTypes = {
    item: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired
}
    
const mapStateToProps = (state) => ({
    active: state.get('active')
})

export default connect(mapStateToProps)(ItemContainer)
