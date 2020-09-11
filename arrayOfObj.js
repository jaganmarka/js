var a = [{ id: 1, value: "abc" }, { id: 2, value: "def" }, { id: 3, value: "ghi" }, { id: 4, value: "" },
 { id: 5, value: "sfdsf" },{ id: 6, value: "" },{ id: 7, value: "sfdsf" }];
var b = [
    { id: 1, c: [{ id: 1, value: "abcy" }, { id: 2, value: "defz" }] },
{ id: 2, c: [{ id: 1, value: "abc" }, { id: 2, value: "def" }] },
{ id: 3, c: [{ id: 1, value: "abc" }, { id: 2, value: "def" }] }];

let x = b.map(item1 => {
    // let index = false;
    obj = [];
    a.filter(k => {
        if (k.value !== "") {
           !item1.c.findIndex(ind => ind.id !== k.id) ? obj.push(k) : null ;
        }
    });
    if (obj.length > 0) {
        item1.c = [...item1.c, ...obj];
    }
    let unique = [];
     item1.c.map(x => unique.filter(a => a.id == x.id).length > 0 ? null : unique.push(x));
     item1.c  = unique;
     console.log(item1.c, 'item1.c')
})
console.log(b, 'nnnn')

// var a = [{ id: 1, value: "abc" }, { id: 2, value: "def" }, { id: 3, value: "ghi" }, { id: 4, value: "" }];

// var b = [{ id: 1, c: [{ id: 1, value: "abcy" }, { id: 2, value: "defz" }] },
// { id: 2, c: [{ id: 1, value: "abc" }, { id: 2, value: "def" }] },
// { id: 3, c: [{ id: 1, value: "abc" }, { id: 2, value: "def" }] }];

// let x = b.map(item1 => {
//     let index = false;
//     a.filter(k => {
//         if (k.value !== "") {
//             index = item1.c.some(ind=> ind.id !== k.id);
//             if(index){
//                 obj = k
//             }
            
//         }
//     });
//     if(index && obj){
//         item1.c.push(obj);
//     }
// console.log(item1, 'item')
    
// })
// console.log(b, 'nnnn')