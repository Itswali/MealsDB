#!/bin/sh
npm run build
sed -i '1s;^;/* eslint-disable */\n;' dist/main.js
npx eslint . --fix
npx stylelint "**/*.{css,scss}" --fix --custom-syntax postcss-scss
git add *
read -p 'Commit Message: ' commitMessage
git commit -m "$commitMessage"
read -p 'Branch: ' branchName
git push -u origin $branchName
