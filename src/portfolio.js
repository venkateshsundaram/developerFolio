/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Venkatesh",
  title: "Hi all, I'm Venkatesh",
  subTitle: emoji(
    "A passionate software professional 🚀 having an experience of building web and mobile applications with popular javascript frameworks and react native."
  ),
  displayContact: true,
  displayReachout: true,
  // resumeLink:
  //   "https://docs.google.com/document/d/1yjaqoDTW10ABVjmIfCB779ax2oNLqbSzQ3XyQSHHVr8/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/venkateshsundaram",
  gitlab: "https://gitlab.com/venkateshsundaram",
  medium: "https://medium.com/@contactvenkateshsundaram",
  // stackoverflow: "https://stackoverflow.com/users/15438131/venkatesh-sundaram",
  linkedin: "https://www.linkedin.com/in/venkatesh-sundaram/",
  // gmail: "contactvenkateshsundaram@gmail.com",
  facebook: "https://www.facebook.com/contactvenkatesh",
  instagram: "https://www.instagram.com/venkatesh__here",
  twitter: "https://www.twitter.com/contactvenkat_s",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Techie who wants to explore every tech stack",
  skills: [
    emoji(
      "⚡ Developing highly interactive Frontend / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
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
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-neos"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-leaf"
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
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vickram College of Engineering",
      logo: require("./assets/images/vickramCollegeLogo.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2012 - April 2016",
      desc: "First class",
      descBullets: [
        "Hosted few inter college events",
        "Attended plenty of workshops",
        "Had an internship for final project"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "MTS Software Engineering",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforce.webp"),
      date: "Mar 2026 – Present",
      descBullets: []
    },
    {
      role: "Lead Software Engineer",
      company: "Informatica",
      companylogo: require("./assets/images/informatica.jpeg"),
      date: "Oct 2022 – Mar 2026",
      desc: "Power of Platforms",
      descBullets: []
    },
    {
      role: "Lead Software Engineer",
      company: "Freshworks",
      companylogo: require("./assets/images/freshworks.png"),
      date: "May 2018 – Oct 2022",
      desc: "FreshReports",
      descBullets: []
    },
    {
      role: "Software Engineer",
      company: "Colan Infotech",
      companylogo: require("./assets/images/colanInfotechLogo.png"),
      date: "October 2017 - April 2018",
      descBullets: []
    },
    {
      role: "Software Developer",
      company: "Aline Oy",
      companylogo: require("./assets/images/alineLogo.png"),
      date: "August 2016 - October 2017",
      desc: "Cloud EDH",
      descBullets: []
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
  title: "Big Projects",
  subtitle: "STARTUPS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/alineFullLogo.png"),
      projectName: "CloudEDH",
      className: "center-card",
      projectDesc: "Data visualization tool",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.aline-consulting.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// hobby projects you have worked on

const hobbyProjects = {
  title: "Hobby Projects",
  subtitle: "Great projects that I build when I have free time",
  projects: [
    {
      image: require("./assets/images/videotape.png"),
      projectName: "Video tape",
      className: "semi-center-card",
      projectDesc: "Movies and shows preview application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://videotape.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/confabbox.svg"),
      projectName: "Confabbox",
      className: "semi-center-card",
      projectDesc: "Web based conferencing application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://confabbox.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Authored and open-sourced a lightweight, ultra-fast CLI for building React applications.",
      image: require("./assets/images/reactClientLogo.png"),
      imageAlt: "React Client Logo",
      className: "semi-center-card",
      footerLink: [
        {
          name: "Link to Repository",
          url: "https://www.npmjs.com/package/react-client"
        }
      ]
    },
    {
      title: "Authored and open-sourced a compact state management library.",
      image: require("./assets/images/statejetLogo.png"),
      imageAlt: "StateJet Logo",
      className: "semi-center-card",
      footerLink: [
        {
          name: "Link to Repository",
          url: "https://www.npmjs.com/package/state-jet"
        }
      ]
    },
    {
      title: "Achieved back-to-back third-place finishes in hackathons.",
      image: require("./assets/images/freshworks.png"),
      imageAlt: "Freshworks Logo",
      className: "semi-center-card",
      footerLink: [
        {
          name: "Award Letter"
        }
      ]
    },
    {
      title: "Scrum Master",
      image: require("./assets/images/learnTubeLogo.png"),
      imageAlt: "LearnTube Logo",
      className: "semi-center-card",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1cbYYyoCfg74QlScFihp18qPGUvgKDaFp/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: [
    {
      url: "https://medium.com/@contactvenkateshsundaram/build-your-own-google-meet-launcher-chrome-extension-less-than-15minutes-8c6912c6124",
      title:
        "Build your Own Google meet launcher (chrome extension) less than 15minutes",
      description:
        "Gmeet-helper is a chrome extension which helps the user to create instant google meetings with shortcut friendly, link sharing and calendar push event supports."
    },
    {
      url: "https://medium.com/@contactvenkateshsundaram/why-state-jet-is-the-most-efficient-react-state-management-library-a7551358f72a",
      title:
        "Why State-Jet is the Most Efficient React State Management Library in 2025",
      description:
        "State-Jet delivers a state management experience other libraries can’t match: blazing fast updates, secure persistence, zero-boilerplate, and real-time-ready."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I love to share my limited knowledge and get a speaker badge 😅"
  ),
  talks: [
    {
      title: "Views on Vue",
      subtitle: "Devhours at Freshworks",
      slides_url:
        "https://docs.google.com/presentation/d/1k_3hMySLC7pQvJAzw5m2cxE5IZxsG7Dxcd2K7R1YnMg/edit?usp=sharing"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   ""
  // ],
  // display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach out to Me ✉️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91-9787742045",
  email_address: "contactvenkateshsundaram@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "contactvenkat_s", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  hobbyProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
