const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 4000;

app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hogwarts',
    password: 'ds564',
    port: 7007
});

app.post('/bruxo', async (req, res) => {
    try {
        const { nome, idade, casa, habilidades, sangue} = req.body;
       
        await pool.query('INSERT INTO bruxo (nome, idade, casa, habilidades, sangue) VALUES ($1, $2, $3, $4, $5)', [nome, idade, casa, habilidades, sangue]);
        res.status(201).send({ mensagem: 'bruxo adicionado com sucesso'});
      } catch (error) {
        console.error('erro ao adicionar bruxo:', error);
        res.status(500).send('erro ao adicionar bruxo');
    }
});

app.get('/bruxo', async (req, res) => {
    try {
      const resultado = await pool.query('SELECT * FROM bruxo');
      res.json(resultado.rows);
    } catch (error) {
      console.error('Erro ao obter bruxo:', error);
      res.status(500).send('Erro ao obter bruxo');
    }
});

app.put('/bruxo/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, idade, casa, habilidades, sangue} = req.body;
     
      await pool.query('UPDATE bruxo SET nome = $1, idade = $2, casa = $3, habilidades = $4, sangue = $5 WHERE id = $6', [nome, idade, casa, habilidades, sangue, id]);
      res.status(201).send({ mensagem: 'bruxo atualizado com sucesso'});
    } catch (error) {
    console.error('erro ao atualizar bruxo:', error);
    res.status(500).send('erro ao atualizar bruxo');
    }
});

app.delete('/bruxo/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM bruxo WHERE id = $1', [id]);
      res.status(200).send({ mensagem: 'bruxo excluído com sucesso'});
    } catch (error) {
      console.error('erro ao excluir bruxo:', error);
      res.status(500).send('erro ao excluir bruxo');
    }
});
    
app.post('/varinha', async (req, res) => {
    try {
        const { material, comprimento, nucleo, data_fabricacao} = req.body;
       
        await pool.query('INSERT INTO varinha (material, comprimento, nucleo, data_fabricacao) VALUES ($1, $2, $3, $4)', [material, comprimento, nucleo, data_fabricacao]);
        res.status(201).send({ mensagem: 'varinha adicionada com sucesso'});
      } catch (error) {
        console.error('erro ao adicionar varinha:', error);
        res.status(500).send('erro ao adicionar varinha');
    }
});

app.get('/varinha', async (req, res) => {
    try {
      const resultado = await pool.query('SELECT * FROM varinha');
      res.json(resultado.rows);
    } catch (err) {
      console.error('Erro ao obter varinha:', err);
      res.status(500).send('Erro ao obter varinha');
    }
});

app.put('/varinha/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { material, comprimento, nucleo, data_fabricacao} = req.body;
     
      await pool.query('UPDATE varinha SET material = $1, comprimento = $2, nucleo = $3, data_fabricacao = $4 WHERE id = $5', [material, comprimento, nucleo, data_fabricacao, id]);
      res.status(201).send({ mensagem: 'varinha atualizada com sucesso'});
    } catch (error) {
    console.error('erro ao atualizar varinha:', error);
    res.status(500).send('erro ao atualizar varinha');
    }
});

app.delete('/varinha/:id', async (req, res) => {
    try {
    const { id } = req.params;
    await pool.query('DELETE FROM varinha WHERE id = $1', [id]);
    res.status(200).send({ mensagem: 'varinha excluída com sucesso'});
    } catch (error) {
      console.error('erro ao excluir varinha:', error);
      res.status(500).send('erro ao excluir varinha');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });