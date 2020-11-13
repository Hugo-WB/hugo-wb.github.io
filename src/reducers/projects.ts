interface LocalData{

}
interface project {
  name: string,
  imageUrl: string,
  url: string,
}
const initialState: project[]=[
  {
    name: "Meal-Planner",
    imageUrl:"h",
    url:"https://hugo-wb.github.io/meal-planner"
  }
]


export default (state = initialState, action: any): LocalData => {
  switch (action.type) {
    default:
      return state;
  }
};
