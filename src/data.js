import React, { useState, useEffect } from "react";
import styles from './data.css'

const Data = () => {
    const [employess, setEmployess] = useState([])
    useEffect(() => {
        fetch(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`)
            .then((res) => {
                res.json()
                    .then((data) => {
                        setEmployess(data)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(employess)
    return (
        <div>
            {
                employess.map((worker) => {
                    return (
                        <div>
                            <div key={worker.id}>
                                <div className={styles.content}>
                                    <img src={worker.imageUrl} />
                                    <p>First Name: {worker.firstName}</p>
                                    <p>Last Name: {worker.lastName}</p>
                                    <p>Age: {worker.age}</p>
                                    <p>Number: {worker.contactNumber}</p>
                                    <p>Birthday: {worker.dob}</p>
                                    <p>Email: {worker.email}</p>
                                    <p>Salary: {worker.salary}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Data