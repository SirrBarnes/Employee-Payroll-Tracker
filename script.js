// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const names = [];


// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let contQuestion = true;

  while (contQuestion === true) {
    const name = {};

    name.firstName = prompt("Please enter employee First Name: ");
    name.lastName = prompt("Please enter employee Last Name: ");
    name.salary = prompt("Please enter employee salary: ");

    // while(isNaN(name.salary)) {
    //     alert("Please enter a number");
    //     name.salary = prompt("Please enter employee salary: ");
    // }

    if (isNaN(name.salary) || name.salary === null) {
        name.salary = 0;
    }
    
    names.push(name);
    console.log(names);

    const askCont = prompt("Would you like to keep adding employees?")
    if (askCont === null) {
        contQuestion = false;
        break;
    } 
  };
  return names;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
    let avgSalary = 0;
    let sum = 0;

    for (let x = 0; x < names.length; x++) {
        sum += parseInt(names[x].salary);
    }

    avgSalary = sum / names.length;
    console.log(`There are ${names.length} employees and the average Salary is: ${avgSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randEmployee = Math.floor(Math.random(), names.length);
  console.log(`Random Employee Selected: Employee #${randEmployee + 1} - ${names[randEmployee].firstName} ${names[randEmployee].lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
