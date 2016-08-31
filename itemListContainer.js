import {connect} from 'react-redux'
import ItemList from './itemList.js'

const mapStateToProps = (state) => ({
    items: state.get('items')
})

export default connect(mapStateToProps)(ItemList)
