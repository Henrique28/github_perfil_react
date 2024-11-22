import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [carregamento, setCarregamento] = useState(true);

    useEffect(() => {
        setCarregamento(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setCarregamento(false);
                    setRepos(resJson);
                }, 2000)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {carregamento ? (
                <h2>Carregando...</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) =>
                        <li className={styles.listItem} key={id}>
                            <div>
                                <b>Nome: </b>
                                {name}
                            </div>

                            <div>
                                <b>Linguagem: </b>
                                {language}
                            </div>

                            <a className={styles.listLink} target="_blank" href={html_url}>Visiar no GitHub</a>
                        </li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default ReposList