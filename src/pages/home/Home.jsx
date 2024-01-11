import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import HomeLoading from './components/HomeLoading';
import './home.scss';

function Home() {
  const [loadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingVisible(false);
    }, 2000);

    // Cleanup the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div id="home-container">
      {loadingVisible && <HomeLoading />}
      <Welcome />
    </div>
  );
}

export default Home;
