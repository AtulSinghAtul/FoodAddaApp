import React from "react";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);

    this.state = {
      userInfo: {
        name: "Dummy Name",
      },
    };
    console.log("... Parent Constructor ...");
  }

  async componentDidMount() {
    console.log("... Parent Component Did Mount ...");

    const data = await fetch("https://api.github.com/users/AtulSinghAtul");

    const json = await data.json();

    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        avatar_url: json.avatar_url,
      },
    });
  }

  componentDidUpdate() {
    console.log("... Parent Component Did Update ...");
  }

  render() {
    console.log("... Parent Render ...");
    return (
      <div className="text-3xl font-bold mt-48 text-center">
        {}
        <User userData={this.state.userInfo} />
      </div>
    );
  }
}

export default About;
