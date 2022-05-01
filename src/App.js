import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Location from './components/Location';
import data from './data';

const locations = data.map(location => {
  return <Location key={location.title} {...location} />;
});

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-section">
        {locations}
      </section>
    </div>
  );
}

export default App;
