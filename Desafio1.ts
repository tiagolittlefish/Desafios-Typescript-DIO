// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Employee {
    code: number,
    name: string
}

let employee: Employee = {
    code: 0,
    name: ""
};

employee.code = 10;
employee.name = "John";