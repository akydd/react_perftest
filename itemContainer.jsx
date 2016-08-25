import {connect} from 'react-redux'

const ItemContainer = () => {
    
}

mapStateToProps = (state) => {
    return {
        active: state.get('active')
    }
}

export default class connect()(Item)