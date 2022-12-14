import { useRouter } from "next/router";
import Recipe, {RecipeResults} from "../../types/Recipes/recipe-type";
import ErrorPage from "next/error";
import {getRecipeById,getAllRecipeWithIds} from "../../lib/recipe-lib";
import stylesHp from '../../styles/Homepage.module.css';
import Head from 'next/head'


type Params = {
    params: {
       slug: string;
    };
  };

  export async function getStaticProps({ params }: Params) {
    const recipe = await getRecipeById(params.slug);    
  
    return {
        props: {recipe},
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, //in seconds
    };
  }
  
  export async function getStaticPaths() {
    const allRecipePosts = await getAllRecipeWithIds();
    return {
      paths: allRecipePosts.map(({ id }) => `/recipes/${id}`) ?? [],
      fallback: true,
    };
  }
  type Props = {
    recipe: Recipe;
  };

const Post = ({recipe}: Props) => {
    const router = useRouter();
    /*if (!router.isFallback && !recipe?.id) { //&& !recipe?.slug
        return <ErrorPage statusCode={404} />;
    }*/
    return (
        <div className={stylesHp.container}>
            <Head>
                <title>{recipe?.Title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={stylesHp.main}>
                <div>
                    <div className={stylesHp.header}>
                        <div className={stylesHp.boxedContainer} >
                            <img className={stylesHp.Logo} src="https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/df4c80ea-db67-49f8-bcd3-08daadeee4f5/a7fd7eeb17b5478db61981633be25b81"/>
                            <div className={stylesHp.Navigation}>
                                <a href="homepage">
                                    <span className="NavigationItem">
                                        Home
                                    </span>
                                </a>
                                <a href="recipes">
                                    <span className="NavigationItem">
                                        Recipes
                                    </span>
                                </a>
                                <a href="releasenotes">
                                    <span className="NavigationItem">
                                        Release Notes
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                    
                    <div className={stylesHp.HeroImage}>
                        <img  src={recipe?.ImageList?.results[0].fileUrl}/>
                    </div>
                </div>
                <div className={stylesHp.boxedContainer} >
                    <h1>{recipe?.Title}</h1>
                    <p>
                        <strong>Duration:</strong> {recipe?.Duration} min.<br/>
                        <strong>Ingredients:</strong> {recipe?.Ingredients}
                    </p>
                    <p>
                    {recipe?.Description}
                    </p>
               
                </div>
                <footer className={stylesHp.footer}>
                    <div className={stylesHp.footerBox}>
                        <p>
                            Further Information: {' '}
                        </p> 
                        <a className='FooterLinksItem' href="https://www.sitecore.com">
                            <img className={stylesHp.Logo} src="https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/df4c80ea-db67-49f8-bcd3-08daadeee4f5/bb948e6968364176a605cfb1cba17a4d?width=300&fit=scale-down&transform=true"/>
                           
                        </a>
                        
                    </div>
                </footer>

            </main>

      
        </div>
       
    )
};
export default Post;