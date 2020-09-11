
/// Object CRUD operation

const listOfTags = [
    { id: 1, label: "Hello", color: "red", sorting: 0 , a: { l: "dfdsf" }},
    { id: 2, label: "World", color: "green", sorting: 1 , a: { l: "dfdsf" }},
    { id: 3, label: "Hello", color: "blue", sorting: 4 , a: { l: "dfdsf" }},
    { id: 4, label: "Sunshine", color: "yellow", sorting: 5, a: { l: "dfdsf" } },
    { id: 5, label: "Hello", color: "red", sorting: 6, a: { l: "dfdsf" }},
]
// console.log(listOfTags, '1')
//dynamic creation
listOfTags.map((item, index) => {
    // console.log("item=>", item, 'index=>', index )
    //  console.log(Object.keys(item), 'item.keys()') ;
    item['first Name'] = {
        name: "aaa"
    };
    item.fullof = "Mohan";
    item.a.thriveni = "thriveni";
    item.b = {};
    item['b']['thulasi'] = "thulasi";
    item['a']['Supriya'] = "Supriya";
    // console.log(item, 'item.keys()') 

    //  console.log(Object.keys(item), 'item.keys()') ;
})
let obj = { id: 1, label: "Hello", color: "red", sorting: 0, a: { l: "dfdsf" } };

console.log(Object.keys(obj), 'item.keys()');
console.log(Object.values(obj), 'item.keys()');
// console.log(listOfTags, '2')
obj.jagan = "jagan";
obj.label = "world"; // update
delete obj.sorting;
// console.log(obj, '2')
console.log(Object.keys(obj), 'item.keys()');
console.log(Object.values(obj), 'item.keys()');
// listOfTags.map(item => {
//     console.log()
// })