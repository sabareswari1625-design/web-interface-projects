import Hobby from "./Hobby";

import gaming from "./assets/gaming.jpg";
import music from "./assets/music.jpg";
import travelling from "./assets/travelling.jpeg";
import reading from "./assets/reading.jpg";

function Main() {
  const hobbies = [
    {
      image: gaming,
      name: "Gaming",
      description:
        "Gaming is an enjoyable hobby that helps me relax and improves my problem-solving skills."
    },
    {
      image: music,
      name: "Music",
      description:
        "Listening to music helps me relax, refresh my mind, and enjoy my free time."
    },
    {
      image: travelling,
      name: "Travelling",
      description:
        "Travelling gives me an opportunity to explore new places and experience different cultures."
    },
    {
      image: reading,
      name: "Reading",
      description:
        "Reading helps me gain knowledge, improve my imagination, and discover new ideas."
    }
  ];

  return (
    <main className="container">
      <h1>My Hobby Gallery</h1>

      <p className="intro">
        These are the activities I enjoy in my free time.
      </p>

      <div className="hobby-container">
        {hobbies.map((hobby, index) => (
          <Hobby
            key={index}
            image={hobby.image}
            name={hobby.name}
            description={hobby.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;