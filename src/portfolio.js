/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Faisal Hanif",
  title: "Hi all, I'm Faisal",
  subTitle: emoji(
    "I am a MERN Stack developer, love coding and I code every single day. Currently I'm working on mobile application on React Native. I always willing to work in a team of experienced developers and take my skills to the next level."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/faisalhatila",
  linkedin: "https://www.linkedin.com/in/faisal-hatila-270b97158/",
  gmail: "hatilas1994@gmail.com",
  facebook: "https://www.facebook.com/faisal.hatila",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Create scalable web and mobile applications, who like explore the skills in professional manner and loves to be better and better",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Create REST apis in NodeJs using MongoDb and MySql with sequelize"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Rest API's"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Aptech",
      logo: require("./assets/images/aptech.png"),
      subHeader: "Aptech Certified Computer Programming (ACCP) Pro",
      duration: "August 2016 - July 2019",
    },
    {
      schoolName: "Axiom",
      logo: require("./assets/images/axiom.png"),
      subHeader: "MERN Stack Development",
      duration: "November 2018 - May 2019",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Javascript Developer (Internship)",
      company: "Airtech Solution",
      companylogo: require("./assets/images/airtech.png"),
      date: "Sep 2019 – Feb 2020",
    },
    {
      role: "Rect Js Developer (Internship)",
      company: "Cloud Peanuts",
      companylogo: require("./assets/images/cloudpeanuts.jpg"),
      date: "Feb 2020 - Jun 2020",
    },
    {
      role: "Rect Js Developer (Full Time)",
      company: "Softapps.io",
      companylogo: require("./assets/images/softapps.jpg"),
      date: "Jun 2020 - Jan 2021",
    },
    {
      role: "Javascript Developer (Full Time)",
      company: "Digitli",
      companylogo: require("./assets/images/digitli.png"),
      date: "Feb 2020 - Aug 2021",
    },
    {
      role: "Frontend Developer (Full Time)",
      company: "Hikma / Kardiya Technologies",
      companylogo: require("./assets/images/kardiya.jpeg"),
      date: "Aug 2021 - Present",
    },
    {
      role: "MERN Stack Developer",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "Sept 2019 – Present",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      subtitle: "By John Hopkins University (Coursera)",
      image:
        "https://about.coursera.org/images/logos/coursera-logo-full-rgb.png",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/HTML_CSS_and_Javascript_for_Web_Developers.pdf"),
        },
      ],
    },
    {
      title: "JavaScript Objects, Prototypes, and Classes",
      subtitle: "By Jim Cooper (Pluralsight)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pluralsight_Logo.svg/1280px-Pluralsight_Logo.svg.png",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/JavaScript_Objects_Prototypes_and_Classes.pdf"),
        },
      ],
    },
    {
      title: "React Big Picture",
      subtitle: "By Cory House (Pluralsight)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pluralsight_Logo.svg/1280px-Pluralsight_Logo.svg.png",

      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/React_Big_Picture.pdf"),
        },
      ],
    },
    {
      title: "React Hooks",
      subtitle: "By Peter Kellner (Pluralsight)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pluralsight_Logo.svg/1280px-Pluralsight_Logo.svg.png",

      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/React_Hooks.pdf"),
        },
      ],
    },
    {
      title: "React and Redux",
      subtitle: "By Cory House (Pluralsight)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pluralsight_Logo.svg/1280px-Pluralsight_Logo.svg.png",

      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/React_and_Redux.pdf"),
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://ehsanshakeel.medium.com/how-to-create-google-spreadsheet-api-and-build-an-android-app-53988add122e",
      title: "How to create Google Spreadsheet API and Build an Android App",
      description:
        "Creating an application using Google Spreadsheet API as a backend.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
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
  twitterDetails,
};
