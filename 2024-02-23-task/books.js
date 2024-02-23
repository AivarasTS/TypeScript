// 1. Sukurti knygos tipą, knyga turi turėt bent 5 keys ir id
// 2. Pakurti knygos įrašymo tipą BookCreationType. Jame neturi būt id. Naudot omit
// 3. Parašyt knygos update tipą, kuris į objektą priimtu tik title ir author. Naudot pick
// 4. Atskirai apsirašyt knygos id tipą
// 5. Apsirašyt automobilio tipą. Vėliau apsirašyt tipą CarUpdateType naudojant PARTIAL. Susikurt kintamąjį išsibandymui
// 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var testCar = { year: 2025 };
var books = [];
function addBook(book) {
    var newBook = __assign({ id: books.length + 1 }, book);
    books.push(newBook);
}
function displayBooks() {
    console.log("Visos knygos:");
    books.forEach(function (book) {
        console.log(book);
    });
}
var newBook = {
    title: 'Pavadinimas',
    author: 'Autorius',
    genre: 'Žanras',
    pages: 200,
    publicationYear: 2023
};
addBook(newBook);
displayBooks();
