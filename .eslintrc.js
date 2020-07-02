module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true
	},
	extends: [ 'airbnb', 'airbnb/hooks', 'prettier', 'prettier/react' ],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 11,
		sourceType: 'module'
	},
	plugins: [ 'react', 'prettier' ],
	rules: {
		'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
		'no-console': 'off',
		'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
		'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	}
};
