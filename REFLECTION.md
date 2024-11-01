## Can I explain what my code does?

My code retrieves and displays photos taken by NASA's Mars Curiosity Rover, using NASA's Mars Rover Photos API. When the page loads, it automatically fetches the first images from a notable date, showing a message: “First photos of the Curiosity Rover on Mars!!!” If a user picks a different date, my script fetches up to three photos from that date, displaying them on the page along with the rover's name and other metadata. Key components include async/await functions to handle API requests smoothly, functions to organize and display the photos, and error handling to notify users if something goes wrong. Together, these elements make the site interactive, informative, and user-friendly.

## What was my coding process?

I began by outlining the main features: connecting to NASA's API, fetching photos by date, and displaying them dynamically. My plan included setting up the API connection first and loading an initial set of photos. I used async/await with fetch to load data seamlessly, then structured functions to handle events, like displaying default photos on load and updating the display when a user selects a new date. Testing each feature as I added it helped me catch issues early and get a clearer view of how the functions would interact.

## What challenges did I face?

A major challenge was handling asynchronous operations to ensure photos loaded only when needed and displayed correctly. Initially, I ran into issues with photos preloading or overloading the page, making it cluttered. Managing API error handling also required careful planning because I wanted any issues (like a failed fetch) to be clear to users without breaking the page. To solve this, I tested different logic for function timing and used error messages to notify users of any API issues.


## What would I do differently now?

If I were to start over, I’d likely spend more time on the UI to make the design even more user-friendly and visually appealing from the outset. I’d also look into ways to speed up image loading since the current setup is a bit slow, which would allow me to test layout choices alongside the JavaScript more effectively. Another idea would be to add a loading spinner to improve the user experience while waiting for photos to load.
