const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');

// Get and Show posts

async function showPosts() {
    try {
        const res = await fetch ('http://localhost:5000/api/posts');

        if (!res.ok) {
            throw new Error('Failed to Fetch posts');
        }
    
        const posts = await res.json();
        output.innerHTML = '';
    
        posts.forEach((post) => {
            const postEl = document.createElement('div');
            postEl.textContent = post.title;
            output.appendChild(postEl);
        });
    } catch (error) {
        console.log('Error fetching post: ' ,error);
    }
   
}

// Event Listeners
button.addEventListener('click' , showPosts);