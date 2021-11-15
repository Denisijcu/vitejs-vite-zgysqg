import './style.css'

let title = 'Users List';
let obj = {
  id: 1,
  name: 'John',
  lastName: 'Doe',
  email: 'John@gmail.com'
};
let arr = [
    {
      id:1,
      name: 'John',
      lastName: 'Doe',
      email: 'John@gmail.com',
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      id:2,
      name: 'Jane',
      lastName: 'Doe',
      email: 'Jane@gmail.com',
      image: 'https://www.w3schools.com/howto/img_avatar2.png'
    },
    {
      id:3,
      name: 'Mary',
      lastName: 'Doe',
      email: 'mary@gmail.com',
      image:'https://www.w3schools.com/w3images/avatar6.png'
    },

]
document.querySelector('#app').innerHTML = `
  
 <h1>
  ${title}
 </h1>

  <ul id="users"> </ul>

  <div id="detail"></div>

`


const users = ()=>{
    let listUsers = document.querySelector("#users");

    let users = '';
    arr.forEach(u =>{
         users += `<li> <a href="#!" onclick="showDetail(${u.id})">${u.name} </a></li>`
    })

    listUsers.innerHTML = users;




}

users();


const showDetail = (i)=>{
  console.log('Show detail functions works');
  const detail = document.querySelector("#detail");

  let userList = '';

  const user = arr.filter( f => f.id === i);

  const {id,name,lastName, email,image} = user[0];
  
  

     userList+=`<image src="${image}" width="150" height="150" ><p>${id}</p><p> Name: ${name} </p> </p>${lastName}</p> <p>${email}</p>`
      
  detail.innerHTML = userList;
}

window.showDetail = showDetail;

