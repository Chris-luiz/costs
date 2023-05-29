import styles from './SubmitButton.module.css'

function SubmitButton({ value }) {
    return (
        <div>
            <button className={styles.btn} type="submit">{value}</button>
        </div>
    )
}

export default SubmitButton