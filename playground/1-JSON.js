// const book {
//     title="ego is the biggest enemy",
//     author="kshitiz goel"
// }
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const book = {
//     title : "Ego is the enemy",
//     authour : "Kshitiz Goel"
// }

// // const bookJSON = JSON.stringify(book)
// // fs.writeFileSync('1-JSON.json', bookJSON)

// const data = fs.readFileSync("1-JSON.json")
// const dataJSON = data.toString()
// const parseddata = JSON.parse(dataJSON)
// console.log(dataJSON)
// console.log(parseddata.authour)

const fs = require("fs")

const data = fs.readFileSync("1-JSON.json")
const dataJSON = data.toString()
const dataparsed = JSON.parse(dataJSON)

dataparsed.name ="kshitiz goel"
dataparsed.age= "21"

const user = JSON.stringify(dataparsed)
fs.writeFileSync("1-JSON.json",user)
