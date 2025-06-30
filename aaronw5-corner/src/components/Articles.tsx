import React, { useEffect, useState, Component } from 'react'

interface Props {
    onStart
}

function Articles(props: Props) {

    const [backendArticles, setBackendArticles] = useState([{}]);

    useEffect(() => {


        fetch("http://localhost:5000/articles").then(
            response => response.json()
        ).then(
            data => {
                setBackendArticles(data);
                props.onStart(data);
            }
        )

    }, [])

    return <>
    </>
}



export default Articles;