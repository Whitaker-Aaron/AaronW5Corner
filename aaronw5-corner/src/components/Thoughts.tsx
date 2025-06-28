
import Navbar from "./Navbar.tsx";
import stuff from "../assets/stuffI'veWorkedON.png";
import projects from "../assets/developmentProjects.png";
import thoughts from "../assets/latestThoughts.png";
import designContainer from "../assets/artContainer.png"
import backButton from "../assets/backButton.png";
import line from "../assets/modalLine.png";
import ReactMarkdown from 'react-markdown'

import test_md from "../assets/markdown/test.md";

//LIGHTBOX
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

//MOTION 
import { motion } from "motion/react";

//IMAGE SIZE
import imageSize from "fs-imagesize";

//ARTICLES
import articles from "./Articles.tsx";


import WorksHeader from "./WorkHeader.tsx";
import DevProject from "./DevProject.tsx";
import Design from "./Design.tsx";
import Button from "./Button.tsx";
import ArticleThumb from "./ArticleThumb.tsx";



//LIBRARIES
import { useState, useEffect } from "react";

function Thoughts() {



    const [markdown, setMarkdown] = useState("");



    //ARTICLE VARIABLES
    //USE STATES
    const [articleOpen, setArticleOpen] = useState(false);
    const [articleHeader, setArticleHeader] = useState("");
    const [articleDate, setArticleDate] = useState("");
    const [articleDescription, setArticleDescription] = useState("");
    const [articleThumb, setArticleThumb] = useState("");
    const [articleBody, setArticleBody] = useState("");

    //ARTICLE MAPPING 
    const article = articles.map((value, index) => {
        return <ArticleThumb onClick={() => handleOpenArticle(index)} thumb={value.thumb} index={index} readTime={value.readTime} date={value.date} header={value.header} description={value.description}></ArticleThumb >
    });

    useEffect(() => {

    }, []);



    //FUNCTIONS
    const handleOpenArticle = (index) => {


        //Pass in the associated values with the corresponding article that was clicked on.
        setArticleHeader(articles[index].header);
        setArticleDate(articles[index].date);
        setArticleDescription(articles[index].description);
        setArticleThumb(articles[index].thumb);

        fetch(articles[index].body)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));






        //Change the DOM to reflect the current article 
        setArticleOpen(true);
    }

    const handleReturnButton = () => {
        setArticleHeader("");
        setArticleDate("");
        setArticleDescription("");
        setArticleThumb("")
        setArticleBody("");

        setArticleOpen(false);
    }


    return <>
        {articleOpen ?
            <>
                <div className="bg-image" style={{ position: "relative", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundImage: 'url(' + require('../assets/background_1.webp') + ')', height: "100vh" }}>
                    <br></br>
                    <Navbar home={true} currentPage="thoughts"></Navbar>
                    <div style={{ height: "88%", width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <div style={{ marginLeft: "5%", marginRight: "8%", marginTop: 50, width: "30%" }}>
                            <div style={{ maxWidth: "100% ", maxHeight: "100% ", display: "flex", justifyContent: "space-between" }}>
                                <Button negateMarginLeft={true} marginRight={0} marginTop={"15px"} height={70} width={70} target={""} image={backButton} disableAfterClick={false} message={"Works"} onClick={() => { handleReturnButton() }}></Button>
                                <p className="h1" style={{ width: "100%", maxWidth: "100% ", maxHeight: "100% ", marginLeft: "3% ", opacity: 0.9, fontFamily: "Mark Pro" }}>{articleHeader}</p>
                            </div>
                            <p style={{ fontSize: 12, marginTop: 35, fontFamily: "Mark Pro Medium" }}>Uploaded: {articleDate}</p>
                            <p style={{ opacity: 0.8, fontSize: 20, marginTop: "0%" }}>{articleDescription}</p>
                            <img style={{ marginTop: "5%", boxShadow: "8px 8px 7.5px grey", maxWidth: "100%", maxHeight: "100%" }} src={articleThumb}></img>
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
                </div>
            </>
            :
            <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.webp') + ')', height: "100vh", backgroundSize: "100%" }}>
                <br></br>
                <Navbar home={true} currentPage="thoughts"></Navbar>
                <div style={{ height: "88%", width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                    <div style={{ marginRight: "18%", marginTop: 50, width: "30%" }}>
                        <motion.img
                            initial={{ opacity: 0.0 }}
                            animate={{ opacity: 1.0 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            style={{ scale: 1, maxWidth: 769, maxHeight: 680, marginLeft: 30, marginRight: 120 }} src={thoughts}></motion.img>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ fontFamily: "Mark Pro", fontSize: 24, marginTop: "0%", marginLeft: "25%", textAlign: "center" }}>Write-ups and articles <br></br>of my current thoughts / ideas.</p>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0.0 }}
                        animate={{ opacity: 1.0 }}
                        transition={{ delay: 0.2 }}
                        style={{ overflow: "auto", width: 990, backgroundImage: 'url(' + require('../assets/worksContainer.webp') + ')' }}>
                        <div style={{ marginLeft: "5%" }}>
                            {article}
                        </div>
                    </motion.div>
                </div>
            </div >
        }
    </>
}

export default Thoughts;