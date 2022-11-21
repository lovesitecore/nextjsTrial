import styles from '../styles/Home.module.css'
const Renderer = require("prosemirror-to-html-js").Renderer;

type Props = {
   descriptionrt: string,
}

const ReleaseNotesDescriptionComponent = ({descriptionrt}: Props) => {
    const renderer = new Renderer();

    return(
       <div dangerouslySetInnerHTML={{ __html: renderer.render(descriptionrt) }} />
    )
}

export default ReleaseNotesDescriptionComponent