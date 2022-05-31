# Library



# Roadblocks
- The book's information kept coming out as "undefined" when trying to generate it with JavaScript using the "this" keyword. This was solved by realizing that arrow functions do not provide a "this" of their own and instead take the "this" that was currently defined during time of its execution (in this case, I had it as undefined/global scope). Changing it from an arrow function to a regular anonymous function solved the issue.