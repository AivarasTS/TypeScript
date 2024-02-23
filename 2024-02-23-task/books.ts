// 1. Sukurti knygos tipą, knyga turi turėt bent 5 keys ir id
// 2. Pakurti knygos įrašymo tipą BookCreationType. Jame neturi būt id. Naudot omit
// 3. Parašyt knygos update tipą, kuris į objektą priimtu tik title ir author. Naudot pick
// 4. Atskirai apsirašyt knygos id tipą
// 5. Apsirašyt automobilio tipą. Vėliau apsirašyt tipą CarUpdateType naudojant PARTIAL. Susikurt kintamąjį išsibandymui
// 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas

type Book = {
  id: number
  title: string
  author: string
  genre: string
  pages: number
  publicationYear: number
}

type BookCreationType = Omit<Book, 'id'>

type BookUpdateType = Partial<Pick<Book, 'title' | 'author'>>

type BookID = {
  id: number
}

type Car = {
  make: string
  model: string
  year: number
}

type CarUpdateType = Partial<Car>
const testCar: CarUpdateType = { year: 2025 }

const books: Book[] = []

function addBook(book: BookCreationType) {
  const newBook = { id: books.length + 1, ...book }
  books.push(newBook)
}

function displayBooks() {
  console.log("Visos knygos:")
  books.forEach((book) => {
    console.log(book)
  })
}

const newBook: BookCreationType = {
  title: 'Pavadinimas',
  author: 'Autorius',
  genre: 'Žanras',
  pages: 200,
  publicationYear: 2023
}

addBook(newBook)

displayBooks()