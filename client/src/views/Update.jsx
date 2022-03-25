import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useHistory } from 'react-router-dom';
import Create from '../components/Create';

const Update = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([])
    const history = useHistory();


    useEffect(() => {
        console.log('UseEffect is working')
        axios.get("http://localhost:8000/api/authors/" +id)
            .then(res => {
                console.log(res.data)
                setAuthor(res.data)
                setLoaded(true);
            })            
    }, [])

    const updateAuthor = author => {
        axios.put("http://localhost:8000/api/authors/" +id, author)
            .then(res => {
                console.log(res)
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
            <p>Edit this author: </p>
            {
                loaded && (
                <Create 
                onSubmitProp = {updateAuthor}
                initialName = {author.name}
            />            
                )                
            } 
            {errors.map((err, idx) => <p key={idx} style={{color:"red"}}>{err}</p>)}
            
        </div>
    )
}

export default Update;