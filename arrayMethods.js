const listOfTags = [
    { id: 1, label: "Hello", color: "red", sorting: 0 , a: { l: "dfdsf" }},
    { id: 2, label: "World", color: "green", sorting: 1 , a: { l: "dfdsf" }},
    { id: 3, label: "Hello", color: "blue", sorting: 4 , a: { l: "dfdsf" }},
    { id: 4, label: "Sunshine", color: "yellow", sorting: 5, a: { l: "dfdsf" } },
    { id: 5, label: "Hello", color: "red", sorting: 6, a: { l: "dfdsf" }},
];

listOfTags.map((item, index) => { 
    console.log("item=>", item, 'index=>', index )
})