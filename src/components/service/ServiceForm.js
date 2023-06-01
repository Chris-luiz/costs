import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css'
import { useForm } from 'react-hook-form';
import { object, string, number } from 'yup';

const serviceSchema = object({
    nome: string().required('Prencha o Campo').min(3),
    custo: number().required('Prencha o Campo').positive().integer(),
    descricao: string().required('Prencha o Campo').min(3)
});

function ServiceForm({ onSubmit, btnTxt, projectData }) {

    const [service, setService] = useState({});

    const [errors, setErrors] = useState({});
    const { register, handleSubmit } = useForm();

    const submit = async (e) => {
        try {
            const result = await serviceSchema.validate(e, {abortEarly: false});
            console.log(result)
        } catch (err) {

            err.inner.forEach(erro => console.error(erro.message))
        }

        // e.preventDefault();
        // projectData.services.push(service);
        // onSubmit(projectData)
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
            <Input
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                onChange={handleChange}
                value={service.name}
                rest={{ ...register('nome') }}
            />

            <Input
                type="number"
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o valor do total"
                onChange={handleChange}
                value={service.cost}
                rest={{ ...register('custo') }}
            />

            <Input
                type="text"
                text="Descrição do Serviço"
                name="description"
                placeholder="Insira a descrição do serviço"
                onChange={handleChange}
                value={service.budget}
                rest={{ ...register('descricao') }}
            />

            <SubmitButton text={btnTxt} />
        </form>
    )
}

export default ServiceForm;