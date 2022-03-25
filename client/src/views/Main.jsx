import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Main.module.css'

const Main = (props) => {
    
    const [authors, setAuthors] = useState([])

    // Get All Authors
    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data);
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    //Delete one Author by Id
    const deleteAuthor = (deletedId) => {
        console.log(deletedId);

        axios.delete("http://localhost:8000/api/authors/"+ deletedId)
            .then(res => {
                console.log(res.data);
                console.log("Delete Success!")
                
                //remove from the DOM after successfully delete
                setAuthors(authors.filter((author)=> author._id !== deletedId))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/authors/new">Add an Author</Link>
            <p>We have quotes by:</p>
            <div className={styles.tablePosition}>
                <table className={styles.tableBorder}>
                    <tbody>
                        <tr>
                            <th className={styles.tableBorder}>Author</th>
                            <th className={styles.tableBorder}>Actions available</th>
                        </tr>
                        {
                            authors.map((author, i) => {
                                return(
                                    <tr key={author._id}>
                                        <td className={styles.tableBorder}>{author.name}</td>
                                        <td className={styles.tableBorder}>
                                            <Link to={"/authors/update/"+ author._id}><button className={styles.marginRight}>Edit</button></Link>
                                            <button onClick={()=>deleteAuthor(author._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Main;