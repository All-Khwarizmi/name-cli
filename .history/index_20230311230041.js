#!/usr/bin/env node
const clearConsole = require('clear-any-console');
const pkgJSON = require("./package.json")


clearConsole();
console.log(`
NAME : ${pkgJSON.name}


`)
console.log(`
Jason Suárez

Spanish teacher | Full-stack JavaScript developer | Entrepreneur \nI create applications to make my student's learning journey smoother.

👀 Portfolio : https://www.jason-suarez.com/
🐈 Github :    https://github.com/All-Khwarizmi
😎 Linkedin :  https://www.linkedin.com/in/jason-suarez/

`);
