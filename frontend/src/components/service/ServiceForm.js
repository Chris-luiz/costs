import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import { useForm } from 'react-hook-form';
import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const serviceSchema = object({
    name: string().required('Prencha o Campo').min(3, 'deve possuir no minimo 3 caracteres'),
    budget: number('escreva numeros').required('Prencha o Campo').positive('Deve ser positivo'),
    description: string().required('Prencha o Campo').min(3, 'deve possuir no minimo 3 caracteres')
}).required();

function ServiceForm({ onSubmit, btnTxt, projectData }) {

    const [service, setService] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(serviceSchema)
    });

    const submit = async (data) => {
        try {
            const result = await serviceSchema.validate(data, { abortEarly: false });
            projectData.services.push(result);
            onSubmit(projectData)
        } catch (err) {
            errors.inner.forEach(erro => {
                console.error(erro.message)
            })
        }
    }

    const handleChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='w-full'>
            <Input
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                onChange={handleChange}
                value={service.name}
                rest={{ ...register('name') }}
                error={errors.name?.message}
            />

            <Input
                type="number"
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o valor do total"
                onChange={handleChange}
                value={service.cost}
                rest={{ ...register('budget') }}
                error={errors.budget?.message}
            />

            <Input
                type="text"
                text="Descrição do Serviço"
                name="description"
                placeholder="Insira a descrição do serviço"
                onChange={handleChange}
                value={service.budget}
                rest={{ ...register('description') }}
                error={errors.description?.message}
            />

            <SubmitButton text={btnTxt} />
        </form>
    )
}

export default ServiceForm;