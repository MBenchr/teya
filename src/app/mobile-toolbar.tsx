"use client";

import { useEffect, useId, useState } from "react";
import ContactDialog from "./contact-dialog";

type NavigationItem = {
  label: string;
  href: string;
};

type MobileToolbarProps = {
  navigationItems: readonly NavigationItem[];
  whatsappHref: string;
  telHref: string;
  mailtoHref: string;
};

export default function MobileToolbar({
  navigationItems,
  whatsappHref,
  telHref,
  mailtoHref,
}: MobileToolbarProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="teya-mobile-toolbar">
      <ContactDialog
        buttonClassName="teya-button teya-button--solid teya-mobile-toolbar__cta"
        buttonLabel="Prendre rendez-vous"
        mailtoHref={mailtoHref}
        telHref={telHref}
        whatsappHref={whatsappHref}
      />
      <button
        aria-controls={panelId}
        aria-expanded={open}
        aria-label={open ? "Fermer le menu principal" : "Ouvrir le menu principal"}
        className={`teya-mobile-toolbar__menu${open ? " teya-mobile-toolbar__menu--open" : ""}`}
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="teya-mobile-toolbar__menu-label">Menu</span>
        <span aria-hidden="true" className="teya-mobile-toolbar__menu-icon">
          <span />
          <span />
          <span />
        </span>
      </button>

      {open ? (
        <div className="teya-mobile-nav" onClick={() => setOpen(false)}>
          <div
            aria-label="Navigation principale"
            aria-modal="true"
            className="teya-mobile-nav__panel"
            id={panelId}
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="teya-mobile-nav__header">
              <p className="teya-mobile-nav__eyebrow">Navigation</p>
              <button
                aria-label="Fermer le menu principal"
                className="teya-mobile-nav__close"
                type="button"
                onClick={() => setOpen(false)}
              >
                <span />
                <span />
              </button>
            </div>
            <nav className="teya-mobile-nav__links">
              {navigationItems.map((item) => (
                <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
