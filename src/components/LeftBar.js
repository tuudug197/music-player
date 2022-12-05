 //css
import styles from '../stylesheets/leftbar.module.css'
import miniprofileStyle from '../stylesheets/miniprofile.module.css'
import loginwindowStyle from '../stylesheets/loginwindow.module.css'
 //providers
import { useLessened, useAuth } from '../providers/context.js'
 //bootsrtap icons
import { X, Spotify} from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
 //functions
import axios from "axios";
import { useState, useEffect, useRef } from 'react'


const MiniProfile = ( props ) => {

    return (
        <div className={ miniprofileStyle.container}>
            <p className={ props.hasLoggedIn ? `${miniprofileStyle.username}` : `${miniprofileStyle.none}`}>{props.name}</p>
        </div>
    )
}

const Login = ( props ) => {

    const value = useRef()

    function login() {
        console.log(value.current)
    }

    return (
        <div className={ props.hasLoggedIn ? `${loginwindowStyle.none}` : `${loginwindowStyle.container}`}>
            <p className={loginwindowStyle.title}>No user log on</p>
            <input type="type" placeholder="user id here" className={loginwindowStyle.input} value={value.current}/>
            <Button variant="success" className={loginwindowStyle.button} onClick={ login}>Sign in</Button>
        </div>
    )
}

export const LeftBar = () => {

    const baseUrl = "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/"
    const [data, setData] = useState();
    const auth = useAuth();

    useEffect(() => {

        if( auth.user) {
            (async () => {
                const response = await axios.get(
                baseUrl + "users/" +`${auth.user}`
                );
                setData(response.data.name);
            })();
        } else {
            return
        }
    }, []);

    const { value: isLessened, setValue: setIsLessened } = useLessened()


    //this function dictates left bar's visibility
    function lessen() {
        setIsLessened((prev) => prev = false)
    }

    return (
        <div className={isLessened ? `${styles.container}` : `${styles.lessened}`}>

            <div className={styles.bar}>
                <Spotify className={styles.logo}/>
                <X className={styles.x} onClick={lessen} />
            </div>

            <MiniProfile 
                name={data}
                hasLoggedIn= { auth.user ? true : false}
            />
            <Login 
                hasLoggedIn= { auth.user ? true : false}
            />
        </div>
    )
}