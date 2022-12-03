import styles from '../stylesheets/leftbar.module.css'
import miniprofileStyle from '../stylesheets/miniprofile.module.css'
import { X } from 'react-bootstrap-icons'
import { useLessened } from '../providers/context.js'

const MiniProfile = ( props ) => {

    return (
        <div className={ miniprofileStyle.container}>
            <p className={ miniprofileStyle.username}>{ props.name}</p>
        </div>
    )
}


export const LeftBar = () => {

    const { value: isLessened, setValue: setIsLessened } = useLessened()

    function lessen() {

        setIsLessened((prev) => prev = false)
    }

    return (
        <div className={isLessened ? `${styles.container}` : `${styles.lessened}`}>
            <div className={styles.bar}>
                <X className={styles.x} onClick={lessen} />
            </div>
            <MiniProfile 
                name="Patrick Bayer"
            />
        </div>
    )
}