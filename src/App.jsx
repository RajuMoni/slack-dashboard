import './App.css';
import ClippedDrawer from "./Components/Sidebar"

function App() {
  const options = [{ url: 'postmessage', text: "Post Message" },
    { url: 'reactionevents', text: "Calender" },
    { url: 'events', text: "Events" },
    { url: 'slash', text: "Slash" }];
  return (
    <>
      <ClippedDrawer options={options} />
    </>
  );
}

export default App;
