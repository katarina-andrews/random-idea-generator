const ideas = [
  "Writing prompt: She heard a scream coming from upstairs. She lives alone.",
  "Writing prompt: The sky darkened rapidly. That doesn't look like an airplane.",
  "Write an elevator pitch marketing yourself.",
  "Read 10 pages of a book.",
  "Create a mood board.",
  "Try the last recipe you saved.",
  "Take a walk to clear your head.",
  "Do a full body stretch routine.",
];

const ideaElm = document.getElementById("ideas");
const ideaBtn = document.getElementById("idea-button");

ideaBtn.addEventListener("click", handleRandomIdea);

function handleRandomIdea(event) {
  event.preventDefault();
  const randIdea = Math.floor(Math.random() * ideas.length);
  ideaElm.textContent = ideas[randIdea];
  ideaElm.classList.remove("animate__animated", "animate__fadeIn");
  void ideaElm.offsetWidth;
  ideaElm.classList.add("animate__animated", "animate__fadeIn");
  event.target.reset();
}
