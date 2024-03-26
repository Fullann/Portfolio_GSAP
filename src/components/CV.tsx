import React from "react";
import { useLanguage } from "../context/language-context";

const Privacy = () => {
    const { language } = useLanguage();

    return (
        <React.Fragment>
            {language === "FR" ? (
                <article className="flex flex-col">
                    
                    <iframe src='/cv.pdf' width='100%' height='500px'/>
                </article>
                
            ) : (
                <article className="flex flex-col gap-6 max-w-[70vw] break-words">
                    <h1>CV</h1>
                </article>
            )}
        </React.Fragment>
    );
};

export default Privacy;
