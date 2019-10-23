const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let tag = document.createElement("p"); //makes an empty element
  let content = document.createTextNode(string); //makes the text to put in element
  tag.appendChild(content); //add the text to the elements

  /* Using for loop and removeChild()
  let children = Array.from(htmlElement.children);
  if (children.length > 0) {
    for (let i = 0; i < children.length; i++) 
      htmlElement.removeChild(children[i]);
  }
  */

  //using firstChild
  while (htmlElement.firstChild) 
    htmlElement.removeChild(htmlElement.firstChild);

  htmlElement.appendChild(tag);
};

// htmlGenerator('Party Time.', partyHeader);
// htmlGenerator("Let's do this.", partyHeader);