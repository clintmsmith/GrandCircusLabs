    // const form = document.getElementById(form);
    // const formData = new FormData(form);
    // let subredditName = get.subReddit;

function apiCall(subreddit){

    let url = `https://www.reddit.com/r/${subreddit}/.json`;
    fetch(url).then(response => response.json()).then(redditData=> {
        console.log(redditData);
        
        for(let i = 0; i < 10; i++){

        const post = redditData.data.children[i].data

        const subRedditName = document.getElementsByClassName('bodyTitle');
        subRedditName.innerText = `r/${subreddit}`;

        // Get the existing DIV from my HTML
        const redditPost = document.getElementById('redditPost');
        
        // Each time you iterate through, create a new DIV
        const card = document.createElement('div');
        card.classList.add("redditCard");
        // Add (append) a new "card" DIV within the existing redditPost DIV
        redditPost.append(card);

        // Get the "title" info from JSON and put that inside a new H3 element
        const title = document.createElement('h3');
        title.innerText = post.title;
        
        // Get the "thumbnail image" info from JSON and put that inside a new Image element
        const img = document.createElement('img');
        img.src = post.thumbnail;

        // Get the "URL" info from JSON and put that inside a new A tag element
        const url = document.createElement('a');
        url.innerText = post.url;
        url.href = post.url;
        
        // Add (append) the title, img, and url to the newly created card
        card.append(title, img, url);

        // Repeat this process each time you iterate through the loop.
    }})
};

apiCall("aww");