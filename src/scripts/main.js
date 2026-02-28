'use strict';

const table = document.querySelector('table');
const tbody = table.tBodies[0];
const buttonName = table.tHead.rows[0].children[0];
const buttonPosition = table.tHead.rows[0].children[1];
const buttonOffice = table.tHead.rows[0].children[2];
const buttonAge = table.tHead.rows[0].children[3];
const buttonSalary = table.tHead.rows[0].children[4];

table.addEventListener('click', (e) => {
  const rowArray = Array.from(table.tBodies[0].children);
  const nowTarget = e.target;

  if (nowTarget instanceof HTMLElement) {
    // натиснуто Name
    if (nowTarget === buttonName) {
      buttonName.classList.toggle('APC');
      buttonPosition.classList.remove('APC');
      buttonOffice.classList.remove('APC');
      buttonAge.classList.remove('APC');
      buttonSalary.classList.remove('APC');

      const number = nowTarget.cellIndex;
      const resultSort = rowArray.sort((firstRow, secondRow) => {
        const firstRowChildren = firstRow.children[number].textContent;
        const secondRowChildren = secondRow.children[number].textContent;

        if (buttonName.classList.contains('APC')) {
          return firstRowChildren.localeCompare(secondRowChildren);
        } else {
          return secondRowChildren.localeCompare(firstRowChildren);
        }
      });

      resultSort.forEach((newTr) => {
        tbody.append(newTr);
      });
    }

    // натиснуто Position
    if (nowTarget === buttonPosition) {
      buttonPosition.classList.toggle('APC');
      buttonName.classList.remove('APC');
      buttonOffice.classList.remove('APC');
      buttonAge.classList.remove('APC');
      buttonSalary.classList.remove('APC');

      const number = nowTarget.cellIndex;
      const resultSort = rowArray.sort((firstRow, secondRow) => {
        const firstRowChildren = firstRow.children[number].textContent;
        const secondRowChildren = secondRow.children[number].textContent;

        if (buttonPosition.classList.contains('APC')) {
          return firstRowChildren.localeCompare(secondRowChildren);
        } else {
          return secondRowChildren.localeCompare(firstRowChildren);
        }
      });

      resultSort.forEach((newTr) => {
        tbody.append(newTr);
      });
    }

    // натиснуто Office
    if (nowTarget === buttonOffice) {
      buttonOffice.classList.toggle('APC');
      buttonName.classList.remove('APC');
      buttonPosition.classList.remove('APC');
      buttonAge.classList.remove('APC');
      buttonSalary.classList.remove('APC');

      const number = nowTarget.cellIndex;
      const resultSort = rowArray.sort((firstRow, secondRow) => {
        const firstRowChildren = firstRow.children[number].textContent;
        const secondRowChildren = secondRow.children[number].textContent;

        if (buttonOffice.classList.contains('APC')) {
          return firstRowChildren.localeCompare(secondRowChildren);
        } else {
          return secondRowChildren.localeCompare(firstRowChildren);
        }
      });

      resultSort.forEach((newTr) => {
        tbody.append(newTr);
      });
    }

    // натиснуто Office
    if (nowTarget === buttonAge) {
      buttonAge.classList.toggle('APC');
      buttonName.classList.remove('APC');
      buttonPosition.classList.remove('APC');
      buttonOffice.classList.remove('APC');
      buttonSalary.classList.remove('APC');

      const number = nowTarget.cellIndex;
      const resultSort = rowArray.sort((firstRow, secondRow) => {
        const firstRowChildren = firstRow.children[number].textContent;
        const secondRowChildren = secondRow.children[number].textContent;

        if (buttonAge.classList.contains('APC')) {
          return firstRowChildren - secondRowChildren;
        } else {
          return secondRowChildren - firstRowChildren;
        }
      });

      resultSort.forEach((newTr) => {
        tbody.append(newTr);
      });
    }

    // натиснуто Salary
    if (nowTarget === buttonSalary) {
      buttonSalary.classList.toggle('APC');
      buttonName.classList.remove('APC');
      buttonPosition.classList.remove('APC');
      buttonOffice.classList.remove('APC');
      buttonAge.classList.remove('APC');

      const number = nowTarget.cellIndex;
      const resultSort = rowArray.sort((firstRow, secondRow) => {
        const firstRowChildren = firstRow.children[number].textContent
          .slice(1)
          .split(',')
          .join('');
        const secondRowChildren = secondRow.children[number].textContent
          .slice(1)
          .split(',')
          .join('');

        if (buttonSalary.classList.contains('APC')) {
          return firstRowChildren - secondRowChildren;
        } else {
          return secondRowChildren - firstRowChildren;
        }
      });

      resultSort.forEach((newTr) => {
        tbody.append(newTr);
      });
    }
  }
});

tbody.addEventListener('click', (e) => {
  const nowTargetTr = e.target.closest('tr');

  if (!nowTargetTr) {
    return;
  }

  const lastElementActive = document.querySelector('.active');

  if (lastElementActive !== null) {
    lastElementActive.removeAttribute('class');
  }

  if (nowTargetTr instanceof HTMLElement) {
    nowTargetTr.classList.add('active');
  }
});

const body = document.querySelector('body');
const form = document.createElement('form');

if (form instanceof HTMLElement) {
  body.append(form);
  form.classList.add('new-employee-form');

  //  create inputName
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');

  inputName.setAttribute('data-qa', 'name');
  inputName.required = true;
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('autocomplete', 'name');
  inputName.setAttribute('type', 'text');
  form.append(labelName);
  labelName.textContent = 'Name:';
  labelName.append(inputName);

  //  create inputPosition
  const labelPosition = document.createElement('label');
  const inputPosition = document.createElement('input');

  inputPosition.setAttribute('data-qa', 'position');
  inputPosition.required = true;
  inputPosition.setAttribute('name', 'position');
  inputPosition.setAttribute('autocomplete', 'position');
  inputPosition.setAttribute('type', 'text');
  form.append(labelPosition);
  labelPosition.textContent = 'Position:';
  labelPosition.append(inputPosition);

  //  create inputOffice
  const labelOffice = document.createElement('label');
  const selectOffice = document.createElement('select');
  const optionTokyo = document.createElement('option');
  const optionSingapore = document.createElement('option');
  const optionLondon = document.createElement('option');
  const optionNewYork = document.createElement('option');
  const optionEdinburgh = document.createElement('option');
  const optionSanFrancisco = document.createElement('option');

  optionTokyo.setAttribute('value', 'Tokyo');
  optionTokyo.textContent = 'Tokyo';
  optionSingapore.setAttribute('value', 'Singapore');
  optionSingapore.textContent = 'Singapore';
  optionLondon.setAttribute('value', 'London');
  optionLondon.textContent = 'London';
  optionNewYork.setAttribute('value', 'NewYork');
  optionNewYork.textContent = 'NewYork';
  optionEdinburgh.setAttribute('value', 'Edinburgh');
  optionEdinburgh.textContent = 'Edinburgh';
  optionSanFrancisco.setAttribute('value', 'San Francisco');
  optionSanFrancisco.textContent = 'San Francisco';

  selectOffice.setAttribute('data-qa', 'office');
  selectOffice.setAttribute('name', 'office');
  selectOffice.setAttribute('autocomplete', 'office');
  form.append(labelOffice);
  labelOffice.textContent = 'Office:';
  labelOffice.append(selectOffice);
  selectOffice.append(optionTokyo);
  selectOffice.append(optionSingapore);
  selectOffice.append(optionLondon);
  selectOffice.append(optionNewYork);
  selectOffice.append(optionEdinburgh);
  selectOffice.append(optionSanFrancisco);

  //  create inputAge
  const labelAge = document.createElement('label');
  const inputAge = document.createElement('input');

  inputAge.setAttribute('data-qa', 'age');
  inputAge.required = true;
  inputAge.setAttribute('name', 'age');
  inputAge.setAttribute('autocomplete', 'age');
  inputAge.setAttribute('type', 'number');
  form.append(labelAge);
  labelAge.textContent = 'Age:';
  labelAge.append(inputAge);

  //  create inputSalary
  const labelSalary = document.createElement('label');
  const inputSalary = document.createElement('input');

  inputSalary.setAttribute('data-qa', 'salary');
  inputSalary.required = true;
  inputSalary.setAttribute('name', 'salary');
  inputSalary.setAttribute('autocomplete', 'salary');
  inputSalary.setAttribute('type', 'number');
  form.append(labelSalary);
  labelSalary.textContent = 'Salary:';
  labelSalary.append(inputSalary);

  //  create button
  const button = document.createElement('button');

  button.setAttribute('type', 'submit');
  button.textContent = 'Save to table';
  form.append(button);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdPosition = document.createElement('td');
  const tdOffice = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdSal = document.createElement('td');
  const namePerson = document.querySelector('[data-qa="name"]');
  const position = document.querySelector('[data-qa="position"]');
  const office = document.querySelector('[data-qa="office"]');
  const age = document.querySelector('[data-qa="age"]');
  const salary = document.querySelector('[data-qa="salary"]');

  tdName.textContent = namePerson.value;
  tdPosition.textContent = position.value;
  tdOffice.textContent = office.value;
  tdAge.textContent = Number(age.value);
  tdSal.textContent = '$' + Number(salary.value).toLocaleString('en-US');

  const oldNotification = document.querySelector('.notification');

  if (oldNotification) {
    oldNotification.remove();
  }

  const newNotification = document.createElement('div');

  newNotification.setAttribute('data-qa', 'notification');
  newNotification.classList.add('notification');

  if (
    Number(age.value) < 18 ||
    Number(age.value) > 90 ||
    namePerson.value.length < 4 ||
    position.value.length <= 4
  ) {
    newNotification.classList.add('error');
    newNotification.textContent = 'Винникла помилка!';
    body.append(newNotification);
  } else {
    newNotification.classList.add('success');
    newNotification.textContent = 'Успішно додано!';
    body.append(newNotification);

    tr.append(tdName);
    tr.append(tdPosition);
    tr.append(tdOffice);
    tr.append(tdAge);
    tr.append(tdSal);
    tbody.append(tr);

    namePerson.value = '';
    position.value = '';
    office.value = '';
    age.value = '';
    salary.value = '';
  }
});
