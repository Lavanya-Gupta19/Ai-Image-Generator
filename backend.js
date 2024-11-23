let generateImageForm = document.getElementById('generate-image-form');
let formInput = document.getElementById('input-value');
let imageContainerText = document.getElementById('imageContainerText');
let imageGenerated = document.getElementById('generated-image');
let imageContainer = document.getElementById('images-visible');

async function fetchImages(category) {
    try {
        const apiUrl = `https://api.unsplash.com/search/photos?query=${category}&client_id=of35fBFoACdSFwL5UhighYixDQSrNySASSwr4-eTqag`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Unable to fetch the data');
        }
        const imageData = await response.json();
        const imageUrl = imageData.results[0].urls.regular;
        if (!imageUrl || typeof imageUrl !== 'string') {
            throw new Error('Invalid image URL');
        }
        imageContainerText.innerText = "Below is your generated Image:";
        imageContainer.style.display = "block";
        imageGenerated.src = imageUrl;
        console.log(imageUrl);
    } catch (error) {
        console.error(error);
        imageContainerText.innerText = "Error generating image:";
        imageContainer.style.display = "block";
    }
}

generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredText = formInput.value;
    if (enteredText !== "") {
        fetchImages(enteredText);
    } else {
        // Reload the page if the input field is empty
        location.reload();
    }
});