import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URLTable = () => {
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://urls-bae.onrender.com/user/url/dashboard/url-list');
        const data = Array.isArray(response.data) ? response.data : [];
        setUrlList(data);
      } catch (error) {
        console.error('Error fetching URL list:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <h2>URL List</h2>
      <table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Original URL</th>
            <th>Click Count</th>
          </tr>
        </thead>
        <tbody>
          {urlList.map((url) => (
            <tr key={url.id}>
              <td>
                <a href={url.shortURL} target="_blank" rel="noopener noreferrer">
                  {url.shortURL}
                </a>
              </td>
              <td>{url.originalURL}</td>
              <td>{url.clickCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default URLTable;
