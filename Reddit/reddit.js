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

        const redditPost = document.getElementById('redditPost');
        
        const title = document.createElement('h3');
        title.innerText = post.title;
        // document.body.appendChild(title);

        const img = document.createElement('img');
        img.src = post.thumbnail;
        // document.body.appendChild(img);

        const url = document.createElement('a');
        url.innerText = post.url;
        url.href = post.url;
        // document.body.appendChild(url);

        redditPost.append(title, img, url);
    }})
};

apiCall("aww");

// Since we were using "redditData.data.children[0].data.XXXXXXXX;" in a lot of places, then we can turn this into a variable (constant)
// const post = redditData.data.children[0].data.XXXXX and fill in the last part with what we need.

// Originally we were just fetching the data for index [0] and commented out the for loop.
// If we want all the data on the page, then we uncomment the for loop and use index [i]