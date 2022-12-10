//1 способ через синтаксический сахар

export class Toy{
    constructor(title, recAge, priceRub,priceCop, country){
        this.title = title;
        this.recAge = recAge;
        this.priceRub = priceRub;
        this.priceCop = priceCop;
        this.country = country;
    }
// полная информация об игрушке
    toString(){
        return `Название: ${this.title}, Рекомендуемый возраст: ${this.recAge}+, Цена: ${this.fullPrice}, Производитель: ${this.country}`
    }
// выводим полную цену игрушки
    get fullPrice(){
        return `${this.priceRub}.${this.priceCop}`
    }
}

// 2 способ

// export function Toy(title, recAge, priceRub, priceCop, country) {
//   this.title = title;
//   this.recAge = recAge;
//   this.priceRub = priceRub;
//   this.priceCop = priceCop;
//   this.country = country;
// }

// const ToyMethods = {
//   toString() {
//     return `Название: ${this.title}, Рекомендуемый возраст: ${this.recAge}+, Цена: ${this.fullPrice}, Производитель: ${this.country}`;
//   }
// };

// Object.assign(Toy.prototype, ToyMethods);

// Object.defineProperty(Toy.prototype, "fullPrice", {
//   get fullPrice() {
//     return `Цена игрушки: ${this.priceRub}.${this.priceCop}`
//   }
// });
