import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"

function NewProject() {
  
    return(
        <form className={styles.newproject_container}>
            <div>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois acrescentar seus serviços</p>
                <ProjectForm btnText="Criar Projeto"/>
            </div>
        </form>
    )
}

export default NewProject