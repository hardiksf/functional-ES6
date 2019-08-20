# functional-ES6
Learning Functional Programming with JavaScript ES6+ on Linkedin learning/Lynda.com

##eslint immutable plugin 
- `npm install --save-dev eslint`
- `npm install --save-dev eslint-plugin-immutable`
- Initialize eslint in project `npx eslint --init`
- Answer following questions:

		? How would you like to use ESLint? To check syntax, find problems, and enforce code style
		? What type of modules does your project use? CommonJS (require/exports)
		? Which framework does your project use? None of these
		? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)Browser
		? How would you like to define a style for your project? Use a popular style guide
		? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
		? What format do you want your config file to be in? JavaScript
- This will create `.eslintrc.js` file at root level of project
- Modify this file as below
	
	```	
	  plugins: [
	      'immutable',
	  ],
	  rules: {
	      'immutable/no-mutation': 2,
	  },
	```
	- 2 for `'immutable/no-mutation' is for error
	- 1 is for earning
	- 0 is to ignore it
