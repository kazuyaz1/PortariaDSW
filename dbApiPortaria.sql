create database dbApiPortaria;

use dbApiPortaria;

create table portaria (
id int primary key auto_increment,
nome varchar(30)
);

insert into portaria (nome) value ('João silveira');
insert into portaria (nome) value ('Marcelo Neto');

select * from portaria;
