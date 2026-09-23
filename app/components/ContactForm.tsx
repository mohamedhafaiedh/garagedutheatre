"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function getFormattedTimestamp() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("fr-FR", {
    timeZone: "Europe/Paris",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${dateStr} à ${timeStr} (heure de Paris)`;
}

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      formData.set("form-name", "contact");
      formData.set("subject", "Nouveau message contact du site");
      if (typeof window !== "undefined") {
        formData.set("pageUrl", window.location.href);
        formData.set("timestamp", getFormattedTimestamp());
        formData.set("source", "website");
      }

      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, value.toString());
      }

      const response = await fetch("/form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (response.ok || (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"))) {
        router.push("/merci");
      } else {
        setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage("Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer.");
      setIsSubmitting(false);
    }
  };

  return (
    <form name="contact" method="post" className="wpcf7-form init" aria-label="Contact form" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="Demande de contact" />
      <input type="hidden" name="pageUrl" value={typeof window !== "undefined" ? window.location.href : ""} />
      <input type="hidden" name="timestamp" value="" />
      <input type="hidden" name="source" value="website" />
      <div className="row">
        <div className="col-sm-6">
          <p>
            <span className="wpcf7-form-control-wrap" data-name="nom">
              <input
                size={40}
                maxLength={400}
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Nom"
                defaultValue=""
                type="text"
                name="nom"
                required
              />
            </span>
          </p>
        </div>
        <div className="col-sm-6">
          <p>
            <span className="wpcf7-form-control-wrap" data-name="prenom">
              <input
                size={40}
                maxLength={400}
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Prénom"
                defaultValue=""
                type="text"
                name="prenom"
                required
              />
            </span>
          </p>
        </div>
        <div className="col-sm-6">
          <p>
            <span className="wpcf7-form-control-wrap" data-name="email">
              <input
                size={40}
                maxLength={400}
                className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                aria-required="true"
                aria-invalid="false"
                placeholder="E-Mail"
                defaultValue=""
                type="email"
                name="email"
                required
              />
            </span>
          </p>
        </div>
        <div className="col-sm-6">
          <p>
            <span className="wpcf7-form-control-wrap" data-name="telephone">
              <input
                size={40}
                maxLength={400}
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Téléphone"
                defaultValue=""
                type="tel"
                name="telephone"
                aria-label="Votre téléphone*"
                required
              />
            </span>
          </p>
        </div>
        <div className="col-sm-12">
          <p>
            <span className="wpcf7-form-control-wrap" data-name="message">
              <textarea
                cols={40}
                rows={10}
                maxLength={2000}
                className="wpcf7-form-control wpcf7-textarea"
                aria-invalid="false"
                placeholder="Votre message ici"
                name="message"
              ></textarea>
            </span>
          </p>
        </div>
        {errorMessage && (
          <div className="col-sm-12" style={{ color: "#d9534f", marginBottom: "15px", fontSize: "14px", fontWeight: "600" }}>
            {errorMessage}
          </div>
        )}
        <div className="form-button col-sm-12">
          <p className="submit-btn" style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}>
            <button
              className={`wpcf7-form-control wpcf7-submit has-spinner ${isSubmitting ? "btn-disabled" : ""}`}
              type="submit"
              disabled={isSubmitting}
              style={{ cursor: isSubmitting ? "not-allowed" : "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              {isSubmitting ? (
                <>
                  <svg className="btn-spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" fill="none" />
                    <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                "J'envoie ma demande"
              )}
            </button>
          </p>
        </div>
      </div>
      <div className="wpcf7-response-output" aria-hidden="true"></div>
    </form>
  );
}
