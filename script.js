document.addEventListener('DOMContentLoaded', function () {
    console.log("hi")
    const postListElement = document.getElementById('notice1');
    const postForm = document.querySelector('.post-btn');
    const apiEndpoint = 'http://localhost:4200/api/post'; // Replace with your actual backend endpoint

    // Function to fetch and render posts
    function fetchAndRenderPosts() {
        fetch(apiEndpoint, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            // Clear the existing list
            postListElement.innerHTML = '';

            // Render the fetched data
            data.forEach(post => {
                const listItem = document.createElement('li');

                // Create and append the h3 element for post content
                const postText = document.createElement('h3');
                postText.textContent = post.postContent;
                listItem.appendChild(postText);

                // Create and append the h5 element for post tags
                const postTag = document.createElement('h5');
                postTag.textContent = post.postTags || 'No tags'; // Use post.postTags if it exists, otherwise set it to 'No tags'
                listItem.appendChild(postTag);

                // Append the entire li to the postListElement
                postListElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    // Fetch and render posts on page load
    fetchAndRenderPosts();

    // Add an event listener for the form submission
    postForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Fetch and render posts after submitting the form
        fetchAndRenderPosts();
    });
});