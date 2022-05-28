import { useState } from "react";
import axios from "axios";
const App = () => {
  return (
    <div>
      <h1>Donwload video or music from youtube</h1>
      <div>
        <form action="/download" method="post">
          <input
            name="url"
            placeholder="Video url e.g https://youtube.com/watch?v=azfze"
          />
          <button type="submit">Download now!!</button>
        </form>
      </div>
    </div>
  );
};

export default App;
