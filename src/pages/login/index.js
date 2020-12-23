import { Google, Facebook, Email, Conta} from './data.js';
// import { renderPage } from '../../router.js';


export const Login = () => {
  // Coloque sua página
  const btnGoogle = `
    <section class="login">
      <img class="img-logo"  src="../img/Logo.jpeg" alt="logo da  página">
      <form>
      <div>
          <input type="email" id="inputEmail" placeholder="Email"/>
      </div>
      <div>
          <input type="password" id="inputSenha"  placeholder="Senha"/>
      </div>
      <button id="btnEmail">Fazer login com Email</button>
      <button id="btnCriar">Criar conta</button>
      </form>
      <button id="btnGoogle">Fazer login com o Google</button>
      <button id="btnFacebook">Fazer login com o Facebook</button>
    </section>
  `

  const rootElement = document.createElement('div');
  rootElement.innerHTML = btnGoogle;



  const loginGoogle = rootElement.querySelector("#btnGoogle");

  loginGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    Google();
    console.log("funciona botão");
  });

  const loginFacebook = rootElement.querySelector("#btnFacebook");

  loginFacebook.addEventListener('click', (event) => {
    event.preventDefault();
    Facebook();
    console.log("funciona botão");
  });

  const criarConta = rootElement.querySelector("#btnCriar");

    criarConta.addEventListener('click', (event) => {
    event.preventDefault();
    var email = document.getElementById("inputEmail").value;
    var senha = document.getElementById("inputSenha").value;
    alert(email + senha);
    Conta();
    console.log("funciona botão pOOorra");
      });



  const loginEmail = rootElement.querySelector("#btnEmail");

    loginEmail.addEventListener('click', (event) => {
    event.preventDefault();
    var email = document.getElementById("inputEmail").value;
    var senha = document.getElementById("inputSenha").value;
    alert(email+senha);
    Email();
    console.log("funciona botão porra");
      });


    return rootElement;
  };







 
  //btnLogin.addEventListener("click", email);

  // function email(){
  //   var email = document.getElementById("email").value;
  //   var senha = document.getElementById("senha").value;
  //   firebase.auth().createUserWithEmailAndPassword(email,senha).then(user => {
  //     console.log("usuario", user);
  //     alert("usuario criado e logado");

  //     return rootElement;

  //   });
