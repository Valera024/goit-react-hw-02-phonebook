import { Component } from "react";
import styles from "./filter.module.css"

class Filter extends Component {
    render() {
        const { onInput } = this.props;
        return (
            <div className={styles.container}>
                <label htmlFor="search">Find contacts by name</label>
                <input name="search" className={styles.filter} type="text" onInput={onInput}/>
            </div>
        )
    }
}

export default Filter