import Link from 'next/link';
import { Container } from './components/Container';
import styles from './page.module.css';
import { ButtonLink } from './components/Button';

export default function HomePage() {
  return (
    <Container>
      <section className={styles.hero} id="top">
        <div className={styles.heroLeft}>
          <div className={styles.kicker}>Marketing Strategy and Technology</div>
          <h1 className={styles.title}>
            Build, refine, and grow your brand with clear strategy and practical execution.
          </h1>
          <p className={styles.lede}>
            We connect brand and marketing strategy with the technology and tools you need to move
            your business forward.
          </p>
          <div className={styles.heroCtas}>
            <ButtonLink href="/#contact" variant="primary">
              Let’s talk
            </ButtonLink>
            <Link className={styles.secondaryLink} href="/examples">
              View examples →
            </Link>
          </div>
        </div>

        <div className={styles.heroRight} aria-hidden="true">
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Focus</div>
            <div className={styles.statValue}>Strategy + Tech</div>
            <div className={styles.statHint}>From positioning to product and digital execution.</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Stack</div>
            <div className={styles.statValue}>Next.js + Postgres</div>
            <div className={styles.statHint}>A modern foundation for web applications.</div>
          </div>
        </div>
      </section>

      <section id="marketing-strategy" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>Home: Service</div>
          <h2 className={styles.sectionTitle}>Marketing Strategy</h2>
          <h3 className={styles.sectionSubtitle}>Build your brand equity</h3>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Depending on your company and category, revisiting how your brand is defined, positioned,
            or organized can unlock meaningful growth and profit.
          </p>
          <p>
            Engagements usually span the core areas of brand and marketing strategy, planning, and
            execution, including:
          </p>
          <ul className={styles.bulletList}>
            <li>Vision, mission, and positioning</li>
            <li>Brand architecture and portfolio design</li>
            <li>Digital and social marketing strategy</li>
            <li>New product and innovation pipelines</li>
            <li>Category and market development plans</li>
            <li>Agency and partner management</li>
            <li>Customer research and insight work</li>
            <li>Distribution and channel strategy</li>
          </ul>
        </div>
      </section>

      <section id="technology" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>Home: Service</div>
          <h2 className={styles.sectionTitle}>Technology</h2>
          <h3 className={styles.sectionSubtitle}>Web apps and digital programs</h3>
        </div>
        <div className={styles.sectionBody}>
          <p>
            We help translate your strategy into modern digital experiences—from web applications to
            the marketing systems that support them.
          </p>
          <p>
            Work often includes social, community, eCommerce, SEO, and other growth tactics, alongside
            the design and development of:
          </p>
          <ul className={styles.bulletList}>
            <li>Frontend prototypes and design systems</li>
            <li>APIs and backend services</li>
            <li>Full-stack web applications</li>
            <li>Analytics and measurement foundations</li>
          </ul>
          <p>
            The stack spans HTML and CSS through JavaScript, Node.js, React, and modern databases such
            as SQL and PostgreSQL.
          </p>
        </div>
      </section>

      <section id="interim-cmo" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>Home: Service</div>
          <h2 className={styles.sectionTitle}>Interim CMO</h2>
          <h3 className={styles.sectionSubtitle}>C-suite support</h3>
        </div>
        <div className={styles.sectionBody}>
          <p>
            When you need senior-level marketing leadership on a flexible basis, we can help keep the
            function moving while you build or transition your team.
          </p>
          <p>
            Experience spans large and small organizations and a wide range of categories, including:
          </p>
          <ul className={styles.bulletList}>
            <li>Consumer packaged goods</li>
            <li>Robotics and emerging tech</li>
            <li>AR, VR, and mobile</li>
            <li>Consumer electronics</li>
            <li>Music and musical instruments</li>
            <li>Toys and video games</li>
            <li>Education and EdTech</li>
          </ul>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <h3 className={styles.sectionSubtitle}>We’d love to hear from you</h3>
        </div>
        <div className={styles.sectionBody}>
          <p>
            If you&apos;d like to discuss how we can help shape and grow your brands, please reach
            out. We&apos;re happy to talk through where you are today and what you&apos;re trying to
            build.
          </p>
          <a className={styles.contactEmail} href="mailto:consulting@brandgeneering.com">
            consulting@brandgeneering.com
          </a>
          <div className={styles.contactFormShell} aria-hidden="true">
            <div className={styles.contactFormRow}>
              <div className={styles.contactInput} />
            </div>
            <div className={styles.contactFormRow}>
              <div className={styles.contactInput} />
            </div>
            <div className={styles.contactFormRow}>
              <div className={styles.contactTextarea} />
            </div>
            <div className={styles.contactActions}>
              <ButtonLink href="mailto:consulting@brandgeneering.com" variant="primary">
                Send
              </ButtonLink>
              <span className={styles.contactHint}>Your details were sent successfully.</span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

