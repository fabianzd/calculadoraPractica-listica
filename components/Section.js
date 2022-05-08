import React from 'react'
import useCalculate from '../hooks/useCalculate'
import styles from '../styles/Section.module.css'


const Section = () => {
    const DEFAULT_NUMBER = 0
    let validadorResultado = false;

    const [resul, setResul, operator] = useCalculate(DEFAULT_NUMBER);


    const clear = () => {
        setResul(0);
    }

    const handleClickButton = (data) => {
        console.log('algo pequeño')

        if (resul === DEFAULT_NUMBER) {
            resul = '';
        }

        if (data.target.innerText === '=') {
            operator();
            return;
        }
        else {
            const newNumber = data.target.innerText;
            const concatenatedNumbers = `${resul}${newNumber}`;
            setResul(concatenatedNumbers)
        }
    }
    return (
        <div>
            <div className={`calculate ${styles.calculate}`}>
                <input className={styles.input} type="text" readOnly defaultValue={resul} />
                <section className={styles.section}>

                    <button
                        className={styles.button}
                        onClick={clear}>
                        C
                    </button>
                    <button
                        className={`op ${styles.op}`}
                        onClick={handleClickButton}>
                        /
                    </button>
                    <button
                        className={`op ${styles.op}`}
                        onClick={handleClickButton}>
                        *
                    </button>
                    <button
                        onClick={handleClickButton}
                        className={`op ${styles.op}`}>
                        -
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleClickButton}>
                        7
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleClickButton}>
                        8
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleClickButton}>
                        9
                    </button>
                    <button
                        onClick={handleClickButton}
                        className={`op ${styles.op}`}>
                        +
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleClickButton}>
                        4
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleClickButton}>
                        5
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleClickButton}>
                        6
                    </button>
                    <button
                        onClick={handleClickButton}
                        className={`op ${styles.op}`}>
                        -
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleClickButton} >
                        1
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleClickButton}>
                        2
                    </button>
                    <button className={styles.button}
                        onClick={handleClickButton}>
                        3
                    </button>
                    <button
                        onClick={handleClickButton}
                        className={styles.resul}>
                        =
                    </button>
                    <button
                        className={styles.cero}
                        onClick={handleClickButton}>
                        0
                    </button>
                    <button
                        className={`${styles.button} ${styles.point}`}
                        onClick={handleClickButton}
                        id="point">
                        .
                    </button>
                </section>
            </div>
        </div>
    )
}

export default Section