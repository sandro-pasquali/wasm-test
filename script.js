function loadWebAssembly(fileName) {
    return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => { return new WebAssembly.Instance(module) });
}

loadWebAssembly('plusOne.wasm')
.then(instance => {
    const plusOne = instance.exports._Z7plusOnei;
    console.log(`Compiled. Calling plusOne(2). If you see '3' it worked!`);
    console.log(`Result: ${plusOne(2)}`)
});