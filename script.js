const roles=[
["Animator",["Animation","Storyboarding","3D creation"]],
["Graphic Designer",["Layout","Branding","Illustration"]],
["Programmer",["Coding","Web","Problem solving"]],
["Robotics Engineer",["Robotics","Electronics","Automation"]],
["Audio Engineer",["Recording","Mixing","Audio design"]],
["Video Producer",["Filming","Editing","Production"]],
["Photographer",["Photography","Lighting","Photo editing"]],
["Game Programmer",["Game development","Coding","Playtesting"]]];
const choosePathMessages=[
  "Keyboard ready. Who are you?",
  "Who holds the pen?",
  "Press start. Pick your path.",
  "Which digital path is yours?",
  "Whose shoes will you step into?",
  "Take control. Tell your story.",
  "Choose your player. Shape your future.",
  "Which future are you loading?",
  "Who will you become?",
  "Pick an avatar. Make your mark.",
  "Take the wheel. Who are you?",
  "Pick a player. Write your story.",
  "Who are you loading in as?",
  "Take the driver's seat."
];
const roleButtonLabels=roles.map(role=>role[0]);
const cards=document.getElementById("cards");
const figure=document.querySelector(".figure");
const hero=document.querySelector(".hero");
const siteHeader=document.querySelector(".site-header");
const menuToggle=document.getElementById("menu-toggle");
const siteNavigation=document.getElementById("tabs");
const characterRoomSections=[...document.querySelectorAll("#coop-courses,#projects,#components,#benefits")];
const galleryOrder=roles.map((_,index)=>index);
const initialCenter=roles.findIndex(role=>role[0]==="Animator");
let cur=initialCenter;
let hasUserSelected=true;
let galleryItems=[];
function setMobileMenuOpen(isOpen){
  siteHeader.classList.toggle("menu-open",isOpen);
  menuToggle.setAttribute("aria-expanded",String(isOpen));
  menuToggle.setAttribute("aria-label",isOpen?"Close navigation menu":"Open navigation menu");
}
menuToggle.addEventListener("click",()=>{
  setMobileMenuOpen(menuToggle.getAttribute("aria-expanded")!=="true");
});
siteNavigation.addEventListener("click",event=>{
  if(event.target.closest("a"))setMobileMenuOpen(false);
});
document.addEventListener("keydown",event=>{
  if(event.key==="Escape")setMobileMenuOpen(false);
});
const characterFiles={
  "Animator":{
    image:"Characters/Selection v2/animator.png",
    portrait:"Characters/Headshots/animator.png",
    alt:"Animator character",
    figure:"animator-character"
  },
  "Graphic Designer":{
    image:"Characters/Selection v2/graphic designer.png",
    portrait:"Characters/Headshots/graphic designer.png",
    alt:"Graphic Designer character",
    figure:"graphic-designer-character"
  },
  "Programmer":{
    image:"Characters/Selection v2/programmer.png",
    portrait:"Characters/Headshots/programmer.png",
    alt:"Programmer character",
    figure:"programmer-character"
  },
  "Robotics Engineer":{
    image:"Characters/Selection v2/robotics engineer.png",
    portrait:"Characters/Headshots/robotics engineer.png",
    alt:"Robotics Engineer character",
    figure:"robotics-engineer-character"
  },
  "Audio Engineer":{
    image:"Characters/Selection v2/audio engineer.png",
    portrait:"Characters/Headshots/audio engineer.png",
    alt:"Audio Engineer character",
    figure:"sound-engineer-character"
  },
  "Video Producer":{
    image:"Characters/Selection v2/video producer.png",
    portrait:"Characters/Headshots/video producer.png",
    alt:"Video Producer character",
    figure:"video-producer-character"
  },
  "Photographer":{
    image:"Characters/Selection v2/photographer.png",
    portrait:"Characters/Headshots/photographer.png",
    alt:"Photographer character",
    figure:"photographer-character"
  },
  "Game Programmer":{
    image:"Characters/Selection v2/game programmer.png",
    portrait:"Characters/Headshots/game programmer.png",
    alt:"Game Programmer character",
    figure:"game-programmer-character"
  }
};
// All eight careers preserve the current page content and share one component.
const coursePathways={
  "Animator": {
    "id": "animator",
    "eyebrow": "Animator",
    "headline": "Bring your imagination to life.",
    "blurb": "Turn sketches and stories into moving worlds with animation and digital art.",
    "image": "Characters/Classrooms/animator.png",
    "courses": [
      {
        "grade": 11,
        "title": "Animation",
        "code": "TGI3M"
      },
      {
        "grade": 12,
        "title": "Animation",
        "code": "TGI4M"
      },
      {
        "grade": 11,
        "title": "Media Arts",
        "code": "ASM3M"
      },
      {
        "grade": 12,
        "title": "Media Arts",
        "code": "ASM4M"
      }
    ],
    "coop": [
      "Animation studios",
      "game studios",
      "digital media companies",
      "motion graphics studios"
    ],
    "credits": {
      "major": 4,
      "coop": 2
    },
    "disclaimer": "Suggested courses and possible workplaces. Course eligibility, prerequisites, and placement availability apply.",
    "scrimStrength": 0.85,
    "focusPosition": "center"
  },
  "Graphic Designer": {
    "id": "graphic-designer",
    "eyebrow": "Graphic Designer",
    "headline": "Make ideas impossible to ignore.",
    "blurb": "Turn ideas into bold visuals through design, digital media, and a creative portfolio.",
    "image": "Characters/Classrooms/graphic designer.png",
    "courses": [
      {
        "grade": 11,
        "title": "Media Arts",
        "code": "ASM3M"
      },
      {
        "grade": 12,
        "title": "Media Arts",
        "code": "ASM4M"
      },
      {
        "grade": 11,
        "title": "Digital Media",
        "code": "AWS3M"
      },
      {
        "grade": 12,
        "title": "Virtual Design – Portfolio",
        "code": "AWD4M"
      }
    ],
    "coop": [
      "Graphic design studios",
      "marketing agencies",
      "print shops",
      "creative departments"
    ],
    "credits": {
      "major": 4,
      "coop": 2
    },
    "disclaimer": "Suggested courses and possible workplaces. Course eligibility, prerequisites, and placement availability apply.",
    "scrimStrength": 0.85,
    "focusPosition": "center"
  },
  "Programmer": {
    "id": "programmer",
    "eyebrow": "Programmer",
    "headline": "Build what doesn't exist yet.",
    "blurb": "Build apps and software that turn your ideas into working technology.",
    "image": "Characters/Classrooms/programmer.png",
    "courses": [
      {
        "grade": 11,
        "title": "Computer Studies",
        "code": "ICS3U"
      },
      {
        "grade": 12,
        "title": "Computer Studies",
        "code": "ICS4U"
      },
      {
        "grade": 11,
        "title": "Information and Communication Technology",
        "code": "BTA3O"
      }
    ],
    "coop": [
      "Software companies",
      "IT departments",
      "web development agencies",
      "technology startups"
    ],
    "credits": {
      "major": 4,
      "coop": 2
    },
    "disclaimer": "Suggested courses and possible workplaces. Course eligibility, prerequisites, and placement availability apply.",
    "scrimStrength": 0.85,
    "focusPosition": "center"
  },
  "Robotics Engineer": {
    "id": "robotics-engineer",
    "eyebrow": "Robotics Engineer",
    "headline": "Dream it. Design it. Build it.",
    "blurb": "Bring machines to life with engineering, design, and hands-on problem solving.",
    "image": "Characters/Classrooms/robotics engineer.png",
    "courses": [
      {
        "grade": 11,
        "title": "Engineering",
        "code": "TEJ3M"
      },
      {
        "grade": 12,
        "title": "Engineering",
        "code": "TEJ4M"
      },
      {
        "grade": 11,
        "title": "Physics",
        "code": "SPH3U"
      }
    ],
    "coop": [
      "Engineering firms",
      "robotics companies",
      "manufacturing facilities",
      "automation companies"
    ],
    "credits": {
      "major": 4,
      "coop": 2
    },
    "disclaimer": "Suggested courses and possible workplaces. Course eligibility, prerequisites, and placement availability apply.",
    "scrimStrength": 0.85,
    "focusPosition": "center"
  },
  "Audio Engineer": {
    "id": "audio-engineer",
    "eyebrow": "Audio Engineer",
    "headline": "Make every sound count.",
    "blurb": "Explore recording, mixing, and sound design to bring stories to life.",
    "image": "Characters/Classrooms/audio engineer.png",
    "courses": [
      {
        "grade": 11,
        "title": "Media Arts",
        "code": "ASM3M"
      },
      {
        "grade": 12,
        "title": "Media Arts",
        "code": "ASM4M"
      },
      {
        "grade": 11,
        "title": "Digital Media",
        "code": "AWS3M"
      },
      {
        "grade": 11,
        "title": "TV, Video, Movie Production",
        "code": "TGV3M"
      }
    ],
    "coop": [
      "Recording studios",
      "live event companies",
      "podcast studios",
      "audio production companies"
    ],
    "credits": {
      "major": 4,
      "coop": 2
    },
    "disclaimer": "Suggested courses and possible workplaces. Course eligibility, prerequisites, and placement availability apply.",
    "scrimStrength": 0.85,
    "focusPosition": "center"
  },
  "Video Producer": {
    "id": "video-producer",
    "eyebrow": "Video Producer",
    "headline": "Your vision. Your story. Your screen.",
    "blurb": "Tell your stories through camera work, editing, and film production.",
    "image": "Characters/Classrooms/video producer.png",
    "courses": [
      {
        "grade": 11,
        "title": "TV, Video, Movie Production",
        "code": "TGV3M"
      },
      {
        "grade": 12,
        "title": "TV, Video, Movie Production",
        "code": "TGV4M"
      },
      {
        "grade": 11,
        "title": "Film/Video",
        "code": "AWR3M"
      },
      {
        "grade": 12,
        "title": "Film/Video",
        "code": "AWR4M"
      }
    ],
    "coop": [
      "Film production companies",
      "television studios",
      "marketing agencies",
      "video production studios"
    ],
    "credits": {
      "major": 4,
      "coop": 2
    },
    "disclaimer": "Suggested courses and possible workplaces. Course eligibility, prerequisites, and placement availability apply.",
    "scrimStrength": 0.85,
    "focusPosition": "center"
  },
  "Photographer": {
    "id": "photographer",
    "eyebrow": "Photographer",
    "headline": "See the world differently.",
    "blurb": "Build your eye for light, composition, and stories worth capturing.",
    "image": "Characters/Classrooms/photographer.png",
    "courses": [
      {
        "grade": 11,
        "title": "Photography",
        "code": "AWQ3M"
      },
      {
        "grade": 12,
        "title": "Photography",
        "code": "AWQ4M"
      },
      {
        "grade": 11,
        "title": "Media Arts",
        "code": "ASM3M"
      },
      {
        "grade": 12,
        "title": "Media Arts",
        "code": "ASM4M"
      }
    ],
    "coop": [
      "Photography studios",
      "media companies",
      "creative agencies"
    ],
    "credits": {
      "major": 4,
      "coop": 2
    },
    "disclaimer": "Suggested courses and possible workplaces. Course eligibility, prerequisites, and placement availability apply.",
    "scrimStrength": 0.85,
    "focusPosition": "center"
  },
  "Game Programmer": {
    "id": "game-programmer",
    "eyebrow": "Game Programmer",
    "headline": "Code your next adventure.",
    "blurb": "Create interactive worlds with coding, animation, and game development.",
    "image": "Characters/Classrooms/game programmer.png",
    "courses": [
      {
        "grade": 11,
        "title": "Computer Studies",
        "code": "ICS3U"
      },
      {
        "grade": 12,
        "title": "Computer Studies",
        "code": "ICS4U"
      },
      {
        "grade": 11,
        "title": "Animation",
        "code": "TGI3M"
      },
      {
        "grade": 12,
        "title": "Animation",
        "code": "TGI4M"
      }
    ],
    "coop": [
      "Game studios",
      "software companies",
      "interactive media studios"
    ],
    "credits": {
      "major": 4,
      "coop": 2
    },
    "disclaimer": "Suggested courses and possible workplaces. Course eligibility, prerequisites, and placement availability apply.",
    "scrimStrength": 0.85,
    "focusPosition": "center"
  }
};
// Catalogue transcribed from the supplied SHSM Handbook. Slash notation is expanded into individual courses.
const courseCatalogue=[
  {
    "code": "ASM3M",
    "title": "Media Arts",
    "grade": 11,
    "categories": [
      "major",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AWQ3M",
    "title": "Photography",
    "grade": 11,
    "categories": [
      "major",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AWR3M",
    "title": "Film/Video",
    "grade": 11,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AWS3M",
    "title": "Digital Media",
    "grade": 11,
    "categories": [
      "major",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "BTA3O",
    "title": "Info and Com. Tech",
    "grade": 11,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "DCO3O",
    "title": "Co-op",
    "grade": 11,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026",
    "requiresAdditionalCoop": true
  },
  {
    "code": "ICS3C",
    "title": "Computer Studies",
    "grade": 11,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "ICS3U",
    "title": "Computer Studies",
    "grade": 11,
    "categories": [
      "major",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "SPH3U",
    "title": "Physics",
    "grade": 11,
    "categories": [
      "major",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "TEJ3M",
    "title": "Engineering",
    "grade": 11,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "TGI3M",
    "title": "Animation",
    "grade": 11,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "TGV3M",
    "title": "TV, Video, Movie Production",
    "grade": 11,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "ASM4M",
    "title": "Media Arts",
    "grade": 12,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AWD4M",
    "title": "Virtual Design - Portfolio",
    "grade": 12,
    "categories": [
      "major",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AWQ4M",
    "title": "Photography",
    "grade": 12,
    "categories": [
      "major",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AWR4M",
    "title": "Film/Video",
    "grade": 12,
    "categories": [
      "major",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "ICS4C",
    "title": "Computer Studies",
    "grade": 12,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "ICS4U",
    "title": "Computer Studies",
    "grade": 12,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "SPH4U",
    "title": "Physics",
    "grade": 12,
    "categories": [
      "major",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "TEJ4M",
    "title": "Engineering",
    "grade": 12,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "TGI4M",
    "title": "Animation",
    "grade": 12,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "TGV4M",
    "title": "TV, Video, Movie Production",
    "grade": 12,
    "categories": [
      "major"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "NBE3C",
    "title": "Understanding Contemporary First Nations, Métis, and Inuit Voices",
    "grade": 11,
    "categories": [
      "english"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "NBE3U",
    "title": "Understanding Contemporary First Nations, Métis, and Inuit Voices",
    "grade": 11,
    "categories": [
      "english"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "ENG4C",
    "title": "English - College",
    "grade": 12,
    "categories": [
      "english"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "ENG4U",
    "title": "English - University",
    "grade": 12,
    "categories": [
      "english"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "ENG4E",
    "title": "English - Workplace",
    "grade": 12,
    "categories": [
      "english"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "OLC4O",
    "title": "Ontario Literacy Course",
    "grade": 12,
    "categories": [
      "english"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "MBF3C",
    "title": "Math of Personal Finance",
    "grade": 11,
    "categories": [
      "math"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "MCF3M",
    "title": "Functions & Applications",
    "grade": 11,
    "categories": [
      "math"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "MCR3U",
    "title": "Functions",
    "grade": 11,
    "categories": [
      "math"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "MEL3E",
    "title": "Math for Everyday Life",
    "grade": 11,
    "categories": [
      "math",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "MAP4C",
    "title": "Math - College",
    "grade": 12,
    "categories": [
      "math"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "MCV4U",
    "title": "Vectors",
    "grade": 12,
    "categories": [
      "math"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "MDM4U",
    "title": "Data Management",
    "grade": 12,
    "categories": [
      "math"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "MEL4E",
    "title": "Math for Everyday Life",
    "grade": 12,
    "categories": [
      "math",
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "MHF4U",
    "title": "Advanced Functions",
    "grade": 12,
    "categories": [
      "math"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "ADA3M",
    "title": "Drama",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "ADA4M",
    "title": "Drama",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AMG3M",
    "title": "Guitar",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AMG4M",
    "title": "Guitar",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AMI3M",
    "title": "Music",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AMI4M",
    "title": "Music",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AMK3M",
    "title": "Keyboarding",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AMK4M",
    "title": "Keyboarding",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AMR3M",
    "title": "Repertoire",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AMV3M",
    "title": "Vocal",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AMV4M",
    "title": "Vocal",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AVI3M",
    "title": "Visual Arts",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AVI4M",
    "title": "Visual Arts",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "AWS4M",
    "title": "Digital Media",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "BAF3M",
    "title": "Accounting",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "BAF4M",
    "title": "Accounting",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "BBB4M",
    "title": "Int. Business",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "BDI3C",
    "title": "Entrepreneurship",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "BMI3C",
    "title": "Marketing",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "BOH4M",
    "title": "Bus. Leadership",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "CIA4U",
    "title": "Economics",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "CLU3M",
    "title": "Law",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "CLN4U",
    "title": "Law",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "GLE4O",
    "title": "Learning Strats",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "GLS4O",
    "title": "Learning Strats",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "HSP3U",
    "title": "Anthropology",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "SBI3U",
    "title": "Biology",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "SBI4U",
    "title": "Biology",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "SCH3U",
    "title": "Chemistry",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "SCH4U",
    "title": "Chemistry",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "SES4U",
    "title": "Earth and Space Science",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "SVN3M",
    "title": "Env. Science",
    "grade": 11,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "SNC4M",
    "title": "Science",
    "grade": 12,
    "categories": [
      "choice"
    ],
    "source": "SHSM Handbook · Bundle of Credits · Revised Sept 2026"
  },
  {
    "code": "DCO3OC",
    "title": "Exploring Opportunities Through Co-op",
    "grade": 11,
    "categories": [
      "coop"
    ],
    "creditValue": 2,
    "source": "SHSM Handbook · Bundle of Credits and Co-op · Revised Sept 2026"
  }
];
const catalogueStatus={handbookVerified:true,complementary:Object.fromEntries(['english','math','choice'].map(category=>[category,courseCatalogue.filter(course=>course.categories.includes(category))]))};
// Programmer and Robotics Engineer have one open major slot: TDJ3M was removed at the user's request.
const plansByIdentity=new Map();
let selectedCareer=null,activeCredit=null;
const bundleSection=document.getElementById('coop-courses');
const explorer=document.getElementById('bundle-explorer');
const slotDefinitions=[
 ...Array.from({length:4},(_,i)=>({id:`major-${i}`,category:'major',label:`Major ${i+1}`})),
 {id:'math',category:'math',label:'Math'},{id:'english',category:'english',label:'English'},{id:'choice',category:'choice',label:'Complementary'},
 {id:'coop',category:'coop',label:'Co-op'}
];
function newSuggestedPlan(role){return {customized:false,additionalCoop:false,major:Array.from({length:4},(_,i)=>coursePathways[role].courses[i]?.code||null),english:null,math:null,choice:null,coop:null};}
function currentPlan(){return plansByIdentity.get(selectedCareer);}
function element(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;}
function closeExplorer(returnFocus=true){const credit=activeCredit;activeCredit=null;explorer.hidden=true;document.querySelectorAll('.credit-slot').forEach(button=>button.setAttribute('aria-expanded','false'));if(returnFocus&&credit)document.querySelector(`[data-credit="${credit.id}"]`)?.focus();}
function renderCreditJourney(){
 const plan=currentPlan(),journey=document.getElementById('credit-journey');
 const previousScroll=journey.scrollLeft;journey.replaceChildren();
 slotDefinitions.forEach(slot=>{
  const button=element('button',`credit-slot credit-slot-${slot.category}`);button.type='button';button.dataset.credit=slot.id;
  button.setAttribute('aria-controls','bundle-explorer');button.setAttribute('aria-expanded',String(activeCredit?.id===slot.id));
  const code=slot.category==='major'?plan.major[Number(slot.id.slice(-1))]:plan[slot.category];
  const course=courseCatalogue.find(item=>item.code===code);
  const value=course?course.code:slot.category==='coop'&&code?(code==='semester'?'Semester':'Summer'):slot.category==='major'?'Choose':'Explore';
  button.append(element('span','credit-slot-label',slot.label),element('strong','',value),element('small','',slot.category==='coop'?'2 credits':course?`Grade ${course.grade}`:'1 credit'));
  button.setAttribute('aria-label',`${slot.label}: ${course?`${course.title}, ${course.code}`:value}, ${slot.category==='coop'?'2 credits':'1 credit'}`);
  button.title=course?`${course.title} (${course.code})`:slot.label;
  button.classList.toggle('is-suggested',slot.category==='major'&&!plan.customized);
  button.addEventListener('click',()=>openCredit(slot));journey.append(button);
 });
 journey.scrollLeft=previousScroll;
 document.getElementById('plan-mode').textContent=plan.customized?'My pathway':'Suggested pathway';
}
function positionExplorer(){
 if(explorer.hidden||!activeCredit)return;
 if(window.matchMedia('(max-width:600px)').matches){explorer.style.removeProperty('left');explorer.style.removeProperty('top');explorer.style.removeProperty('bottom');return;}
 const row=document.getElementById('credit-journey').getBoundingClientRect();
 const anchor=document.querySelector(`[data-credit="${activeCredit.id}"]`).getBoundingClientRect();
 const width=Math.min(440,window.innerWidth-32);
 const section=bundleSection.getBoundingClientRect();
 const below=Math.min(window.innerHeight-16,section.bottom-16)-row.bottom-12;
 const header=document.querySelector('.site-header').getBoundingClientRect().bottom;
 const above=row.top-Math.max(header+12,section.top+12)-12;
 const useAbove=below<160&&above>below;
 explorer.style.width=`${width}px`;
 explorer.style.left=`${Math.max(16,Math.min(anchor.left,window.innerWidth-width-16))}px`;
 explorer.style.setProperty('--popover-max-height',`${Math.max(120,Math.min(440,useAbove?above:below))}px`);
 explorer.style.top=useAbove?'auto':`${Math.max(header+12,row.bottom+12)}px`;
 explorer.style.bottom=useAbove?`${window.innerHeight-row.top+12}px`:'auto';
}
function selectCourse(slot,course){
 const plan=currentPlan();if(!course.categories.includes(slot.category)||course.requiresAdditionalCoop&&!plan.additionalCoop)return;
 const codes=[...plan.major,plan.english,plan.math,plan.choice].filter(Boolean);
 const old=slot.category==='major'?plan.major[Number(slot.id.slice(-1))]:plan[slot.category];
 if(course.code!==old&&codes.includes(course.code)){document.getElementById('bundle-feedback').textContent='That course is already planned in another credit slot.';return;}
 if(slot.category==='major')plan.major[Number(slot.id.slice(-1))]=course.code;else plan[slot.category]=course.code;
 plan.customized=true;document.getElementById('bundle-feedback').textContent=`${course.title} (${course.code}) added to your planned pathway.`;renderCreditJourney();closeExplorer();
}
function openCredit(slot){
 if(activeCredit?.id===slot.id){closeExplorer();return;}
 activeCredit=slot;explorer.hidden=false;renderCreditJourney();
 document.getElementById('explorer-category').textContent=slot.category==='major'?'YOUR SPECIALIZATION':slot.category==='coop'?'YOUR EXPERIENCE':'YOUR FOUNDATION';
 document.getElementById('explorer-title').textContent=slot.category==='coop'?'Take your learning into the real world.':`Explore ${slot.label.toLowerCase()}`;
 const description=document.getElementById('explorer-description'),options=document.getElementById('explorer-options');options.replaceChildren();
 if(slot.category==='coop'){
  description.textContent='Choose a format for your two-credit experience. This tile represents the complete two-credit block.';
  const grid=element('div','coop-format-options');
  [{id:'semester',title:'Regular semester co-op',tag:'Preferred option',description:'2 credits · DCO3OC · one semester · morning or afternoon block'},{id:'summer',title:'Summer co-op',tag:'Availability and approval required',description:'Six weeks · full days · strict attendance expectations · course code: see Ms. Meilach'}].forEach(format=>{
   const button=element('button','coop-format-option');button.type='button';button.setAttribute('aria-pressed',String(currentPlan().coop===format.id));button.append(element('span','',format.tag),element('strong','',format.title),element('small','',format.description));button.addEventListener('click',()=>{currentPlan().coop=format.id;currentPlan().customized=true;renderCreditJourney();document.getElementById('bundle-feedback').textContent=`${format.title} added to your planned pathway.`;closeExplorer();});grid.append(button);
  });options.append(grid,element('p','workplace-label','Picture your skills at work'));
  const workplaces=element('ul','bundle-workplaces');coursePathways[selectedCareer].coop.forEach(place=>workplaces.append(element('li','',place)));options.append(workplaces,element('p','catalogue-note','Possible environments; placements depend on availability and approval.'));
 }else{
  const list=slot.category==='major'?courseCatalogue.filter(course=>course.categories.includes('major')):catalogueStatus.complementary[slot.category];
  description.textContent=slot.category==='major'?'Explore every eligible major course. Suggestions reflect your interests; other pathways are welcome.':"Some of the courses you're already planning to take could count toward your SHSM.";
  if(!list.length){options.append(element('p','catalogue-note','Ask your SHSM lead or guidance counsellor for the eligible course options for this credit.'));}
  else{
   const grid=element('div','course-browser');const plan=currentPlan();const used=[...plan.major,plan.english,plan.math,plan.choice];const existing=slot.category==='major'?plan.major[Number(slot.id.slice(-1))]:plan[slot.category];
   list.forEach(course=>{const button=element('button','course-option');button.type='button';const duplicate=used.includes(course.code)&&course.code!==existing;button.disabled=duplicate||(course.requiresAdditionalCoop&&!plan.additionalCoop);button.setAttribute('aria-pressed',String(existing===course.code));const recommended=coursePathways[selectedCareer].courses.some(item=>item.code===course.code);const selected=used.includes(course.code);
    button.append(element('strong','course-option-title',course.title),element('small','course-option-code',course.code),element('span','course-option-meta',`Grade ${course.grade}${recommended?' · Suggested for you':''}`));
    if(selected)button.append(element('span','course-option-status',duplicate?'Selected elsewhere':'Selected'));
    else if(course.requiresAdditionalCoop)button.append(element('span','course-option-note','Separate second co-op block required'));button.addEventListener('click',()=>selectCourse(slot,course));grid.append(button);});options.append(grid);
  }
  if(slot.category==='major'){
   const label=element('label','additional-coop-rule');const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.checked=currentPlan().additionalCoop;
   checkbox.addEventListener('change',()=>{currentPlan().additionalCoop=checkbox.checked;currentPlan().customized=true;if(!checkbox.checked)currentPlan().major=currentPlan().major.map(code=>code==='DCO3O'?null:code);activeCredit=null;openCredit(slot);});
   label.append(checkbox,' I plan a separate second co-op block. Confirm this conditional major credit with the SHSM lead.');options.append(label);
  }
  options.append(element('p','catalogue-note','Confirm course eligibility and prerequisites with your SHSM lead before planning your timetable.'));
 }
 document.getElementById('close-explorer').focus({preventScroll:true});
 positionExplorer();
}
function dismissExplorerOutside(event){
 if(explorer.hidden)return;
 const path=event.composedPath();
 if(path.includes(explorer)||path.includes(document.getElementById('credit-journey')))return;
 closeExplorer(false);
}
document.addEventListener('pointerdown',dismissExplorerOutside);
document.addEventListener('click',dismissExplorerOutside);
window.addEventListener('resize',positionExplorer);
window.addEventListener('scroll',positionExplorer,{passive:true});
document.getElementById('credit-journey').addEventListener('scroll',positionExplorer,{passive:true});
document.getElementById('close-explorer').addEventListener('click',()=>closeExplorer());
bundleSection.addEventListener('keydown',event=>{if(event.key==='Escape'&&!explorer.hidden){event.preventDefault();closeExplorer();}});
document.getElementById('restore-pathway').addEventListener('click',()=>{plansByIdentity.set(selectedCareer,newSuggestedPlan(selectedCareer));closeExplorer(false);renderCreditJourney();document.getElementById('bundle-feedback').textContent='Suggestions restored for this identity.';});
function renderCoursePathway(role){
 if(selectedCareer===role)return;
 const pathway=coursePathways[role];if(!pathway)throw new Error(`Missing career pathway: ${role}`);
 const focusInExplorer=explorer.contains(document.activeElement);closeExplorer(false);selectedCareer=role;
 if(!plansByIdentity.has(role))plansByIdentity.set(role,newSuggestedPlan(role));
 const image=document.getElementById('course-classroom-image');image.src=encodeURI(pathway.image);image.alt=`${role} student learning in an ICT classroom`;image.parentElement.style.setProperty('--classroom-scene',`url("${encodeURI(pathway.image)}")`);
 bundleSection.style.setProperty('--scrim-strength',pathway.scrimStrength);bundleSection.style.setProperty('--focus-position',pathway.focusPosition);bundleSection.dataset.role=role;document.getElementById('bundle-feedback').textContent='';renderCreditJourney();if(focusInExplorer)document.getElementById('restore-pathway').focus();
}

function renderCards(){
  cards.innerHTML=roles.map((role,index)=>{
    const character=characterFiles[role[0]];
    const portrait=character?`<img src="${character.portrait}" alt="" loading="lazy" decoding="async">`:"";
    return `<button class="card${hasUserSelected&&index===cur?" on":""}" type="button" data-i="${index}" aria-pressed="${hasUserSelected&&index===cur}"><span class="card-portrait">${portrait}</span><span class="card-title">${roleButtonLabels[index]}</span></button>`;
  }).join("");
}
function createGallery(){
  figure.classList.add("character-gallery");
  galleryItems=roles.map((role,index)=>{
    const character=characterFiles[role[0]];
    const item=document.createElement("button");
    item.type="button";
    item.className=`gallery-character ${character.figure}`;
    item.dataset.i=String(index);
    item.setAttribute("aria-label",`Select ${roleButtonLabels[index]}`);
    const image=document.createElement("img");
    image.alt="";
    image.decoding="async";
    item.append(image);
    figure.append(item);
    return item;
  });
}
function render(){
  renderCards();
  if(!galleryItems.length)createGallery();
  const selectedTheme=hasUserSelected?roles[cur][0]:"";
  const theme=selectedTheme==="Game Programmer"?"programmer":selectedTheme==="Audio Engineer"?"sound-engineer":selectedTheme?selectedTheme.toLowerCase().replaceAll(" ","-"):"default";
  document.body.dataset.theme=theme;
  updateWorldMotion();
  document.documentElement.dataset.theme=theme;
  const selectedRole=hasUserSelected?roles[cur][0]:"";
  renderCoursePathway(selectedRole);
  const capstoneRole=selectedRole||'Animator';
  const capstoneImage=document.getElementById('capstone-image');
  const capstonePath=`Characters/Projects/${capstoneRole.toLowerCase()} project.jpeg`;
  capstoneImage.src=encodeURI(capstonePath);
  capstoneImage.alt=`${capstoneRole} developing a personal capstone project`;
  capstoneImage.parentElement.style.setProperty('--classroom-scene',`url("${encodeURI(capstonePath)}")`);
  document.getElementById('projects').dataset.copySide=['Programmer','Video Producer'].includes(capstoneRole)?'right':'left';

  characterRoomSections.forEach(section=>{
    section.classList.toggle("unselected-room-active",!hasUserSelected);
    section.classList.toggle("animator-room-active",selectedRole==="Animator");
    section.classList.toggle("graphic-designer-room-active",selectedRole==="Graphic Designer");
    section.classList.toggle("programmer-room-active",(selectedRole==="Programmer"||selectedRole==="Game Programmer"));
    section.classList.toggle("robotics-engineer-room-active",selectedRole==="Robotics Engineer");
  });
  const centerIndex=hasUserSelected?cur:initialCenter;
  const singleCharacterView=window.matchMedia("(max-width: 1024px)").matches;
  galleryItems.forEach((item,index)=>{
    let slot=galleryOrder.indexOf(index)-galleryOrder.indexOf(centerIndex);
    if(slot>roles.length/2)slot-=roles.length;
    if(slot< -roles.length/2)slot+=roles.length;
    const isVisible=singleCharacterView?index===centerIndex:Math.abs(slot)<=1;
    item.style.setProperty("--carousel-slot",String(slot));
    item.style.zIndex=String(10-Math.abs(slot));
    item.classList.toggle("is-side",slot!==0);
    item.classList.toggle("is-left",slot<0);
    item.classList.toggle("is-right",slot>0);
    item.classList.toggle("is-visible",isVisible);
    item.classList.toggle("is-featured",hasUserSelected&&index===cur);
    item.tabIndex=isVisible?0:-1;
    item.setAttribute("aria-hidden",String(!isVisible));
    if(isVisible&&!item.firstElementChild.src){
      item.firstElementChild.src=characterFiles[roles[index][0]].image;
    }
  });
  if(hasUserSelected){
    const [name,skills]=roles[cur];
    t.textContent=name;
    c.innerHTML=skills.map(skill=>`<span>${skill}</span>`).join("");
  }else{
    t.textContent=choosePathMessages[Math.floor(Math.random()*choosePathMessages.length)];
    c.replaceChildren();
  }

}
function selectRole(index){
  if(!Number.isInteger(index)||index<0||index>=roles.length)return;
  if(!hasUserSelected)galleryOrder.splice(0,galleryOrder.length,...roles.map((_,roleIndex)=>roleIndex));
  cur=index;
  hasUserSelected=true;
  render();
  const selectedCard=cards.querySelector(`[data-i="${cur}"]`);
  if(cards.scrollWidth>cards.clientWidth){
    const rowBounds=cards.getBoundingClientRect();
    const cardBounds=selectedCard.getBoundingClientRect();
    const padding=parseFloat(getComputedStyle(cards).paddingLeft)||0;
    const leftEdge=rowBounds.left+padding;
    const rightEdge=rowBounds.right-padding;
    const offset=cardBounds.left<leftEdge?cardBounds.left-leftEdge:cardBounds.right>rightEdge?cardBounds.right-rightEdge:0;
    if(offset)cards.scrollTo({left:cards.scrollLeft+offset,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
  }
}
cards.addEventListener("click",e=>{const b=e.target.closest(".card");if(b)selectRole(+b.dataset.i)});
figure.addEventListener("click",e=>{const b=e.target.closest(".gallery-character");if(b)selectRole(+b.dataset.i)});
document.addEventListener("keydown",event=>{
  if(event.key!=="ArrowLeft"&&event.key!=="ArrowRight")return;
  if(event.defaultPrevented||event.altKey||event.ctrlKey||event.metaKey||event.shiftKey)return;
  const target=event.target;
  if(target instanceof Element&&(target.closest("input,textarea,select,[role=\"textbox\"]")||target.isContentEditable))return;
  if(menuToggle.getAttribute("aria-expanded")==="true")return;
  event.preventDefault();
  const focusedCharacter=document.activeElement.closest(".card,.gallery-character");
  const focusInCards=focusedCharacter?.classList.contains("card");
  const direction=event.key==="ArrowRight"?1:-1;
  selectRole((cur+direction+roles.length)%roles.length);
  if(focusedCharacter){
    const container=focusInCards?cards:figure;
    container.querySelector(`[data-i="${cur}"]`).focus({preventScroll:true});
  }
});
function updateHeaderOnScroll(){
  siteHeader.classList.toggle("scrolled",window.scrollY>20);
  const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const useParallax=window.matchMedia("(min-width: 1025px)").matches;
  const parallaxOffset=reduceMotion||!useParallax?0:window.scrollY*0.18;
  hero.style.setProperty("--hero-parallax-offset",`${parallaxOffset}px`);
  updateWorldMotion();
}
let scrollUpdatePending=false;
window.addEventListener("scroll",()=>{
  if(scrollUpdatePending)return;
  scrollUpdatePending=true;
  window.requestAnimationFrame(()=>{
    updateHeaderOnScroll();
    scrollUpdatePending=false;
  });
},{passive:true});
window.matchMedia("(max-width: 1024px)").addEventListener("change",()=>render());
/* Shared scene motion engine; Animator is the first visual template. */
const worldMotionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
const worldScenes=[hero,document.getElementById('coop-courses'),document.getElementById('projects')];
function updateWorldMotion(){
 const enabled=document.body.dataset.theme==='animator'&&!worldMotionPreference.matches;
 const desktop=window.innerWidth>1024;
 const viewport=window.innerHeight;
 const clamp=(value,limit)=>Math.max(-limit,Math.min(limit,value));
 worldScenes.forEach((scene,index)=>{
  const rect=scene.getBoundingClientRect();
  const progress=(viewport/2-(rect.top+rect.height/2));
  const offset=enabled?clamp(progress*(desktop?.065:.02),desktop?32:10):0;
  scene.style.setProperty('--world-scene-depth',`${offset}px`);
  if(index===0){
   scene.style.setProperty('--world-hero-depth',`${enabled?clamp(-rect.top*.12,65):0}px`);
   scene.style.setProperty('--world-character-depth',`${enabled&&desktop?clamp(-rect.top*.045,24):0}px`);
  }
 });
}
if('IntersectionObserver' in window){
 const worldObserver=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-in-view',entry.isIntersecting)),{threshold:.12});
 document.querySelectorAll('.bundle-intro,#projects .capstone-copy').forEach(copy=>{copy.classList.add('world-reveal');worldObserver.observe(copy);});
 document.body.classList.add('world-motion-ready');
}
worldMotionPreference.addEventListener('change',updateWorldMotion);
window.addEventListener('resize',updateWorldMotion,{passive:true});
updateHeaderOnScroll();
render();
updateWorldMotion();
