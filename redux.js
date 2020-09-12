import pkg from 'redux'

const { combineReducers, createStore } = pkg

const actions = Object.freeze({
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
})

export const Actions = {
    increment: () => {
        return { type: 'increment' }
    },
    decrement: () => {
        return { type: 'decrement' }
    }
}

export const counter = (state = 0, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return state + 1
        case actions.DECREMENT:
            return state - 1
        default:
            return state
    }
}

export const reducer = combineReducers({ counter })

export const store = createStore(reducer)

export const useCounter = () => [
    store.getState().counter,
    () => {
        store.dispatch({ type: actions.INCREMENT})
    }
]