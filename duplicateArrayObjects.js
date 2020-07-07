
//for multiple keys checking
const listOfTags = [
    { id: 1, label: "Hello", color: "red", sorting: 0 },
    { id: 2, label: "World", color: "green", sorting: 1 },
    { id: 3, label: "Hello", color: "blue", sorting: 4 },
    { id: 4, label: "Sunshine", color: "yellow", sorting: 5 },
    { id: 5, label: "Hello", color: "red", sorting: 6 },
]
const unique = [];
listOfTags.map(x => unique.filter(a => a.label == x.label && a.color == x.color).length > 0 ? null : unique.push(x));

console.log(unique);

//for single key
const emails = [
    { email: "a@gmail.com" },
    { email: "b@gmail.com" },
    { email: "c@gmail.com" },
    { email: "a@gmail.com" },
    { email: "c@gmail.com" }
]
emails.filter(function ({ email }) {
    return !this[email] && (this[email] = email);
}, {})