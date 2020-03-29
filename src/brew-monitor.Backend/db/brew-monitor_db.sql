create schema brew_monitor;
use brew_monitor;

create table Brews(
brew_id integer not null auto_increment,
brew_name varchar(60),
brew_type varchar(60),
creation_timestamp timestamp default current_timestamp,

constraint brew_pk primary key (brew_id)
);

create table Temperature(
temp_id integer not null auto_increment,
temp_value integer,
temp_timestamp timestamp default current_timestamp,
brew_id integer,

constraint temp_pk primary key (temp_id),
constraint temp_fk_1 foreign key (brew_id) references Brews (brew_id)
);

create table Respiration(
resp_id integer not null auto_increment,
resp_value_5 integer,
resp_value_60 integer,
resp_timestamp timestamp default current_timestamp,
brew_id integer,

constraint resp_pk primary key (resp_id),
constraint resp_fk_1 foreign key (brew_id) references Brews (brew_id)
);

create table Gravity(
gravity_id integer not null auto_increment,
gravity_value integer,
gravity_OG integer,
gravity_SG integer,
gravity_FG integer,
gravity_timestamp timestamp default current_timestamp,
brew_id integer,

constraint gravity_pk primary key (gravity_id),
constraint gravity_fk_1 foreign key (brew_id) references Brews (brew_id)
);

create table Ingredients(
ingredient_id integer not null auto_increment,
brew_id integer,

constraint ingredient_pk primary key (ingredient_id),
constraint ingredient_fk_1 foreign key (brew_id) references Brews (brew_id)
);

create table Hops(
hop_id integer not null auto_increment,
hop_name varchar(60),
hop_amount integer,
ingredient_id integer,

constraint hop_pk primary key (hop_id),
constraint hop_fk_1 foreign key (ingredient_id) references Ingredients (ingredient_id)
);

create table Yeast(
yeast_id integer not null auto_increment,
yeast_name varchar(60),
yeast_amount integer,
ingredient_id integer,

constraint yeast_pk primary key (yeast_id),
constraint yeast_fk_1 foreign key (ingredient_id) references Ingredients (ingredient_id)
);

create table Barley(
barley_id integer not null auto_increment,
barley_name varchar(60),
barley_amount integer,
ingredient_id integer,

constraint barley_pk primary key (barley_id),
constraint barley_fk_1 foreign key (ingredient_id) references Ingredients (ingredient_id)
);


