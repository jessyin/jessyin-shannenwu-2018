function newNavbarItem(text, url) {
    const listItem = document.createElement('li');
    listItem.className = "nav-item active";
    const itemLink = document.createElement('a');
    itemLink.className = 'nav-link';
    itemLink.setAttribute('id', text);
    itemLink.innerText = text;
    itemLink.href = url;
    listItem.appendChild(itemLink);

    return listItem;
}


function renderNavbar(user) {
    const navbarDiv = document.getElementById('navbar');
    const navbarDivStyles = document.createElement('nav');
    navbarDivStyles.setAttribute('class', "navbar fixed-top navbar-toggleable-md navbar-light bg-faded");
    navbarDiv.appendChild(navbarDivStyles);
    // do the brand stuff 
    const navbarBrand = document.createElement('a');
    navbarBrand.setAttribute('class', 'navbar-brand');
    navbarDivStyles.appendChild(navbarBrand);
    // do the toggler
    const navbarToggler = document.createElement('button');
    navbarToggler.setAttribute('class', "navbar-toggler navbar-toggler-right");
    navbarToggler.setAttribute('type', "button");
    navbarToggler.setAttribute('data-toggle', "collapse");
    navbarToggler.setAttribute('data-target', "#navbarNavAltMarkup");
    navbarToggler.setAttribute('aria-controls', "navbarNavAltMarkup");
    navbarToggler.setAttribute('aria-expanded', "false");
    navbarToggler.setAttribute('aria-label', "Toggle navigation");
    // toggler button
    const toggleButton = document.createElement("span");
    toggleButton.setAttribute('class', "navbar-toggler-icon");
    navbarToggler.appendChild(toggleButton);
    navbarDivStyles.appendChild(navbarToggler);

    // next div after button
    const navbarLinksDiv = document.createElement('div');
    navbarLinksDiv.setAttribute('class', 'collapse navbar-collapse');
    navbarLinksDiv.setAttribute('id', 'navbarNavAltMarkup');
    navbarDivStyles.appendChild(navbarLinksDiv);

    // ul block
    const navbarLinksList = document.createElement('ul');
    navbarLinksList.className = 'navbar-nav navbar-right ml-auto'
    navbarLinksDiv.appendChild(navbarLinksList);
    const logo = document.createElement('img');
    logo.setAttribute('src', "/static/logov6.png");
    logo.setAttribute('style', 'width: auto; height:50px');
    navbarBrand.appendChild(logo);
    if (user._id) {
        navbarBrand.href = '/posts';
    } else {
        navbarBrand.href = '/about';
    }
    navLogoText = document.createElement('span');
    navLogoText.innerHTML = '   inkspire';
    navbarBrand.appendChild(navLogoText);
    //navbarBrand.innerText = "inkspire";

    if (user._id) {
        navbarLinksList.appendChild(newNavbarItem('ideas', '/posts'));
        navbarLinksList.appendChild(newNavbarItem('gallery', '/gallery'));
        navbarLinksList.appendChild(newNavbarItem('profile', '/u/profile?' + user._id));
        navbarLinksList.appendChild(newNavbarItem('logout', '/logout'));
    } else {
        navbarLinksList.appendChild(newNavbarItem('login', 'auth/google'));
    }


    navbarLinksList.appendChild(newNavbarItem('about', '/about'));

    switch (navbarDiv.className) {
        case "ideas":
            document.getElementById("ideas").setAttribute("style", "border-bottom: #AADDDD solid 4px; padding-bottom:0;");
            break;
        case "about":
            document.getElementById("about").setAttribute("style", "border-bottom: #AADDDD solid 4px; padding-bottom:0;");
            break;
        case "gallery":
            document.getElementById("gallery").setAttribute("style", "border-bottom: #AADDDD solid 4px; padding-bottom:0;");
            break;
        case "profile":
            document.getElementById("profile").setAttribute("style", "border-bottom: #AADDDD solid 4px; padding-bottom:0;");
            break;

    }
}
