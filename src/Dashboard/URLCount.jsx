import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URLCount = () => {
  const [totalURLs, setTotalURLs] = useState(0);

  useEffect(() => {
    // Fetch the total count of URLs from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('https://urls-bae.onrender.com/user/url/dashboard/total-urls');
        setTotalURLs(response.data.count);
      } catch (error) {
        console.error('Error fetching total URL count:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Total URLs Created</h2>
      <p>{totalURLs}</p>
    </div>
  );
};

export default URLCount;
