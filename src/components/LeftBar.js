 //css
import styles from '../stylesheets/leftbar.module.css'
import styles1 from '../stylesheets/loggedin.module.css'
import styles2 from '../stylesheets/logout.module.css'
import styles3 from '../stylesheets/loginwindow.module.css'
 //providers
import { useLessened, useAuth } from '../providers/context.js'
 //bootsrtap icons
import { X} from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
 //functions
import axios from "axios";
import { useState, useEffect, useRef } from 'react'


//components

const LogOut = () => {

    const { setUser} = useAuth();
    function logOut() {
        setUser(0)
    }

    return (
        <div className={ styles2.container}>
            <p className={ styles2.title} onClick={ logOut}>Log out?</p>
        </div>
    )
}

const LoggedIn = ( props ) => {

    return (
        <div className={ props.hasLoggedIn ? `${styles1.container}` : `${styles1.none}`}>
            <div className={ styles1.miniProfile}>
                <p className={styles1.username}>{props.name}</p>
            </div>
            <LogOut />
        </div>
        
    )
}

const Login = ( props ) => {


    const value = useRef()
    const { setUser} = useAuth();

    function login() {
        setUser(value.current.value)
    }

    return (
        <div className={ props.hasLoggedIn ? `${styles3.none}` : `${styles3.container}`}>
            <p className={styles3.title}>No user log on</p>
            <input type="type" placeholder="user id here" className={styles3.input} ref={value}/>
            <Button variant="success" className={styles3.button} onClick={ login}>Sign in</Button>
        </div>
    )
}


//main export 
export const LeftBar = () => {

    const baseUrl = "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/"
    const auth = useAuth();


    const [name, setName] = useState();
    useEffect(() => {

        if( auth.user) {
            (async () => {
                const response = await axios.get(
                baseUrl + "users/" + `${auth.user}`
                );
                setName(response.data.name);
            })();
        } else {
            return
        }
    }, [auth.user]);

    //this function dictates left bar's visibility
    const { value: isLessened, setValue: setIsLessened } = useLessened()
    function lessen() {
        setIsLessened((prev) => prev = false)
    }

    return (
        <div className={isLessened ? `${styles.container}` : `${styles.lessened}`}>

            <div className={styles.bar}>
                <X className={styles.x} onClick={lessen} />
            </div>

            <LoggedIn 
                name={name}
                hasLoggedIn= { auth.user ? true : false}
            />
            <Login 
                hasLoggedIn= { auth.user ? true : false}
            />

         </div>
    )
}