interface LocalData{

}
interface project {
  name: string,
  imageUrl: string,
  url: string,
  description: string,
}
const initialState: project[]=[
  {
    name: "Meal-Planner",
    imageUrl:"https://i.imgur.com/ZLuS882.png",
    url:"https://hugo-wb.github.io/meal-planner",
    description: "Meal planner"
  },
  {
    name: "Gradient Descent Visualization",
    imageUrl: "https://i.ibb.co/B6jX0HM/gradient-descent-visual.png",
    url:"https://hugo-wb.github.io/linear-regression-visualization/",
    description:"Gradient Descent Cost function visualization app"
  },
  {
    name: "Sudoku Solver",
    imageUrl: "https://i.ibb.co/jZQ0tRy/sudoku.png",
    url: "https://hugo-wb.github.io/sudoku-solver/",
    description: "Sudoku solver using backtacking"
  }
]


export default (state = initialState, action: any): LocalData => {
  switch (action.type) {
    default:
      return state;
  }
};
