import styles from '../stylesheets/window.module.css'
import styles1 from '../stylesheets/playlistcard.module.css'
import { List, Search} from 'react-bootstrap-icons'
import { useLessened } from '../providers/context.js'

import { useEffect, useState } from "react";
import axios from "axios";
import {useAuth} from '../providers/context.js'

const PlaylistCard = ( props) => {
    console.log(props.name)

    return(
        <div className={ styles1.container}>
            <p className={ styles1.name}></p>
        </div>
    )
}

const Bar = () => {

    //it dictates left bar's visibility
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

    const { user} = useAuth()
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
        const response = await axios.get(
            'https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/' + `${user}` + '/playlists'
        );
        setData(response.data)

        })();
    }, [user]);

    return (
        <div className={ styles.container}>
            <button onClick={() => {console.log(data)}}>click here</button>
            <Bar />
            <div className={ styles.playlistsContainer}>
               {data.forEach(element => {

                    return(
                    <PlaylistCard 
                        name = {element.listName}
                    >

                    </PlaylistCard>
                    )
                   })}
            </div>
        </div>
    )
}
