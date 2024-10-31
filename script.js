// Constants for the API key
const API_KEY = 'muheHNgjPUunxAwhZhgtIRBdQQuMA6AvXF8x6Yu0';
const DEFAULT_DATE = '2012-08-06'; // Default date of the first photos taken on the mars rover

// Function to fetch photos from NASA's API
async function fetchPhotos(date) {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.photos;
    } catch (error) {
        console.error('Failed to fetch photos:', error);
    }
}

// Function to display photos in the gallery (max 3 photos)
function displayPhotos(photos, description) {
    const gallery = document.querySelector('.photo-gallery');
    gallery.innerHTML = ''; // Clear previous photos

    // Create a caption for the description
    const caption = document.createElement('h2');
    caption.textContent = description;
    gallery.appendChild(caption);

    // Display only the first 3 photos
    photos.slice(0, 3).forEach(photo => {
        const { img_src, earth_date, camera: { full_name } } = photo;

        // Create an image element
        const img = document.createElement('img');
        img.src = img_src;
        img.alt = `Photo taken by ${full_name} on ${earth_date}`;

        // Create a caption for each photo
        const photoCaption = document.createElement('p');
        photoCaption.textContent = `Taken by ${full_name} on ${earth_date}`;

        // Append the image and its caption to the gallery
        gallery.appendChild(img);
        gallery.appendChild(photoCaption);
    });
}

// Function to load photos for a specific date with a custom message
async function loadPhotos(date) {
    const photos = await fetchPhotos(date);
    if (photos && photos.length > 0) {
        // Set a custom description for the default date
        const description = date === DEFAULT_DATE 
            ? "First photos of the Curiosity Rover on Mars!!! Taken on 2012-08-06"
            : `Photos from the Mars Rover mission on ${date}.`;
        displayPhotos(photos, description);
    } else {
        alert('No photos found for the selected date.');
    }
}

// Load default photos when the page loads
window.addEventListener('load', () => loadPhotos(DEFAULT_DATE));

// Add event listener to the "Load Photos" button
document.querySelector('button').addEventListener('click', () => {
    const dateInput = document.querySelector('input[type="date"]');
    const selectedDate = dateInput.value;

    if (!selectedDate) {
        alert('Please select a date to load photos.');
        return;
    }

    loadPhotos(selectedDate);
});

