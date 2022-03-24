import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { createStore} from 'redux';
import allReducers  from './reducers';
import { Provider } from 'react-redux';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const store = createStore(
  allReducers
);

if(JSON.parse(localStorage.getItem('myList') || "") === null ?? ""){
  localStorage.setItem("myList", JSON.stringify([]));
}

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <App />
          </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
