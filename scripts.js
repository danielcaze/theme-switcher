const toggle = document.getElementById("button")
const body = document.querySelector("body")
const title = document.querySelector("h1")

toggle.addEventListener('click', () => {toggle.classList.toggle('active'),
body.classList.toggle('active'),
title.classList.toggle('active')})