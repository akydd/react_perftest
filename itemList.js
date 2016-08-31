import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ItemContainer from './itemContainer.js'

const ItemList = ({items}) => (
    <div>
        {items.toArray().map(item => {
            return (
                <ItemContainer
                    item={item}
                />
            )
        })}
    </div>
)

ItemList.propTypes = {
    items: ImmutablePropTypes.list.isRequired
}

export default ItemList
