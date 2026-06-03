CREATE DATABASE cadastro;
USE cadastro;
SELECT DATABASE();
CREATE TABLE usuario(
	id int primary key auto_increment,
    nome varchar(50) not null,
    email varchar(50) not null,
    senha varchar(50) not null
);

INSERT INTO usuario (nome, email, senha) 
VALUES
('João Pereira', 'joao@email.com', '123456'),
('Maria Santos', 'maria@email.com', '123456'),
('Carlos Almeida', 'carlos@email.com', '123456');
