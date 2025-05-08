import React, { useState, useEffect } from 'react'

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgroundImages = [
    '/images/hero-1.jpeg',
    '/images/hero-2.jpeg',
    '/images/hero-3.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <section id="home" className="hero">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`hero-background ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="main-title">JunartStory</h1>
            <p className="hero-subtitle">아기의 첫 순간을 예술로 담아내다</p>
            <div className="hero-description">
              아기의 작은 손과 발로 만드는 특별한 추억,<br />
              평생 간직할 수 있는 아름다운 예술작품으로 남겨드립니다.
            </div>
            <div className="hero-buttons">
              <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="hero-button primary">
                블로그 방문하기
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hero-button secondary">
                인스타그램
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;