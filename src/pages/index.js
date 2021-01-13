import React from "react";

import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Shelf from "../components/shelf";
import LinksBlock from "../components/links-block";

export default () => (
  <Layout>
    <Hero />
    <Shelf variants={["bright"]}>
      <h2 className="for-screenreader-only">External Links</h2>
      <LinksBlock
        links={[
          { href: "https://www.linkedin.com/in/levkanter/", text: "LinkedIn" },
          { href: "https://angel.co/u/lev-kanter", text: "AngelList" },
          { href: "https://github.com/LevKanter", text: "GitHub" },
          { href: "https://www.instagram.com/levkanter/", text: "Instagram" },
        ]}
      />
    </Shelf>
  </Layout>
);
