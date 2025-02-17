import { useState, useEffect } from 'react';
import cloudImage from './assets/main_p.png';
import './App.css';
import nu1 from './assets/nu1.png';
import nu2 from './assets/nu2.jpg';
import nu3 from './assets/nu3.jpg';
import nu4 from './assets/nu4.jpg';
import nu5 from './assets/nu5.jpeg';
import nu9 from './assets/nu9.jpg';
import brand from './assets/brand.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import './i18n';

const getTimeRemaining = (targetDate) => {
  const now = new Date().getTime();
  const timeDiff = targetDate.getTime() - now;

  if (timeDiff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <>
      {days > 2 ? (
        <>
          <span>{t("time.days", { count: days })}</span>{" "}
          <span>{t("time.hours", { count: hours })}</span>
        </>
      ) : hours > 1 ? (
        <>
          <span>{t("time.hours", { count: hours })}</span>{" "}
          <span>{t("time.minutes", { count: minutes })}</span>
        </>
      ) : minutes > 1 ? (
        <>
          <span>{t("time.minutes", { count: minutes })}</span>{" "}
          <span>{t("time.seconds", { count: seconds })}</span>
        </>
      ) : seconds > 0 ? (
        <span>{t("time.seconds", { count: seconds })}</span>
      ) : (
        <span>{t("EventStarted")}</span>
      )}
    </>
  );
};

