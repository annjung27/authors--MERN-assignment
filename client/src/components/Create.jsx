import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import styles from './Create.module.css'

const Create = props => {
    // for resusing component
    const {initialName, onSubmitProp} = props;
    // make state to store input value
    const [name, setName] = useState(initialName);
    //useHistory for redirecting page to  home after submission
    const history = useHistory();

    
    
    //make function that handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name})
    }
    

    return(
        <div>            
            <div className={styles.formContainer}>
                <form className={styles.formStyle} onSubmit={handleSubmit}>                    
                    <label className={styles.marginBottom}>Name:</label>
                    <input type="text" onChange={(e)=> setName(e.target.value)} value={name} name="name" className={styles.marginBottom}></input>
                    <div>
                        <button type="submit" className={styles.marginRight}>Submit</button>
                        <Link to="/"><button>Cancel</button></Link>
                    </div>                                                    
                </form>
                
            </div>
            
        </div>
    )
}

export default Create;