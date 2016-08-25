import {connect} from 'react-redux'
import ItemList from './itemList.jsx'

const mapStateToProps = (state) => ({
    items: state.get('items')
})

export default connect(mapStateToProps)(ItemList)