// styles/demo.tsx
import css from 'styled-jsx/css';
import {getAllTheme} from "../lib/Theme/theme-lib";
import Theme,{ThemeResults} from "../types/Theme/theme-type";


export async function getStaticProps({ preview = false}){
  const allThemes = await getAllTheme(preview);
  return{
      props: {allThemes, preview},
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, //in seconds
  }
}

type Props = {
  allThemes: Theme[];
}
const Theme = ({allThemes}: Props) => {
  const theme = allThemes;

  return (
    { 
      container: {
        width: 300,
        height: 300,

      }, 
      headline: {
        color: "orange" 
      }
    
    }
    );
 
}
export default Theme
const allThemes = getAllTheme(false);

export const ThemeX = {
  headline: {
    color: "orange",
  }
} as const;

const a = `
body {
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  color: #333;
  font-family: sans-serif;
}
h1 {
  font-weight: 700;
  color: red;
}
p {
  margin-bottom: 10px;
}
.button {
  background-color: pink;


}
.headlineRed {
  color: red;
}
`;