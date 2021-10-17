create schema if not exists brew_monitor;
use brew_monitor;

create table if not exists Brews(
brew_id integer not null auto_increment,
brew_name varchar(100),
brew_type varchar(100),
brew_status varchar(100),
brew_fermentation_time integer,
created_at datetime,
updated_at datetime,

constraint brew_pk primary key (brew_id)
);

create table if not exists Temperature(
temp_id integer not null auto_increment,
temp_value decimal,
created_at datetime,
updated_at datetime,
brew_id integer,

constraint temp_pk primary key (temp_id),
constraint temp_fk_1 foreign key (brew_id) references Brews (brew_id)
);

create table if not exists Airlocks(
airlock_id integer not null auto_increment,
airlock_activity integer,
airlock_activity_longterm integer,
created_at datetime,
updated_at datetime,
brew_id integer,

constraint airlock_pk primary key (airlock_id),
constraint airlock_fk_1 foreign key (brew_id) references Brews (brew_id)
);

create table if not exists Ingredients(
ingredients_id integer not null auto_increment,
created_at datetime,
updated_at datetime,
brew_id integer,

constraint ingredients_pk primary key (ingredients_id),
constraint ingredients_fk_1 foreign key (brew_id) references Brews (brew_id)
);

create table if not exists Hops(
hop_id integer not null auto_increment,
hop_type varchar(100),
hop_amount integer,
created_at datetime,
updated_at datetime,
ingredients_id integer,

constraint hop_pk primary key (hop_id),
constraint hop_fk_1 foreign key (ingredients_id) references Ingredients (ingredients_id)
);

create table if not exists Yeast(
yeast_id integer not null auto_increment,
yeast_type varchar(100),
yeast_amount integer,
created_at datetime,
updated_at datetime,
ingredients_id integer,

constraint yeast_pk primary key (yeast_id),
constraint yeast_fk_1 foreign key (ingredients_id) references Ingredients (ingredients_id)
);

create table if not exists Barley(
barley_id integer not null auto_increment,
barley_type varchar(100),
barley_amount integer,
created_at datetime,
updated_at datetime,
ingredients_id integer,

constraint barley_pk primary key (barley_id),
constraint barley_fk_1 foreign key (ingredients_id) references Ingredients (ingredients_id)
);

create table if not exists Gravity(
gravity_id integer not null auto_increment,
gravity_current_value decimal,
gravity_original decimal,
gravity_specific decimal,
gravity_final decimal,
gravity_target_FG decimal,
gravity_target_OG decimal,
gravity_target_SG decimal,
created_at datetime,
updated_at datetime,
brew_id integer,

constraint gravity_pk primary key (gravity_id),
constraint gravity_fk_1 foreign key (brew_id) references Brews (brew_id)
);

