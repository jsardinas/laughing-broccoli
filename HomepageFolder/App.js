
import './App.css';

const App= () => {
  const username = "surfinsofia"; 
  return (
    <div className="App">
      <h1>Hello {username}</h1>

<Post title='Help Moving' text='I need help moving this weekend, $30 an hour compensation, call me' author='JohnDoe' date='today'/>
<Post title='Need a Tutor' text='Hello I need an Algebra tutor, please email me at ' author='mickey1' date='today'/>
<Post title='Freelance artist' text='Freelance Artist looking for work, check out my portfolio here:' author='theartist33' date='today'/>
<Post title='Musician Wanted' text='Jazz Musician wanted for party on 4/20' author='Maxmax' date='today'/>
<Post title='Found a necklace' text='I found a necklace at the UT soccer field, call me if this is yours!' author='strawberrywing8' date='today'/>
    </div>
  );
}

const Post = (props) => {
  return(
    <>
    <h1>{props.title}</h1>
    <h2>{props.text}</h2>
    <h3>{props.author}</h3>
    <h3>{props.date}</h3>
    </>
  )
}

export default App;


