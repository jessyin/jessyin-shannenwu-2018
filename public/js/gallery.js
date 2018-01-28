function main() {

    get('/api/inked', {}, function (inkedArr) {
        for (let i = 0; i < inkedArr.length; i++) {
            renderGallery(inkedArr[i]);
        }
    });

    get('/api/whoami', {}, function (user) {
        renderNavbar(user);
    });
}


function renderGallery(inkedJSON) {

    const postContainer = document.getElementById('photo-holder');
    const cardDiv = document.createElement('div');
    cardDiv.className = "card photo-container";
    cardDiv.setAttribute("style", 'padding:0px');
    const cardImg = document.createElement('img');
    cardImg.className = 'card-img';
    const url = "https://s3.amazonaws.com/inkspire/" + inkedJSON.image_url;
    cardImg.setAttribute('src', url);
    cardDiv.appendChild(cardImg);

    const overlayText = document.createElement('div');

    const overlayPostContent = document.createElement('h1');
    const overlayPostAuthor = document.createElement('small');
    const overlayPostArtist = document.createElement('small');

    const postAuthorIcon = document.createElement('i');
    postAuthorIcon.className = 'fa fa-lightbulb-o';
    overlayPostAuthor.appendChild(postAuthorIcon);

    const postArtistIcon = document.createElement('i');
    postArtistIcon.className = 'fa fa-paint-brush';
    overlayPostArtist.appendChild(postArtistIcon);

    overlayPostArtist.innerHTML += ("  " + inkedJSON.creator_name);

    get('/api/posts', {}, function (postsArr) {
        for (let i = 0; i < postsArr.length; i++) {
            if (inkedJSON.post_id == postsArr[i]._id) {
                overlayPostContent.innerHTML = postsArr[i].content;
                overlayPostAuthor.innerHTML += ("  " + postsArr[i].creator_name);
            }
        }
    });

    overlayText.appendChild(overlayPostContent);
    overlayText.appendChild(overlayPostAuthor);
    overlayText.appendChild(overlayPostArtist);

    //overlayText.setAttribute('style', "display: table-cell; vertical-align: middle;");
    overlayText.className = 'text overlay d-flex flex-column align-items-center justify-content-center';

    cardDiv.appendChild(overlayText);
    postContainer.appendChild(cardDiv);
}

main();
