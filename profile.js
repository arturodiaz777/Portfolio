import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import {FaJava} from 'react-icons/fa';
import { SiIbm } from 'react-icons/si';
import { SiBosch } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import { SiMongodb } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiHibernate } from 'react-icons/si';

export const frontEnd = [
  {
    skill: "Javascript",
    logo: <SiJavascript/>
  },
  {
    skill: "ReactJs",
    logo: <SiReact/>
  },
  {
    skill: "HTML5",
    logo: <SiHtml5/>
  },
  {
    skill: "CSS",
    logo : <SiCss3/>
  },
  {
    skill: "Jest",
    logo: <SiJest/>
  }
];
export const backEnd = [
  {
    skill: "Java",
    logo: <FaJava/>
  },
  {
    skill: "NodeJs",
    logo: <FaNodeJs/>
  },
  {
    skill: "MongoDB",
    logo: <SiMongodb/>
  },
  {
    skill: "Mongoose",
    logo: <BiData/>
  },
  {
    skill: "PostgreSQL",
    logo: <SiPostgresql/>
  },
  {
    skill: "DB2",
    logo: <SiIbm/>
  },
  {
    skill: "TestNG",
    logo: <FaJava/>
  },
  {
    skill: "Hibernate",
    logo: <SiHibernate/>
  }
];

export const experiences = [
  {
    title: "Full Stack Developer",
    description:"Lead the review and estimation of requirements while working with a team to plan agile sprints related to application and process development roadmaps. Lead code reviews and provide feedback to peers, manager, and the team product owner. Lead architecture and technical roadmap planning sessions. Propose implementation and architecture patterns and best practices to management and product teams. Develop web applications with languages such as Python, Java, PHP and JavaScript. Commit and organize source code in GitHub enterprise. Develop back-end processes and APIs required by front-end applications. Define necessary data models and schemas for the applications supported. Managing the complete software development process from conception to deployment.",
    from: "June 2022",
    to: "Current",
    company: "IBM",
    logo: <SiIbm/>
  },
  {
    title: "Software Architect - Intern",
    description:"Architecture and implementation to help with the security of servers, as well as databases using microservices. Architecture and unification of user accounts from different platforms using REST APIs, databases, OOP, Java and UML. Creation of integrations to synchronize different tools with webhooks and node.js",
    from: "July 2021",
    to: "June 2022",
    company: "IBM",
    logo: <SiIbm/>
  },
  {
    title: "Software Developer - Intern",
    description:
      "Develop software in VBA and testing automation",
    from: "January 2021",
    to: "July 2021",
    company: "Robert Bosch GmbH",
    logo: <SiBosch/>
  }
];

export const projects = [
  {
    name: "Books App",
    description:
      "An app fullstack to save books on the cloud",
    image: "portfolio1.jpg",
    url: "https://books-app-fullstack.herokuapp.com",
  },
  {
    name: "Rest Api",
    description:
      "A rest api maked with Nodejs",
    image: "portfolio2.jpg",
    url: "https://github.com/arturodiaz777/restapi-nodejs",
  },
  {
    name: "CRUD",
    description:
      "A crud about tasks maked with Nodejs and Mongodb",
    image: "portfolio3.jpg",
    url: "https://github.com/arturodiaz777/crud-nodejs",
  }
  
  
];

