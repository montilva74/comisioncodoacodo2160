let elemento = document.getElementById("principal");

let usuario= {
    nombre: "Alba Montilva",
    edad: "35",
    email: "montilva74@gmail.com",
    password: "123456",
    validar:(e,p)=>{
        if(e === usuario.email &&  p === usuario.password) {
            return true
        }else{
            return false
        }
    }
};

window.addEventListener('load',function() {
    elemento.innerHTML=`
    <form class="col-6">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button id="btn" type="button" class="btn btn-primary">Ingresar</button>
  </form>`;
  document.getElementById("btn").addEventListener('click', () => {
      let email = document.getElementById("email").value
      let password = document.getElementById("password").value
     let entra = usuario.validar(email.password);
    if(entra){
        elemento.innerHTML=`
         <h1>Sistema Administrativo</h1>
         <p>Bienvenid@ ${usuario.name}</p>
        `;
    }else{
        elemento.innerHTML=`
        <div class="alert alert-danger text center w-75 mt-5">
        Usuario o contraseña incorrecta
        </div>
        `;
    }
  })
})

let tiempo = setInterval(()=> 
{document.getElementById("mensaje").style.visibility="hidden";
clearInterval(tiempo);
},3000);





