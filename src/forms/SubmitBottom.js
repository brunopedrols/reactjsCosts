import styles from "./SubmitBottom.module.css"

function SubmitBottom({ text  }) {

    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitBottom