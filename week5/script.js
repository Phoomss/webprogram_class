let p = [true, true, false, false];
let q = [true, false, true, false];

// ~p ⋀ (q ⋀ ~q) → p
function question1() {
    let not_p = [];
    let not_q = [];
    let qAnd_not_q = [];
    let not_p_and_qAnd_not_q = [];
    let implication = [];

    for (let i = 0; i < p.length; i++) {
        not_p.push(!p[i]);                      // ~p
        not_q.push(!q[i]);                      // ~q
        qAnd_not_q.push(q[i] && !q[i]);        // q ∧ ~q 
        not_p_and_qAnd_not_q.push(!p[i] && (q[i] && !q[i])); // ~p ∧ (q ∧ ~q)
        implication.push((!p[i] && (q[i] && !q[i])) ? p[i] : true);  // (~p ∧ (q ∧ ~q)) → p
    }
    console.log("~p               :", not_p.map(b => b ? "T" : "F"));
    console.log("~q               :", not_q.map(b => b ? "T" : "F"));
    console.log("q ∧ ~q           :", qAnd_not_q.map(b => b ? "T" : "F"));
    console.log("~p ∧ (q ∧ ~q)    :", not_p_and_qAnd_not_q.map(b => b ? "T" : "F"));
    console.log("~p ∧ (q ∧ ~q) → p:", implication.map(b => b ? "T" : "F"));
}

// (p → r) ᵥ (~q ⋀ p)
function question2() {
    let pConditional_r = [];
    let not_q = []
    let not_q_and_p = [];
    let disjunction = [];

    for (let i = 0; i< p.length; i++) {
        pConditional_r.push(!p[i] || true);  // p → r (assuming r is true)
        not_q.push(!q[i]);                    // ~q
        not_q_and_p.push(not_q[i] && p[i]);  // ~q ∧ p
        disjunction.push(pConditional_r[i] || not_q_and_p[i]); // (p → r) ∨ (~q ∧ p)
    }
    console.log("p → r            :", pConditional_r.map(b => b ? "T" : "F"));
    console.log("~q               :", not_q.map(b => b ? "T" : "F"));
    console.log("~q ∧ p           :", not_q_and_p.map(b => b ? "T" : "F"));
    console.log("(p → r) ∨ (~q ∧ p):", disjunction.map(b => b ? "T" : "F"));

}

// (p → q) ↔ (~q → ~p)
function question3() {
    let pConditional_q = [];
    let not_q = [];
    let not_p = [];
    let not_qConditional_not_p = [];
    let biconditional = [];

    for (let i = 0; i < p.length; i++) {
        pConditional_q.push(!p[i] || q[i]);  // p → q
        not_q.push(!q[i]);                    // ~q
        not_p.push(!p[i]);                    // ~p
        not_qConditional_not_p.push(!not_q[i] || not_p[i]); // ~q → ~p
        biconditional.push(pConditional_q[i] === not_qConditional_not_p[i]); // (p → q) ↔ (~q → ~p)
    }
    console.log("p → q            :", pConditional_q.map(b => b ? "T" : "F"));
    console.log("~q               :", not_q.map(b => b ? "T" : "F"));
    console.log("~p               :", not_p.map(b => b ? "T" : "F"));
    console.log("~q → ~p         :", not_qConditional_not_p.map(b => b ? "T" : "F"));
    console.log("(p → q) ↔ (~q → ~p):", biconditional.map(b => b ? "T" : "F"));
}

// (p→q) → (~p ⋀ ~q)
function question4() {
    let pConditional_q = [];
    let not_p = [];
    let not_q = [];
    let not_p_and_not_q = [];
    let implication = [];

    for (let i = 0; i < p.length; i++) {
        pConditional_q.push(!p[i] || q[i]);  // p → q
        not_p.push(!p[i]);                    // ~p
        not_q.push(!q[i]);                    // ~q
        not_p_and_not_q.push(not_p[i] && not_q[i]); // ~p ∧ ~q
        implication.push(pConditional_q[i] ? true : not_p_and_not_q[i]); // (p → q) → (~p ∧ ~q)
    }
    console.log("p → q            :", pConditional_q.map(b => b ? "T" : "F"));
    console.log("~p               :", not_p.map(b => b ? "T" : "F"));
    console.log("~q               :", not_q.map(b => b ? "T" : "F"));
    console.log("~p ∧ ~q         :", not_p_and_not_q.map(b => b ? "T" : "F"));
    console.log("(p → q) → (~p ∧ ~q):", implication.map(b => b ? "T" : "F"));
}

// p↔ ~(~p)
function question5() {
    let not_not_p = [];
    let biconditional = [];

    for (let i = 0; i < p.length; i++) {
        not_not_p.push(!(!p[i])); // ~~p
        biconditional.push(p[i] === not_not_p[i]); // p ↔ ~(~p)
    }
    console.log("p                 :", p.map(b => b ? "T" : "F"));
    console.log("~~p               :", not_not_p.map(b => b ? "T" : "F"));
    console.log("p ↔ ~(~p)        :", biconditional.map(b => b ? "T" : "F"));
}
question1();
question2();
question3();
question4();
question5();