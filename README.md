# Library



# Roadblocks
- Figuring out how to implement the popup modal form. I had to make use of fixed positioning and display: none for when the modal form should be hidden.

- The book's information kept coming out as "undefined" when trying to generate it with JavaScript using the "this" keyword. This was solved by realizing that arrow functions do not provide a "this" of their own and instead take the "this" that was currently defined during time of its execution (in this case, I had it as undefined/global scope). Changing it from an arrow function to a regular anonymous function solved the issue.

- Figuring out how to take the values of a form without submitting (and thus refreshing the page, resetting the library to its initial empty state). This was done through an event property that disables the default behavior "event.preventDefault()". 

- Having to look up unfamiliar syntax, like for getting and setting data-attributes