import React from "react";

const getRobots = () => {
  if (process.env.ROBOT_ALLOW === "true") {
    return `User-agent: *
Allow: /`;
  } else {
    return `User-agent: *
Disallow: /about.html
Disallow: /about/
Disallow: /advice_02.html
Disallow: /ceremony.html
Disallow: /ceremony/
Disallow: /combination*
Disallow: /company.html
Disallow: /company/*.html
Disallow: /confidence.html
Disallow: /confidence/
Disallow: /consult.html
Disallow: /copy_index.html
Disallow: /correspondence.html
Disallow: /cost/
Disallow: /dcms_media/
Disallow: /demand.html
Disallow: /encyclopedia/
Disallow: /entry.html
Disallow: /funeral.html
Disallow: /img/shinjuku.pdf
Disallow: /inquiry.html
Disallow: /knowledge.html
Disallow: /manner/
Disallow: /media/
Disallow: /place.html
Disallow: /place/
Disallow: /premiumpac*.html
Disallow: /preparation.html
Disallow: /privacy.html
Disallow: /question/*
Disallow: /result.html
Disallow: /result/
Disallow: /seminar.html
Disallow: /seminar/index.html
Disallow: /seminar/seminar_*.html
Disallow: /separation.html
Disallow: /sitemap.html
Disallow: /type.html
Disallow: /voice*.html

Sitemap: https://www.syasou.com/sitemap.xml
`;
  }
};

class Robots extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/plain");
    res.write(getRobots());
    res.end();
  }
}

export default Robots;