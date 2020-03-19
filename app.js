console.log("Let's get this party started!");
const inputBtn = document.getElementById('searchbtn');
const removeBtn = document.getElementById('removebtn');

inputBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchinput').value;
    console.log(searchTerm)
    const gif =  await getGiphy(searchTerm);
    console.log(gif)
    appendImg(gif);
});

removeBtn.addEventListener('click', function (){
    removeImg();
});

async function getGiphy(input) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    const res = await axios.get(url);
    console.log(res.data.data[0].embed_url)
    return res.data.data[0].embed_url;
}


function appendImg(response) {
    let gif = document.createElement('div');
    gif.setAttribute('style', `background-image:url(${response});`)
    let body = document.querySelector('body');
    body.append(gif);
}

function removeImg() {
    let gifs = Array.from(document.querySelectorAll('div'));
    for (gif of gifs) {
        gif.remove();
    }
}

