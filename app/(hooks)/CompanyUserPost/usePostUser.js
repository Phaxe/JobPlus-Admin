import { useState } from 'react';
import axios from 'axios';

const usePostUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postUser = async (url, formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        url,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status !== 200) {
        const responseData = response.data;
        throw new Error(responseData.message);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, postUser };
};

export default usePostUser;