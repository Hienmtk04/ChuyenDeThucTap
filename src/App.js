import './App.css';
import { Provider } from 'react-redux';
import { UserProvider } from './frontend/context/useContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Index from './frontend/Index';
import FrontendRoute from './routes/frontend';
import store from './redux/store';
import VoucherModal from './frontend/components/home/voucherModal';

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <BrowserRouter>
        <ToastContainer/>
        <VoucherModal/>
        <Routes>
          <Route path='/' element={<Index/>}>
            {
              FrontendRoute.map((router, index) => {
                const Page = router.component;
                return <Route key={index} path={router.path} element={<Page/>}/>;
              })
            }
          </Route>
        </Routes>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );
}

export default App;
