import React from 'react';


function HeaderBar() {
  return (
    <header style={{ backgroundColor: '#2a4ea8', color: 'white', padding: '10px', textAlign: 'center' }}>
         <button style={{padding: '10px 20px',
                        textAlign: 'Left',
                        fontSize: '18px',
                        borderRadius: '5px', 
                        backgroundColor: 'white', 
                        color: 'purple', 
                        border: '1px solid white' }}
                onClick={() => {}}>New Chat</button>
        <h1>CopGPT</h1>
    </header>
  );
}

export default HeaderBar;