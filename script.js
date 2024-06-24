// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  //create an empty array
  const  names = [];


  let contQuestion = true;

  //Loop until userchooses to stop
  while (contQuestion) {

    //create an empty object
    const name = {};
    

    //Ask User for firstname, last name and salary and then converts them to uppercase so it looks nicer
    name.firstName = prompt("Please enter employee First Name: ");
    name.lastName = prompt("Please enter employee Last Name: ");
    name.salary = Number(prompt("Please enter employee salary: "));
    

    //if user doesn't enter salary or it's not a number, default is set to 0
    if (isNaN(name.salary) || name.salary === null) {
        name.salary = 0;
    }
    

    //pushes user inputs to the names array
    names.push(name);


    //asks user if they want to keep adding employees
    const temp = confirm("Would you like to keep adding employees?")

    if (!temp) {
        contQuestion = false;
        return names;
    }

  };
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
    let avgSalary = 0;

    for (let x = 0; x < employeesArray.length; x++) {
        avgSalary += employeesArray[x].salary;
    }
    //console.log(`Average Salary: ${avgSalary}`);
    avgSalary = avgSalary / employeesArray.length;
    const num = (avgSalary - Math.floor(avgSalary)) !== 0;

    if (num) {
        console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${avgSalary.toFixed(2)}`);
    } else {
        console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${avgSalary.toFixed(2)}`)
    }
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //Get random number from 0 - length of employee Array
   const randEmployee = Math.floor(Math.random() * employeesArray.length);


   //might not be working because the chosen random index is different when it's sorted
   //maybe sort it in this function 
   
   //print out random employee to the console
   console.log(`Congratulations to ${employeesArray[randEmployee].firstName} ${employeesArray[randEmployee].lastName}, our random drawing winner!`);
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