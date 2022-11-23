import { getAllHeader } from '../../lib/Homepage/header-lib';
import styles from '../styles/Home.module.css'
import Header, {HeaderResults} from '../../types/Homepage/header-type'
import NavigationComponent from './navigation-component';


type Props = {
    allHeaders: HeaderResults;
}

const HeaderComponent = ({allHeaders}: Props) => {
    const header = allHeaders.results[0];
    return(
        <div className="Header">
            Logo: {header.logo.results[0].fileUrl}
            <NavigationComponent 
                menuResults  = {header.menuItems}
            />
            Hero Image: {header.heroImage.results[0].fileUrl} 
        </div>
        
    )
}

export default HeaderComponent