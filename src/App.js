import Router  from './Components/Router/Router';
import Navbar from './Components/navbar/Navbar';
import { AuthProvider } from './Components/Form/Authentication/Auth-Context';

function App() {
  return (
    <div>
      <AuthProvider>
      <Navbar />
     <Router />
      </AuthProvider>
    </div>

  );
}

export default App;
