"use client";

import { useEffect, useId, useState } from "react";

type ContactDialogProps = {
  buttonClassName: string;
  buttonLabel: string;
  title?: string;
  description?: string;
  whatsappHref: string;
  telHref: string;
  mailtoHref: string;
};

export default function ContactDialog({
  buttonClassName,
  buttonLabel,
  title = "Contacter TEYA Beauty",
  description = "Choisissez le canal le plus rapide pour échanger avec TEYA Beauty.",
  whatsappHref,
  telHref,
  mailtoHref,
}: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

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
    <>
      <button className={buttonClassName} type="button" onClick={() => setOpen(true)}>
        {buttonLabel}
      </button>
      {open ? (
        <div
          aria-modal="true"
          className="contact-modal"
          role="dialog"
          aria-labelledby={titleId}
          onClick={() => setOpen(false)}
        >
          <div className="contact-modal__panel" onClick={(event) => event.stopPropagation()}>
            <button
              aria-label="Fermer la fenêtre de contact"
              className="contact-modal__close"
              type="button"
              onClick={() => setOpen(false)}
            >
              <span />
              <span />
            </button>
            <p className="contact-modal__eyebrow">Contact</p>
            <h2 className="contact-modal__title" id={titleId}>
              {title}
            </h2>
            <p className="contact-modal__description">{description}</p>
            <div className="contact-modal__actions">
              <a
                className="teya-button teya-button--solid contact-modal__primary"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Ouvrir WhatsApp Business
              </a>
              <a className="contact-modal__link" href={telHref}>
                Appeler TEYA Beauty
              </a>
              <a className="contact-modal__link" href={mailtoHref}>
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
