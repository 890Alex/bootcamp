// simple version without localStorage

const form = document.getElementById('form-container')
const memes = document.getElementById('memes-container')

form.addEventListener('submit', function(e){
    e.preventDefault();
    let url = document.getElementById('url').value;
    let topText = document.getElementById('top-text').value;
    let bottomText = document.getElementById('bottom-text').value;
    if(url === '' || topText === '' || bottomText === '') return;

    let newMeme = document.createElement('div')
    newMeme.classList.add('meme')
    let newImg = document.createElement('img')
    newImg.src = url;
    let top = document.createElement('p')
    top.innerText = topText;
    top.classList.add('top')
    let bottom = document.createElement('p')
    bottom.innerText = bottomText;
    bottom.classList.add('bottom')
    newMeme.appendChild(newImg)
    newMeme.appendChild(top)
    newMeme.appendChild(bottom)

    memes.appendChild(newMeme);
    form.reset();
})

memes.addEventListener('click', function(e){
    let targetNameToUpperCase = e.target.tagName.toUpperCase();
    if(targetNameToUpperCase === 'IMG'){
        e.target.parentElement.remove();
    }
})