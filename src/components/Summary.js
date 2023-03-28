import avatar from "../avatar.png";

export default function Summary() {
  return (
    <div className="App-summary">
      <img className="App-avatar" src={avatar} alt="avatar" />
      <h2>@afifghulam</h2>
      <p>I'm Afif Ghulam, an Informatics Student that really loves tech. Curently learning about API Backend and Cloud Computing.</p>
    </div>
  );
}
