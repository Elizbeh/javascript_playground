// Manipulate data in a series of requests

// Get DOM elements
const generateButton = document.getElementById('generate-button');
const postTitle = document.getElementById('post-title');
const postId = document.getElementById('post-id');
const postContent = document.getElementById('post-content');

// API URL
const api = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';


function makeRequest(verb, url, data) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open(verb, url);

        request.onreadystatechange = () => {
            if (request.readyState === 4) {

                // Handle empty responses (e.g. CORS or server errors)
                if (!request.response) {
                    reject(new Error(`Request failed with status ${request.status}`));
                    return;
                }

                try {
                    const response = JSON.parse(request.response);

                    if (request.status === 200 || request.status === 201) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                } catch (error) {
                    reject(new Error("Invalid JSON response from server."));
                }
            }
        };

        if (verb === "POST") {
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(data));
        } else {
            request.send();
        }
    });
}

async function createPost() {
    const uidPromise = makeRequest('GET', api + '/generate-uid')
    const titlePromise = makeRequest('GET', api + '/generate-title')
    const loremPromise = makeRequest('GET', api + '/generate-lorem')
        
    const [uidResponse, titleResponse, loremResponse] =  await Promise.all([uidPromise, titlePromise, loremPromise])

    const postPromise = makeRequest('POST', api + '/create-post-with-id', {
        uid: uidResponse.uid,
        title: titleResponse.title,
        content: loremResponse.lorem
    });
    const postResponse = await postPromise
    postTitle.textContent = postResponse.post.title
    postContent.textContent = postResponse.post.content
    postId.textContent = postResponse.post.uid
}

generateButton.addEventListener('click', () => {
    createPost()
})