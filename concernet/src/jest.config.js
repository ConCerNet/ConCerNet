module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom', // Necesario para pruebas con React
  };
  