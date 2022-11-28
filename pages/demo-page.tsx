import Head from "next/head";
import Theme, {ThemeX} from '../styles/demo'

export default function Demo() {
const theme = Theme;

    return (
        <div >
            <Head>
                <title>Demo Styles</title>
            </Head>
            <main>
                <div>
                    <h1 style={ThemeX.headline}>Hello World! Styles Demo</h1>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
}