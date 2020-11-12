const initialState = {
    projects:[
        // {
        //     "image":"https://i.imgur.com/3oJs7xB.png",
        //     "title":"Q-Learning",
        //     "description":"Using q-learning for path finding",
        //     "size": "default",
        // },
        // {
        //     "image":"https://i.imgur.com/UtN1ySj.png",
        //     "title":"Gobblet Artificial Intelligence",
        //     "description":"Using a neural network to play the game Gobblet",
        //     "size": "default",
        // },
        {
            "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png",
            "title":"Sudoku Backtracking solver",
            "description":"Using a backtracking algorithm to solve and visualize the solving of a sudoku game",
            "size": "default",
            "url": "https://hugo-wb.github.io/sudoku-solver/",
        },
        {
            "image":"https://i.imgur.com/ZLuS882.png",
            "title":"Meal Planner",
            "description":"Web app that allows users to track recipes and create meal plans",
            "size": "default",
            "url": "https://hugo-wb.github.io/meal-planner/",
        },
        {
            "image":"https://i.imgur.com/FGQMVhj.png",
            "title":"Linear Regression Visualization",
            "description":"Using a backtracking algorithm to solve and visualize the solving of a sudoku game",
            "size": "default",
            "url":"https://hugo-wb.github.io/linear-regression-visualization/#/"
        },

    ]
}

export default (state = initialState,action)=>{
    switch (action.type){
        default:
            return state
    }
}