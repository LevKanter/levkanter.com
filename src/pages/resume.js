import "./resume.scss";

import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import { slugify } from "../utils/text";
import Layout from "../components/layout";
import Shelf from "../components/shelf";
import Toolbar from "../components/toolbar";
import TextBlock from "../components/text-block";
import LinksBlock from "../components/links-block";
import MetaList from "../components/resume/meta-list";

import WorkA24Auctions from "../components/resume/work-a24-auctions";
import WorkSharpTypeEcommerce from "../components/resume/work-sharptype-ecommerce";
import WorkMITMediaLab from "../components/resume/work-mit-media-lab";
import WorkGoogleBooksPublisher from "../components/resume/work-google-books-publisher";
import WorkMoMAdeKooning from "../components/resume/work-moma-de-kooning";

const Section = ({ title, id, variants, children }) => {
  const slug = id ? id : slugify(title);

  return (
    <Shelf
      id={`${slug}`}
      variants={variants}
      className={classNames("resume__section", `resume__section--${slug}`)}
      Tag="section"
    >
      {title && (
        <h2>
          <a href={`#${slug}`}>{title}</a>
        </h2>
      )}
      {children}
    </Shelf>
  );
};

const Item = ({ title, metaItems = [], slideDuration = 150, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const body = bodyRef.current;

    body.style.overflow = "hidden";

    if (isOpen) {
      body.style.display = null;
      body.style.maxHeight = `${body.scrollHeight}px`;

      const timer = window.setTimeout(() => {
        body.style.overflow = null;
        body.style.maxHeight = null;
      }, slideDuration);

      return () => window.clearTimeout(timer);
    }

    body.style.maxHeight = 0;

    const timer = window.setTimeout(() => {
      body.style.display = "none";
    }, slideDuration);

    return () => window.clearTimeout(timer);
  }, [isOpen, slideDuration]);

  const open = () => setIsOpen(true);
  const close = () => {
    const body = bodyRef.current;
    body.style.maxHeight = `${body.scrollHeight}px`;
    setIsOpen(false);
  };
  const toggle = () => (isOpen ? close() : open());

  return (
    <li
      className={classNames("resume__item", { "resume__item--open": isOpen })}
    >
      <header
        role="button"
        className="resume__item-header"
        tabIndex="0"
        onClick={() => toggle()}
        onKeyDown={(e) => {
          if (isOpen && (e.key === "Escape" || e.keyCode === 27)) {
            close();
          } else if (e.key === "Enter" || e.keyCode === 13) {
            toggle();
          }
        }}
      >
        <div className="title">
          <h3>{title}</h3>
        </div>
        {metaItems.length && (
          <div className="resume__meta-holder">
            <MetaList items={metaItems} />
          </div>
        )}
      </header>
      <div
        ref={bodyRef}
        style={{ transition: `max-height ${slideDuration}ms ease-out` }}
        className="resume__item-body"
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </li>
  );
};

const WorkHistorySection = () => (
  <Section title="Work History">
    <ol>
      <Item
        title="Catch"
        metaItems={[
          { title: "Software Engineer", content: <>06/2021&ndash;present</> },
        ]}
      >
        <TextBlock>
          <p>
            <a href="https://www.getcatch.com/">Catch</a> is building an
            alternative payment service for e-commerce. I joined the engineering
            team in 2021.
          </p>
        </TextBlock>
      </Item>
      <Item
        title="Type/Code"
        metaItems={[
          { title: "Technical Director", content: <>01/2017&ndash;12/2020</> },
          { title: "Lead Developer", content: <>07/2010&ndash;12/2016</> },
          { title: "Co-founder, Partner", content: <>07/2010&ndash;12/2020</> },
        ]}
      >
        <TextBlock>
          <p>
            <a href="https://typecode.com">Type/Code</a> designs and develops
            digital products for clients including tech companies, publications,
            educational institutions, museums, non-profit organizations,
            architecture firms, and more. Alongside the company's other
            partners, I played a major role in establishing, managing, and
            growing Type/Code from 2010 through 2020.
          </p>
          <p>
            My focus and main responsibilities at Type/Code included lead
            development, project management, and fostering the strength of our
            dev team. I helped determine our technology stacks and architectures
            for different projects, shape the design patterns and libraries used
            throughout our projects, establish and evolve the team's development
            processes, recruit and coach developers, and encourage a high
            standard of quality throughout the company's development work.
          </p>
          <p>
            Some of the clients I worked with at Type/Code include:{" "}
            <a href="https://welcome.slated.com/">Slated</a>,{" "}
            <a href="https://www.moma.org/">MoMA</a>,{" "}
            <a href="https://www.google.com/">Google</a>,{" "}
            <a href="https://architizer.com/">Architizer</a>,{" "}
            <a href="https://www.media.mit.edu/">MIT Media Lab</a>,{" "}
            <a href="https://www.flir.com/">FLIR Systems</a>,{" "}
            <a href="https://sharptype.co/">Sharp Type</a>, and{" "}
            <a href="https://a24films.com/">A24 Films</a>.
          </p>
        </TextBlock>
      </Item>
      <Item
        title="Parsons School of Design"
        metaItems={[
          { title: "Adjunct Faculty", content: <>08/2011&ndash;05/2014</> },
        ]}
      >
        <TextBlock>
          <p>
            I taught the course <em>Core Lab: Interaction</em> in the{" "}
            <a href="https://www.newschool.edu/parsons/bfa-communication-design/">
              Communication Design department
            </a>{" "}
            at Parsons for five semesters. Geared towards undergraduate
            interaction and graphic design students with no prior programming
            experience, this course provided an introduction to web development
            using HTML, CSS, and Javascript. I was responsible for designing the
            syllabus, lectures, and assignments for my class.
          </p>
        </TextBlock>
      </Item>
      <Item
        title="Freelance"
        metaItems={[
          {
            title: "Web Designer and Developer",
            content: <>11/2008&ndash;06/2010</>,
          },
        ]}
      >
        <TextBlock>
          <p>
            While finishing my undergraduate degree, I freelanced on various web
            design and development projects. Several of these projects were
            commissioned by the design agency{" "}
            <a href="http://kissmeimpolish.com/">Kiss Me I'm Polish</a>.
          </p>
          <p>
            In 2010, I participated as a frontend developer on the first
            generation of{" "}
            <a href="https://instreamwealth.com/">inStream Wealth</a>'s
            financial planning platform, in collaboration with two college
            classmates (with whom I co-founded Type/Code the same year).
          </p>
        </TextBlock>
      </Item>
      <Item
        title="Redub LLC"
        metaItems={[
          { title: "Frontend Developer", content: <>05/2008&ndash;11/2008</> },
        ]}
      >
        <TextBlock>
          <p>
            <a href="http://redubllc.com/">Redub LLC</a> provided interaction
            design and frontend development consulting services for clients
            including <a href="https://www.good.is/">GOOD Magazine</a>,{" "}
            <a href="https://www.thrillist.com/">Thrillist</a>, and{" "}
            <a href="https://www.conductor.com/">Conductor</a>. I was
            responsible for frontend development on several projects, including
            a full redesign of Thrillist which launched in September 2008.
          </p>
        </TextBlock>
      </Item>
    </ol>
  </Section>
);

