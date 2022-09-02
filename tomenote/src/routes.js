import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesScreen from './screens/notes/index';
import UserEditScreen from './screens/users/edit';

import PrivateRoute from './components/auth/private_auth';
import PermissionRoute from './components/auth/permission_auth';

const RoutesNav = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      
      <Route element={<PermissionRoute/>}>
        <Route element={<LoginScreen/>} path='/login' exact/>
      </Route>

      <Route element={<PrivateRoute/>}>
        <Route element={<NotesScreen/>} path='/notes' exact/>
        <Route element={<UserEditScreen/>} path='/users/edit' exact/>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default RoutesNav;