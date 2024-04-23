/* 
  아래에 코드를 작성해주세요.
*/

const fetchAlbum = function(page=1, limit=10) {
  const inputTag = document.querySelector('.search-box__input')
  const keyword = inputTag.value
  const API_KEY = '9ed4e09387e02290116cc80a9a857c0d'
  const URL = ` http://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=${API_KEY}&format=json&limit=${limit}&page=${page}`

  const searchResult = document.querySelector('.search-result')
  searchResult.replaceChildren()
  console.log(searchResult)
  axios({
    method: 'get',
    url: URL,
  })
    .then(response => {
      const albumData = response.data.results.albummatches.album
      return albumData
    })
    .then(albumData => {
      albumData.forEach(element => {
        // console.log(element)
        const searchResultCard = createResultCard(element)
        // console.log(searchResultCard)
        searchResult.appendChild(searchResultCard)
      })
      
    }) 
    .catch(error => {
      console.log(error)
      alert('잠시 후 다시 시도해주세요')
    })
}

const createResultCard = function (element) {
  const aTag = document.createElement('a')
  aTag.href = element.url
  const searchResultCard = document.createElement('div')
  searchResultCard.classList.add('search-result__card')
  // 이미지 태그
  const cardImg = document.createElement('img')
  // console.log(element.image)
  cardImg.src = element.image[1]['#text']
  // Text 부분
  const searchResultText = document.createElement('div')
  searchResultText.classList.add('search-result__text')
  const h2Tag = document.createElement('h2')
  h2Tag.textContent = element.artist
  const pTag = document.createElement('p')
  pTag.textContent = element.name
  searchResultText.appendChild(h2Tag)
  searchResultText.appendChild(pTag)
  searchResultCard.appendChild(cardImg)
  searchResultCard.appendChild(searchResultText)
  aTag.appendChild(searchResultCard)
  return aTag
}


const btn = document.querySelector('.search-box__button')
btn.addEventListener('click', fetchAlbum)