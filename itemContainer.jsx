import {PropTypes} from 'react'
import {connect} from 'react-redux'

import Item from './item.jsx'

const ItemContainer = ({item, active}) => (
    <Item
        text={item.text}
        active={active}
    />
)

ItemContainer.propTypes = {
    item: PropTypes.obj.isRequired,
    active: PropTypes.bool.isRequired
}
    
const mapStateToProps = (state) => ({
    active: state.get('active')
})

export default connect(mapStateToProps)(ItemContainer)