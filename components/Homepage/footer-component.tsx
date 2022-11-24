import styles from '../../styles/Homepage.module.css'
import { getAllFooter } from '../../lib/Homepage/footer-lib';
import Footer, {FooterResults} from '../../types/Homepage/footer-type'
import FooterLinksComponent from './footerLinks-component';


type Props = {
    allFooters: FooterResults;
}

const FooterComponent = ({allFooters}: Props) => {
    const footer = allFooters.results[0];
    return(
        <footer className={styles.footer}>
            Further Information: {' '}
          <FooterLinksComponent 
                menuResults  = {footer.menuItems}
            />
        </footer>
        
    )
}

export default FooterComponent