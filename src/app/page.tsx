import Image from "next/image";
import Link from "next/link";
import ContactDialog from "./contact-dialog";
import MobileToolbar from "./mobile-toolbar";
import {
  aboutCopy,
  contactAddressLine1,
  contactAddressLine2,
  contactEmail,
  contactLinks,
  contactPhone,
  footerLinks,
  navigationItems,
  serviceCards,
  siteCopy,
  siteOrigin,
} from "./site-content";

const iconMap = {
  sparkles: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2.5 14.2 8l5.3 2.2-5.3 2.2L12 18l-2.2-5.6-5.3-2.2L9.8 8 12 2.5Z" />
    </svg>
  ),
  flower: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3c1.4 0 2.6 2 2.6 4.4 0 .7-.1 1.3-.3 1.9.6-.3 1.3-.4 2-.4 2.4 0 4.3 1.2 4.3 2.7s-1.9 2.7-4.3 2.7c-.7 0-1.4-.1-2-.4.2.6.3 1.2.3 1.9 0 2.4-1.2 4.4-2.6 4.4s-2.6-2-2.6-4.4c0-.7.1-1.3.3-1.9-.6.3-1.3.4-2 .4-2.4 0-4.3-1.2-4.3-2.7S5 8.9 7.4 8.9c.7 0 1.4.1 2 .4-.2-.6-.3-1.2-.3-1.9C9.1 5 10.6 3 12 3Zm0 7.1a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Z" />
    </svg>
  ),
  sun: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3.3" />
      <path d="M12 1.8v3.1M12 19.1v3.1M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M1.8 12h3.1M19.1 12h3.1M4.9 19.1l2.2-2.2M16.9 7.1l2.2-2.2" />
    </svg>
  ),
  instagram: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.2" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.1" cy="6.9" r="1" />
    </svg>
  ),
  whatsapp: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3.2a8.6 8.6 0 0 1 7.4 13l1.1 3.9-4-1a8.6 8.6 0 1 1-4.5-15.9Zm-3 4.6c-.3.2-.8.8-.8 1.8 0 .9.5 2 1.1 2.8.7 1 1.7 2 3 2.9 1.5 1 2.9 1.4 4 1.5 1 .1 1.7-.2 2.1-.7.4-.6.5-1.4.4-1.6-.1-.2-.3-.3-.7-.5l-1.6-.8c-.3-.1-.5-.1-.7.2l-.6.8c-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.3-1.7-1.5-2-.2-.3 0-.5.1-.7l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.4-.1-.6l-.7-1.6c-.2-.4-.4-.5-.7-.5H9Z" />
    </svg>
  ),
  facebook: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M13.4 21v-7.3h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8v2h-2.3v2.8h2.3V21h2.8Z" />
    </svg>
  ),
  pin: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 21s6-6.2 6-11a6 6 0 1 0-12 0c0 4.8 6 11 6 11Zm0-8.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
    </svg>
  ),
  phone: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7.2 4.5c.5-.5 1.2-.6 1.8-.3l1.9 1c.7.3.9 1.1.6 1.8l-.8 1.6c-.2.4-.2.9.1 1.3.7 1.1 1.6 2 2.7 2.7.4.2.9.3 1.3.1l1.6-.8c.7-.3 1.5-.1 1.8.6l1 1.9c.3.6.2 1.3-.3 1.8l-1.1 1.1c-.7.7-1.7 1.1-2.8.9-2.4-.4-4.7-1.6-6.8-3.7-2.1-2.1-3.3-4.4-3.7-6.8-.2-1 .2-2 .9-2.8l1.1-1.1Z" />
    </svg>
  ),
  mail: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 6.2h16a1 1 0 0 1 1 1v9.6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.2a1 1 0 0 1 1-1Zm8 5.6 7.8-4.2H4.2L12 11.8Zm0 1.7L4 9.2v7h16v-7l-8 4.3Z" />
    </svg>
  ),
} as const;

const serviceIconMap = {
  sun: (
    <Image alt="" aria-hidden="true" className="teya-service-card__asset" height={90} src="/icons/sun.png" width={90} />
  ),
  flower: (
    <Image
      alt=""
      aria-hidden="true"
      className="teya-service-card__asset teya-service-card__asset--flower"
      height={88}
      src="/icons/flower.png"
      width={88}
    />
  ),
  sparkle: (
    <Image
      alt=""
      aria-hidden="true"
      className="teya-service-card__asset teya-service-card__asset--sparkle"
      height={70}
      src="/icons/sparkle.png"
      width={66}
    />
  ),
} as const;

