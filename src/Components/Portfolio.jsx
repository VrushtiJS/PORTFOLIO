/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/booksondesk.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Art Gallery Website Design Case Study",
    description:
      "Designed a website using Adobe XD for a art gallery supporting ecommerce features to enable indigenous artist to sell their art pieces as well.",
    url: "https://drive.google.com/file/d/1wtKbW_ADREPQ5FYgZ17CSqYEcaE9g12i/view",
  },
  {
    title: "KalaKendra Mobile App Design Case Study",
    description:
      "Designed a clean mobile app using Figma. Curated an interface that embraces minimalist aesthetics, allowing users to focus on the artistry showcased within. ",
    url: "https://drive.google.com/file/d/1f7rzIaz-OF60gsp0gPSFWlv6vOlQokIO/view",
  },
  {
    title: "My Resume Site",
    description: "Created from scratch with Webflow. Includes my experience and design abilities.",
    url: "https://vs-design-portfolio.webflow.io/",
  },
  {
    title: "LifeVeda App Design Project",
    description: "Coming Soon...  Designing for Social Good.",
    url: " ",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
