import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormFields from '../../../components/FormFields';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(evt) {
    setValue(
      evt.target.getAttribute('name'),
      evt.target.value,
    );
  }

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (resp) => {
        const resposta = await resp.json();
        setCategorias([
          ...resposta,
        ]);
      });
    // setTimeout(() => {
    //   setCategorias(
    //     [...categorias,
    //       {
    //         id: 1,
    //         nome: 'Front End',
    //         descricao: 'Json server do caramba',
    //         cor: '#6bd1ff',
    //       },
    //       {
    //         id: 2,
    //         nome: 'Back End',
    //         descricao: 'Mais um categoria do caramba',
    //         cor: '#6bd1ff',
    //       }],
    //   );
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Nova Categoria:
        {values.nome}
      </h1>
      <form onSubmit={
          function handleSubmit(evt) {
            evt.preventDefault();
            setCategorias([
              ...categorias,
              values,
            ]);

            setValues(valoresIniciais);
          }
        }
      >
        <FormFields
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormFields
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormFields
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <div>
          <Button type="submit">
            Enviar
          </Button>
        </div>
      </form>
      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Voltar pra home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
