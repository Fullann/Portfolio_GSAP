import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "FR" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Politique de Confidentialité</h1>
          <p>La confidentialité de nos visiteurs est extrêmement importante pour nous. Ce document de politique de confidentialité décrit les types d'informations personnelles reçues et collectées par fullann.ch et comment elles sont utilisées.</p>

          <h2>Collecte de l'Information et Utilisation</h2>
          <p>Nous ne collectons que les informations personnelles que vous nous fournissez volontairement, telles que votre nom, votre adresse e-mail et d'autres informations de contact, lorsque vous nous contactez via notre formulaire de contact ou d'autres moyens de communication. Ces informations ne seront utilisées que dans le but spécifique de répondre à votre demande ou de vous fournir les services demandés.</p>

          <h2>Cookies</h2>
          <p>Notre site web utilise des cookies pour améliorer l'expérience des utilisateurs. Les cookies sont de petits fichiers texte placés sur votre ordinateur pour collecter des informations standard de journal Internet et des informations sur le comportement des visiteurs. Cette information est utilisée pour suivre le comportement des visiteurs sur le site et compiler des rapports statistiques sur l'activité du site. Nous utilisons également Google Analytics, un service d'analyse web fourni par Google, Inc. ("Google"). Google Analytics utilise des cookies pour aider à analyser la manière dont les utilisateurs utilisent le site.</p>

          <h2>Partage de l'Information</h2>
          <p>Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager des informations avec des tiers de confiance qui nous aident à exploiter notre site web ou à mener nos activités, tant que ces parties acceptent de garder ces informations confidentielles.</p>

          <h2>Liens vers des sites tiers</h2>
          <p>Notre site web peut contenir des liens vers d'autres sites web. Veuillez noter que nous n'avons aucun contrôle sur le contenu ou les pratiques de confidentialité de ces sites tiers. Par conséquent, nous déclinons toute responsabilité pour les politiques de confidentialité ou le contenu de ces sites liés.</p>

          <h2>Consentement</h2>
          <p>En utilisant notre site web, vous consentez à notre politique de confidentialité et acceptez ses conditions.</p>

          <h2>Mises à Jour de la Politique de Confidentialité</h2>
          <p>Nous nous réservons le droit de mettre à jour ou de modifier notre politique de confidentialité à tout moment. Toute modification apportée à notre politique de confidentialité sera affichée sur cette page.</p>

          <p>Si vous avez des questions concernant notre politique de confidentialité, n'hésitez pas à nous contacter.</p>

        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Privacy Policy</h1>
          <p>The privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information received and collected by fullann.ch and how it is used.</p>

          <h2>Information Collection and Use</h2>
          <p>We only collect personal information that you voluntarily provide to us, such as your name, email address, and other contact information, when you contact us via our contact form or other means of communication. This information will only be used for the specific purpose of responding to your inquiry or providing the requested services.</p>

          <h2>Cookies</h2>
          <p>Our website uses cookies to enhance user experience. Cookies are small text files placed on your computer to collect standard Internet log information and visitor behavior information. This information is used to track visitor behavior on the site and compile statistical reports on site activity. We also use Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses cookies to help analyze how users use the site.</p>

          <h2>Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.</p>

          <h2>Links to Third Party Websites</h2>
          <p>Our website may contain links to other websites. Please note that we have no control over the content or privacy practices of these third-party sites. Therefore, we assume no responsibility for the privacy policies or content of these linked sites.</p>

          <h2>Consent</h2>
          <p>By using our website, you consent to our privacy policy and agree to its terms.</p>

          <h2>Updates to the Privacy Policy</h2>
          <p>We reserve the right to update or modify our privacy policy at any time. Any changes to our privacy policy will be posted on this page.</p>

          <p>If you have any questions about our privacy policy, please feel free to contact us.</p>
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
