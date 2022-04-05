import Layout from "../components/Layout";
import Link from "next/link";

import { backEnd, frontEnd, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/ad.jpeg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Arturo Diaz</h1>
              <h3>Developer Jr</h3>
              <p align ="justify">
              As Developer i am responsible for creating and maintaining software of various different kinds.
               My typical responsibilities include investigating current applications, producing specifications
               , writing new software and manuals and costing new or modified systems. As well as this,
                i must help in the support and training of users.
              </p>
              <Link href="/contact">
                <a className="btn btn-outline-light">Hire Me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {/* Skill Progress  */}
              <div className="py-3">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-secondary">
                    <h5>Front End</h5>
                    <ul>
                      {frontEnd.map(({skill, logo}, i) => (
                        <li>
                          {logo}   {skill}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="py-3">
                <ul className="list-group">             
                  <li className="list-group-item list-group-item-secondary">
                  <h5>Back End</h5>
                    <ul>
                      {backEnd.map(({skill, logo}, i) => (
                        <li>
                          {logo}   {skill}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ logo, company, title, from, to,description }, index) => (
                <li key={index}>
                  <h3>{title}   {logo}</h3>
                  <h5> {company}</h5>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p align ="justify">
                  {description}
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/hireme">
              <a className="btn btn-dark">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ name, description, image, url }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a className="btn btn-dark" href={url}>Repository</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/soon">
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
