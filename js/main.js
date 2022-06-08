function login(){
    document.getElementById("login").innerHTML = document.getElementById("nome").value;
  }

  function produto(unit, preco, acao, value) {
    vunit = parseInt(document.getElementById(unit).innerHTML);
    vpreco = parseFloat(document.getElementById(preco).innerHTML);
    if(acao == "p"){
      document.getElementById(unit).innerHTML = ++vunit;
      document.getElementById(preco).innerHTML = vpreco + value;
    }else if(acao == "m"){
      if(document.getElementById(unit).innerHTML > 0){
        document.getElementById(unit).innerHTML = --vunit;
        document.getElementById(preco).innerHTML = vpreco - value;
      }
    }
  }

  function finalizar(){
    document.location.reload(true);
  }

  function remover(item){
      var pai = document.getElementById(item);
      pai.remove(pai);
      let para = document.createElement('p');
      para.setAttribute("id", "aviso");
      para.innerHTML = "Item removido com sucesso <hr>";
      pai.appendChild(para);
  }
  