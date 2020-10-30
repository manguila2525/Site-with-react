import React from 'react';
// COMPONENTS
import Navbar from './components/Navbar';
import Card from './components/Card'
function App() {
  return (
    <div>
   <Navbar />
 
      <Card titulo="Titulo" descripcion="Informacion"/>
    </div>
  );
}
export default App;
