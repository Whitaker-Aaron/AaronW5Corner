
import test from "../assets/thumb.jpg"
import test_2 from "../assets/thumb_2.jpg"
import marked from "marked";
import React, { useEffect, useState, Component } from 'react'

import test_md from "../assets/markdown/test.md";
import botw_md from "../assets/markdown/coming_to_terms_with_botw.md"




let articles = [
    { readTime: 90, header: "Coming to terms with Breath of the Wild", description: "8 years later, with three different versions and a sequel, how has Breath of the Wild changed in perspective.", date: "6/25/2025", thumb: "https://ik.imagekit.io/0wjronbes/thumb.jpg?updatedAt=1751062747425", body: botw_md },
    { readTime: 25, header: "The Nintendo Switch 2 Launch Experience", description: "After years of rumors and anticipation, how does the next generation of Nintendo perform with mountains of expectation.", date: "6/25/2025", thumb: "https://ik.imagekit.io/0wjronbes/thumb_2.jpg?updatedAt=1751062983349", body: test_md }
]

let articles_2 = [

]

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