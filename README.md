# Example of using an imperative approach in React with useImperativeHandle hook
This is an example of how to use an imperative approach versus the default declarative approach in React
- Should be used with caution as it can make it hard to debug when needed
- There are comments in the code (normally comments like this don't exist in codebases)
- It is really easy to refactor this by doing the following
1. Create a new folder in the root of the project called `components`
2. Create two separate files called (Counter, CusomInput)
3. Copy the code in the Counter and add any needed imports
4. Comment out the code for the Counter in the `App.js` file
5. Import the component into the `App.js` file
6. Should work like it did before
7. Do the same for the `CustomInput` component
8. Once everything works as before we can delete the commented out code in the `App.js` file

