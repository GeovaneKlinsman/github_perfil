import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);
        })
    }, [nomeUsuario]);
    
    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <div>
                    <div className={styles.listStats}>
                        <img loading="lazy" height="100%" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${nomeUsuario}&layout=compact&langs_count=7&theme=dracula`}/>
                        <img loading="lazy" height="100%" src={`https://github-readme-stats.vercel.app/api?username=${nomeUsuario}&show_icons=true&theme=dracula&include_all_commits=true&count_private=true`}/>
                    </div>
                    <ul className={styles.list}>
                        {repos.map(repositorio => (
                            <li className={styles.listItem} key={repositorio.id}>
                                <div className={styles.ItemName}>
                                    <b>Nome:</b>
                                    {repositorio.name}
                                </div>
                                <div className={styles.ItemLanguage}>
                                    <b>Linguagem:</b>
                                    {repositorio.language}
                                </div>
                                <a className={styles.ItemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ReposList;

//https://api.github.com/users/AndreDG88/repos