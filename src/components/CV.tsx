import React from "react";
import { useLanguage } from "../context/language-context";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Privacy = () => {
    const { language } = useLanguage();

    return (
        <React.Fragment>
            {language === "FR" ? (
                <article className="flex flex-col gap-6 max-w-[70vw] break-words">
                    <h1>CV</h1>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <div style={{
                            height: '750px',
                            width: '100%',
                        }}>
                            <Viewer fileUrl="/cv.pdf" />
                        </div>
                    </Worker>
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
