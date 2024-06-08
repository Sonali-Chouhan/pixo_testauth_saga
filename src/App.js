import { AppRoute } from './routes/index';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './saga/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { Suspense } from 'react';
import PageLoader from './component/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
				<Suspense fallback={<PageLoader/>}>
				  <ToastContainer/>
					<AppRoute />
				</Suspense>
				</PersistGate>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
