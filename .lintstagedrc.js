module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint  --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
  '*.{scss,less,styl,html}': ['stylelint --fix', 'prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
};
