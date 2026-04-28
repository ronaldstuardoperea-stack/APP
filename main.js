import {addCookieToButton, checkCookies} from "./modules/cookies.js";

function onLoad () {
    addCookieToButton();
    checkCookies();
}

onLoad();