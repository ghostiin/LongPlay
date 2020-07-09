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
		'no-bitwise': [ 'error', { int32Hint: true } ],
		'no-console': 'off',
		'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
		'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
		'react/jsx-fragments': [ 'error', 'element' ],
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'styled-components',
						message: 'Please import from styled-components/macro.'
					}
				],
				patterns: [ '!styled-components/macro' ]
			}
		],
		'no-unused-vars': [ 'error', { argsIgnorePattern: 'draft' } ], // for use-immer
		'no-param-reassign': [ 'error', { props: false } ]
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	}
};
