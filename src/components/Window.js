import styles from '../stylesheets/window.module.css'
import { List} from 'react-bootstrap-icons'
import { useLessened } from '../providers/LessenedContext.js'


export const Window = () => {
    
    const { value: isLessened, setValue: setIsLessened } = useLessened()

    function toggle() {

        setIsLessened((prev) => prev = true)
    }


    return (
        <div className={ styles.container}>
            <div className={ styles.bar}>
                <List  className={ styles.list} onClick={ toggle}/>
            </div>
        </div>
    )
}