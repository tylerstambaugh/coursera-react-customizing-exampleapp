import React from "react";
import MealsList from "../components/examples/MealsList";
import Counter from "../components/examples/Counter";

const MealsContext = React.createContext();

const todaysMeals = [ "Baked Beans", "Squash", "Chocolate Cake"];

const MealsProvider = ({children}) => {
    
    const [meals, setMeals] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}} >
            {children}
        </MealsContext.Provider>

    );
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider
