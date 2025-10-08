import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signin } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import './Auth.css';

const Signin = () => {

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;
}