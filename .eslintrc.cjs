module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    "ignorePatterns": ["dist/*"],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    env: {
        browser: true,
        node: true,
        jasmine: true
    },
};