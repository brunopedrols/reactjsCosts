import styles from "./SubmitBottom.module.css"

function SubmitBottom({ text  }) {

    return(
        <div>
            <buttom className={styles.btn}>{text}</buttom>
        </div>
    )
}

export default SubmitBottom