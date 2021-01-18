console.log("loaded")

const polishDiv = document.querySelector('#polish')
const englishDiv = document.querySelector('#english')
const languageDetails = document.querySelector('#languageDetails')

const toggleLanguageDetails = (event) => {
    let languageClicked;
   if (languageDetails.classList.contains('hidden')) {
       languageDetails.classList.remove('hidden')
       languageDetails.innerHTML = "<h1>Changed!</h1><p>I can speak, and I can write, and I can read, and so on</p>"
   } else {
       languageDetails.classList.add('hidden')
   }
}

polishDiv.addEventListener('mouseenter', toggleLanguageDetails)
polishDiv.addEventListener('mouseleave', toggleLanguageDetails)

englishDiv.addEventListener('mouseenter', toggleLanguageDetails)
englishDiv.addEventListener('mouseleave', toggleLanguageDetails)

/*
for (let div in document.querySelector('#languages-container')) {
    div.addEventListener('click', toggleLanguageDetails)
}
document.querySelector('#languages-container').forEach(item => {
    item.addEventListener('click', toggleLanguageDetails)
})
*/