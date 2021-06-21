import Logo from "./logo.svg";

const root = document.getElementById("root");
let route;

function init() {
  root.innerHTML = `
        <img src="${Logo}" alt="build icon" />
        <h1> vanillaJS app Builder </h1>
        <p> Build apps with plain JS but with modern tooling  </p>
        <button id="features"> Features </button>
        <div id="route"></div>
`;

  route = document.querySelector("#route");

  document
    .querySelector("#features")
    .addEventListener("click", showFeaturesPage);
}

function showLoader(root) {
  const loader = document.createElement("div");
  loader.innerText = "loading..";
  root.appendChild(loader);
  return loader;
}

function hideLoader(root, loader) {
  root.removeChild(loader);
}

function showFeaturesPage(event) {
  const loader = showLoader(root);

  // THIS IS THE MAIN CODE FOR LAZY LOADING
  import(/* webpackPrefetch: true */ "./App").then(({ default: App }) => {
    hideLoader(root, loader);
    route.innerHTML = App({ name });
  });
}

init();
