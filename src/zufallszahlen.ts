export function rechnungA() {
    // 75-100%
    return Math.floor(Math.random() * 26 + 75);
}

export function rechnungB() {
    // 50-74%
    return Math.floor(Math.random() * 25 + 50);
}

export function rechnungC() {
    // 25-49%
    return Math.floor(Math.random() * 25 + 25);
}

export function rechnungD() {
    // 0-24%
    return Math.floor(Math.random() * 25);
}

export function rechnungE() {
    // Sonstige
    return Math.floor(Math.random() * 100);
}
