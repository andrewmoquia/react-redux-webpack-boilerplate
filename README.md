# react-redux-webpack-boilerplate
A  template to create react-redux app that will be bundled in webpack.

# npm i
Install dependencies to run the app.

# npm start
Go live in localhost.

# npm build
Bundle the project using webpack.

# npm test
Bundle the project and go live using the bundled project.

# This app additionally uses
1. cssnano - minify css
2. dotenv-webpack - to be able to access variables in env (do not include most sensitive datas)
3. prettier - to beautify your code
4. eslint - get notify for warnings and errors
5. lint-staged - check for errors and beautify before pushing to git
6. workbox - responsible for service workers
7. lodash - split your bundle (use React Lazy to further split your bundle)
8. autoprefixer - convert your css to support older browser
9. @reduxjs/toolkit - simplified version of redux
10. core-js - responsible to convert your code to support older browser