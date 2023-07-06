const newYear = document.querySelector('.date');
console.log(newYear);
let date = new Date();
let date_year = date.getFullYear();
console.log(date_year);

newYear.innerText = date_year;


// const footer = document.querySelector('footer');
// footer.innerHTML = 
// `
// <div class="box" style="color:red;">
//   <p>Hello Site!!</p>
// </div>
// `;