# Project on pause

## Reason: redux not clear for now

steps for redux:

1- we create the reducer with the initialState ./reducers/index.js
2- we name our reducer = tasks
3- the state of the reducer and object withs tasks: initialState
4- in ./index.js we import createStore from redux
5- we pass the reducer(tasks) in the createStore method in a new variable
6- we pass the variable to the Provider
7- we wrap our app with the Provider (provider imported from "react-redux")
8- in App.js we use connect (imported from "react-redux") as a bridge between store state and UI(components)
9- we create method mapStateToProps to reach store & state with the props
10-
