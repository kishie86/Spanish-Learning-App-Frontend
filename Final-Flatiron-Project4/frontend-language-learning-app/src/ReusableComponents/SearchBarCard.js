import React from "react";

class SearchBar extends React.Component {
  render(){
  return (

    <div className="search-bar-card">
      <input onChange={(e) => this.props.searchBar(e.target.value)}
        type="text"
        placeholder= {"Search For Language"}
      />
      
    </div>
  );
};
}

export default SearchBar