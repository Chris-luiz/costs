import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './ProjectForm.module.css'
import { useForm } from 'react-hook-form';
import { CATEGORIES } from '../../constants/categories';

const ProjectForm = ({ onSubmit, btnText, projectData }) => {

    const { register, handleSubmit } = useForm(projectData && {
        defaultValues: {
            name: projectData.name,
            budget: projectData.budget,
            category: projectData.category
        }
    });

    const submit = e => onSubmit({ ...projectData, name: e.name, budget: e.budget, category: e.category });

    return (
        <form onSubmit={handleSubmit(submit)} className={style.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                rest={{ ...register('name') }}
            />

            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento"
                rest={{ ...register('budget') }}
            />

            <Select
                text="Selecione a categoria"
                name="category_id"
                defaultValue={'default'}
                options={CATEGORIES}
                rest={{ ...register('category') }}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm