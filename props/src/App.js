import React from "react";
import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const check = {
    fullName: "Nader BEN HAMMOUDA",
    profession: "Web devoloper",
    bio: `Here's BEN HAMMOUDA Nader,
     27 years old comes from Tunisia and graduated from central University as
     an electronic engineer.I have over 2 years experience working at that field but I decided to
     percue my dream of being a web devoloper that's why I have joined GoMyCode
     school. So I consider myself as a web development student now and I'm
     trying to do my best to achieve my goals by learning new skills and
     practice them as much as possible.
     Outside of all the above,I live the sweaty life and if you ask me about my
     free time my answer would be simple:I love history and always have so I
     spend my free time reading about both the story of individual people and
     the whole of humanity and alongside of that I'm always trying to learn and
     practice new languages that's why I speak four different languages.
   
     FOCUS ON THE PROBLEM NOT THE DISTRACTIONS`,
  };

  const handleName = () => {alert("Nader BEN HAMMOUDA")}

  const ourStyle = { textAlign: "center" };
  const pic = { borderRadius: "20px", width: "300px" };

  return (
    <div style={ourStyle}>
      <Profile check={check} handleName={handleName}>
        <img src="/image.jpg" alt="profileImage" style={pic} />
      </Profile>
    </div>
  );
}

export default App;
