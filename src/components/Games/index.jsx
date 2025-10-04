import { games } from "../../assets/data"
import styles from './styles.module.css'
import LinkButton from "./LinkButton"

export default function Games() {
    const listaGames = games.map(
        (game) => 
            <div className={styles.container} key={game.id}>
                   <img
                        src={game.coverImage}
                        alt={game.title}
                        className={styles.poster} 
                    />
            <div>
                <h3 className={styles.title}>{game.title}</h3>
                <div className={styles.description}>
                    {game.description}.
                </div>
                <LinkButton className={styles.button}
                href={'https://www.google.com/search?=' + game.title}> Saiba Mais </LinkButton>
            </div>
            
            </div>
    )


    return(
        <>
        {listaGames}
        </>  
    )
}