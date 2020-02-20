const list1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            }
        }
    }
}

const list2 = {
    value: 1,
    next: {
        value: 2,
        next: null,
    }
}

// Функция преобразования списков в словарь
const listToMap = (list1, list2) => {    
    const map = new Map([]);
    const mapSet = (list1, list2) => {
        let newList1 = list1;
        let newList2 = list2;
        if (newList2) {
            map.set(newList1.value, newList2.value);
        } else {
            map.set(newList1.value, null);
        }
        if (list1.next) {
            if (newList2) {
                mapSet(list1.next, list2.next)
            } else {
                mapSet(list1.next, null)
            }
        } else {
            return;
        }
    }
    mapSet(list1, list2)
    return map;
}

//Функция рассчета суммы четных членов последовательности Фибоначчи
const sumFibonacci = (maxNumber) => { 
    let sum = 0;
    let lastElements = [1, 1];
    const newElement = (lastElements, maxNumber) => {
        let element = lastElements[0] + lastElements[1];        
        if (element <= maxNumber) {
            if (element % 2 === 0) {
                sum = sum + element;
            }
            lastElements = [lastElements[1], element];
            newElement(lastElements, maxNumber);;
        } else {
            return;
        }
    }
    newElement(lastElements, maxNumber);
    return sum;
}

console.log('Итоговый контейнер Map:');
console.log(listToMap(list1, list2));
console.log(`Сумма четных членов последовательности Фибоначчи, не превышающих 4000000: ${sumFibonacci(4000000)}`);