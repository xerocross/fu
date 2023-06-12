module.exports = {
    preset : 'ts-jest',
    testEnvironment : 'node',
    moduleFileExtensions : ['ts', 'js'],
    testMatch : ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
    transform : {
        '^.+\\.(ts|tsx)$' : ['ts-jest', {
            tsconfig : 'tsconfig.json'
        }]
    },
    moduleNameMapper : {
        '^@/(.*)$' : '<rootDir>/src/$1'
    }
};