class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  on(event, cb) {
    this.htmlElements.forEach( el => {
      el.addEventListener(event, cb);
    })
  }

  // to test out off event listener, the cb has to be the same object.
  off(event, cb) {
    this.htmlElements.forEach(el => {
      el.removeEventListener(event, cb);
    })
  }

  html(str) {
    if (str === undefined) {
      return this.htmlElements[0].innerHTML;  
    } else {
      this.htmlElements.forEach( (el) => {
        el.innerHTML = str;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(el) {
    if (el instanceof HTMLElement) {
      this.htmlElements.forEach( (node) => {
        node.innerHTML += el.outerHTML;
      });
    } else if (typeof el === "string") {
      this.htmlElements.forEach( (node) => {
        node.innerHTML += el;
      });
    } else {
      let combinedNodes = "";
      el.htmlElements.forEach( (node) => {
        combinedNodes += node.outerHTML;
      });

      this.htmlElements.forEach( (node) => {
        node.innerHTML += combinedNodes;
      });
    }
  }

  children() {
    let childs = [];
    this.htmlElements.forEach((node) => {
      childs = childs.concat(Array.from(node.children));
    });
    return new DOMNodeCollection(childs);
  }

  parent() {
    let parents = [];
    this.htmlElements.forEach((node) => {
      if (!parents.includes(node)) {
        parents.push(node.parentElement);
      }
    });
    return new DOMNodeCollection(parents);
  }

  find(selector) {
    let found = [];

    function innerFind(collection) {
      if (collection.htmlElements.length === 0) return; 

      collection.htmlElements.forEach( (el) => {        
        if (el.tagName === selector.toUpperCase() || 
           (el.className === selector.slice(1)) ||
          (el.id === selector.slice(1))) {
          found.push(el);
        }
        return innerFind(collection.children());
      }); 
    }

    innerFind(this);
    return new DOMNodeCollection(found);
  }

  remove() {
    function removeChildren(collection) {
      if (collection.htmlElements.length === 0) return;

      collection.htmlElements.forEach( el => {
        removeChildren(collection.children());
        el.parentNode.removeChild(el);
      });
    }

    removeChildren(this);
    return "remove success";
  }

}

module.exports = DOMNodeCollection;