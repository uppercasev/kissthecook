import HeroImg from "../components/HeroImg";

function About() {
  return (
    <div>
      <HeroImg size="small" />
      <h1>About</h1>
      <p>
        Kiss The Cook is a web application where you can create your own
        e-cookbook; a place to store your favourite, personalised recipes, and
        access them anywhere online.
      </p>
      <p>
        This project was inspired by my own desire for a purpose-built
        application that could store and organise the many different recipes
        that I had collected over the years. A key requirement of the
        application was the ability to easily add and edit recipes (especially
        in the midst of kitchen chaos), as they are tried and tested.
      </p>
      <p>
        This first build focuses on the initial key functions to add, edit,
        browse, view, and delete recipes. One of the main challenges of this
        build was achieving the multi-part functionality for the ingredients
        input, with self-generating components on multiple levels.
      </p>
      <p>
        Further builds will add functionality to create highly editable
        collections of recipes (cookbooks), as well as several search
        capabilities, and ultimately memebers-only fucntionality for a truly
        personalised and secure application.
      </p>
      <h1>Credits</h1>
      <p>
        This project was bootstrapped with 👉{" "}
        <a href="https://github.com/facebook/create-react-app">
          Create React App
        </a>
        .
      </p>
      <p>
        A great example of the full functionality I hope to achieve on later
        builds can be explored at 👉{" "}
        <a href="https://myfoodbook.com.au">myfoodbook.com.au</a>, which is a
        big inspiration for future layout and performance objectives.
      </p>
      <p>
        Special thanks to 👉 <a href="https://github.com/twitchel">twitchel</a>{" "}
        for building the data schema for this project.
      </p>
    </div>
  );
}

export default About;
