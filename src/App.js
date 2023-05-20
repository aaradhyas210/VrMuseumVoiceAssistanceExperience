import { useEffect } from "react";
import "./App.css";
import VrMuseumUi from "./components/VrMuseumUi/VrMuseumUi";
import { VoiceAssistant } from "react-wake-up-voice-assistant";
import * as main from "./jsScripts/main";

function App() {
  useEffect(() => {
    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");
    function scrollForContainer(evt) {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      scrollContainer.style.scrollBehavior = "auto";
    }

    function scrollnextbtn() {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 500;
    }

    function scrollBackbtn() {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 500;
    }

    scrollContainer.addEventListener("wheel", scrollForContainer);
    nextBtn.addEventListener("click", scrollnextbtn);
    backBtn.addEventListener("click", scrollBackbtn);
    return () => {
      window.removeEventListener("wheel", scrollForContainer);
      window.removeEventListener("click", scrollnextbtn);
      window.removeEventListener("click", scrollBackbtn);
    };
  }, []);

  return (
    <div onLoad={() => main.loadingFn()}>
      <VrMuseumUi />
      <VoiceAssistant />
    </div>
  );
}

export default App;
