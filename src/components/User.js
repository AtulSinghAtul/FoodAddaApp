import React from "react";

class User extends React.Component {
  constructor(props) {
    console.log(props);
    console.log("... Child Constructor ...");
    super(props);
    // console.log(this);
  }

  componentDidMount() {
    console.log("... Child Component Did Mount ...");
  }
  componentDidUpdate() {
    console.log("... Child Component Did Update ...");
  }
  // debugger;
  render() {
    console.log("... Child Render ...");
    const { name, location, avatar_url } = this.props.userData;

    return (
      <div className="flex justify-center items-center bg-slate-400 mx-[30%] rounded-lg gap-4">
        <div>
          <img className="rounded-full w-36" src={avatar_url} />
        </div>
        <div className="flex flex-col  items-start">
          <h1 className="text-2xl text-gray-800">{name}</h1>
          <p className="text-sm font-semibold text-gray-600">{location}</p>
        </div>
      </div>
    );
  }
}

export default User;
