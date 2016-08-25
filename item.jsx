import {PropTypes} from 'react'

const Item = ({text, active}) => {
    return (
        <div>
            {text}
        </div>
    )
}

Item.propTypes = {
    text: PropTypes.string.isRequired
  , active: PropTypes.bool.isRequired
}