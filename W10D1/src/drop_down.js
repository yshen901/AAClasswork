export const dropDown = {

  dogs : {
    "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
    "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
    "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
    "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
    "Tosa": "https://www.akc.org/dog-breeds/tosa/",
    "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
    "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
  },

  dogLinkCreator : function(dogs) {
    const liTags = [];
    let aTag, liTag;
    // for (let i = 0; i < dogs.length; i++) {
    //   let aTag = document.createElement("a");
    //   aTag.innerHTML = Object.keys(dogs)[i];
    // }
    // debugger;
    for (let name in dogs) {
      aTag = document.createElement("a");
      aTag.innerHTML = name;
      aTag.href = dogs[name];

      liTag = document.createElement("li");
      // liTag.className = "dog-link";
      liTag.appendChild(aTag);

      liTags.push(liTag);
    }

    return liTags;
  },

  attachDogLinks : function(dogs) {
    const dogLinks = dropDown.dogLinkCreator(dropDown.dogs);
    let ulTag = document.getElementsByClassName("drop-down-dog-list")[0];
    for (let i = 0; i < dogLinks.length; i++)
      ulTag.appendChild(dogLinks[i]);
  },

  handleEnter : function(e) {
    let ulTag = document.getElementsByClassName("drop-down-dog-list")[0];
    let liTags = ulTag.children;

    for (let i = 0; i < liTags.length; i++)
      liTags[i].className = "dog-link";

    let hTag = document.getElementsByTagName("h3")[0];
    hTag.className = "show";
  },

  handleLeave : function(e) {
    let ulTag = document.getElementsByClassName("drop-down-dog-list")[0];
    let liTags = ulTag.children;

    for (let i = 0; i < liTags.length; i++)
      liTags[i].className = "";

    let hTag = document.getElementsByTagName("h3")[0];
    hTag.className = "";
  }
  
};

dropDown.attachDogLinks(dropDown.dogs);