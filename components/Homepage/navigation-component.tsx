import styles from '../styles/Home.module.css'
import Header, {HeaderResults} from '../../types/Homepage/header-type'
import Menu, { MenuResults } from '../../types/Homepage/menu-type';


type Props = {
    menuResults: MenuResults;
}

const NavigationComponent = ({menuResults}: Props) => {
    return(
        <div className="Header">
            {menuResults.results.map((menu: Menu) => (
          <div className='NavigationItem'>
            Name: {menu.name}
            Link: {menu.link}
            Label: {menu.label}
          </div>
          ))}
        </div>
        
    )
}

export default NavigationComponent