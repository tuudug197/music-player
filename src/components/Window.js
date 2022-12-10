import styles from '../stylesheets/window.module.css'
import styles1 from '../stylesheets/playlistcard.module.css'
import { List, Search, MusicNoteList} from 'react-bootstrap-icons'
import { useLessened } from '../providers/context.js'

import { useEffect, useState } from "react";
import axios from "axios";
import {useAuth, useTrack} from '../providers/context.js'

const PlaylistCard = ( props) => {

    const {track} = useTrack()
    console.log(track)

    return(
        <div src="" className={ styles1.container}>
            <div className={ styles1.photo}>
                <MusicNoteList />
            </div>
            <p className={ styles1.name}>{props.name}</p>
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
            <Bar />
            <div className={ styles.playlistsContainer}>
               {data.map((element, index) => {

                    return(
                    <PlaylistCard 
                        name = { element.listName}
                        key= { index}
                    />

                    )
                   })}
            </div>
        </div>
    )
}
