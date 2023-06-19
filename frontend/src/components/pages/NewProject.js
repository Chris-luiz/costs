import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from './../project/ProjectForm'



function NewProject() {

    const navigate = useNavigate()

    const createPost = async (project) => {

        try {
            project.cost = 0
            project.services = []

            fetch("http://localhost:5000/projects", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(project)
            })
                .then((response) => response.json())
                .then(() => {
                    navigate('/projects', { state: { message: 'Projeto criado com sucesso' } })
                })
                .catch((error) => console.log(error))

        } catch (errors) {
            errors.inner.forEach(error => {
                console.log(error.message)
            })
        }
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm onSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}

export default NewProject;