import Image from "next/image";
import { SITE } from "@/lib/data";
import Accordion from "@/components/accordion";
import { socialIcons } from "@/components/social-icons";

export default function Home() {
  return (
    <>
      
      <nav className="header">
        <a href="#" className="logo">
          <Image src="/imgs/logo.png" alt="Tutormigo" width={60} height={100} />
          Tutormigo
        </a>
        <a className="donateFloat" href={SITE.hero.ctaLink} about="_blank">
          {SITE.hero.ctaLabel}
        </a>
      </nav>

      <section className="heroSection">
        <div className="inner">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-orange ft-deacon">
            Affordable SAT Prep from students at Columbia, Yale, Harvard, and UT.
            $30/hour.
          </h1>
          <br />
          <p className="ft-athletics text-center text-2xl">
            SAT/ACT, Academic Mentorship, & College Admissions Consulting.
          </p>
        </div>
      </section>

      <section className="impactSection">
        <div className="inner">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {SITE.impact.stats.map((s) => (
              <div key={s.label}>
                <div className="ft-deacon text-center text-5xl">{s.number}</div>
                <div className="ft-deacon text-center text-2xl uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founderSection">
        <div className="inner">
          <div className="ft-deacon text-5xl uppercase">Meet the Founder</div>
          <br />
          <div className="founderRow">
            <div className="founderProfile">
              <div className="founderPhoto">
                {SITE.founder.photo ? (
                  <Image
                    src={SITE.founder.photo}
                    alt={SITE.founder.name}
                    fill
                    sizes="160px"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="founderPhotoPlaceholder">{SITE.founder.name}</div>
                )}
              </div>
              <div className="tutorName">{SITE.founder.name}</div>
            </div>
            <div className="founderBio">
              <p>{SITE.founder.bio}</p>
              <a
                className="ctaLink"
                href={`mailto:${SITE.founder.email}`}
              >
                {SITE.founder.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="tutorsSection">
        <div className="inner">
          <div className="ft-deacon text-5xl uppercase">Meet the Tutors</div>
          <br />
          <div className="tutorsGrid">
            {SITE.tutors.map((tutor, i) => (
              <div key={`${tutor.name}-${i}`} className="tutorCard">
                <div className="tutorProfile">
                  <div className="tutorAvatar">
                    <div className="tutorAvatarInner">
                      {tutor.photo ? (
                        <Image
                          src={tutor.photo}
                          alt={tutor.name}
                          fill
                          sizes="72px"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div className="tutorAvatarPlaceholder">{tutor.name}</div>
                      )}
                    </div>
                    {tutor.collegeLogo && (
                      <div className="tutorCollegeLogo">
                        <Image
                          src={tutor.collegeLogo}
                          alt={tutor.college}
                          width={32}
                          height={32}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="tutorName">{tutor.name}</div>
                </div>
                <ul className="tutorCredentials">
                  <li className="tutorCollege">
                    <strong>{tutor.college}</strong>
                  </li>
                  {tutor.credentials.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="getInvolvedSection">
        <div className="inner">
          <div className="ft-deacon text-5xl uppercase">Services</div>
          <br />
          <div className="tiersGrid">
            {SITE.services.map((s) => (
              <div key={s.title} className="serviceCard">
                <div className="tierAmount">{s.title}</div>
                <div className="tierLabel">{s.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="programsSection">
        <div className="inner">
          <div className="ft-deacon text-5xl uppercase">Referral Program</div>
          <br />
          <div className="accPanel">
            <p>{SITE.referral.body}</p>
            {SITE.referral.cta && (
              <a className="ctaLink" href={SITE.referral.cta.href}>
                {SITE.referral.cta.label}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="programsSection">
        <div className="inner">
          <div className="ft-deacon text-5xl uppercase">FAQs</div>
          <br />
          <Accordion items={SITE.faqs} />
        </div>
      </section>

      <section className="socialSection">
        <div className="inner">
          <div className="ft-deacon text-5xl uppercase">Stay in Touch</div>
          <br />
          <div className="socialRow">
            <a
              className="socialLink"
              href={`mailto:${SITE.contact.email}`}
            >
              {socialIcons.email}
              {SITE.contact.email}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <p className="footerText">© 2025 Tutormigo. All rights reserved.</p>
          <a className="footerLink" href={`mailto:${SITE.contact.email}`}>
            {SITE.contact.email}
          </a>
        </div>
      </footer>
    </>
  );
}
