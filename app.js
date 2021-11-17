const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookISBN = document.querySelector('#ISBN');
const tasksList = document.querySelector('.collection');
const delTasksBtn = document.querySelector('#del-tasks');

form.addEventListener('submit', addBook);
tasksList.addEventListener('click', deleteTask);
delTasksBtn.addEventListener('click', deleteTasks);

function deleteTasks(e)
{
    while(tasksList.firstChild)
    {
        tasksList.removeChild(tasksList.firstChild)
    }
}

function deleteTask(e)
{
    if (e.target.textContent == 'X')
    {
        if (confirm("do you want to delete this task ?")) {
            e.target.parentElement.remove();
        }
    }
}

function addBook(e)
{
    const bookAuthorVal = bookAuthor.value;
    const bookTitleVal = bookTitle.value;
    const bookISBNVal = bookISBN.value;

    const li = document.createElement('tr');

    li.classname = "collection-item";

    li.innerHTML += `<td>${bookAuthorVal}</td><td>${bookTitleVal}</td><td>${bookISBNVal}</td>`;

    e.preventDefault();

    const link = document.createElement('a');

    link.setAttribute( 'href', '#');

    link.className = 'secondary-content';

    link.appendChild(document.createTextNode('X'));

    li.appendChild(link);

    const ul = document.querySelector('.collection');

    ul.appendChild(li);

    //taskInput.value = '';
    bookAuthor.value = '';
    bookTitle.value = '';
    bookISBN.value = '';

    e.preventDefault();

}