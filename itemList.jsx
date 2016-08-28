import {ImmutablePropTypes} from 'immutable'

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