import React, { useState } from "react";
import axios from 'axios';
import { Link, useHistory} from 'react-router-dom'
import Create from '../components/Create';

const CreateView = () => {

    const [authors, setAuthors] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([])
    const history = useHistory();

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res => {
                setAuthors([...authors, res.data])
                history.push('/')
            })
            .catch(err => {
                // get the errors from err.response.data
                const errorResponse = err.response.data.errors;
                //make tep error arry to push the massages from errors
                const errorArr = [];
                // loop through all errors and get the message
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                //set Errors
                setErrors(errorArr);
            })
    }

    return(
        <div>
            <Link to="/">Home</Link>
            <p>Add a new author: </p>
            <Create 
            onSubmitProp={createAuthor} 
            initialName="" 
            />
            {errors.map((err, idx) => <p key={idx} style={{color:"red"}}>{err}</p>)}
        </div>
    ) 
}

export default CreateView;