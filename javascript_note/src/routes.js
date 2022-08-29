import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesScreen from './screens/notes';
import UserEditScreen from './screens/users/edit';

const RoutesNav = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/notes' element={<NotesScreen />} />
      <Route path='/users/edit' element={<UserEditScreen />} />
    </Routes>
  </BrowserRouter>
)

export default RoutesNav;