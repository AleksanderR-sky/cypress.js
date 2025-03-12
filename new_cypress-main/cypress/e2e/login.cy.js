describe('Проверка авторизации', function () {

    it('верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('USER_LOGIN') //Ввели верный логин
         cy.get('#pass').type('USER_PASSWORD') //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //ПРоверяю наличие кнопки крестик
     })
 })
 
 describe('Проверка авторизации', function () {

    it('проверку логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').click(); //Нажали забыли пароль
         cy.get('#mailForgot').type('rotovsky.a@yandex.ru'); //Ввел почту для восстановления
         cy.get('#restoreEmailButton').click(); //Нажал отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //ПРоверяю наличие кнопки крестик
     })
 })

 describe('Проверка авторизации', function () {

    it('верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('USER_LOGIN') //Ввели верный логин
         cy.get('#pass').type('USER_PASSWORD') //Ввели неверный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //ПРоверяю наличие кнопки крестик
     })
 })
 
 describe('Проверка авторизации', function () {

    it('неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('USER_LOGIN') //Ввели неверный логин
         cy.get('#pass').type('USER_PASSWORD') //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //ПРоверяю наличие кнопки крестик
     })
 })

 describe('Проверка авторизации', function () {

    it('логин без @ и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('USER_LOGIN') //Ввели логин без @
         cy.get('#pass').type('USER_PASSWORD') //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //ПРоверяю наличие кнопки крестик
     })
 })

 describe('Проверка авторизации', function () {

    it('строчные буквы в логине и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('USER_LOGIN') //Ввели логин строчными буквами
         cy.get('#pass').type('USER_PASSWORD') //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //ПРоверяю наличие кнопки крестик
     })
 })

 describe('Покупка аватара', function () {                                  // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {      // название теста
         cy.visit('https://pokemonbattle.ru/');                             // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN');        // вводим почту
         cy.get('input[type="password"]').type('USER_PASSWORD');                // вводим пароль
         cy.get('button[type="submit"]').click();                           // нажимаем кнопку Войти
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // нажимаем на иконку с тренером
         cy.get('[href="/shop"]').click();                                  // нажимаем кнопку Смена аватара
         cy.wait(4000);
         cy.get('.available > button').first().click({ force: true });      // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                        // вводим номер карты
         cy.get('.k_input_ccv').type('125');                                // вводим CVV карты
         cy.get('.k_input_date').type('1225');                              // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                              // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                        // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                               // вводим код подтверждения СМС
         cy.wait(5000);
         cy.get('.payment__submit-button').click();                         // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');        // проверяем наличие и видимость сообщения о успе
     });
 });