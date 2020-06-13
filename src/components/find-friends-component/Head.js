import React from "react";
import SearchIcon from "../../assets/search-icon.png";

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
  }
  handleChange = (e) => {
    const searchString = e.target.value;
    this.setState(() => ({ searchString }));
  };
  render() {
    return (
      <div className="ff-header">
        <input
          type="text"
          value={this.state.searchString}
          placeholder="Search Friends"
          onChange={this.handleChange}
          autoFocus
        />
        <button>
          <img height="40px" width="40px" src={SearchIcon} alt="search" />
        </button>
      </div>
    );
  }
}

export default Head;
