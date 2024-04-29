CREATE DATABASE hogwarts;

\c hogwarts;

CREATE TABLE bruxo (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INTEGER NOT NULL,
    casa VARCHAR(50) NOT NULL,
    habilidades VARCHAR(100) NOT NULL,
    sangue VARCHAR (50) NOT NULL
);

CREATE TABLE varinha (
    id SERIAL PRIMARY KEY,
    material VARCHAR(100) NOT NULL,
    comprimento INTEGER NOT NULL,
    nucleo VARCHAR(50) NOT NULL,
    data_fabricacao DATE NOT NULL
)
