import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../layout/Container';
import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import Loading from '../layout/Loading';
import styles from './Projects.module.css'

function Projects() {

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState();

    const location = useLocation();

    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            fetch('http://localhost:5000/projects')
                .then(res => res.json())
                .then(data => {
                    setProjects(data);
                    setIsLoading(false);
                })
                .catch(err => console.log(err))
        }, 1000)

    }, []);

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(() => {
                setProjects(projects.filter(project => project.id !== id));
                setProjectMessage('Projeto Removido Com sucesso!');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={`${styles.project_container}`}>
            
            <div className={`${styles.title_container}`}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Novo Projeto' />
            </div>

            {message && <Message msg={message} type={'success'} />}
            {projectMessage && <Message msg={projectMessage} type={'success'} />}

            <Container customClass="start">
                {projects &&
                    projects.map(project => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))
                }
                {isLoading && <Loading />}
                {!isLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    )
}

export default Projects;