import { motion } from "motion/react";
import "./App.css";

import {
  Code2,
  BriefcaseBusiness,
  Mail,
  ArrowUpRight,
  Download,
  Phone,
} from "lucide-react";

function App() {
  return (
    <main className="portfolio">

      {/* ================= NAVIGATION ================= */}

      <nav className="navbar">

        <a href="#home" className="logo">
          Santhosh Kumar B Y
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk <ArrowUpRight size={16} />
        </a>

      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="greeting">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hello, I'm
            <br />
            <span className="hero-name">
              Santhosh Kumar B Y
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Backend Developer & Software Engineer
          </motion.h2>

          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I build scalable backend applications and reliable REST APIs
            using Node.js, Express.js, JavaScript and MongoDB. I enjoy
            solving complex problems and building technology that makes
            a difference.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >

            <a href="#projects" className="primary-btn">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              className="secondary-btn"
              download
            >
              Download Resume
              <Download size={18} />
            </a>

          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >

            <a
              href="https://github.com/santy1007"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/santhosh-kumar-b-y-b8b16a1b1/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>

          </motion.div>

        </div>


        {/* HERO RIGHT VISUAL */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="visual-center">
            <span>SK</span>
            <p>BACKEND DEVELOPER</p>
          </div>

          <div className="floating-card card-one">
            Node.js
          </div>

          <div className="floating-card card-two">
            MongoDB
          </div>

          <div className="floating-card card-three">
            Docker
          </div>

        </motion.div>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section className="about-section" id="about" >

        <div className="about-heading">

          <div className="section-label">
            GET TO KNOW ME
          </div>

          <h2>
            About <span>Me</span>
          </h2>

        </div>


        <div className="about-container">

          <div className="about-description">

            <h3>
              Building reliable and scalable backend solutions.
            </h3>

            <p>
              I'm a Backend Developer with 5+ years of experience in
              software development. My primary expertise is in Node.js,
              JavaScript, Express.js and MongoDB.
            </p>

            <p>
              I have worked on REST API development, database integration,
              third-party API integrations, IoT applications and smart
              home products.
            </p>

            <p>
              I'm also expanding my knowledge of Docker, CI/CD,
              Kubernetes and cloud technologies to build and deploy
              production-ready applications.
            </p>

          </div>


          <div className="about-stats">

            <div className="stat-card">
              <h3>5+</h3>
              <p>Years of Experience</p>
            </div>

            <div className="stat-card">
              <h3>20+</h3>
              <p>APIs Developed</p>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <p>Major Projects</p>
            </div>

            <div className="stat-card">
              <h3>8+</h3>
              <p>Technologies</p>
            </div>

          </div>

        </div>


        {/* TECHNOLOGY STACK */}

        <div className="tech-stack">

          <h3>Technologies I Work With</h3>

          <div className="tech-list">

            {[
              "Node.js",
              "JavaScript",
              "Express.js",
              "MongoDB",
              "MySQL",
              "REST APIs",
              "Docker",
              "Git",
            ].map((tech) => (
              <span className="tech-item" key={tech}>
                {tech}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE SECTION ================= */}

      <section className="experience-section" id="experience" >

        <div className="experience-heading">

          <div className="section-label">
            MY PROFESSIONAL JOURNEY
          </div>

          <h2>
            Work <span>Experience</span>
          </h2>

        </div>

        <p className="experience-intro">
          My professional experience and career journey in software
          development.
        </p>


        <div className="experience-timeline">


          {/* INFOSYS */}

          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="timeline-dot"></span>

            <div className="experience-top">

              <div>

                <div className="company-label">
                  CURRENT ROLE
                </div>

                <h3>Associate Consultant</h3>

                <h4>Infosys</h4>

              </div>

              <span className="current-badge">
                SEP 2025 - PRESENT
              </span>

            </div>

            <p className="experience-description">
              Working in the technology services domain and continuing
              to strengthen my technical expertise and software
              engineering skills.
            </p>

            <div className="experience-tech">
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>Backend Development</span>
            </div>

          </motion.div>


          {/* LIVPURE */}

          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="timeline-dot"></span>

            <div className="experience-top">

              <div>

                <div className="company-label">
                  PREVIOUS EXPERIENCE
                </div>

                <h3>Software Engineer</h3>

                <h4>Livpure Smart Homes Pvt. Ltd.</h4>

              </div>

              <span className="current-badge">
                FEB 2021 - SEP 2025
              </span>

            </div>

            <p className="experience-description">
              Developed and maintained backend services and REST APIs
              for smart home and IoT products. Worked on device
              integrations, subscriptions, scheduling and third-party
              API integrations.
            </p>

            <div className="experience-tech">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>MQTT</span>
              <span>REST APIs</span>
              <span>JWT</span>
            </div>

          </motion.div>

        </div>

      </section>


      {/* ================= PROJECTS SECTION ================= */}

      <section className="projects-section" id="projects" >

        <div className="section-heading">

          <div className="section-label">
            WHAT I'VE BUILT
          </div>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="projects-intro">
            A selection of projects and solutions I've worked on.
          </p>

        </div>


        {/* PROFESSIONAL PROJECTS */}

        <div className="project-category">

          <h3>Professional Projects</h3>

          <p className="category-description">
            Backend development and integrations for business and IoT
            applications.
          </p>


          <div className="projects-grid">


            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="project-number">01</span>

              <p className="project-company">PROFESSIONAL PROJECT</p>

              <h4>PCMAS</h4>

              <p>
                Worked on backend development and API integrations
                for the PCMAS application, supporting application
                workflows and data communication.
              </p>

              <div className="project-tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
              </div>

            </motion.div>


            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="project-number">02</span>

              <p className="project-company">PROFESSIONAL PROJECT</p>

              <h4>Smart Home Products - HEKA</h4>

              <p>
                Developed backend APIs for smart fans, retrofit relay
                devices and smart plugs. Worked on device communication,
                local scheduling and product integrations.
              </p>

              <div className="project-tags">
                <span>Node.js</span>
                <span>MQTT</span>
                <span>MongoDB</span>
                <span>REST APIs</span>
              </div>

            </motion.div>


            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="project-number">03</span>

              <p className="project-company">PROFESSIONAL PROJECT</p>

              <h4>Data Logger - Wi-Fi / GPRS</h4>

              <p>
                Worked on backend functionality and API communication
                supporting data logger devices using Wi-Fi and GPRS
                connectivity.
              </p>

              <div className="project-tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>API Integration</span>
              </div>

            </motion.div>


            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <span className="project-number">04</span>

              <p className="project-company">PROFESSIONAL PROJECT</p>

              <h4>Smart Inverter</h4>

              <p>
                Contributed to backend services and API integrations
                for smart inverter functionality and connected-device
                communication.
              </p>

              <div className="project-tags">
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>REST APIs</span>
              </div>

            </motion.div>

          </div>

        </div>


        {/* PERSONAL PROJECT */}

        <div className="project-category personal-category">

          <h3>Personal Project</h3>

          <p className="category-description">
            A project I'm building to strengthen my full-stack and
            DevOps skills.
          </p>


          <motion.div
            className="project-card personal-project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <span className="project-number">05</span>

            <p className="project-company">PERSONAL PROJECT</p>

            <h4>E-commerce Application</h4>

            <p>
              Building an e-commerce application with product
              management, authentication, cart and order functionality.
              Also working on Docker containerization and CI/CD.
            </p>

            <div className="project-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Docker</span>
              <span>React.js</span>
            </div>

            <span className="project-status">
              Currently in development
            </span>

            <a
              href="https://github.com/santy1007"
              target="_blank"
              rel="noreferrer"
              className="project-status"
            >
              View GitHub <ArrowUpRight size={14} />
            </a>

          </motion.div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section" id="contact" >

        <div className="contact-content">

          <div className="contact-eyebrow">
            LET'S CONNECT
          </div>

          <h2>
            Let's Build Something <span>Together</span>
          </h2>

          <p className="contact-description">
            Have an opportunity or want to discuss a project?
            Feel free to reach out. I'm open to discussing backend
            development opportunities and interesting projects.
          </p>


          <div className="contact-buttons">

            <a
              href="mailto:santu9391@gmail.com"
              className="contact-button"
            >
              <Mail size={18} />
              Send Me an Email
            </a>

            <a
              href="tel:+917975279847"
              className="resume-link"
            >
              <Phone size={17} />
              Call Me
            </a>

          </div>


          <div className="contact-socials">

            <a
              href="https://github.com/santy1007"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/santhosh-kumar-b-y-b8b16a1b1/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>

            <a
              href="https://www.naukri.com/mnjuser/profile?id=&altresid"
              target="_blank"
              rel="noreferrer"
            >
              Naukri <ArrowUpRight size={14} />
            </a>

            <a
              href="/resume.pdf"
              className="resume-link"
              download
            >
              <Download size={15} />
              Download Resume
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bottom-line" >

        <span>
          © {new Date().getFullYear()} SANTHOSH KUMAR B Y
        </span>

        <span>
          DESIGNED & BUILT WITH PASSION
        </span>

      </footer>

    </main >
  );
}

export default App;