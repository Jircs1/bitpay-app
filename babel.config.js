const {NODE_ENV} = process.env;

const prod = NODE_ENV === 'production';

const plugins = [
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-transform-shorthand-properties',
  '@babel/plugin-transform-arrow-functions',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-transform-template-literals',
  'react-native-reanimated/plugin',
  [
    'module:react-native-dotenv',
    {
      moduleName: '@env',
      path: '.env',
      safe: true,
      allowUndefined: true,
    },
  ],
];

if (prod) {
  plugins.push('transform-remove-console');
}

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:@babel/preset-typescript',
  ],
  plugins,
};
