import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <h1>Contacto</h1>
      <p>???</p>
    </main>
  </Layout>
);
export default ContactPage;
