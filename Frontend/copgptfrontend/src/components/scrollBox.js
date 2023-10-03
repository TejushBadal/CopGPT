import React from 'react';

function ScrollBox() {
    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30vh', // Ensure the box takes the full viewport height = 100vh
          }}
        >
          <div
            style={{
              width: '1200px',
              maxHeight: '400px',
              overflowY: 'scroll',
              border: 'none',
              padding: '10px',
            }}
          >
            {/* Add your text content here */}
            {Array.from({ length: 20 }).map((_, index) => (
              <p key={index}>This is some text. Scroll down to see more content.</p>
            ))}
          </div>
          <br/>
        </div>
      );
}

export default ScrollBox;