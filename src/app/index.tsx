
import { BrowserRouter } from 'react-router-dom';
import { useInitData } from '../hooks/useInitData';
import { AppRoutes } from '../routes';
import { ScrollToTop } from '../components/ScrollToTop';

function App() {

  useInitData();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;