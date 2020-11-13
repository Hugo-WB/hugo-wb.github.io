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
  }
]


export default (state = initialState, action: any): LocalData => {
  switch (action.type) {
    default:
      return state;
  }
};
