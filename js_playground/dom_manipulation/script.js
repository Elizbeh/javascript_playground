
let header = document.querySelector('header')


const blueButton =document.getElementById('color-button-blue')
const brownButton =document.getElementById('color-button-brown')
const greenButton =document.getElementById('color-button-green')
const noneButton =document.getElementById('color-button-none')

const removeButton = document.getElementById('remove-post')
const articleSection = document.querySelector('section')

blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background')
    header.classList.add('blue-background','text-white');
});

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background')
    header.classList.add('brown-background','text-white');
});

removeButton.addEventListener('click', () => {
    const articleCount = articleSection.childElementCount
    if(articleCount > 1) {
        articleSection.removeChild(articleSection.children[articleCount-1])
    }
})

greenButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'blue-background')
    header.classList.add('green-background','text-white');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'blue-background', 'green-background', 'text-white')
});

const addPost = document.getElementById('add-post')
addPost.addEventListener('click',() => {
    let newPost = creatNewPost()
    articleSection.appendChild(newPost)
})


function creatNewPost() {
let newArticle = document.createElement('article')
let newHeading = document.createElement('h5')
let newParagraph = document.createElement('p')

newHeading.textContent = 'New Blog Post'
newParagraph.textContent = "In this chapter, we are going to build a mini app to learn about event handling and to practice everything we've covered in this part of the course.  First of all, let's look at how to listen for an event, and how to react to it"

newArticle.appendChild(newHeading)
newArticle.appendChild(newParagraph)

newArticle.classList.add('list-group-item')
return newArticle

}

