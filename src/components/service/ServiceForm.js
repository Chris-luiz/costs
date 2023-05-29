import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnTxt, projectData }) {

    const [service, setService] = useState();

    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />

            <Input
                type="number"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o valor do total"
                handleOnChange={handleChange}
            />

            <Input
                type="text"
                text="Descrição do Serviço"
                name="description"
                placeholder="Insira a descrição do serviço"
                handleOnChange={handleChange}
            />

            <SubmitButton text={btnTxt} />
        </form>
    )
}

export default ServiceForm;