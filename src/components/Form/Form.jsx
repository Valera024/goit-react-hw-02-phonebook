import { Component } from "react";
import styles from "./form.module.css"

class Form extends Component {
    render() {
        const { onSubmit } = this.props;
        return (
            <form className={styles.form} onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className={styles.input} required />
                <label htmlFor="number">Number</label>
                <input type="tel" name="number" className={styles.input } required />
                <button type="submit" className={styles.btn}>Add contact</button>
            </form>
        )
    }
}

export default Form