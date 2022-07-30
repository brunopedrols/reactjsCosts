import { useState, useEffect } from "react";

import Select from "../forms/Select";
import Input from "../forms/Input";
import SubmitBottom from "../forms/SubmitBottom";
import styles from "./ProjectForm.module.css";

function ProjectForm({btnText}) {

    const [categories, setCategories] = useState ([])

    useEffect(() => {

        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            },
        })
    
            .then((resp) => resp.json())
            .then((data) => (
                setCategories(data)
            ))
            .catch((err) => console.log(err))
    }, [])

    return(
        <form className={styles.form}>
            <Input 
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type= "number"
                text= "Orçamento do projeto"
                name= "budget"
                placeholder="Insira o orçamento total"
            />
            <Select 
                name= "category_id" 
                text= "Selecione a categoria"
                options= {categories}
            />
            <SubmitBottom text={btnText}/>
        </form>
    )
}

export default ProjectForm