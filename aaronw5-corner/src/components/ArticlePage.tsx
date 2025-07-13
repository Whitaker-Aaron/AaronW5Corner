
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState, Component } from 'react'

//ASSETS
import Navbar from "./Navbar.tsx";
import heart_unfilled from "../assets/heartIcon_unclicked.png"
import heart_filled from "../assets/heartIcon_uclicked.png"
import stuff from "../assets/stuffI'veWorkedON.png";
import projects from "../assets/developmentProjects.png";
import thoughts from "../assets/latestThoughts.png";
import designContainer from "../assets/artContainer.png"
import backButton from "../assets/backButton.png";
import line from "../assets/modalLine.png";


import ReactMarkdown from 'react-markdown'
import { CookiesProvider, useCookies } from 'react-cookie'

import test_md from "../assets/markdown/test.md";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

//MOTION 
import { motion } from "motion/react";


import Button from "./Button.tsx";


interface Props {

}

function ArticlePage(props: Props) {

    const location = useLocation();
    const id = useParams();

    //RERENDER PAGE 
    const [key, setKey] = useState(0)

    //USE STATES
    const [article, setArticle] = useState({});
    const [markdown, setMarkdown] = useState("");

    //COOKIES FOR PAGE
    const cookieName = "heartPressed" + id.id
    const [cookies, setCookies] = useCookies([cookieName])

    useEffect(() => {
        fetchArticleData()
    }, [])

    //POPULATE DATA 
    const populateArticleData = () => {

    }

    const fetchArticleData = () => {
        fetch("https://aaron-w5-corner-dvpp.vercel.app/articles/" + id.id).then(
            response => response.json()
        ).then(
            data => {
                setArticle(data);
                setMarkdown(data.body.data)
            }
        )
    }

    const patchArticleData = () => {
        fetch("https://aaron-w5-corner-dvpp.vercel.app/articles/" + id.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                { hearts: article.hearts }
            )
        }).then(resp => resp.json());
    }

    const handleReturnButton = () => {
        navigateTo("/thoughts")
    }

    const handleHeartButton = () => {

        if (cookies[cookieName] === true) return;
        article.hearts += 1;
        setArticle(article);
        setKey(key + 1)
        setCookies(cookieName, true, { path: "https://aaron-w5-corner-dvpp.vercel.app/articles/" + id.id })
        patchArticleData();
    }

    const navigate = useNavigate();
    const navigateTo = (route: string) => {
        navigate(route, { state: { id: 1, name: 'sabaoon' } });
    }

    return <>
        < div className="bg-image" style={{ position: "relative", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundImage: 'url(' + require('../assets/background_1.webp') + ')', height: "100vh" }
        }>
            <br></br>
            <Navbar home={true} currentPage="thoughts"></Navbar>

            <div style={{ height: "88%", width: "100%", display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginLeft: "5%", marginRight: "8%", marginTop: 50, width: "30%" }}>
                    <div style={{ maxWidth: "100% ", maxHeight: "100% ", display: "flex", justifyContent: "space-between" }}>
                        <Button negateMarginLeft={true} marginRight={0} marginTop={"15px"} height={70} width={70} target={""} image={backButton} disableAfterClick={false} message={"Works"} onClick={() => { handleReturnButton() }}></Button>
                        <p className="h1" style={{ width: "100%", maxWidth: "100% ", maxHeight: "100% ", marginLeft: "3% ", opacity: 0.9, fontFamily: "Mark Pro" }}>{article.header}</p>
                    </div>
                    <p style={{ opacity: 0.8, fontSize: 20, marginTop: "3%" }}>{article.description}</p>
                    <div style={{ marginTop: 12, maxWidth: "92% ", maxHeight: "100% ", display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontSize: 12, marginTop: 15, fontFamily: "Mark Pro Medium" }}>Uploaded: {article.date}</p>
                        <div style={{ maxWidth: "10% ", maxHeight: "100% ", display: "flex", justifyContent: "space-evenly" }}>
                            <Button onClick={() => { handleHeartButton() }} pressedOnLoad={cookies[cookieName]} marginTop={0} height={40} width={40} target={""} secondImage={heart_filled} image={heart_unfilled} disableAfterClick={true} message={""}></Button>
                            {
                                article.hearts ?
                                    <p style={{ opacity: 0.65, fontSize: 16, marginRight: 10, marginTop: 12, fontFamily: "Mark Pro Medium" }}>{article.hearts}</p>
                                    :
                                    <p style={{ opacity: 0.65, fontSize: 16, marginTop: 12, fontFamily: "Mark Pro Medium" }}>0</p>
                            }
                        </div>
                    </div>


                    <img style={{ marginTop: "5%", boxShadow: "8px 8px 7.5px grey", maxWidth: "100%", maxHeight: "100%" }} src={article.thumb}></img>
                </div>
                <motion.div
                    initial={{ opacity: 0.0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.2 }}
                    style={{ maxWidth: "100%", maxHeight: "100%", backgroundRepeat: "no-repeat", width: 1100, backgroundImage: 'url(' + require('../assets/worksContainer.webp') + ')' }}>
                    <div style={{ overflow: "auto", backgroundRepeat: "no-repeat", backgroundImage: 'url(' + require('../assets/articleContainer.png'), maxWidth: "100%", maxHeight: "100%", width: 1050, height: 820, whiteSpace: "pre-wrap", fontFamily: "Mark Pro", marginTop: 20, marginLeft: "2.5%" }}>
                        <div style={{ overflow: "auto", marginTop: 10, maxHeight: 800, padding: 60 }}>
                            <ReactMarkdown skipHtml={false}>
                                {markdown}
                            </ReactMarkdown>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div >
    </>
}

export default ArticlePage