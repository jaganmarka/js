
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

console.log(unique, 'unique');

//for single key
const emails = [
    { email: "a@gmail.com", k: "s" },
    { email: "b@gmail.com", k: "s" },
    { email: "c@gmail.com", k: "s" },
    { email: "a@gmail.com", k: "s" },
    { email: "c@gmail.com", k: "s" }
]
const k = emails.filter(function ({ email }) {
    return !this[email] && (this[email] = email);
}, {})
console.log(k, 'kkk');

const c = listOfTags.some(i => {
    if (i.label === 'Sunshine') {
        console.log(i, '1111')
        return true;
    } else {
        console.log(i, '1111')
        return false;
    }
});
console.log(c, 'aaaa')

const a = listOfTags.filter(i => i.label === 'Hello');
console.log(a, 'aaaa')
const b = listOfTags.filter(i => {
    if (i.label === 'Hello') {
        return true;
    }
});
let i = 0;
let m = [];
do {
    if (listOfTags[i].label === 'Hello') {
        m = [...m, listOfTags[i]];
    }
    i++;
} while (i < listOfTags.length) {
    console.log(m, 'sjdhfdskjf')
}
console.log(b, 'bbbb')
console.log(listOfTags, 'listOfTags')


