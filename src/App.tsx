import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/themeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme();
  const bool = true;

    return (
        <div className={classNames('app',  {}, [theme])}>
          <button onClick={toggleTheme}>Change theme</button>
          <Link to='/'>Main page</Link>
          <Link to='/about'>About page</Link>
          <Suspense fallback={<div>Loading</div>} >
            <Routes>
              <Route path={'/'} element={<MainPageAsync />} />
              <Route path={'/about'} element={<AboutPageAsync />} />
            </Routes>
          </Suspense>
        </div>
    );
};

export default App;