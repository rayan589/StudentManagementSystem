var numberOfStudents = 0
function addStudent()
{
    numberOfStudents = numberOfStudents + 1
}
console.log(numberOfStudents)

console.log(numberOfStudents)

function getNumberOfStudents() 
{
    return numberOfStudents
}

var students = [];

function addStudent(name)
{
    students.push(name) 
    numberOfStudents=students.length
}


addStudent("Cava")
addStudent("Louled")
addStudent("Base")
addStudent("Taw")
addStudent("Teslek")

console.log(students)

function clearStudents(name) {
    //Write your code here
   }
   
function createFullName(firstName, lastName) {
    return `my name is: ${firstName},${lastName}`
   }
console.log(createFullName('Rayan', 'Belaam')
)

function getStudentByInitials(name, initial) {
    if  (name[0]===initial)
        return true
    else
        return false
}

