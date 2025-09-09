interface Product {
    readonly id: number,
    name: string,
    description: string,
    productImg?: string,
    delivery?:ProductDelivery
}

type ProductDelivery = 'To Delilver' | "On the way" | 'Delivered';

interface Car extends Product {
    readonly id: number,
    name: string,
    description: string,
    manufacturingYear: number,
    productImg?: string,
    use?: CarUse
}

type CarUse = 'Used' | "Barrely used" | 'New';

interface Movie{
    readonly id: number,
    name: string,
    description: string,
    duration: number
    genre: MovieGenre
}

type MovieGenre = "Thriller" | 'Horror' | 'Comedy' | 'Romance';


function getFirstElement<T>(arr: T[]):T | undefined{
    return arr[0]
}

function findById<T extends { id: number }>(arr: T[], id:number):T | undefined{
        return arr.find((i) => i.id === id)
}

function isArrayEmpty<T>(arr: T[]):boolean{
     return arr.length === 0;
}   

const products: Product[] = [
    {
        id: 1,
        name: 'product1',
        description: 'product description, red and so on'
    },
    {
        id: 2,
        name: 'product2',
        description: 'product description, blue and so on'
    },
    {
        id: 3,
        name: 'product3',
        description: 'product description, green and so on'
    },
    {
        id: 4,
        name: 'product4',
        description: 'product description, purple and so on'
    },
]

const cars: Car[] = [

]

const movies: Movie[] = [
    {
        id: 1,
        name: 'No Strings Attached',
        description: 'movie description',
        duration: 3.2,
        genre: "Romance"
    },
    {
        id: 2,
        name: 'SPLIT',
        description: 'movie description',
        duration: 3,
        genre: "Horror"
    },
    {
        id: 3,
        name: 'The Mask',
        description: 'movie description',
        duration: 1.5,
        genre: "Comedy"
    },
    {
        id: 4,
        name: 'Murder Mystery',
        description: 'movie description',
        duration: 3.5,
        genre: "Thriller"
    },
    {
        id: 5,
        name: 'Minions',
        description: 'movie description',
        duration: 1.3,
        genre: "Comedy"
    },
    {
        id: 6,
        name: 'Red Notice',
        description: 'movie description',
        duration: 2,
        genre: "Thriller"
    },
    {
        id: 7,
        name: 'IT',
        description: 'movie description',
        duration: 2.5,
        genre: "Horror"
    },
]


console.log(getFirstElement(products))
console.log(findById(products,3))
console.log(isArrayEmpty(products))

console.log(getFirstElement(cars))
console.log(findById(cars,2))
console.log(isArrayEmpty(cars))

console.log(getFirstElement(movies))
console.log(findById(movies,7))
console.log(isArrayEmpty(movies))
