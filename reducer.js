import Immutable from 'immutable'

let initialState = Immutable.fromJS({
	items: Immutable.List([{text: 'test'}])
  , active: false
})

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'enable': {
			return state.set('active', true)
		}
		case 'disable': {
			return state.set('active', false)
		}
		default: {
			return state
		}
	}
}
