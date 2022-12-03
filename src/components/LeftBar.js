import styles from '../stylesheets/leftbar.module.css'
import { X } from 'react-bootstrap-icons'
import { useLessened } from '../providers/context.js'




export const LeftBar = () => {

    const { value: isLessened, setValue: setIsLessened } = useLessened()

    function lessen() {

        setIsLessened((prev) => prev = false)
    }

    return (
        <div className={ isLessened ? `${styles.container}` : `${styles.lessened}`}>
            <div className={ styles.bar}>
                <X className={ styles.x} onClick={ lessen}/>
            </div>
        </div>
    )
}