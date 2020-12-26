// Reducer

const initialState = [
    {
        id: 1,
        title: "Learn ReactJS",
        description: "I'll Learn React JS today!",
        status: "In Progress"
    },
    {
        id: 2,
        title: "Learn Redux",
        description: "I'll Learn Redux tomorrow!",
        status: "In Progress"
    }
]

const tasks = (state = {tasks: initialState}, action) => {
    return state
}