//1 задание
// const exam = new Exam("Иванова", "Евгения", 5, 4, 3);

//2 задание
import { Toy } from "./Toy.js";
// let toy = new Toy("dfdg", 7, 12, 23, "dgdg")
// console.log(toy.toString())

//создали массив из объектов класса
let toys = [
  new Toy("Машинка", 6, 999, 99, "Китай"),
  new Toy("Кукла Barbie", 10, 5499, 99, "США"),
  new Toy("Lego", 12, 6999, 99, "Китай"),
  new Toy("Пазлы", 12, 299, 99, "Россия"),
];

//отсортировали элементы массива по цене в порядке ее убывания
toys.sort((a, b) => b.fullPrice - a.fullPrice);
console.log(toys.toString());

//вывели игрушки для указанного возраста
let age = 10;
let ageToy = toys.filter((elem) => elem.recAge >= age);
ageToy.forEach((elem) => console.log(elem));

// выводим информацию о самых дешевых игрушках и их количество
let min = 1000000000;
let countMin = 0;

toys.forEach((elem) => {
  if (elem.fullPrice < min) {
    min = elem.fullPrice;
  }
});

toys.forEach((elem) => {
  if (elem.fullPrice == min) {
    countMin++;
    console.log(elem.toString());
  }
});
