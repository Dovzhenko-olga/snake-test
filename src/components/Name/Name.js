import { useState } from "react";

import styles from './Name.module.css';

const Name = () => {
  const [state, setState] = useState('');
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
    console.log(state);
    console.log(name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(state);
    console.log(state);
    console.log(name);
    setState('');
  }
  return (
    name === '' ?
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <input className={styles.input} type="text" value={state} onChange={handleChange} placeholder="Enter your name" />
        </label>
        <button className={styles.button} type="submit">Login</button>
      </form> :
      <div className={styles.name}>{name}</div>
  );
}
export default Name;