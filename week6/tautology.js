function checkLogic() {
    const p = [true, true, false, false];
    const q = [true, false, true, false];
    const r = [true, false, true, false];
    const s = [true, false, true, false];
    const results = [];

    const imply = (a, b) => !a || b;
    const equiv = (a, b) => a === b;

    //[[(p ∧ q) → (r ∨ s)] ∧ ¬(r ∨ s)] → ¬q
    let valid1 = true;
    for (let i = 0; i < p.length; i++) {
        const conjPQ = p[i] && q[i];               // p ∧ q
        const disjRS = r[i] || s[i];               // r ∨ s
        const impPQ_RS = imply(conjPQ, disjRS);    // (p ∧ q) → (r ∨ s)
        const notRS = !disjRS;                     // ¬(r ∨ s)
        const left = impPQ_RS && notRS;            // [(p ∧ q) → (r ∨ s)] ∧ ¬(r ∨ s)
        const result = imply(left, !q[i]);         // → ¬q
        if (!result) valid1 = false;
    }

    results.push({ text: "ข้อ 1: [[(p ∧ q) → (r ∨ s)] ∧ ¬(r ∨ s)] → ¬q", value: valid1 });

    //[(¬p ∨ q) ∧ ¬q] → (p ∨ q)
    let valid2 = true;
    for (let i = 0; i < p.length; i++) {
        const left = (!p[i] || q[i]) && !q[i];
        const res = imply(left, p[i] || q[i]);
        if (!res) valid2 = false;
    }
    results.push({ text: "ข้อ 2: [(¬p ∨ q) ∧ ¬q] → (p ∨ q)", value: valid2 });

    //[(p ∨ r) ∧ ((p → q) ∨ (q → r))] → (r ∧ p)
    let valid3 = true;
    for (let i = 0; i < p.length; i++) {
        const left = (p[i] || r[i]) && (imply(p[i], q[i]) || imply(q[i], r[i]));
        const res = imply(left, r[i] && p[i]);
        if (!res) valid3 = false;
    }
    results.push({ text: "ข้อ 3: [(p ∨ r) ∧ ((p → q) ∨ (q → r))] → (r ∧ p)", value: valid3 });

    //[(p → q) ∧ (p → r) ∧ (p ∧ s)] → (r → s)
    let valid4 = true;
    for (let i = 0; i < p.length; i++) {
        const left = imply(p[i], q[i]) && imply(p[i], r[i]) && (p[i] && s[i]);
        const res = imply(left, imply(r[i], s[i]));
        if (!res) valid4 = false;
    }
    results.push({ text: "ข้อ 4: [(p → q) ∧ (p → r) ∧ (p ∧ s)] → (r → s)", value: valid4 });

    //[(p → q) ∧ p ∧ (q → r) ∧ (r ↔ ¬p)] → (q ∨ r)
    let valid5 = true;
    for (let i = 0; i < p.length; i++) {
        const left = imply(p[i], q[i]) && p[i] && imply(q[i], r[i]) && equiv(r[i], !p[i]);
        const res = imply(left, q[i] || r[i]);
        if (!res) valid5 = false;
    }
    results.push({ text: "ข้อ 5: [(p → q) ∧ p ∧ (q → r) ∧ (r ↔ ¬p)] → (q ∨ r)", value: valid5 });

    const container = document.getElementById("result");
    container.innerHTML = "";
    results.forEach((res) => {
        const div = document.createElement("div");
        div.classList.add("result-item", res.value ? "true" : "false");
        div.innerText = `${res.text} ➜ ${res.value ? "✅ เป็นสัจนิรันดร์" : "❌ ไม่เป็นสัจนิรันดร์"}`;
        container.appendChild(div);
    });
}
