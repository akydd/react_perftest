import {connect} from 'react-redux'
import ModeToggle from './modeToggle.js'

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch()
})

export default connect(null, mapDispatchToProps)(ModeToggle)
