import React from "react";

import Layout from "../components/layout";
import Shelf from "../components/shelf";
import Toolbar from "../components/toolbar";
import Button from "../components/button";
import ConcreteBlock from "../components/concrete-block";

const renderSkulls = () => {
  var i, j, s;
  const rows = [];

  for (i = 4; i < 20; i += 1) {
    s = "";
    for (j = 0; j < (i * i) / 9; j += 1) {
      s += "💀";
    }
    rows.push(s);
  }

  return (
    <ConcreteBlock>
      {rows.map((s, idx) => (
        <ConcreteBlock.Row key={idx}>{s}</ConcreteBlock.Row>
      ))}
    </ConcreteBlock>
  );
};

export default () => (
  <Layout title="Not Found 404">
    <Shelf variants={["header", "bright"]}>
      <h1>Not Found 404</h1>
      <Toolbar>
        <Button link="/" variants={["big"]}>
          Home
        </Button>
      </Toolbar>
    </Shelf>
    {renderSkulls()}
  </Layout>
);
