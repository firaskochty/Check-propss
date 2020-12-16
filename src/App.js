
import './App.css';
import Profile from "./profile/Profile"
import Image from "./img15.jpg"



function App() {
  return (
    <div className="App">
      <Profile  Bio="Hello bio" Alert={()=> alert("you are th best 7ajouuuur in the world ")} Profession="etudiant" >
        {Image}
      </Profile>
    </div>
  );
}



export default App;
