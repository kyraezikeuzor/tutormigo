import Image from "next/image";
import { SITE } from "@/lib/data";
import Accordion from "@/components/accordion";
import GeoToggle from "@/components/geotoggle";
import { socialIcons } from "@/components/social-icons";

export default function Home() {
  return (
    <>
      {/* Floating donate button */}
      <a
        className="donateFloat"
        href={SITE.hero.donateLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {SITE.hero.donateLabel}
      </a>

      {/* Header */}
      <header className="header">
        <a href="#" className="logo">OMELORA</a>
      </header>

      {/* Hero */}
      <section className="heroSection">
        <div className="inner">
          <h1 className='text-5xl md:text-7xl font-bold text-center text-orange uppercase ft-deacon'>
            Omelora means{" "}
            <span className="heroHash">#</span>
            Changemaker.
          </h1>
          <br/>
          <p className="ft-athletics text-center text-2xl">{SITE.hero.subline}</p>
        </div>
      </section>

      {/* About */}

      {/* Impact */}
      <section className="impactSection">
        <div className="inner">
         {/*} <h2 className="ft-deacon text-5xl uppercase mb-6">Impact5</h2>*/}

          <div className="flex flex-col md:flex-row gap-6 justify-center  items-center">
            {SITE.impact.stats.map((s) => (
              <div key={s.label} className=" ">
                <div className="ft-deacon text-center text-5xl">{s.number}</div>
                <div className="ft-deacon text-center text-2xl uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          <br/>
          <br/>

          <div className="highlights">
            {SITE.impact.highlights.map((h) => (
              <span key={h} className="highlightChip">{h}</span>
            ))}
          </div>

         {/*} <div className="placesRow">
            {SITE.impact.placeImpact.map((p) => (
              <span key={p.city} className="placeChip">
                {p.city}, {p.country}
              </span>
            ))}
          </div>*/}

          {/*<div className="geoToggles">
            <GeoToggle
              label={`${SITE.impact.countries.length} Countries`}
              items={SITE.impact.countries}
            />
            <GeoToggle
              label={`${SITE.impact.states.length} States`}
              items={SITE.impact.states}
            />
          </div>*/}
        </div>
      </section>

      {/* Gallery */}
      <section className="gallerySection">
        <div className="inner">
          <h2 className="ft-deacon text-5xl uppercase">{SITE.gallery.heading}</h2>
          <br/>
          <div className="galleryGrid">
            {SITE.gallery.photos.map((ph, i) => (
              <div key={i} className="galleryCell">
                {ph.src ? (
                  <Image
                    src={ph.src}
                    alt={ph.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="galleryPlaceholder">{ph.alt}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="getInvolvedSection">
        <div className="inner">
          <div className="ft-deacon text-5xl uppercase">Get Involved</div>
          <br/>
          <div className="tiersGrid">
            {SITE.donateTiers.map((t) => (
              <a
                key={t.amount}
                className="tierCard"
                href={SITE.hero.donateLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="tierAmount">{t.amount}</div>
                <div className="tierLabel">{t.label}</div>
              </a>
            ))}
          </div>

          <Accordion items={SITE.getInvolved} />
        </div>
      </section>

      {/* Programs */}
      <section className="programsSection">
        <div className="inner">
          <div className="ft-deacon text-5xl uppercase">Programs</div>
          <br/>
          <Accordion items={SITE.programs} />
        </div>
      </section>

      {/* Stay in Touch */}
      <section className="socialSection">
        <div className="inner">
          <div className="ft-deacon text-5xl uppercase">Stay in Touch</div>
          <br/>
          <div className="socialRow">
            {SITE.social.map((s) => (
              <a
                key={s.platform}
                className="socialLink"
                href={s.href}
                target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                {socialIcons[s.icon]}
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerInner">
          <p className="footerText">© 2025 Omelora. All rights reserved.</p>
          <a className="footerLink" href="mailto:contact@omelora.org">
            contact@omelora.org
          </a>
        </div>
      </footer>
    </>
  );
}