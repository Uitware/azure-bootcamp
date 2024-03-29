// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "BoostTitle": "Boost yourself with Uitware Azure Bootcamp",
      "EmpowermentMessage": "We believe that every person and organization on the planet can be empowered to achieve more. Join us in March 4, 2024, to seize the opportunity to learn from experts at the free Uitware Azure Bootcamp.",
      "PartnershipDetails": "In partnership with \"Ukrainian Catholic University\", \"Lviv Polytechnic National University\", and \"Ivan Franko National University of Lviv\", we have launched Azure Bootcamp for students, providing industry knowledge from Microsoft and insights from global experts.",
      "ParticipationOpportunity": "By participating in Uitware Azure Bootcamp, students will have the opportunity to earn additional credits for specific academic subjects*.",
      "UniversityDetermination": "* The University determines the exact academic subjects.",
      "RegisterButton": "Register",
      "TimeLeftLabel": "Time left until the start of school",
      "Days": "days",
      "Hours": "hours",
      "AgendaTitle": "Agenda",
      "Date": "Date",
      "April": "April",
      "May": "May",
      "March": "March",
      "EventDetails": "Event Details",
      "IntroductionToAzureCloud": "Introduction to Azure Cloud",
      "IntroductionToAzureCloudDescription": "Getting started with Azure, including its fundamental concepts, resource management, and hierarchical structure.",
      "AzureManagement": "Azure Management",
      "AzureManagementDescription": "Focuses on Azure management areas and groups, resource hierarchy, cost management, subscription configuration, and security of resource management.",
      "AzureCloudApplicationDevelopment": "Azure Cloud Application Development",
      "AzureCloudApplicationDevelopmentDescription": "Introduces Git, Azure Functions, Blob Storage, and Azure security solutions, focusing on practical aspects of developing cloud applications.",
      "AzureArchitectureComponentsAndServices": "Azure Architecture Components and Services",
      "AzureArchitectureComponentsAndServicesDescription": "Concentrates on the core architectural components of Azure, including computing, networking, storage services, identity, and access management.",
      "ArchitectingSolutionsOnAzure": "Architecting Solutions on Azure",
      "ArchitectingSolutionsOnAzureDescription": "Covers cloud design principles, best practices, application architecture patterns, and the architectural framework of Microsoft Azure. Participants will learn to optimize processes, select the right technology, and understand various Azure computing services and data storage models.",
      "AzureAutomation": "Azure Automation",
      "AzureAutomationDescription": "Presents various automation tools such as CLI, PowerShell, ARM, Bicep, and Terraform, which enable more efficient management of Azure resources.",
      "AzureDevOpsServices": "Azure DevOps Services",
      "AzureDevOpsServicesDescription": "Covers Azure DevOps, CI/CD pipelines, continuous delivery, DevOps principles for machine learning, and version management strategies.",
      "AzureSecurityAndPrivacy": "Azure Security and Privacy",
      "AzureSecurityAndPrivacyDescription": "This module covers data protection, privacy, cybersecurity fundamentals, Microsoft security and compliance solutions, as well as role-based access control in Azure.",
      "AzureAIConcepts": "Azure AI Concepts",
      "AzureAIConceptsDescription": "Provides an overview of Microsoft Azure AI and Generative AI, offering a glimpse into the future of artificial intelligence in cloud computing.",
      "AzureDataServices": "Azure Data Services",
      "AzureDataServicesDescription": "This module covers data services in Microsoft Azure, including relational and non-relational databases, analytics services, data processing, as well as the concept of big data.",
      "FeaturedSpeakers": "Featured Speakers",
      "Speaker1Name": "Andriy Bilous",
      "Speaker1Title": "CEO at Uitware, Microsoft MVP",
      "Speaker1Title1": "",
      "Speaker2Name": "Orest Lavriv",
      "Speaker2Title": "Cloud & DevOps Systems Architect",
      "Speaker2Title1": "at EPAM",
      "Speaker3Name": "Stanislav Lebedenko",
      "Speaker3Title": "Cloud Architect at Solidify,",
      "Speaker3Title1": "Microsoft MVP",
      "ViewProfile": "View Profile",

    }
  },
  uk: {
    translation: {
      "BoostTitle": "Підвищуй свої навички з Uitware Azure Bootcamp",
      "EmpowermentMessage": "Ми віримо, що кожна людина та організація на планеті може бути наділена силою досягати більшого. Приєднуйтеся до нас 4 березня 2024 року, щоб скористатися можливістю вчитися у експертів на безкоштовному Uitware Azure Bootcamp.",
      "PartnershipDetails": "У партнерстві з Українським Католицьким Університетом, Національним університетом \"Львівська політехніка\" та Львівський національний університетом імені Івана Франка ми запустили Azure Bootcamp. У рамках цього партнерства ми надаємо студентам можливість професійного зростання у сфері ІТ з технологіями від Microsoft та знаннями від провідних світових експертів.",
      "ParticipationOpportunity": "Участь у Uitware Azure Bootcamp дасть студентам можливість отримати додаткові кредити за окремі академічні предмети*.",
      "UniversityDetermination": "* Університет визначає академічні предмети.",
      "RegisterButton": "Зареєструватися",
      "TimeLeftLabel": "Час до початку навчання",
      "Days": "днів",
      "Hours": "годин",
      "AgendaTitle": "Програма",
      "Date": "Дата",
      "April": "Квітня",
      "May": "Травня",
      "March": "Березня",
      "EventDetails": "Деталі Події",
      "IntroductionToAzureCloud": "Вступ до хмари Azure",
      "IntroductionToAzureCloudDescription": "Початок роботи з Azure, включаючи її основні поняття, управління ресурсами та ієрархічну структуру.",
      "AzureManagement": "Керування Azure",
      "AzureManagementDescription": "Фокусується на областях і групах керування Azure, ієрархії ресурсів, управлінні витратами, конфігурації підписки та безпеці керування ресурсами.",
      "AzureCloudApplicationDevelopment": "Розробка хмарних програм Azure",
      "AzureCloudApplicationDevelopmentDescription": "Цей модуль знайомить із Git, функціями Azure, сховищем BLOB-об’єктів і рішеннями Azure безпеки, зосереджуючись на практичних аспектах розробки хмарних програм.",
      "AzureArchitectureComponentsAndServices": "Компоненти та служби архітектури Azure",
      "AzureArchitectureComponentsAndServicesDescription": "Зосереджено на основних архітектурних компонентах Azure, включаючи обчислення, мережу, служби зберігання, ідентифікацію та керування доступом.",
      "ArchitectingSolutionsOnAzure": "Архітектурні рішення в Azure",
      "ArchitectingSolutionsOnAzureDescription": "Цей модуль охоплює принципи хмарного проектування, найкращі практики, шаблони архітектури додатків і архітектурну структуру Microsoft Azure.",
      "AzureAutomation": "Автоматизація Azure",
      "AzureAutomationDescription": "Представляє різноманітні інструменти автоматизації, як-от CLI, PowerShell, ARM, Bicep і Terraform.",
      "AzureDevOpsServices": "Сервіси Azure DevOps",
      "AzureDevOpsServicesDescription": "Охоплює Azure DevOps, конвеєри CI/CD, безперервну доставку, принципи DevOps для машинного навчання.",
      "AzureSecurityAndPrivacy": "Безпека та конфіденційність Azure",
      "AzureSecurityAndPrivacyDescription": "Цей модуль охоплює захист даних, конфіденційність, основи кібербезпеки.",
      "AzureAIConcepts": "Концепції Azure AI",
      "AzureAIConceptsDescription": "Пропонує огляд Microsoft Azure AI і Generative AI.",
      "AzureDataServices": "Основи роботи з даними в Azure",
      "AzureDataServicesDescription": "Описує сервіси по роботі з даними в Microsoft Azure включаючи реляційні та нереляційні бази даних, сервіси аналітики та обробки даних, а також концепцію великих даних.",
      "FeaturedSpeakers": "Спікери",
      "Speaker1Name": "Andriy Bilous",
      "Speaker1Title": "CEO at Uitware,Microsoft MVP",
      "Speaker1Title1": "",
      "Speaker2Name": "Orest Lavriv",
      "Speaker2Title": "Cloud & DevOps Systems Architect",
      "Speaker2Title1": "at EPAM",
      "Speaker3Name": "Stanislav Lebedenko",
      "Speaker3Title": "Cloud Architect at Solidify,",
      "Speaker3Title1": "Microsoft MVP",
      "ViewProfile": "Профіль",
      
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
