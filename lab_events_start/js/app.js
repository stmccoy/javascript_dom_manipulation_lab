document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormItems);

  
})

const handleFormItems = function (event){
  event.preventDefault();
  const formItems = document.querySelectorAll('.form-item');

  const list = document.querySelector('ul');
  const newListItemTitle = document.createElement('li');
  const newListItemAuthor = document.createElement('li');
  const newListItemCategory = document.createElement('li');
  const listBreak = document.createElement('br')
  const tableLines = document.createElement('hr')


  newListItemTitle.textContent = `Book title: ${event.target.title.value}`
  newListItemAuthor.textContent = `Book Author: ${event.target.author.value}`
  newListItemCategory.textContent = `Category: ${event.target.category.value}`

  list.appendChild(tableLines)
  list.appendChild(newListItemTitle)
  list.appendChild(newListItemAuthor)
  list.appendChild(newListItemCategory)
};

