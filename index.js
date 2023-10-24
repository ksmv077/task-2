/**
 * Код для определения остатка оплаты для студента буткемпа
 */

// принимаем ли мы платежи
const canPayment = true;

// имя студента
const studentName = 'your name';

// общая цена
const price = 120000;

// первый платеж
const firstPayment = 50000;

// скидка
const discount = 22;

// формула расчета остатка платежа
const totalPrice = price - (price / 100) * discount;

// остаток платежа
const remainingPayment = totalPrice - firstPayment;

if(canPayment) {
  //в случае остатка платежа
  if (remainingPayment === 0) {
    console.log(`Ты оплатил учебу полностью.`);

    //остаток платежа
  } else {
    const message = `
  ${studentName}, ты оплатил ${firstPayment} руб. 
  К оплате осталось еще ${remainingPayment} руб.
  Твоя скидка: ${discount}%
  `;

    //вывод сообщение 
    console.log(message);
  }
} else {
  console.log(`Мы сейчас не можем принять платеж`);
}