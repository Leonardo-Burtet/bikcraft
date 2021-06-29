if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote", // nome do atributo data-slide
    time: 5000, // tempo de transição dos slides
  });
  new SimpleSlide({
    slide: "portfolio",
    time: 5000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.SimpleForm) {
  new SimpleForm({
    form: ".formphp", // seletor do formulario
    button: "#enviar", //seletor do botão
    erro: "<div id='form-erro><h2>Erro no envio!</h2><p>UM erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // aviso de erro para o usuario
    sucesso: "<div id='form-sucesso><h2>Formulário enviado com sucessso!</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  })
}
