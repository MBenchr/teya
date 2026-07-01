import Link from "next/link";
import { contactEmail, siteCopy } from "../site-content";

export const metadata = {
  title: `Politique de confidentialité | ${siteCopy.shortTitle}`,
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="teya-legal">
      <div className="teya-legal__card">
        <p className="teya-section__eyebrow teya-section__eyebrow--left">Confidentialité</p>
        <h1 className="teya-display teya-legal__title">Politique de confidentialité</h1>
        <p className="teya-legal__note">
          Cette politique est fournie comme base de travail. Elle doit être ajustée avec les traitements exacts
          retenus avant toute exploitation commerciale finale.
        </p>
        <section className="teya-legal__section">
          <h2>Données de contact</h2>
          <p>
            Lorsque vous utilisez WhatsApp, le téléphone ou l’email proposés sur le site, TEYA Beauty reçoit les
            informations strictement nécessaires pour vous répondre.
          </p>
        </section>
        <section className="teya-legal__section">
          <h2>Finalité</h2>
          <p>
            Ces données sont utilisées pour traiter les demandes d’information, les prises de contact et les
            demandes de rendez-vous.
          </p>
        </section>
        <section className="teya-legal__section">
          <h2>Exercice des droits</h2>
          <p>
            Pour toute question relative à vos données ou pour exercer vos droits, vous pouvez écrire à{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </section>
        <Link className="teya-button teya-button--solid teya-legal__back" href="/">
          Retour au site
        </Link>
      </div>
    </main>
  );
}
