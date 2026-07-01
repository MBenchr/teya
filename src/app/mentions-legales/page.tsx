import Link from "next/link";
import { contactAddressLine1, contactAddressLine2, contactEmail, contactPhone, siteCopy } from "../site-content";

export const metadata = {
  title: `Mentions légales | ${siteCopy.shortTitle}`,
};

export default function MentionsLegalesPage() {
  return (
    <main className="teya-legal">
      <div className="teya-legal__card">
        <p className="teya-section__eyebrow teya-section__eyebrow--left">Informations</p>
        <h1 className="teya-display teya-legal__title">Mentions légales</h1>
        <p className="teya-legal__note">
          Cette page est livrée comme base de démonstration. Les informations juridiques finales devront être
          confirmées avant une mise en production commerciale définitive.
        </p>
        <section className="teya-legal__section">
          <h2>Éditeur du site</h2>
          <p>{siteCopy.name}</p>
          <p>{contactAddressLine1}</p>
          <p>{contactAddressLine2}</p>
          <p>{contactPhone}</p>
          <p>{contactEmail}</p>
        </section>
        <section className="teya-legal__section">
          <h2>Hébergement</h2>
          <p>Site propulsé avec Next.js et hébergé sur Render.</p>
        </section>
        <section className="teya-legal__section">
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, visuels, éléments graphiques et photographies présents sur ce site sont réservés à
            l’usage de TEYA Beauty. Toute reproduction ou utilisation sans autorisation préalable est interdite.
          </p>
        </section>
        <Link className="teya-button teya-button--solid teya-legal__back" href="/">
          Retour au site
        </Link>
      </div>
    </main>
  );
}
