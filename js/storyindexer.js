"use strict";

const qs = (val) => {
    return document.querySelector(val)
}

const edit = (json) => {
    qs("#stories").innerHTML += '<div class="story-post-link  text-format" id="page"></div>';
    for (let i = Object.keys(json).length - 1; i >= 0; i--) {
        console.log("loop" + i)
        qs("#page").innerHTML +=
            '<h3><a href="/stories/story.html?id=' + i + '">' + json[i].title + '</a></h3><h5>' + json[i].date + '</h5><p>' + json[i].synopsis + '</p>';
        console.log("loop number: " + i);
    }
}

const loader = async () => {
    const response = await fetch('/stories/story.json');
    const json = await response.json();

    edit(json)
}

loader()


