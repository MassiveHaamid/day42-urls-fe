import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");  // New state for the shortened URL
  const { token } = useAuth();

  const handleURL = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Correct header format
      },
    };
    const data = {
      longURL: url, // Correct property name
    };
    try {
      const response = await axios.post("https://urls-bae.onrender.com/user/url", data, config);
      const { shortURL } = response.data; // Assuming the API response contains the shortened URL
      setShortenedUrl(shortURL);
      setUrl("");
      toast.success("URL shortened successfully"); // Use toast.success for success messages
    } catch (error) {
      console.error(error);
      toast.error("URL shortening failed. Please try again."); // Use toast.error for error messages
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <form onSubmit={handleURL}>
        <div>
          <label>Long URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Shorten URL</button>
      </form>
      {shortenedUrl && (
        <div className="shortened-url">
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default URLShortener;
