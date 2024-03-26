import React from "react";
import { useLanguage } from "../context/language-context";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "FR" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Mentions Légales</h1>
          <p>Fullann.ch</p>
          <p>Lausanne 1004 Suisse</p>
          <p>Email : nathan@fullann.ch</p>
          <p>Responsable du contenu selon § 55 Abs. 2 RStV : Nathan Füllemann</p>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Imprint</h1>
          <p>Fullann.ch</p>
          <p>Lausanne 1004 Suisse</p>
          <p>Email: nathan@fullann.ch</p>
          <p>Responsible for the content according to § 55 Abs. 2 RStV: Nathan Füllemann</p>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
