import stylesHp from '../../styles/Homepage.module.css'
import Recipe,{RecipeResults} from "../../types/Recipes/recipe-type";

type Props = {
    allRecipes: RecipeResults;
}
const RecipeTeaserComponent = ({allRecipes}:Props) => {
    const recipes = allRecipes.results;
    
    return(
        <div>
            {recipes.map((recipe: any) => (
                <div className={stylesHp.boxOuter}>
                    <div className={stylesHp.box}>
                        <img src={recipe.ImageList.results[0].fileUrl}/>
                        <h2>{recipe.Title}</h2>
                        <p className={stylesHp.boxText}>
                            {recipe.Description}
                        </p>
                        <p>
                            <a href={recipe.name}>Read more</a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecipeTeaserComponent