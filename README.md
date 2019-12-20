# **Задача**

Реализовать TODO-лист.

## **Стек**

React, Redux, React-router (react-router-dom, например), любые другие библиотеки на свой вкус.

## **Описание**

- Есть JSON со стартовыми данными. Нужно спарсить JSON, обработать данные (отфильтровать по дате создания от нового к старому).
- Далее вывести все задачи на странице (пройденные пометить как завершенные (выделить цветом, нарисовать галочку и т.п.)).
- Реализовать следующие возможности (в пределах сессии, то есть переписывать ДЖСОН не надо): 
  1. добавить задачу
  2. пометить задачу как завершенную
  3. Бонус - реализовать переход на страничку с подробным описанием задачи (кликаем на кнопку «Подробнее» -> переходим на роут /task/:id, где отображается информация только по этой задаче и также реализованы вышеописанные возможности.

>Для стилей можно взять Material-ui с готовыми компонентами, либо реализовать свои в очень простом ключе, важна логика работы с данными.

#### Структура JSON’a и комментарии к данным

```
{
  "todos": [
    {
      "id": number, // не показывать в интерфейсе
      "created": "2019-12-20T11:50:00.000Z", // ISO-string - дата создания - отображать в интерфейсе в понятном формате
      "name": string, // - название задачи. Показывать в интерфейсе
      "done": boolean // - завершена ли задача. Показывать в интерфейсе
    }
  ]
}
```
