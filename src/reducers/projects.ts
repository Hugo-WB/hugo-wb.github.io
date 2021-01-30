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
    name:"ChessDB",
    imageUrl:"https://i.imgur.com/i6pWwCD.png",
    url:"https://github.com/Hugo-WB/ChessDB",
    description:"GraphQL API for chess games, containing over 300,000 games"
  },
  {
    name: "Meal-Planner",
    imageUrl:"https://i.imgur.com/ZLuS882.png",
    url:"https://hugo-wb.github.io/meal-planner",
    description: "Meal planner"
  },
  // {
  //   name: "Gradient Descent Visualization",
  //   imageUrl: "https://i.ibb.co/B6jX0HM/gradient-descent-visual.png",
  //   url:"https://hugo-wb.github.io/linear-regression-visualization/",
  //   description:"Gradient Descent Cost function visualization app"
  // },
  {
    name: "Bivariate gradient descent",
    imageUrl: "https://raw.githubusercontent.com/Hugo-WB/bivariate-gradient-descent/main/images/3DGraph.png",
    url:"https://hugo-wb.github.io/bivariate-gradient-descent/",
    description:"Uses gradient descent to perform regression of any bi-variate function on a 2D data set."
  },
  {
    name: "Sudoku Solver",
    imageUrl: "https://raw.githubusercontent.com/Hugo-WB/sudoku-solver/master/images/screenshot.png",
    url: "https://hugo-wb.github.io/sudoku-solver/",
    description: "Sudoku solver using backtacking"
  },
]


export default (state = initialState, action: any): LocalData => {
  switch (action.type) {
    default:
      return state;
  }
};
