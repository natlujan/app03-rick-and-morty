const characterInfo = localStorage.getItem('characterUrl');

const characterHTML = {
    name: document.getElementById('character-name'),
    image: document.getElementById('character-img'),
    status: document.getElementById('character-status'),
    type: document.getElementById('character-type')
}

const GetCharacter= () =>{
    fetch(characterInfo).then(res => res.json()).then(character => {
        const {name, image, status, type} = character;
        characterHTML.name.innerHTML = name;
        characterHTML.image.src = image;
        characterHTML.type.innerHTML = type;
        characterHTML.status.innerHTML = status;
        console.log(name,image,status,type);
    });
}
GetCharacter();
console.log(characterInfo);