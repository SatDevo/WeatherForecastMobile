module.exports = {
  preset: 'react-native',

  testPathIgnorePatterns: [
    '/node_modules/',
    '/__mocks__/',
    '\\.mock\\.[jt]sx?$',
  ],

  // Ensure Jest looks for test files in the correct locations
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],

  // ... other configurations
};


