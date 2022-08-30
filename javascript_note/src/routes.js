import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesScreen from './screens/notes';
import UserEditScreen from './screens/users/edit';

import PrivateRoute from './components/auth/private_auth';
import PermissionRoute from './components/auth/permission_auth';

const RoutesNav = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/register' element={<RegisterScreen />} />

      <Route path='/login' element={
        <PermissionRoute>
          <LoginScreen />
        </PermissionRoute>
      
      } />

      <Route path='/notes' element={
        <PrivateRoute>
          <NotesScreen />
        </PrivateRoute>
      } />

      <Route path='/users/edit' element={
        <PrivateRoute>
          <UserEditScreen />
        </PrivateRoute>
      } />

    </Routes>
  </BrowserRouter>
)

export default RoutesNav;