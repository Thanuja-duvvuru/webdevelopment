import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";
import "./App.css";

function App() {

  const matches = [
    {
      team1: "RCB",
      team2: "CSK",
      date: "10 April 2026",
      time: "7:30 PM",
      venue: "Bengaluru"
    },
    {
      team1: "MI",
      team2: "KKR",
      date: "12 April 2026",
      time: "7:30 PM",
      venue: "Mumbai"
    },
    {
      team1: "RR",
      team2: "DC",
      date: "15 April 2026",
      time: "7:30 PM",
      venue: "Jaipur"
    }
  ];

  return (
    <>
      <Navbar />

      <Hero />

      <section id="matches">
        <h1>Upcoming Matches</h1>

        <div className="matches">

          {matches.map((match, index) => (
            <MatchCard
              key={index}
              team1={match.team1}
              team2={match.team2}
              date={match.date}
              time={match.time}
              venue={match.venue}
            />
          ))}

        </div>
      </section>
    </>
  );
}

export default App;