function App() {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const [registerLink, setRegisterLink] = useState('');
  const [imageUrl, setImageUrl] = useState('https://itcluster.lviv.ua/wp-content/uploads/2023/03/lnu.svg');
  const [imClassName, setImClassName] = useState('img-i4');
  const targetDate = new Date("2025-03-10T00:00:00");

  useEffect(() => {
    const hostname = window.location.hostname;

    let link;

    if (hostname === "lnu.azurebootcamp.uitware.com") {
      link = "https://forms.gle/m4TRfL35YgvrEkKd8";
      setImageUrl("https://itcluster.lviv.ua/wp-content/uploads/2023/03/lnu.svg");
      setImClassName("img-i4");
    } else if (hostname === "ucu.azurebootcamp.uitware.com") {
      link = "http://study.ucu.org.ua/course/azure-bootcamp/start";
      setImageUrl("https://upload.wikimedia.org/wikipedia/commons/2/2c/UkrainianCatholicUniversitylogo.png");
      setImClassName("img-i1");
    } else if (hostname === "lp.azurebootcamp.uitware.com") {
      link = "https://forms.gle/4a1pAL8zbPKSVL4y7";
      setImageUrl("https://upload.wikimedia.org/wikipedia/commons/f/ff/Nulp_logo_ukr.svg");
      setImClassName("img-i2");
    }
    else if (hostname === "itstep.azurebootcamp.uitware.com") {
      link = "https://forms.gle/KTcz68SwQotuTLxHA";
      setImageUrl("https://itcluster.lviv.ua/wp-content/uploads/2022/12/it_step.png");
      setImClassName("img-i4");
    } else {
      link = "default_link";
    }

    setRegisterLink(link);
  }, []);


  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const scrollContainer = (direction) => {
    const container = document.querySelector('.speakers-container');
    const cardWidth = document.querySelector('.speaker-card').offsetWidth;
    const margin = 30;
    const scrollAmount = cardWidth + margin;

    if (direction === 'next') {
      container.scrollLeft += scrollAmount;
    } else if (direction === 'prev') {
      container.scrollLeft -= scrollAmount;
    }
    container.scrollTo({
      top: 0,
      left: container.scrollLeft,
      behavior: 'smooth'
    });

    checkFlipperVisibility();
  }

  const checkFlipperVisibility = () => {
    const container = document.querySelector('.speakers-container');
    const containerScrollWidth = container.scrollWidth;
    const containerScrollLeft = container.scrollLeft;
    const containerClientWidth = container.clientWidth;

    const prevButton = document.querySelector('.f-previous');
    const nextButton = document.querySelector('.f-next');

    prevButton.style.display = containerScrollLeft > 0 ? 'block' : 'none';
    nextButton.style.display = containerScrollLeft < containerScrollWidth - containerClientWidth ? 'block' : 'none';
  }

  return (
    <div className="bg-dark-im">
      <div className="language-selector">
        <button className="lg-but" onClick={() => handleLanguageChange('en')}>EN</button>
        <button className="lg-but" onClick={() => handleLanguageChange('uk')}>UA</button>
      </div>
      <img className="imgbrand" src={brand} alt="U+ Azure Bootcamp" />
      <div className="bg-dark">
        <div className="mycontainer">
          <div className="text-content">
            <h1>{t("BoostTitle")}</h1>
            <p>{t("EmpowermentMessage")}</p>
            <p>{t("PartnershipDetails")}</p>
            <p>{t("ParticipationOpportunity")}</p>
            <p>{t("UniversityDetermination")}</p>
            <a id="registerBtn" href={registerLink} className="btn-register" target="_blank" rel="noreferrer">{t("RegisterButton")}</a>
          </div>
          <div className="image-content">
            <img src={cloudImage} alt="Main Logo" />
          </div>
        </div>

        <div className="event-info">
          <div className="countdown">
            <p className="countdown-label">{t("TimeLeftLabel")}</p>
            <div className="countdown-timer">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </div>
        <div className="agenda-container">
          <div className="discriptionProgram">
            <h2 className="agenda-title">{t("AgendaTitle")}</h2>
            <p className="mainText"><b>{t("NameProgram")}</b> {t("AzureBootcamp")}</p>
            <p className="mainText"><b>{t("GoalsProgramTitle")}</b> {t("GoalsProgram")}</p>
            <p className="mainText"><b>{t('DetailsProgram')}</b></p>
            <p className="mainText"> <b>{t("Speakers")}</b> {t("Speakers1")}</p>
            <h3 className="h3">{t("BoxProgram")}</h3>

            <div className="agenda">
            {/* Agenda Headers */}
            <div className="agenda-header">
              <div className="agenda-column-header">{t("Date")}</div>
              <div className="agenda-column-header">{t("EventDetails")}</div>
            </div>
            {/* Introduction to Azure Cloud */}
            <div className="agenda-item">
              <div className="agenda-date">10 - 16 {t("March")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("IntroductionToAzureCloud")}</h3>
                <div className="speaker-container">
                  <img src={nu1} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Andriy Bilous</h3>
                </div>
                <p className="agenda-description">{t("IntroductionToAzureCloudDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Management */}
            <div className="agenda-item">
              <div className="agenda-date">17 - 23 {t("March")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureCloudApplicationDevelopment")}</h3>
                <div className="speaker-container">
                  <img src={nu1} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Andriy Bilous</h3>
                </div>
                <p className="agenda-description">{t("AzureCloudApplicationDevelopmentDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Cloud Application Development */}
            <div className="agenda-item">
              <div className="agenda-date">24 - 30 {t("March")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureArchitectureComponentsAndServices")}</h3>
                <div className="speaker-container">
                  <img src={nu4} alt="Anton Boyko" className="speaker-photo" />
                  <h3 className="agenda-event-title">Anton Boyko</h3>
                </div>
                <p className="agenda-description">{t("AzureArchitectureComponentsAndServicesDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Architecture Components and Services */}
            <div className="agenda-item">
              <div className="agenda-date">31 {t("March")} - 6 {t("April")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("ArchitectingSolutionsOnAzure")}</h3>
                <div className="speaker-container">
                  <img src={nu3} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Stanislav Lebedenko</h3>
                </div>
                <p className="agenda-description">{t("ArchitectingSolutionsOnAzureDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Architectural Solutions in Azure */}
            <div className="agenda-item">
              <div className="agenda-date">07 - 13 {t("April")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureAutomation")}</h3>
                <div className="speaker-container">
                  <img src={nu2} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Orest Lavriv</h3>
                </div>
                <p className="agenda-description">{t("AzureAutomationDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Automation */}
            <div className="agenda-item">
              <div className="agenda-date">14 - 20 {t("April")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureDevOpsServices")}</h3>
                <div className="speaker-container">
                  <img src={nu1} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Andriy Bilous</h3>
                </div>
                <p className="agenda-description">{t("AzureDevOpsServicesDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure DevOps Services */}
            <div className="agenda-item">
              <div className="agenda-date">21 - 27 {t("April")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureSecurityAndPrivacy")}</h3>
                <div className="speaker-container">
                  <img src={nu1} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Andriy Bilous</h3>
                </div>
                <p className="agenda-description">{t("AzureSecurityAndPrivacyDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Security and Privacy */}
            <div className="agenda-item">
              <div className="agenda-date">28 {t("April")} - 4 {t("May")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureDataServices")}</h3>
                <div className="speaker-container">
                  <img src={nu9} alt="Sarah Young" className="speaker-photo" />
                  <h3 className="agenda-event-title">Sarah Young</h3>
                </div>
                <p className="agenda-description">{t("AzureDataServicesDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure AI Concepts */}
            <div className="agenda-item">
              <div className="agenda-date">05 - 11 {t("May")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureAIConcepts")}</h3>
                <div className="speaker-container">
                  <img src={nu1} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Andriy Bilous</h3>
                </div>
                <p className="agenda-description">{t("AzureAIConceptsDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Fundamentals of Working with Data in Azure */}
            <div className="agenda-item">
              <div className="agenda-date">12 - 18 {t("May")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("DevelopmentOfSoftwareSolutions")}</h3>
                <div className="speaker-container">
                  <img src={nu5} alt="Taras Kloba" className="speaker-photo" />
                  <h3 className="agenda-event-title">Taras Kloba</h3>
                </div>
                <p className="agenda-description">{t("DevelopmentOfSoftwareSolutionsDescription")}</p>
              </div>
            </div>
          </div>

            <p className="mainText"><b>{t('NumberOfAcademicHours')}</b> {t('NumberOfAcademicHoursTotal')}</p>
            <p className="mainText"><b>{t('CertificateProgramObjectives')}</b> {t('CertificateProgramObjectivesDescription')}</p>
            <p className="mainText"><b>{t('SkillsCompetenciesAcquired')}</b> </p>
          <ul>
            <li>{t('SkillsCompetenciesAcquired1')}</li>
            <li>{t('SkillsCompetenciesAcquired2')}</li>
            <li>{t('SkillsCompetenciesAcquired3')}</li>
            <li>{t('SkillsCompetenciesAcquired4')}</li>
            <li>{t('SkillsCompetenciesAcquired5')}</li>
            <li>{t('SkillsCompetenciesAcquired6')}</li>
            <li>{t('SkillsCompetenciesAcquired7')}</li>
            <li>{t('SkillsCompetenciesAcquired8')}</li>
          </ul>
          <p className="mainText"><b>{t("ProgramDuration")}</b> {t("ProgramDuration1")}</p>
          <p className="mainText"><b>{t("OrganizingDepartment")}</b> {t("OrganizingDepartment1")}</p>
          <p className="mainText"><b>{t("InformationAboutOrganizers")}</b> {t("InformationAboutOrganizersDetails")}</p>
          <p className="mainText"><b>{t("InformationAboutEducationalProgram")}</b></p>
          <ul>
            <li>{t('InformationAboutEducationalProgram1')}</li>
            <li>{t('InformationAboutEducationalProgram2')}</li>
            <li>{t('InformationAboutEducationalProgram3')}</li>
          </ul>
          <p className="mainText"><b>{t("LanguageInstruction")}</b> {t("LanguageInstructionChange")}</p>
          <p className="mainText"><b>{t("ClassFormat")}</b> {t("ClassFormat1")}</p>
          <p className="mainText"><b>{t("AssessmentPolicies")}</b> {t("AssessmentPoliciesDetails")}</p>


          

          



          </div>
        </div>

        <div className="speakers">
          <h2 className="speakers-title">{t("FeaturedSpeakers")}</h2>
          <div className="speakers-wrapper">

            <div className="speakers-container">
              {/* Speaker 1 */}
              <div className="speaker-card">
                <div className="speaker-image">
                  <img src={nu1} alt="Andriy Bilous" />
                </div>
                <div className="speaker-info">
                  <h5 className="speaker-name">{t("Speaker1Name")}</h5>
                  <p className="speaker-title">{t("Speaker1Title")}</p>
                  <p className="speaker-title">{t("Speaker1Title1")}</p>
                  <a href="https://www.linkedin.com/in/andriy-bilous-32718aa7/" className="btn-view">{t("ViewProfile")}</a>
                </div>
              </div>
              {/* Speaker 2 */}
              <div className="speaker-card">
                <div className="speaker-image">
                  <img src={nu2} alt="Orest Lavriv" />
                </div>
                <div className="speaker-info">
                  <h5 className="speaker-name">{t("Speaker2Name")}</h5>
                  <p className="speaker-title">{t("Speaker2Title")}</p>
                  <p className="speaker-title">{t("Speaker2Title1")}</p>
                  <a href="https://www.linkedin.com/in/orest-l-74925992/" className="btn-view">{t("ViewProfile")}</a>
                </div>
              </div>
              {/* Speaker 3 */}
              <div className="speaker-card">
                <div className="speaker-image">
                  <img src={nu3} alt="Stanislav Lebedenko" />
                </div>
                <div className="speaker-info">
                  <h5 className="speaker-name">{t("Speaker3Name")}</h5>
                  <p className="speaker-title">{t("Speaker3Title")}</p>
                  <p className="speaker-title">{t("Speaker3Title1")}</p>
                  <a href="https://www.linkedin.com/in/lebedenkostanislav/" className="btn-view">{t("ViewProfile")}</a>
                </div>
              </div>
              {/* Speaker 4 */}
              <div className="speaker-card">
                <div className="speaker-image">
                  <img src={nu4} alt="Anton Boyko" />
                </div>
                <div className="speaker-info">
                  <h5 className="speaker-name">Anton Boyko</h5>
                  <p className="speaker-title">CIO, Principal Architect</p>
                  <p className="speaker-title">Microsoft MVP, RD, Academic Director</p>
                  <a href="https://www.linkedin.com/in/boykoant/" className="btn-view">{t("ViewProfile")}</a>
                </div>
              </div>
              {/* Speaker 5 */}
              <div className="speaker-card">
                <div className="speaker-image">
                  <img src={nu5} alt="Taras Kloba" />
                </div>
                <div className="speaker-info">
                  <h5 className="speaker-name">Taras Kloba</h5>
                  <p className="speaker-title">Associate Director, PhD, MVP</p>
                  <p className="speaker-title">Data & Analytics at SoftServe</p>
                  <a href="https://www.linkedin.com/in/kloba/" className="btn-view">{t("ViewProfile")}</a>
                </div>
              </div>
              {/* Speaker 6 */}
              <div className="speaker-card">
                <div className="speaker-image">
                  <img src={nu9} alt="Sarah Young" />
                </div>
                <div className="speaker-info">
                  <h5 className="speaker-name">Sarah Young</h5>
                  <p className="speaker-title">Senior Cloud Security Advocate</p>
                  <p className="speaker-title">at Microsoft</p>
                  <a href="https://www.linkedin.com/in/sarahyo16/" className="btn-view">{t("ViewProfile")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="logos">
          <img className={imClassName} src={imageUrl} alt="Logo" />
          <img className="img-i3" src="https://media.licdn.com/dms/image/D4D0BAQH3q-WlTfehSw/company-logo_200_200/0/1667339151545/uitware_logo?e=1714003200&v=beta&t=vxCsa60KT9h1aUPJqFzLxsy5evIMR3xj0X8V-b1M70k" alt="Logo 3" />
        </div>
      </div>
    </div>
  );
}

export default App;
