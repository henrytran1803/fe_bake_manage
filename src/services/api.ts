import { APIError } from '../utils/errors';

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch('https://api.example.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new APIError('Failed to login', response.status);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};