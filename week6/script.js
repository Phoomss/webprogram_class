// let p = [true, true, false, false];
// let q = [true, false, true, false];
// let Np = [];
// let NpTq = [];
// let pRq = [];
// let result = [];

// for (let i = 0; i < p.length; i++) {
//     Np.push(!p[i]); // not p
// }
// console.log(Np);

// for (let i = 0; i < Np.length; i++) {
//     if ((Np[i] == true) && (q[i] == false))
//         NpTq.push(false);
//     else
//         NpTq.push(true);
// }
// console.log(NpTq);

// for (let i = 0; i < p.length; i++) {
//     pRq.push(p[i] || q[i]); //q and p
// }
// console.log(pRq);

// for (let i = 0; i < NpTq.length; i++) {
//     //(2) <-> (3)
//     if ((NpTq[i] == pRq[i]))  // สมมูลหรือไม่
//         result.push(true);
//     else
//         result.push(false);
// }
// console.log(result);


// let p = [true, true, true, true, false, false, false, false];
// let q = [true, true, false, false, true, true, false, false];
// let r = [true, false, true, false, true, false, true, false];
// let pTq = [];
// let qTr = [];
// let pTqAqTr = [];
// let pTr = [];
// let result = [];

// for (let i = 0; i < p.length; i++) {
//     if ((p[i] == true) && (q[i] == false)) //p ->q
//         pTq.push(false);
//     else
//         pTq.push(true);
// }

// for (let i = 0; i < q.length; i++) {
//     if ((q[i] == true) && (r[i] == false)) //q ->r
//         qTr.push(false);
//     else
//         qTr.push(true);
// }

// for (let i = 0; i < pTq.length; i++) {
//     pTqAqTr.push(pTq[i] && qTr[i]);
// }

// for (let i = 0; i < p.length; i++) {
//     if ((p[i] == true) && (r[i] == false)) //p ->r
//         pTr.push(false);
//     else
//         pTr.push(true);
// }

// for (let i = 0; i < pTqAqTr.length; i++) {
//     if ((pTqAqTr[i] == true) && (pTr[i] == false))
//         result.push(false);
//     else
//         result.push(true);
// }
// console.log(result);

// let p = [true, true, false, false];
// let q = [true, false, true, false];
// let Np = [];
// let Nq = [];
// let pTq = [];
// let pTqANq = [];
// let result = [];

// for (let i = 0; i < p.length; i++) {
//     Np.push(!p[i]); // not p
//     Nq.push(!q[i]); // not q
//     if ((p[i] == true) && (q[i] == false)) //p -> q
//         pTq.push(false);
//     else
//         pTq.push(true);

//     pTqANq.push(pTq && Nq); // and
//     if ((pTqANq[i] == true) && (Np[i] == false))
//         result.push(false);
//     else
//         result.push(true);
// }

// console.log(Np);
// console.log(Nq);
// console.log(pTq);
// console.log(pTqANq);
// console.log(result)