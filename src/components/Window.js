import styles from '../stylesheets/window.module.css'
import { List, Search} from 'react-bootstrap-icons'
import { useLessened } from '../providers/context.js'

const Bar = () => {
    
    const { value: isLessened, setValue: setIsLessened } = useLessened()

    function toggle() {

        setIsLessened((prev) => prev = true)
    }

    return (
        <div className={ styles.bar}>

            <List  className={ styles.list} onClick={ toggle}/>
            <input type="text" className={styles.input} placeholder="Disocover..." />
            <Search className={ styles.searchIcon}/>

        </div>
    )
}

export const Window = () => {

    return (
        <div className={ styles.container}>
            <Bar />
        </div>
    )
}