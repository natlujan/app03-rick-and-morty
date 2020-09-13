const baseUrl = 'https://rickandmortyapi.com/api/';
const characterList = document.getElementById('characters-list');
const locationsList = document.getElementById('locations-list');
const episodeList = document.getElementById('episode-list');

const GetCharacterList = async url =>{
    /*fetch(`${baseUrl}${url}`).then(res => console.log(res.json()));*/ //Aquí no es necesaria la función asincrona

    const resp= await fetch(`${baseUrl}${url}`);
    const data = await resp.json();
    const {results} = data;
    
    console.log(resp);

    const infoArr = results.map(element => {
        const {image,url} = element;
        return {characterImage:image, characterUrl: url};
        //console.log(image);
    });

    await infoArr.forEach(element => {
        const imgElement = document.createElement('img');
        imgElement.src = element.characterImage;
        imgElement.onclick = ()=>{
            localStorage.setItem('characterUrl',element.characterUrl);
            window.location.href="file:///F:/Documents/programacion-hipermedia/app03-ulsa-2020/character.htm";
        };
        characterList.appendChild(imgElement);
    });

}


GetLocationsList = async url =>{
    const data = await fetch(`${baseUrl}${url}`);
    const dataJson = await data.json();
    const results = dataJson.results;

    console.log(dataJson);
    const locationResults = results.map(element =>{
        const {name, dimension} = element;
        return {locationName:name, locationDimension:dimension};
        
    })
    locationResults.forEach(element => {
        locationsList.innerHTML += `<div id="list-Style"> <li>${element.locationName}</li>
        <li>${element.locationDimension}</li> <br> </div>` 
    });
    
    ;
    
    
    
}

GetEpisodesList = async url =>{
    const data = await fetch(`${baseUrl}${url}`);
    const dataJson = await data.json();
    const results = dataJson.results;

    results.forEach(element => {
        episodeList.innerHTML += 
        `
            <tr>
                <td>${element.episode}</td>
                <td>${element.name}</td>
                <td>${element.air_date}</td>
            </tr>
        `
    });
    console.log(results);
}


GetLocationsList('location');

GetCharacterList('character');

GetEpisodesList('episode');