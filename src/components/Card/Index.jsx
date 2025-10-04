import styles from './styles.module.css'

export default function Listagem( {nome, temSobrenome} ) {
  

        let conteudo = nome;
        if (temSobrenome){
          conteudo = nome + '*-*'
        }

        return(
          <div className='container'>
            <div className={styles.container}>
              <li className={styles.title}>{conteudo}</li>
            </div>
          </div>
        )
  }
 
