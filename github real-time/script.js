const follower = document.querySelector('.followers')
const following = document.querySelector('.following');



const requestUrl = 'https://api.github.com/users/shahidreza5542'
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        let avatars = data.avatar_url
        console.log(avatars);
        let followers = data.followers
        console.log(followers);
        let followings = data.following
        following.innerHTML = `following: ${followings}`
        follower.innerHTML = `followers: ${followers}`
    }
}
xhr.send();