const WorkExamplesSection = () => (
  <Section title="Selected Work">
    <ol>
      <Item
        title="A24 Auctions"
        metaItems={[
          { title: "Technical Lead", content: <>10/2019&ndash;12/2020</> },
        ]}
      >
        <WorkA24Auctions />
      </Item>
      <Item
        title="Sharp Type Ecommerce"
        metaItems={[
          { title: "Technical Lead", content: <>08/2018&ndash;12/2020</> },
        ]}
      >
        <WorkSharpTypeEcommerce />
      </Item>
      <Item
        title="MIT Media Lab"
        metaItems={[
          { title: "Technical Lead", content: <>01/2017&ndash;01/2018</> },
          { title: "Developer", content: <>09/2015&ndash;12/2016</> },
        ]}
      >
        <WorkMITMediaLab />
      </Item>
      <Item
        title="Google Books Publisher Portal"
        metaItems={[
          { title: "Frontend Developer", content: <>08/2012&ndash;04/2013</> },
        ]}
      >
        <WorkGoogleBooksPublisher />
      </Item>
      <Item
        title="MoMA &mdash; de Kooning: a Retrospective"
        metaItems={[
          { title: "Technical Lead", content: <>07/2011&ndash;02/2012</> },
        ]}
      >
        <WorkMoMAdeKooning />
      </Item>
    </ol>
  </Section>
);

const EducationSection = () => (
  <Section title="Education">
    <ol>
      <Item
        title="Parsons School of Design"
        metaItems={[
          {
            title: (
              <>
                <abbr title="Bachelor of Fine Arts">BFA</abbr>, Design and
                Technology
              </>
            ),
            content: <>01/2007&ndash;05/2010</>,
          },
        ]}
      >
        <TextBlock>
          <p>
            I majored in interaction design and digital art. For my thesis, I
            designed and developed software that enables users to create{" "}
            <Link to="/wildgarden/">digital paintings</Link> using a{" "}
            <a href="https://en.wikipedia.org/wiki/Wii_Remote">
              Nintendo Wii Remote
            </a>
            .
          </p>
        </TextBlock>
      </Item>
      <Item
        title="Stony Brook University"
        metaItems={[
          { title: "Computer Science", content: <>08/2005&ndash;12/2006</> },
        ]}
      >
        <TextBlock>
          <p>
            I completed three semesters in the computer science honors program
            before transferring to Parsons.
          </p>
        </TextBlock>
      </Item>
    </ol>
  </Section>
);

const ContactInfoSection = () => (
  <Section title="Contact Info">
    <LinksBlock
      links={[
        { href: "mailto:levkanter@gmail.com", text: "levkanter@gmail.com" },
        { href: "tel:+1 (646) 641-5329", text: "+1 (646) 641-5329" },
      ]}
    />
  </Section>
);

export default () => (
  <Layout title="Résumé">
    <article className="resume">
      <Shelf Tag="header" variants={["header"]}>
        <h1>Résumé</h1>
        <Toolbar>
          <Toolbar.Group>Last updated: 06/2021</Toolbar.Group>
        </Toolbar>
      </Shelf>
      <Section id="summary" variants={["bright"]}>
        <TextBlock>
          <h2 className="for-screenreader-only">Summary</h2>
          <p>
            I am a web developer based in Brookyln, NY&mdash; experienced with
            building, delivering, and maintaining web apps, as well as with
            leading dev teams and managing the full lifecycle of web dev
            projects.
          </p>
        </TextBlock>
      </Section>
      <WorkHistorySection />
      <WorkExamplesSection />
      <EducationSection />
      <ContactInfoSection />
    </article>
  </Layout>
);
