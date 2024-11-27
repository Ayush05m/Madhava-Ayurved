import create from 'zustand';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor' | 'admin';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

interface RegisterData {
  name: string;
  email: string;
  phone?: string;
  age: number;
  password: string;
}

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const useStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      set({ token, user, isLoading: false });
    } catch (error) {
      const message = error.response?.data?.message || 'An error occurred during login';
      set({ error: message, isLoading: false });
      throw new Error(message);
    }
  },

  register: async (userData: RegisterData) => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.post('/auth/register', userData);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      set({ token, user, isLoading: false });
    } catch (error) {
      const message = error.response?.data?.message || 'An error occurred during registration';
      set({ error: message, isLoading: false });
      throw new Error(message);
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null, error: null });
  },

  clearError: () => set({ error: null }),
}));

export default useStore;