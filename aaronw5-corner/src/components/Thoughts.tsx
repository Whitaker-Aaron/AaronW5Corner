
import Navbar from "./Navbar.tsx";
import stuff from "../assets/stuffI'veWorkedON.png";
import projects from "../assets/developmentProjects.png";
import thoughts from "../assets/latestThoughts.png";
import designContainer from "../assets/artContainer.png"
import backButton from "../assets/backButton.png";

//LIGHTBOX
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

//MOTION 
import { motion } from "motion/react";

//ARTICLES
import articles from "./Articles.tsx";


import WorksHeader from "./WorkHeader.tsx";
import DevProject from "./DevProject.tsx";
import Design from "./Design.tsx";
import Button from "./Button.tsx";
import ArticleThumb from "./ArticleThumb.tsx";



//LIBRARIES
import { useState } from "react";

function Thoughts() {

    //ARTICLE VARIABLES
    //USE STATES
    const [articleOpen, setArticleOpen] = useState(false);
    const [articleHeader, setArticleHeader] = useState("");
    const [articleDate, setArticleDate] = useState("");
    const [articleDescription, setArticleDescription] = useState("");
    const [articleBody, setArticleBody] = useState("");

    //ARTICLE MAPPING 
    const article = articles.map((value, index) => {
        return <ArticleThumb onClick={() => handleOpenArticle(index)} thumb={value.thumb} index={index} readTime={value.readTime} date={value.date} header={value.header} description={value.description}></ArticleThumb >
    });

    //FUNCTIONS
    const handleOpenArticle = (index) => {


        //Pass in the associated values with the corresponding article that was clicked on.
        setArticleHeader(articles[index].header);
        setArticleDate(articles[index].date);
        setArticleDescription(articles[index].description);
        setArticleBody("Test Body");

        //Change the DOM to reflect the current article 
        setArticleOpen(true);
    }


    return <>
        {articleOpen ?
            <>
                <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.webp') + ')', height: "100vh", backgroundSize: "100%" }}>
                    <br></br>
                    <Navbar home={true} currentPage="thoughts"></Navbar>
                    <p>{articleHeader}</p>
                    <p>{articleDate}</p>
                    <p>{articleDescription}</p>
                    <p>{articleBody}</p>
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