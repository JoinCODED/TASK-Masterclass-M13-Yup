# Validation In-Depth

Time to check if our data line up with our expectations.

## Steps

1. Fork and clone [this repository](https://github.com/JoinCODED/TASK-Masterclass-M13-Yup).
2. Install the dependencies using `npm i`.

## Task

To test stuff out you can either do `npm test`, or add some logs to `index.ts` and run the file using `npm start`. You could also drop into the shell using `npm run shell`.

1. Go to `index.ts`, and add the import for `yup.js` at the top of the file.
2. Add your schemas, for the `Beginner` section there are no tests and they are not `objects`.
3. Complete the `Beginner` section then move to the `Intermediate` section. Every schema from there on has a test suite, make sure to pass all tests using `npm test`.
   - For example, if you finished `personSchema` you should pass all tests in the `valid person schema` suite. There are 3 test suites, that means if you only finished `personSchema` you will only pass the `valid person schemas`.
4. Complete all schemas, and pass all tests.
5. Push your code.
