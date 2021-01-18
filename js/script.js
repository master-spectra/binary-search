"use strict";

const answer = 3;

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let middle = Math.floor(array.length / 2);

const binarySearch = (answer, array, middle) => {
    if (array[middle] === answer) {
        console.log(`Вы угадали! Ответ: ${array[middle]}`);
    } else if (array[middle] > answer) {
        console.log("Много!");

        array = array.slice(0, middle);
        middle = Math.floor(array.length / 2);

        binarySearch(answer, array, middle);
    } else if (array[middle] < answer) {
        console.log("Мало!");

        array = array.slice(middle + 1, array.length);
        middle = Math.floor(array.length / 2);

        binarySearch(answer, array, middle);
    };
};

binarySearch(answer, array, middle);

/*
 * Создали функции для проверке массива методом бинарного поиска
   он использует начальные параметры и если функции не вернула верный
   результат, она меняет начальные параметры!
*/