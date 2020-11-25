
create table Brew(
ID int not null primary key identity(1, 1),
Name nvarchar(100),
Type nvarchar(100),
Status nvarchar(100),
FermentationTime int,
CreatedDate Date,
ModifiedDate Date,
);

create table Temperature(
ID int not null primary key identity(1, 1),
Temperature decimal,
CreatedDate Date,
ModifiedDate Date,
BrewID int foreign key references Brew(ID)
);

create table Airlock(
ID int not null primary key identity(1, 1),
Activity int,
CreatedDate Date,
ModifiedDate Date,
BrewID int references Brew(ID)
);

create table Gravity(
ID int not null primary key identity(1, 1),
Gravity decimal,
OriginalGravityAim decimal,
SpecificGravityAim decimal,
FinalGravityAim decimal,
OriginalGravityActual decimal,
SpecificGravityActual decimal,
FinalGravityActual decimal,
CreatedDate Date,
ModifiedDate Date,
BrewID int foreign key references Brew(ID)
);

create table Ingredients(
ID int not null primary key identity(1, 1),
BrewID int foreign key references Brew(ID),
);

create table Hops(
ID int not null primary key identity(1, 1),
Type nvarchar(100),
Amount int,
IngredientID int foreign key references Ingredients(ID)
);

create table Yeast(
ID int not null primary key identity(1, 1),
Type nvarchar(100),
Amount int,
IngredientID int foreign key references Ingredients(ID)
);

create table Barley(
ID int not null primary key identity(1, 1),
Type nvarchar(100),
Amount int,
IngredientID int foreign key references Ingredients(ID)
);


