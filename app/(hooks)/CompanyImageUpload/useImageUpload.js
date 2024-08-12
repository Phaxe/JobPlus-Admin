import { useState } from 'react';
import axios from 'axios';

const useImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (url, imageFile) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      if (response.status !== 200) {
        const responseData = response.data;
        throw new Error(responseData.message);
      }

      return response.data;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, uploadImage };
};

export default useImageUpload;
