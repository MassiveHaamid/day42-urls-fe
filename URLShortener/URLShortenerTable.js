import React from 'react';

const URLShortenerTable = ({ urlList }) => {
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

export default URLShortenerTable;
