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

export default function DevisForm() {
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
      formData.set("form-name", "devis");
      formData.set("subject", "Demande de devis");
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
    <form name="devis" method="post" className="wpcf7-form init" aria-label="Demande de devis" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="devis" />
      <input type="hidden" name="subject" value="Demande de devis" />
      <input type="hidden" name="pageUrl" value={typeof window !== "undefined" ? window.location.href : ""} />
      <input type="hidden" name="timestamp" value="" />
      <input type="hidden" name="source" value="website" />
      <div className="plumber-contact-form">
        <p>
          <span className="wpcf7-form-control-wrap" data-name="nom">
            <input
              aria-invalid="false"
              aria-required="true"
              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              maxLength={400}
              name="nom"
              placeholder="Nom"
              size={40}
              type="text"
              defaultValue=""
              required
            />
          </span>
          <br />
          <span className="wpcf7-form-control-wrap" data-name="email">
            <input
              aria-invalid="false"
              aria-required="true"
              className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
              maxLength={400}
              name="email"
              placeholder="E-Mail"
              size={40}
              type="email"
              defaultValue=""
              required
            />
          </span>
          <br />
          <span className="wpcf7-form-control-wrap" data-name="telephone">
            <input
              aria-invalid="false"
              aria-label="Votre téléphone*"
              aria-required="true"
              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              maxLength={400}
              name="telephone"
              placeholder="Téléphone"
              size={40}
              type="tel"
              defaultValue=""
              required
            />
          </span>
          <br />
          <span className="wpcf7-form-control-wrap" data-name="modele_vehicule">
            <input
              aria-invalid="false"
              className="wpcf7-form-control wpcf7-text"
              maxLength={400}
              name="modele_vehicule"
              placeholder="Modèle du véhicule"
              size={40}
              type="text"
              defaultValue=""
            />
          </span>
          <br />
          <span className="wpcf7-form-control-wrap" data-name="annee_vehicule">
            <input
              aria-invalid="false"
              className="wpcf7-form-control wpcf7-text"
              maxLength={400}
              name="annee_vehicule"
              placeholder="Année du véhicule"
              size={40}
              type="text"
              defaultValue=""
            />
          </span>
          <br />
          <span className="wpcf7-form-control-wrap" data-name="immatriculation">
            <input
              aria-invalid="false"
              className="wpcf7-form-control wpcf7-text"
              maxLength={400}
              name="immatriculation"
              placeholder="Immatriculation du véhicule"
              size={40}
              type="text"
              defaultValue=""
            />
          </span>
          <br />
          <span className="wpcf7-form-control-wrap" data-name="message">
            <textarea
              aria-invalid="false"
              className="wpcf7-form-control wpcf7-textarea"
              cols={40}
              maxLength={2000}
              name="message"
              placeholder="Décrire ici le service demandé"
              rows={10}
            ></textarea>
          </span>
        </p>
        {errorMessage && (
          <div style={{ color: "#d9534f", marginBottom: "15px", fontSize: "14px", fontWeight: "600", width: "100%" }}>
            {errorMessage}
          </div>
        )}
        <div className="form-button">
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
                "J'obtiens mon devis"
              )}
            </button>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="wpcf7-response-output"></div>
    </form>
  );
}
