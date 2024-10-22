// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import AuthArea from "./AuthArea";

function Home() {
  function toggle_auth_area() {
    const authArea = document.getElementById("home_auth_area");

    if (authArea.style.top === "-50%") {
      document.getElementById("join_button").innerText = "Close";
      authArea.style.top = "50%";
    } else {
      authArea.style.top = "-50%";
      document.getElementById("join_button").innerText = "Join";
    }
  }

  useEffect(() => {
    const joinButton = document.getElementById("join_button");
    if (joinButton) {
      joinButton.addEventListener("click", toggle_auth_area);

      return () => {
        joinButton.removeEventListener("click", toggle_auth_area);
      };
    }
  }, []);

  return (
    <>
      <div className="home_parent">
        <div className="home_left"></div>
        <div className="home_right">
          <button className="join_button" id="join_button">
            Join
          </button>
        </div>

        <div id="home_auth_area" style={{ position: "absolute", top: "-50%" }}>
          <div className="home_auth_area_child">
            <AuthArea />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
