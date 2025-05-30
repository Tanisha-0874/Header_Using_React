import React from 'react';

function App() {
  return (
    <div>
      <header style={styles.header}>
        <div style={styles.left}>
          <span style={styles.menu}>☰</span>
          <h2 style={styles.logo}>YouTube</h2>
        </div>

        <div style={styles.center}>
          <input type="text" placeholder="Search" style={styles.searchInput} />
          <button style={styles.searchButton}>🔍</button>
        </div>

        <div style={styles.right}>
          <span style={styles.icon}>🎥</span>
          <span style={styles.icon}>🔔</span>
          <span style={styles.avatar}>👤</span>
        </div>
      </header>

      
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#202020',
    color: '#fff',
    height: '60px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'red',
  },
  menu: {
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
  },
  searchInput: {
    flex: 1,
    padding: '0.4rem',
    border: '1px solid #ccc',
    borderRadius: '2px 0 0 2px',
    outline: 'none',
  },
  searchButton: {
    padding: '0.4rem 1rem',
    backgroundColor: '#313131',
    color: 'white',
    border: '1px solid #ccc',
    borderRadius: '0 2px 2px 0',
    cursor: 'pointer',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
  avatar: {
    backgroundColor: '#555',
    borderRadius: '50%',
    padding: '0.4rem',
    cursor: 'pointer',
  },
  mainContent: {
    paddingTop: '70px', // Adds space below the fixed header
    padding: '1rem',
  },
};

export default App;
