import './App.css';
import ClippedDrawer from "./Components/Sidebar"

function App() {
  const options = [{ url: 'postmessage', text: "Post Message" },
  { url: 'events', text: "Events" },
    { url: 'slash', text: "Slash" },
    { url: 'reactionevents', text: "Calender" },
  ];
  return (
    <>
      <ClippedDrawer options={options} />
    </>
  );
}

export default App;
