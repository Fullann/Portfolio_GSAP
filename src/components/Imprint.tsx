import React from "react";
import { useLanguage } from "../context/language-context";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "FR" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Notice du site </h1>
          <p>ヽ(´▽`)/ ヽ(´▽`)/</p>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Site Notice</h1>
          <p>ヽ(´▽`)/ ヽ(´▽`)/</p>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