export default function Home() {
  const nailSalonJsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: siteCopy.name,
    description: siteCopy.description,
    url: siteOrigin,
    image: `${siteOrigin}/images/hero-arch-hand.png`,
    telephone: contactPhone,
    email: contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactAddressLine1,
      postalCode: "34000",
      addressLocality: "Montpellier",
      addressCountry: "FR",
    },
    sameAs: [contactLinks.instagramHref, contactLinks.facebookHref],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nailSalonJsonLd) }}
      />
      <main className="teya-shell">
        <div className="teya-announcement">
          <div className="teya-announcement__inner">
            {iconMap.sparkles}
            <span>{siteCopy.announcement}</span>
            {iconMap.sparkles}
          </div>
        </div>

        <header className="teya-header">
          <div className="teya-header__inner">
            <a aria-label="TEYA Beauty - retour à l'accueil" className="teya-logo-link" href="#accueil">
              <Image alt="Logo TEYA Beauty" className="teya-logo" height={121} src="/brand/logo.png" width={146} />
            </a>

            <nav aria-label="Navigation principale" className="teya-nav">
              {navigationItems.map((item, index) => (
                <a
                  className={`teya-nav__link${index === 0 ? " teya-nav__link--active" : ""}`}
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}
              <ContactDialog
                buttonClassName="teya-nav__link teya-nav__link--button"
                buttonLabel="Contact"
                mailtoHref={contactLinks.mailtoHref}
                telHref={contactLinks.telHref}
                whatsappHref={contactLinks.whatsappHref}
              />
            </nav>

            <ContactDialog
              buttonClassName="teya-button teya-button--solid teya-button--ornament teya-header__cta"
              buttonLabel="Prendre rendez-vous"
              mailtoHref={contactLinks.mailtoHref}
              telHref={contactLinks.telHref}
              whatsappHref={contactLinks.whatsappHref}
            />

            <MobileToolbar
              mailtoHref={contactLinks.mailtoHref}
              navigationItems={navigationItems}
              telHref={contactLinks.telHref}
              whatsappHref={contactLinks.whatsappHref}
            />
          </div>
        </header>

        <section className="teya-hero" id="accueil">
          <div className="teya-section__inner teya-hero__grid">
            <div className="teya-hero__copy">
              <div className="teya-hero__badge">
                <Image alt="" aria-hidden="true" height={58} src="/icons/flower.png" width={58} />
              </div>
              <h1 className="teya-display teya-hero__title">{siteCopy.heroTitle}</h1>
              <div className="teya-divider">
                <span />
                <Image alt="" aria-hidden="true" height={42} src="/icons/flower.png" width={42} />
              </div>
              <p className="teya-hero__subtitle">{siteCopy.heroSubtitle}</p>
              <ContactDialog
                buttonClassName="teya-button teya-button--solid teya-button--ornament"
                buttonLabel="Prendre rendez-vous"
                mailtoHref={contactLinks.mailtoHref}
                telHref={contactLinks.telHref}
                whatsappHref={contactLinks.whatsappHref}
              />
            </div>

            <div className="teya-hero__visual">
              <div className="teya-hero__frame">
                <Image
                  alt="Main manucurée TEYA Beauty"
                  className="teya-hero__image"
                  height={1920}
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  src="/images/hero-arch-hand.png"
                  width={1080}
                />
              </div>
              <div aria-hidden="true" className="teya-hero__pattern" />
            </div>
          </div>
        </section>

        <section className="teya-section teya-section--services" id="prestations">
          <div className="teya-section__inner">
            <div className="teya-section__heading">
              <p className="teya-section__eyebrow">Nos prestations</p>
              <h2 className="teya-display teya-section__title">Ongles, manucure &amp; nail art</h2>
              <Image alt="" aria-hidden="true" className="teya-section__ornament" height={34} src="/icons/flower.png" width={34} />
            </div>
            <div className="teya-services-grid">
              {serviceCards.map((card) => (
                <article className="teya-service-card" key={card.title}>
                  <div className="teya-service-card__icon">{serviceIconMap[card.icon]}</div>
                  <h3 className="teya-service-card__title">{card.title}</h3>
                  <p className="teya-service-card__text">{card.description}</p>
                </article>
              ))}
            </div>
            <div className="teya-section__cta">
              <a className="teya-button teya-button--solid teya-button--ornament" href="#apropos">
                Voir les prestations
              </a>
            </div>
          </div>
        </section>

        <section className="teya-section teya-section--about" id="apropos">
          <div className="teya-section__inner teya-about">
            <div className="teya-about__image-wrap">
              <Image
                alt="L'univers du salon TEYA Beauty"
                className="teya-about__image"
                height={768}
                sizes="(max-width: 1024px) 100vw, 48vw"
                src="/images/salon.png"
                width={1366}
              />
            </div>
            <div className="teya-about__copy">
              <p className="teya-section__eyebrow teya-section__eyebrow--left">{aboutCopy.eyebrow}</p>
              <h2 className="teya-display teya-about__title">{aboutCopy.title}</h2>
              <div className="teya-divider teya-divider--compact">
                <span />
                <Image alt="" aria-hidden="true" height={32} src="/icons/flower.png" width={32} />
              </div>
              <div className="teya-about__body">
                {aboutCopy.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ContactDialog
                buttonClassName="teya-button teya-button--solid teya-button--ornament"
                buttonLabel="Découvrir l’univers"
                mailtoHref={contactLinks.mailtoHref}
                telHref={contactLinks.telHref}
                whatsappHref={contactLinks.whatsappHref}
              />
            </div>
          </div>
        </section>

        <section className="teya-section teya-section--gallery">
          <div className="teya-section__inner">
            <div className="teya-section__heading teya-section__heading--compact">
              <p className="teya-section__eyebrow">Suivez-nous</p>
              <h2 className="teya-display teya-section__title teya-section__title--social">
                {siteCopy.socialHandle}
              </h2>
            </div>
            <div className="teya-gallery">
              {[
                "/images/gallery-1.png",
                "/images/gallery-2.png",
                "/images/gallery-3.png",
                "/images/gallery-4.png",
                "/images/gallery-5.png",
              ].map((src, index) => (
                <figure className="teya-gallery__card" key={src}>
                  {/* Static export needs immediate gallery rendering below the fold. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`Création TEYA Beauty ${index + 1}`}
                    className="teya-gallery__image"
                    decoding="async"
                    height={1350}
                    loading="eager"
                    src={src}
                    width={1080}
                  />
                </figure>
              ))}
            </div>
            <div className="teya-section__cta">
              <a
                className="teya-button teya-button--ghost"
                href={contactLinks.instagramHref}
                rel="noreferrer"
                target="_blank"
              >
                Voir plus sur Instagram
              </a>
            </div>
          </div>
        </section>

        <footer className="teya-footer">
          <div className="teya-section__inner teya-footer__grid">
            <div className="teya-footer__brand">
              <Image alt="Logo TEYA Beauty" className="teya-footer__logo" height={160} src="/brand/logo-full.png" width={190} />
            </div>

            <div className="teya-footer__column">
              <h3 className="teya-footer__title">Navigation</h3>
              <ul className="teya-footer__list">
                {footerLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
                <li>
                  <ContactDialog
                    buttonClassName="teya-footer__inline-button"
                    buttonLabel="Contact"
                    mailtoHref={contactLinks.mailtoHref}
                    telHref={contactLinks.telHref}
                    whatsappHref={contactLinks.whatsappHref}
                  />
                </li>
              </ul>
            </div>

            <div className="teya-footer__column">
              <h3 className="teya-footer__title">Infos</h3>
              <ul className="teya-footer__list teya-footer__list--details">
                <li>
                  <span className="teya-footer__icon">{iconMap.pin}</span>
                  <a href={contactLinks.mapsHref} rel="noreferrer" target="_blank">
                    <span>{contactAddressLine1}</span>
                    <span>{contactAddressLine2}</span>
                  </a>
                </li>
                <li>
                  <span className="teya-footer__icon">{iconMap.phone}</span>
                  <a href={contactLinks.telHref}>{contactPhone}</a>
                </li>
                <li>
                  <span className="teya-footer__icon">{iconMap.mail}</span>
                  <a href={contactLinks.mailtoHref}>{contactEmail}</a>
                </li>
              </ul>
            </div>

            <div className="teya-footer__column">
              <h3 className="teya-footer__title">Suivez-nous</h3>
              <div className="teya-footer__socials">
                <a aria-label="Instagram TEYA Beauty" href={contactLinks.instagramHref} rel="noreferrer" target="_blank">
                  {iconMap.instagram}
                </a>
                <a aria-label="WhatsApp TEYA Beauty" href={contactLinks.whatsappHref} rel="noreferrer" target="_blank">
                  {iconMap.whatsapp}
                </a>
                <a aria-label="Facebook TEYA Beauty" href={contactLinks.facebookHref} rel="noreferrer" target="_blank">
                  {iconMap.facebook}
                </a>
              </div>
              <div className="teya-footer__sun">
                <Image alt="" aria-hidden="true" height={70} src="/icons/sunburst.png" width={200} />
              </div>
            </div>
          </div>

          <div className="teya-footer__bottom">
            <div className="teya-footer__bottom-inner">
              <p>© 2026 TEYA Beauty - Tous droits réservés</p>
              <div className="teya-footer__legal">
                <Link href="/mentions-legales">Mentions légales</Link>
                <Link href="/politique-confidentialite">Politique de confidentialité</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
