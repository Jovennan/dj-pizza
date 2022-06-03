import { useEffect, useState } from 'react';
import './App.css';
import Meal from './components/Meal';

function App() {

  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetch('https://dj-pizza.herokuapp.com/api/v1/meals/')
    .then(response => response.json())
    .then(data => {
      setMeals(data);
    })
  }, [])
  return (
    <div className="App">
      <div className='banner-container'>
        <img src='/images/banner.png' alt='um Banner mostrando uma Pizza'/>
      </div>
      <div className='logo-container'>
        <img src='/images/logo.png' alt='Logo DJ Pizza'/>
      </div>
      <section className='menu'>
        {meals.map(meal => <Meal 
          key={meal.id}
          name={meal.name}
          image={meal.image}
          description={meal.description}
          price={meal.price}
        />)}
      </section>
    </div>
  );
}

export default App;
