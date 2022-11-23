import { getAllHeader } from '../../lib/Homepage/header-lib';
import styles from '../styles/Home.module.css'
import Header, {HeaderResults} from '../../types/Homepage/header-type'
import stylesHp from '../../styles/Homepage.module.css';
import NavigationComponent from './navigation-component';


type Props = {
    allHeaders: HeaderResults;
}

const HeaderComponent = ({allHeaders}: Props) => {
    const header = allHeaders.results[0];
    return(
        <div className='Header'>
            
            <img className={stylesHp.Logo} src={header.logo.results[0].fileUrl}/>
            
            <NavigationComponent 
                menuResults  = {header.menuItems}
            />
            
            <div className={stylesHp.HeroImage}>
                <img src={header.heroImage.results[0].fileUrl} />
            </div>
        </div>
        
    )
}

export default HeaderComponent