/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Venkatesh Sundaram",
  title: "Hi all, I'm Venkatesh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1yjaqoDTW10ABVjmIfCB779ax2oNLqbSzQ3XyQSHHVr8/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/venkateshsundaram",
  linkedin: "https://www.linkedin.com/in/venkatesh-sundaram/",
  gmail: "contactvenkateshsundaram@gmail.com",
  gitlab: "https://gitlab.com/venkateshsundaram",
  facebook: "https://www.facebook.com/contactvenkatesh",
  medium: "https://medium.com/@contactvenkateshsundaram",
  stackoverflow: "https://stackoverflow.com/users/15438131/venkatesh-sundaram",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as AWS / Heroku"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vickram College of Engineering",
      logo: require("./assets/images/vickramCollegeLogo.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2012 - April 2016",
      desc:
        "Passed with first class",
      descBullets: ["Participated in lot of workshops while academic studies"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Freshworks",
      companylogo: require("./assets/images/freshworks.png"),
      date: "May 2018 – Present",
      desc:
        "Developed data visualization web application as an embedded analytics.",
      descBullets: [
        "Developing data visualization embedded applications for freshworks products such as FreshService, FreshCaller, FreshMarketer, FreshDesk, FreshSales, FreshTeam, FreshRelease"
      ]
    },
    {
      role: "Software Engineer",
      company: "Colan Infotech",
      companylogo: require("./assets/images/colanInfotechLogo.png"),
      date: "October 2017 - April 2018",
      desc:
        "Developed categorising transactions based on a set of criterias."
    },
    {
      role: "Software Developer",
      company: "Aline Oy",
      companylogo: require("./assets/images/alineLogo.png"),
      date: "August 2016 - October 2017",
      desc:
        "Developed an enterprise application for data visualisation."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
};

// Blogs Section

const blogSection = {
};

// Talks Sections

const talkSection = {
};

// Podcast Section

const podcastSection = {
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9787742045",
  email_address: "contactvenkateshsundaram@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "contactvenkat_s", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
