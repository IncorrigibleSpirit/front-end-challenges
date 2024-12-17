// ***NOTE: The following file is for reference only. It serves as an example of how to create the cards dynamically. ***

const data = [
  {
    name: "Daniel Clifford",
    position: "Verified Graduate",
    outline:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    testimony:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    image: "images/image-daniel.jpg",
    id: "01",
  },
  {
    name: "Jonathan Walters",
    position: "Verified Graduate",
    outline: "The team was very supportive and kept me motivated.",
    testimony:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
    image: "images/image-jonathan.jpg",
    id: "02",
  },
  {
    name: "Jeanette Harmon",
    position: "Verified Graduate",
    outline: "An overall wonderful and rewarding experience",
    testimony:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
    image: "images/image-jeanette.jpg",
    id: "03",
  },
  {
    name: "Patrick Abrams",
    position: "Verified Graduate",
    outline:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    testimony:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    image: "images/image-patrick.jpg",
    id: "04",
  },
  {
    name: "Kira Whittle",
    position: "Verified Graduate",
    outline: "Such a life-changing experience. Highly recommended!",
    testimony:
      "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
    image: "images/image-kira.jpg",
    id: "05",
  },
];

const mainContainer = document.getElementById("main-container");

data.forEach((item) => {
  // <Article>
  const commentContainer = document.createElement("article");
  commentContainer.classList.add(`comment-container-${item.id}`);

  // ***<div>***
  const customerContainer = document.createElement("div");
  customerContainer.classList.add("customer-container");

  // <img>
  const thumbnail = document.createElement("img");
  thumbnail.classList.add("thumbnail");
  thumbnail.src = item.image;
  thumbnail.alt = `Foto de ${item.name}`;

  // <div>
  const thumbnailContainer = document.createElement("div");
  thumbnailContainer.classList.add("thumbnail-container");

  // img inside <div>
  thumbnailContainer.appendChild(thumbnail);

  // <H1>
  const commentName = document.createElement("h1");
  commentName.classList.add("comment-name");
  commentName.textContent = item.name;

  // <p> Position
  const commentPosition = document.createElement("p");
  commentPosition.classList.add("comment-position");
  commentPosition.textContent = item.position;

  // thumbnailContainer,thumbnail,commentName, and commentPosition inside customerContainer
  customerContainer.append(thumbnailContainer, commentName, commentPosition);

  // ***<div>***
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  // H2: Outline
  const commentOutline = document.createElement("h2");
  commentOutline.classList.add("comment-outline");
  commentOutline.textContent = item.outline;

  // p: Testimony
  const commentTestimony = document.createElement("p");
  commentTestimony.classList.add("comment-testimony");
  commentTestimony.textContent = `"${item.testimony}"`;

  // Outline and Testimony inside infoContainer
  infoContainer.append(commentOutline, commentTestimony);

  // Add nodes to the container
  commentContainer.append(customerContainer, infoContainer);

  // Connect nodes
  mainContainer.appendChild(commentContainer);
});
