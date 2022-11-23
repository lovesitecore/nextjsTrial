import { RecipeResults } from '../../types/Recipes/recipe-type'
import styles from '../styles/Home.module.css'

type Props = {
    allRecipes: RecipeResults
}

const RecipeOverview = ({allRecipes}: Props) => {
    const recipes = allRecipes.results;
    return(
        {recipes.map((recipe: any) => (
            <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>{recipe.recipeTitle} &rarr;</h2>
                <p>
                    ({recipe.id})
                    <img width="100%" src={image}/> <br/>
                    Name: {name}<br/>
                    Ingredients: {ingredients}<br/>
                    Duration: {minutesToPrepare} min.<br/>
                    Description: {preparationDescription}<br/>
                    
                </p>
            </a>
        ))}
        
    )
}

export default RecipeOverview