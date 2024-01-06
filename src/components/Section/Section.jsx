import { Component } from "react";
import styles from "./section.module.css"

class Section extends Component {
    render() {
        const {title} = this.props;
        const childEl = this.props.children;
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>{title}</h2>
                {childEl}
            </section>
        )
    }
}

export default Section