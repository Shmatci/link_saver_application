const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");
const addedCategories = document.querySelector("#addedCategories");
const linksList = document.querySelector("#linksList");


let linkCategories = [];
let links = [
    {
        title: "New Link 1",
        url: "url.com1",
        categories: ["node", "angular"]
    },
    {
        title: "New Link 2",
        url: "url.com2",
        categories: ["js", "angular"]
    },
    {
        title: "New Link 3",
        url: "url.com3",
        categories: ["node", "bootstrap"]
    }
];

displayLinks();

addBtn.addEventListener('click', (event) => {
    console.log("Add btn clicked");
    showFormPanel();
});

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Cancel button clicked");

    hideFormPanel();
});
console.log(addLinkPanel.classList);

function showFormPanel() {
    addLinkPanel.classList.remove('hidden');
}

function hideFormPanel(){
    addLinkPanel.classList.add('hidden');
    clearLinkForm();
}

linkCategory.addEventListener('keydown', function(event){
    if (event.keyCode === 188) {
        event.preventDefault();
      
        linkCategories.push(linkCategory.value);

        linkCategory.value = ''

        //Display the updated categories
        displayLinkCategories();
    }
})

function displayLinkCategories() {
    console.log("Displaying Link Categories");
    addedCategories.innerHTML = '';
    for(let category of linkCategories) {
        var categoryHTMLString = `<span class="category">${category}</span>`;
        addedCategories.innerHTML += categoryHTMLString;
    }

}

function clearLinkForm(){
    linkTitle.value = '';
    linkUrl.value = '';
    linkCategory.value = '';
    linkCategories = [];
    addedCategories.innerHTML = '';
}

console.log(this);

submitButton.addEventListener('click', (event) => {

    //Stop form from submitting
    event.preventDefault();
    
    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title,
        url, 
        categories
    }
    
    //Push new link to array
    links.unshift(newLink);

    clearLinkForm();

    displayLinkCategories();

    //hide the addLinkPanel form
    hideFormPanel();

    displayLinks();
});

function displayLinks(){
    linksList.innerHTML = '';

    for(let link of links) {
        
        let linkHTMLString = `

            <div class="link panel">
                <div class="link-options">
                    <button class="btn-sm">Delete</button>
                    <button class="btn-sm">Edit</button>
                </div>
                <a href="${link.url}">
                    <h1 class="header">${link.title}</h1>
                </a>
                <p class="link-date">${Date.now()}</p>

                <div class="categories">
                    Categories:`;
        for(let category of link.categories){
            linkHTMLString += `<span class="category">${category}</span>`;
        }
                
        linkHTMLString += `
                    </div>
                </div>
            `
            ;
        
        linksList.innerHTML += linkHTMLString;
    }
}