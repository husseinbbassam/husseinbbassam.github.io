
import { Experience, Education, SkillCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Software Engineer – Backend Team Lead (.NET)",
    company: "Sheyaaka",
    period: "Jan 2022 – Dec 2025",
    location: "Dubai, UAE | Hybrid",
    description: [
      "Designed and maintained scalable .NET Core backend services supporting a production e-commerce platform with high transaction volume.",
      "Built and maintained RESTful APIs supporting a production e-commerce platform.",
      "Owned backend business logic, service integrations, and data access layers.",
      "Designed and optimized SQL Server schemas and queries, improving performance and supporting growing business requirements.",
      "Collaborated closely with frontend, product, and QA teams to deliver features end-to-end.",
      "Implemented integrations with payment gateways (Stripe, PayPal) and logistics (Aramex, DHL) using secure XML/JSON interfaces.",
      "Automated CI/CD using GitHub Actions and runners to streamline deployments.",
      "Managed Azure cloud deployments, environment configuration, and secrets management."
    ]
  },
  {
    role: "Intermediate Backend Developer (.NET)",
    company: "Vision & More",
    period: "Apr 2021 – Dec 2021",
    location: "Beirut, Lebanon",
    description: [
      "Developed backend services and APIs using the .NET Framework.",
      "Implemented business logic and database access layers.",
      "Participated in microservices-oriented system design and backend optimization.",
      "Worked closely with frontend developers and QA engineers to deliver stable features.",
      "Contributed to code reviews, testing, and performance improvements."
    ]
  },
  {
    role: "Software Quality Assurance Engineer",
    company: "Astellia",
    period: "Mar 2022 – Aug 2022 (Contract)",
    location: "Beirut, Lebanon",
    description: [
      "Executed functional, manual, and regression testing for enterprise software products.",
      "Identified and documented defects, collaborating with developers on resolution.",
      "Assisted in test case design and validation of fixes.",
      "Followed QA standards and best practices throughout the development lifecycle."
    ]
  },
  {
    role: "Junior Full Stack Developer",
    company: "We Do Genics",
    period: "Sep 2021 – Dec 2021",
    location: "Beirut, Lebanon",
    description: [
      "Supported development of a small-scale e-commerce web application.",
      "Contributed to frontend and backend features including form handling and basic logic.",
      "Assisted with database operations and testing activities."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Enterprise .NET Core",
    skills: ["C# 12/13", ".NET 8/9", "Entity Framework Core", "LINQ", "ASP.NET Core Web API"],
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "Architecture & Patterns",
    skills: ["Microservices", "Domain Driven Design (DDD)", "CQRS", "Clean Architecture", "SOLID"],
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    title: "Testing & Quality",
    skills: ["Unit Testing (xUnit)", "Moq", "Integration Testing", "TDD", "Postman/Swagger"],
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Data & Caching",
    skills: ["SQL Server", "PostgreSQL", "Redis", "MongoDB", "Dapper", "Query Optimization"],
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure (App Services, Service Bus)", "Docker", "CI/CD", "GitHub Actions", "Terraform"],
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  },
  {
    title: "Data Science & Python",
    skills: ["Python", "Power BI", "Pandas/NumPy", "Scikit-learn", "ML.NET"],
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "Master's Degree in Data Science (ongoing)",
    school: "Rome Business School",
    period: "2025 – Present",
    details: [
      "Python for data analysis and automation",
      "Machine learning and data mining fundamentals",
      "Data visualization using Power BI and Tableau"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Beirut Arab University",
    period: "2018 – 2021",
    details: ["Minor Certificate: Mathematics"]
  }
];
