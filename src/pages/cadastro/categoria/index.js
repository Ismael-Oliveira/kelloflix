import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import PageDefault from '../../../components/PageDefault'
import FormFields from '../../../components/FormFields'

function CadastroCategoria() {
 
   const valoresIniciais = {
      nome: 'Valor Inicial',
      descricao: 'Descriçaõ Inicial',
      cor: '#FFFFFF',
    }

    const [categorias, setCategorias ] = useState([]);
    const [values, setValues ] = useState(valoresIniciais);
    // console.log(nomeCategoria);
    // setCategoria("Filme cinema");
    // console.log(nomeCategoria);

    function handleChange(evt){
      const { getAttribute, value } = evt.target;
      setValue(
        getAttribute('name'),
        value        
      )

    }

    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor
      })       
    };

    return (
      <PageDefault>
        <h1>Nova Categoria: {values.nome}</h1>
        <form onSubmit={
          function handleSubmit(evt) {
            evt.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais)
          }
        }>
          <FormFields
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange} 
          />
          
          <FormFields
          name="descricao"
          value={values.descricao}
          onChange={handleChange} 
          />
        
          <FormFields               
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange} 
          />
          
          <div>
            <input type="submit"/>
          </div>
        </form>

        <ul>
            {categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
        </ul>
        <Link to="/">
          Voltar pra home
        </Link>
      </PageDefault>
    );
}

export default CadastroCategoria