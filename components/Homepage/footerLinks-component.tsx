import styles from '../styles/Home.module.css'
import Header, {HeaderResults} from '../../types/Homepage/header-type'
import Menu, { MenuResults } from '../../types/Homepage/menu-type';

type Props = {
    menuResults: MenuResults;
}

const FooterLinksComponent = ({menuResults}: Props) => {
    return(
        <div className='FooterLinks'>
            {menuResults.results.map((menu: Menu) => (
          <div className='FooterLinksItem'>
            Name: {menu.name}
            Link: {menu.link}
            Label: {menu.label}
          </div>
          ))}
        </div>
        
    )
}

export default FooterLinksComponent