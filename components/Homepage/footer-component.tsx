import styles from '../styles/Home.module.css'
import { getAllFooter } from '../../lib/Homepage/footer-lib';
import Footer, {FooterResults} from '../../types/Homepage/footer-type'
import FooterLinksComponent from './footerLinks-component';


type Props = {
    allFooters: FooterResults;
}

const FooterComponent = ({allFooters}: Props) => {
    const footer = allFooters.results[0];
    return(
        
        <div className='Footer'>
            ID: {footer.id}
            Name: {footer.name}
            Menu: 
            <FooterLinksComponent 
                menuResults  = {footer.menuItems}
            />
        </div>
        
    )
}

export default FooterComponent