import {useEffect, useState} from 'react'

import style from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
        }, 
    [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value});
    }

    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className={style.form}>
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="name" 
                placeholder="Insira o nome do projeto"  
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            
            <Input 
                type="number" 
                text="Orçamento do projeto" 
                name="budget" 
                placeholder="Insira o orçamento"  
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            
            <Select
                text="Selecione a categoria" 
                name="category_id" 
                defaultValue={'default'} 
                options={categories} 
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : '' }
            />
            
            <SubmitButton value={btnText}/>
        </form>
    )
}

export default ProjectForm