// ----Setting up the html file----
// 1. Link this JavaScript file to the index.html file.
// 2. i) Inside the HTML file, add an id attribute equal to 'mainContent' to the main tag.
// ii) Also add a paragraph with an id of 'paragraphOne' and text 'i'm feeling blue!'

//-----Getting into our JavaScript code----
// 3. Select the mainContent element using a JS Document selector and assign it to a variable.
// 4. console.log the variable, open and inspect the html file in the browser console to ensure you have selected the right element
//5. Using the variable, change the width of the element to 100% and height to 100vh using the JS DOM style property.
// 6. Using JS, change the background color of the element to lightblue.
// 7. Add an event listener to this element that listens for a user to click the div.
// 8. On click, the element's background color should change to yellow
// 9. On click, the element's paragraph's text should change to I'm feeling yellow!

// ---More challenging---
let newElement = document.createElement("div");
newElement.innerHTML = `<div style="width: 100px; height: 100px; background-color: red" id="new"> I am a smaller box </div>`;
// 10. Using the above variable, append the following template string to the main element. Remember, to target the main element, you can use the selector you were using above.
// 11. Select this above appended element using its id of new and assign it to a variable.
// 12. Add an event listener to this new appended element. On click, the handler should take in the event as a parameter. 
// 13. Console.log the event.target after the user clicks.
// 14. Open the index.html file and check that the browser console has logged the small box, not our big main box, when we click it.

// ------------------------
// Extra Challenge: How do you make it so the #mainContent element changes its colour back to its original colour when clicked again?
