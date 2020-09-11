// k = 3; n = 20; l = 0;

// if (k === 0) {
//     l = n - 1;// because first game it will be 2
// } else {
//     place = [];
//     for (l; l < k; l++) {
//         if (n % 2 === 0) {
//             n = Math.floor(n / 2);
//             place.push(n);
//         } else {
//             n = n-1
//         }
//         if (n <= 1) {
//             return;
//         }
//     }
//     console.log(place, 'place');

//     console.log(l, 'total games');
// }

var N = 20;
var K = 4;
var loop = N + 1;
var games = 0;
for (var i = 0; i <= loop; i++) {
    // console.log(i, 'ii')
    if (N % 2 === 0 && K > 0) {
        N = N / 2;
        K = K - 1;
        games += 1;
    } else {
        N = N - 1;
        games += 1;
    }
    if (N === 1) {
        console.log(games);
        return;
    }
}