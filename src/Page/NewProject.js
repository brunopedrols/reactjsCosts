import { useNavigate } from "react-router-dom"
import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"

function NewProject() {

    const history = useNavigate ()

    function createPost(project) {

        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/project',{
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirect
            history ('/projects', { message: 'Projeto criado com sucesso!'})
        })
        .catch((err) => console.log(err))
    }
  
    return(
        <form className={styles.newproject_container}>
            <div>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois acrescentar seus serviços</p>
                <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
            </div>
        </form>
    )
}

export default NewProject