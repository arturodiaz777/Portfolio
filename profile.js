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
    title: "Software Architect - Intern",
    description:"Architecture and implementation to help with the security of servers, as well as databases using microservices. Architecture and unification of user accounts from different platforms using REST APIs, databases, OOP, Java and UML. Creation of integrations to synchronize different tools with webhooks and node.js",
    from: "July 2021",
    to: "Current",
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

