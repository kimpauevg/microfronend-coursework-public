const config = {
    roots: ['<rootDir>'],
    testMatch: ['<rootDir>/**/*.test.{js,jsx,ts,tsx}'],
    testEnvironment: 'jsdom',
    testRunner: './node_modules/jest-circus/runner.js',
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '^.+.(css|sass|scss)$',
    ],
    modulePaths: [],
    moduleDirectories: ['node_modules', 'assets'],
    moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
    },
    resetMocks: true,
};

module.exports = config;
