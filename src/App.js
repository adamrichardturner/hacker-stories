import * as React from 'react';

// Component that takes props as argument 
// using map it renders the Item component
// HTML with props arg (stories) each object
// property displayed.

const List = ({list}) => {
  return(
    <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={...item} />
    ))}
  </ul>
  )
}

// Item takes props as argument (in this case stories) 
// and returns the url, title, author, comments and points
// of each object prop values in stories.

const Item = ({item}) => {
  return(
    <li>
    <span>
      <a href={item.url}>{item.title}</a> </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
  </li>
  )
}

// Search takes props as arg onSearch={handleSearch}
// Logging the search term beneath the input field

const Search = ({ search, onSearch }) => {
  // Props is arg which in this case is an event handler onSearch
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
      id="search" 
      type="text" 
      onChange={onSearch}
      value={search}    
      />

    </div>
  )
}

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'httpsL//reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  // Below const uses React.useState to set SearchTerm to initial state
  // "" and second arg is a function which updates the state setSearchTerm
  const [searchTerm, setSearchTerm] = React.useState("React");
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />

    </div>
  );
}

export default App;
