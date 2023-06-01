import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './ProjectForm.module.css'
import { useForm } from 'react-hook-form';
import { CATEGORIES } from '../../constants/categories';

import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const projectSchema = object({
    name: string().required().min(3),
    budget: number().required().positive().integer(),
    category: string().required()
}).required()

const ProjectForm = ({ onSubmit, btnText, projectData }) => {

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(projectSchema),
            defaultValues: projectData && {
                name: projectData.name,
                budget: projectData.budget,
                category: projectData.category
            },
        });

    const submit = async data => {
        try {
            const result = await projectSchema.validate(data, { abortEarly: false });
            if (result) {
                onSubmit({ ...projectData, name: data.name, budget: data.budget, category: data.category })
            };
        } catch (errors) {
            errors.inner.forEach(erro => {
                console.error(erro.message)
            })
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={style.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                rest={{ ...register('name') }}
                error={errors.name?.message}
            />

            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento"
                rest={{ ...register('budget') }}
                error={errors.budget?.message}
            />

            <Select
                text="Selecione a categoria"
                name="category_id"
                defaultValue={'default'}
                options={CATEGORIES}
                rest={{ ...register('category') }}
                error={errors.category?.message}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm