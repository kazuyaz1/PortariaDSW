create database dbApiPortaria;

use dbApiPortaria;

create table portaria (
id int primary key auto_increment,
nome varchar(30),
ferias varchar(10)
);

insert into portaria (nome, ferias) value ('João silveira', 'sim');
insert into portaria (nome, ferias) value ('Marcelo Neto', 'nao');

select * from portaria;
