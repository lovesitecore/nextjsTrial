import styles from '../styles/Home.module.css'
import rnstyles from '../styles/ReleaseNotes.module.css'

type Props = {
    id: string
    name: string
    linkToOriginReleaseNotes: string
    hightlight: boolean
    addno: string
    descriptionrt: string
    sitecoreProduct: string
    sitecoreProductInternal: string
    title: string
    type: string
    breakingChange: boolean
}

const ReleasenotesComponent = ({
    id,
    name,
    linkToOriginReleaseNotes,
    hightlight,
    addno,
    descriptionrt,
    sitecoreProduct,
    sitecoreProductInternal,
    title,
    type,
    breakingChange,
}: Props) => {
    console.log("Link: " + linkToOriginReleaseNotes);
    return(
        
        <div className={
            rnstyles.releaseNotesCard
            + " " + (hightlight === true ? rnstyles.highlight : " ")
            }>
            <h2>{title} &rarr;</h2>
            <p>
                <span className={rnstyles.productTag}>{sitecoreProduct}</span> <span className={rnstyles.productTagInternal}>{sitecoreProductInternal}</span>
            </p>
            <p>
                Description: {descriptionrt}
            </p>
            <p>
                Addno: {addno}<br/>
                name: {name}<br/>
                id: {id}<br/><br/>
                
                <a href="${linkToOriginReleaseNotes}">Read more</a> <br/>
            </p>
            {(breakingChange === true ? 
            <div className="breakingChange">BREAKING CHANGE</div> : " ")}
          </div>
        
    )
}

export default ReleasenotesComponent