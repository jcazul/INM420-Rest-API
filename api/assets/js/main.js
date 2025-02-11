// console.log('test this');

async function getData(date) {
    try {
        // Fetch data when you select the date
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=8xu02d1L9kmegohPsv3xzjRjeczhPxqwQ4hgVAv9&date=${date}`);
        const data = await response.json();

        console.log(data);

        // Show the title
        const title = document.querySelector('#title');
        title.innerHTML = data.title;

        // Show the description
        const heading = document.querySelector('#description');
        heading.innerHTML = data.explanation;

        // Show the picture
        const image = document.querySelector('#picture');
        image.innerHTML = `<img src="${data.hdurl}" />`;

    } catch (error) {
        console.log(error);
    }
}

        // Fetch data for today's date
        const today = new Date();
        const formattedDate = today.toLocaleDateString( "en-CA" );

        document.querySelector('#picker').value = formattedDate; 
        document.querySelector('#picker').max = formattedDate;

        getData(formattedDate); 

        // Event listener to select date
        document.querySelector('#picker').addEventListener('input', (event) => {
        const selectedDate = event.target.value;
        getData(selectedDate); 
    });

