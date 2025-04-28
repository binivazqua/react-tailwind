import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { properties } from './data/properties'
import PropertyCard from './components/PropertyCard'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-screen flex flex-col overflow-hidden">

      <Navbar />

      {/* Contenedor principal centrado */}
      <div className="flex flex-col items-center justify-center m-x-auto w-full px-4">
        <h1 className="text-purple-300 m-5 text-2xl font-bold">Propiedades disponibles</h1>

        <div className="bg-white p-10 max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-purple-300 border-8 rounded-xl">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              image={property.image}
              price={property.price}
              location={property.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

