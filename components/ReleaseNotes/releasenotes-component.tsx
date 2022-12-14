import styles from '../../styles/Home.module.css'
import rnstyles from '../../styles/ReleaseNotes.module.css'
import ReleaseNote from '../../types/ReleaseNotes/releaseNotes-type'
import ReleaseNotesDescriptionComponent from './releaseNotesDescription-component'
import ReleaseNotesDescriptionComponentRt from './releaseNotesDescriptionRt-component'

type Props = {
    ReleaseNote: ReleaseNote
}

const ReleaseNotesComponent = ({
    ReleaseNote,
}: Props) => {
    console.log("Link ("+ ReleaseNote.title +"): " + ReleaseNote.linktooriginreleasenotes);
    //const a = ReleaseNote.sitecoreProductInternal.<SitecoreProductInternalResults>results;
    const a = ReleaseNote.sitecoreProduct.results;
    console.log("A" + a[0].name);
    const publishDate = new Date (ReleaseNote.publishDate);

    return(
        
        <div className={
            rnstyles.releaseNotesCard
            + " " + (ReleaseNote.highlight === true ? rnstyles.highlight : " ")
            }>
            {(ReleaseNote.breakingChange === true ? 
                <div className={rnstyles.breakingChange}>BREAKING CHANGE</div> : " ")}

            <h2>{ReleaseNote.title} &rarr;</h2>
            
            <p>
                {ReleaseNote.sitecoreProduct.results.map((sitecoreProduct: any)=>(
                    <span key ={sitecoreProduct.id} className={rnstyles.productTag}>
                        {sitecoreProduct.name}
                    </span> 
                ))}
                {ReleaseNote.internalProduct.results.map((sitecoreProductInternal: any)=>(
                    <span key ={sitecoreProductInternal.id} className={rnstyles.productTagInternal}>
                        {sitecoreProductInternal.name}
                    </span>
                ))}
            </p>
            
            <p>
                {publishDate.toLocaleDateString([],{ year: 'numeric', month: 'short', day: 'numeric' })}
            </p> 

            <ReleaseNotesDescriptionComponentRt 
                descriptionrt= {ReleaseNote.descriptionrt}/>
            
            <p className={rnstyles.basicInfo}>
                Release: {ReleaseNote.release}<br/>
                Context: {ReleaseNote.context}<br/>
                Addno: {ReleaseNote.addno}<br/>
                name: {ReleaseNote.name}<br/>
                id: {ReleaseNote.id}<br/><br/> 
                

            </p>
            {(ReleaseNote.linktooriginreleasenotes != null ?
                <p> 
                    <a href={ReleaseNote.linktooriginreleasenotes} className={rnstyles.readMore}>Read more</a> <br/>
                </p> : " "
            )}
            
            
        </div>
        
    )
}

export default ReleaseNotesComponent