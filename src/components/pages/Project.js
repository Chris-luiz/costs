import { parse, v4 as uuidv4} from 'uuid';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import Message from '../layout/Message';
import ProjectForm from '../project/ProjectForm';
import ServiceForm from '../service/ServiceForm';
import styles from "./Project.module.css";

function Project(){
    
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [service, setService] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();
    
    const toggleProjectForm = () => setShowProjectForm(!showProjectForm)
    const toggleShowServiceForm = () => setShowServiceForm(!showServiceForm)
    
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(data => {
                setProject(data)
                setService(data.service)
            }) 
            .catch(err => console.log(err))
        }, 0)
    }, [id]);

    function editPost(project){
        if(project.budget < project.cost){
            setMessage('O orçamento não pode ser menor do que o custo do projeto')
            setType('error');
            return false;
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then(res => res.json())
        .then(data => {
            setProject(data);
            setShowProjectForm(false);
            setMessage('Projeto Atualizado!!');
            setType('success');
        })
        .catch(err => console.log(err))
    }


    function createService(project){
        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4();

        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do servico')
            setType('error');
            project.services.pop()
            return false
        }

        project.cost = newCost;

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(res => res.json())
        .then(data => {
            setService(data.services)
            setShowServiceForm(!showServiceForm)
            setMessage('Serviço adicionado!')
            setType('success')
        })
        .catch(err => console.log(err))
    } 

    function removeService(id, cost) {
        const servicesUpdated = project.services.filter(
          (service) => service.id !== id,
        )
    
        const projectUpdated = project
    
        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
    
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectUpdated),
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(projectUpdated)
            setService(servicesUpdated)
            setMessage('Serviço removido com sucesso!')
          })
      }
   
    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message msg={message} type={type} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1> 
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar Projetos' : 'Fechar'}    
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: </span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total de Utilizado: </span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm 
                                        handleSubmit={editPost}
                                        btnText="Concluir edição"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toggleShowServiceForm}>
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>

                            <div className={styles.project_info}>
                                {showServiceForm && 
                                    <ServiceForm 
                                        handleSubmit={createService}
                                        btnTxt="Adicionar Serviço"
                                        projectData={project}
                                    />
                                }
                            </div>
                        </div>

                        <h2>Serviços</h2>
                        <Container customClass='column'>
                            <p>a</p>
                            {/* {service.length > 0 
                            
                            } */}
                        </Container>
                    </Container>
                </div>
            ) : ( <Loading />)
            }
        </>
    )
}
export default Project;
