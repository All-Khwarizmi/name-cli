#!/usr/bin/env node

const pkgJSON = require("./package.json")
const welcome = require("cli-welcome")
welcome({
    title: "Get to k"
})

console.log(`
NAME : ${pkgJSON.name}
VERSION : ${pkgJSON.version}
DESCRIPTION : ${pkgJSON.description}

`)
console.log(`
Jason Suárez

Spanish teacher | Full-stack JavaScript developer | Entrepreneur \nI create applications to make my student's learning journey smoother.

👀 Portfolio : https://www.jason-suarez.com/
🐈 Github :    https://github.com/All-Khwarizmi
😎 Linkedin :  https://www.linkedin.com/in/jason-suarez/

`);
