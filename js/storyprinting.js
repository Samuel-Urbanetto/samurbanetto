"use strict";


//put iframe in page::start

const qs = (val) => {
    return document.querySelector(val)
}

const edit = (json) => {
    qs("#tabname").innerHTML = json.title + " | Sam Urbanetto";
    //qs("#backgroundimg").src = json.img;
    qs("#story").innerHTML += json.story;
}

const loader = async (id) => {
    const response = await fetch('/stories/story.json');
    const json = await response.json();
    console.log(response);

    if (id > Object.keys(json).length-1 || id < 0) {
        window.location.href = '/story.html';
    }

    let correct_json = json.filter((filter) => filter.id == id)[0]

    edit(correct_json)
}

const paramURL = window.location.search;
const ParsedParam = new URLSearchParams(paramURL);

if (!ParsedParam.get("id")) {
    ParsedParam.set("id", 0)
    window.history.replaceState(null, null, "?id=" + ParsedParam.get('id'))
}

let id = Number.parseInt(ParsedParam.get("id"))

loader(id)

const updater = async (int) => {
    id+=int;
    loader(id)
    ParsedParam.set("id", id)
    window.history.replaceState(null, null, "?id="+ParsedParam.get('id'))
}

//put iframe in page::end

//visual settings buttons::start

var iframe = document.getElementById("storyiframe").getElementsByClassName("c12");

const settingsButton = (iframe) => {
    iframe.innerHTML += "<button id=\"settingsButton\"></button>"
}

settingsButton()