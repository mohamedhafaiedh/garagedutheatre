import ContactCards from '@/components/ContactCards';
import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';

export default function ContactPage() {
  return (
    <main id="contenu">
      <PageHero eyebrow="Garage automobile multimarque à Paris" title="Nous contacter" />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          <ContactCards />

          <div className="m-rise relative rounded-lg [--rise-delay:0.15s] border border-line bg-white p-6 shadow-[0_24px_50px_-24px_rgb(17_17_17/0.25)] sm:p-10">
            <span aria-hidden="true" className="absolute inset-x-8 top-0 h-1 rounded-b bg-brand" />
            <h2 className="mb-7 font-display text-3xl font-extrabold text-ink">Nous écrire</h2>
            <QuoteForm variant="contact" />
          </div>
        </div>
      </section>
    </main>
  );
}
