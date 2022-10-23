const  catalogo  =  require ( './database/catalogo.json' )

// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)
const  listarTodosOsFilmesEmCartaz  =  ( )  =>  {
  catalogo . forEach ( ( filme )  =>  console . log ( `Nome do filme: ${ filme . titulo } ` ) )
}

// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo
const  buscarFilme  =  ( codigoParametro )  =>  catalogo . find ( ( filme )  =>  filme . codigo  ==  codigoParametro )

// alterar o status de emCartaz (true -> false e se tiver false -> true)
// (alterarStatusEmCartaz) -> parametro: codigo
const  alterarStatusEmCartaz  =  ( codigo ,  callback )  =>  {
  let  filme  =  callback ( codigo )

  if  ( ! filme )  {
    consola . log ( "Filme não encontrado!" )
    return  nulo ;
  }

  filme . emCartaz  ==  verdade ?
    filme . emCartaz  =  false 
  : filme . emCartaz  =  verdadeiro ;
  // filme.emCartaz = !filme.emCartaz

   filmeDeRetorno ;
}

// adicionar um novo filme no nosso catálogo (adicionarFilme) ->
// parametro: filme: { codigo, titulo, atores, duracao, anoDeLancamento }
const  adicionarFilme  =  ( filme )  =>  {
  const  { codigo , titulo , atores , duracao , anoDeLancamento } = filme ;  

  if  ( ! duracao )  {
    console.log ( "Não é possível adicionar um filme sem duração" ) ;
    
  }

  const  filmeParaAdicionar  = {
      ... filme ,
      emCartaz : true
  }
  
  catalogo . push ( filmeParaAdicionar ) ;

  return filmeParaAdicionar ;
}

// listar os filmes com duração maior do que 2h (listarFilmesComLongaDuracao) -> filter;
const  listarFilmesComLongaDuracao  =  ( )  =>  {
  return catalogo.filter ( ( filme )  =>  filme . duracao  >  2 )  // [{}, {}, {}]
}

// console.log(alterarStatusEmCartaz(1, buscarFilme))
// listarTodosOsFilmesEmCartaz()
  adicionarFilme ( { 
    código : 6 , 
    Título : "O Poderoso Chefão" ,
    atores : [ "Marlon Brando" ,  "Al Pacino" ,  "James Caan" ] ,
    duração : 3.5,
    anoDeLançamento : 1972
  } )

  // chamar a função de listar os filmes aqui depois de chamar a função de adicionar
  console.log ( listarFilmesComLongaDuracao ( ) )

  adicionarFilme ( {
    código : 7 ,
    título : "O Poderoso Chefão 2" ,
    atores : [ "Marlon Brando" ,  "Al Pacino" ,  "James Caan" ] ,
    anoDeLancamento : 1974 ,
    duração : 2
  } )
