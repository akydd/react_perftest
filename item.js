import {PropTypes} from 'react'

const Item = ({text, active}) => (
    <div>
        {text}
    </div>
)

Item.propTypes = {
    text: PropTypes.string.isRequired
  , active: PropTypes.bool.isRequired
}