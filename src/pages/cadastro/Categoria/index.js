import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

  function CadastroCategoria(){
    const categoriaInicial = {
      nome: '',
      descricao: '',
      cor: '#000000'
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(categoriaInicial);

    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor
      })
    }

    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infoDoEvento){
           infoDoEvento.preventDefault();
           setCategorias([
             ...categorias,
             values
           ])
           setValues(categoriaInicial);
          }
          }>

          <FormField 
            type="text"
            name="nome"
            label="Nome da Categoria: "
            value={values.nome}
            onChange={handleChange}
          />

          <FormField 
            type="text"
            name="descricao"
            label="Descrição: "
            value={values.descricao}
            onChange={handleChange}
          />


          <FormField 
            type="color"
            name="cor"
            label="Cor: "
            value={values.cor}
            onChange={handleChange}
          />

          <div>
            <button>
              Cadastrar
            </button>
          </div>

          <ul>
            {categorias.map((categoria, indice)=> {
              return(
                <li key={indice}>
                  {categoria.nome}
                </li>
              )
            })}
          </ul>


        </form>

        <Link to="/">
          Ir para a Home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;