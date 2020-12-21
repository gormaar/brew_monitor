create schema brew_monitor;
use brew_monitor;

create table Brew(
brew_id integer not null auto_increment,
brew_name varchar(100),
brew_type varchar(100),
created_date datetime,
modified_date datetime
);

create table Temperature(
temp_id integer not null auto_increment,
temp_value decimal,
created_date datetime,
modified_date datetime,
brew_id integer,

constraint temp_pk primary key (temp_id),
constraint temp_fk_1 foreign key (brew_id) references Brew (brew_id)
);

create table Airlock(
airlock_id integer not null auto_increment,
airlock_activity integer,
created_date datetime,
modified_date datetime,
brew_id integer,

constraint airlock_pk primary key (airlock_id),
constraint airlock_fk_1 foreign key (brew_id) references Brew (brew_id)
);

create table Ingredients(
ingredients_id integer not null auto_increment,
brew_id integer,

constraint ingredients_pk primary key (ingredients_id),
constraint ingredients_fk_1 foreign key (brew_id) references Brew (brew_id)
);

create table Hops(
hop_id integer not null auto_increment,
hop_type varchar(100),
hop_amount integer,
ingredients_id integer,

constraint hop_pk primary key (hop_id),
constraint hop_fk_1 foreign key (ingredients_id) references Ingredients (ingredients_id)
);

create table Yeast(
yeast_id integer not null auto_increment,
yeast_type varchar(100),
yeast_amount integer,
ingredients_id integer,

constraint yeast_pk primary key (yeast_id),
constraint yeast_fk_1 foreign key (ingredients_id) references Ingredients (ingredients_id)
);

create table Barley(
barley_id integer not null auto_increment,
barley_type varchar(100),
barley_amount integer,
ingredients_id integer,

constraint barley_pk primary key (barley_id),
constraint barley_fk_1 foreign key (ingredients_id) references Ingredients (ingredients_id)
);

create table Gravity(
gravity_id integer not null auto_increment,
gravity_value decimal,
gravity_OG_aim decimal,
gravity_SG_aim decimal,
gravity_FG_aim decimal,
gravity_OG_actual decimal,
gravity_SG_actual decimal,
gravity_FG_actual decimal,
created_at datetime,
updated_at datetime,
brew_id integer,

constraint gravity_pk primary key (gravity_id),
constraint gravity_fk_1 foreign key (brew_id) references Brews (brew_id)
);
