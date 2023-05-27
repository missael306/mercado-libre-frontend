import './App.css';
import { AppUI } from './AppUI';
import { ProductProvider } from '../ProductContext/ProductContext';

function App() {
  return (
    <ProductProvider>
      <AppUI />
    </ProductProvider>
  );
}

export default App;
