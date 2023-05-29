import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnTxt, projectData }) {

    const [service, setService] = useState({});

    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData)
    }

    function handleChange(e) {
        console.log(e.target.value);
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                onChange={handleChange}
                value={service.name}
            />

            <Input
                type="number"
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o valor do total"
                onChange={handleChange}
                value={service.cost}
            />

            <Input
                type="text"
                text="Descrição do Serviço"
                name="description"
                placeholder="Insira a descrição do serviço"
                onChange={handleChange}
                value={service.budget}
            />

            <SubmitButton text={btnTxt} />
        </form>
    )
}

export default ServiceForm;