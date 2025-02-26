USE sistemaPOS;
EXEC sp_changedbowner 'sa', 'true'


if db_id ('sistemaPOS') is not null
begin
	use master;
	drop database sistemaPOS;
end

create database sistemaPOS;
use sistemaPOS

create table departamento(
	idDep int primary key,
	nombreDep nvarchar(50)
);

create table municipio(
	idMun int primary key,
	nombreMun nvarchar(50),
	idDep int foreign key references departamento(idDep)
);

create table barrio(
	idB int primary key,
	nombreB nvarchar(50),
	idMun int foreign key references municipio(idMun)
);

create table tienda(
	idT int identity (1,1) not null,
	nombre varchar(100) not null,
    RUC varchar (100) not null,
    tel char(8) check (tel like '[2|5|7|8][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	razon_social varchar(100) not null,
	correo nvarchar(100),
	estado bit default 1 not null,
	constraint pk_idTienda primary key(idT)
);


create table direccion_tienda(
	id int identity(1,1) primary key,
	direccion varchar(250) not null,
	id_barrio int foreign key references barrio(idB) not null,
	id_tienda int foreign key references tienda(idT) not null,
	estado bit default 1 not null
);

create table sucursal (
	id int primary key,
	nombre varchar(100),
	tel char(8) check(tel like '[2|5|7|8][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	idT int foreign key references tienda(idT) not null,
	estado bit default 1 not null
);

create table sucursal_direccion (
	id int identity(1,1) primary key,
	direccion varchar(250) not null,
	id_barrio int foreign key references barrio(idB) not null,
	id_sucursal int foreign key references sucursal(id) not null,
	estado bit default 1 not null
);

--Registro de los productos
--Se supone que todo lo relacionado con el producto tendra una relacion entre tablas
--hacer un join que enlace todas las tablas para capturar la informacion correspondiente
create table producto_categoria(
    id int identity(1,1) primary key,
    nombreCategoria varchar(100) not null
);

create table producto_subCategoria
(	
	id int identity(1,1) primary key,
	nombreSC nvarchar (80) not null
);

create table producto_marca(
	id int identity(1,1) primary key,
	nombre varchar(100) not null
);

create table producto_unidad_medida(
	id int identity(1,1) primary key,
	nombre varchar(100) not null
);

create table costo_producto(
    id int identity(1,1) primary key,
    costo money not null,
	fecha datetime default getdate()
);

create table producto(--Esta es la tabla para definir la compra  de un producto
	id int identity(1,1) primary key,
    nombreProducto varchar(100) not null,
	codigoProducto varchar(40) not null unique,
    descripcion varchar(500),
	idCategoria int foreign key references producto_categoria(id),
	id_Subcategoria int foreign key references producto_subCategoria(id) not null, 
	id_marca int foreign key references producto_marca(id) not null,
	id_UM int foreign key references producto_unidad_medida(id),
	idCosto int foreign key references costo_producto(id),
	rutaImg nvarchar(50) not null,	--Aca se colocará solamente el path de las rutas de las imgs.
	estado bit default 1
);
------------------------------------------------------------------------------
--Nota: Acá deberia haber un trigger que se disparé para calcular lo que es 
--		el precio de venta donde tendria que calcular la ganancia de ese producto
--		que se esta ofreciendo. ej: C=20; V=27. 
------------------------------------------------------------------------------

--Join que trae toda la informacion de todas la tablas relacionadas con el producto


		-->		Módulo para el usuario		<--
create table usuario(
    id int identity(1000,1) primary key,
    username varchar(25) not null,
    contra nvarchar(80) not null,
	rol nvarchar(50) not null,
	telUsuario char (8) check (telUsuario like '[2|5|7|8][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	email nvarchar(100),
	direccion nvarchar(250) not null,
	fecha_creacion datetime default getdate(),
    estado bit default 1 NOT NULL
);
--SP: para el usuario

-->Insercion
create or alter proc sp_insertU
    @username varchar(25),
    @contra nvarchar(80),
	@rol nvarchar(50),
	@telUsuario char(8),
	@email nvarchar(100),
	@direccion nvarchar(250)
as
begin
	declare @pdt as char(1)=(substring(@telUsuario,1,1));
	begin try
	begin transaction
		if(@username='' or @contra='' or @rol='')
			print 'Los campos no pueden ser nulos o vacios';
			else
				if(@pdt='2' or @pdt='5' or @pdt='7' or @pdt='8')
				begin
					insert into usuario values  (@username,@contra,@rol,@telUsuario,@email,@direccion,default,default);
				end
				else
					print 'El numero de telefono debe empezar con 2,5,7 u 8';
				commit transaction; --Si todo los datos que el usuario a ingresado estan correctos entonces se modifica la BDD
	end try
	begin catch
		rollback transaction --Revertir todos los cambios realizados en la BDD
		print ('Ups ha ocurrido un error: '+error_message());
	end catch
end

sp_insertU 'Jorge','001809','Gerencia','22095543','sistemas1234@example.com','De la calle de los riquitiki dos cuadras al norte';

select * from usuario;

--Dar de baja a un usuario 
create or alter proc sp_darBajaU
@idU int
as
declare @id as int = (select id from usuario where id=@idU);
begin try
	begin transaction
	if(@idU=@id)
		update usuario set estado=0 where id=@idU;
	else
		print('Usuario no registrado en la BDD');
	commit transaction
end try
begin catch
	rollback transaction 
	print 'Ha ocurrido un error: '+error_message();
end catch

sp_darBajaU 1000


-->Modificar un usuario
create or alter proc sp_modU
	@idU int,
	@username varchar(25),
    @contra nvarchar(80),
	@rol nvarchar(50),
	@telUser char(8),
	@email nvarchar(100),
	@direccion nvarchar(250),
	@estado bit
as
declare 
	@id int,
	@pdt char(1);
begin try
	begin tran
	set @id=(select id from usuario where id=@idU);
	set @pdt=SUBSTRING(@telUser,1,1);

	if(@idU=@id)
		begin
			if(@pdt='2' or @pdt='5' or @pdt='7' or @pdt='8') 
			begin
				update usuario set username=@username,contra=@contra,rol=@rol,telUsuario=@telUser,email=@email,
				direccion=@direccion,estado=@estado	where id=@idU;
			end
			else
				print ('El numero de telefono debe empezar con 2,5,7 u 8');
		end
	else
		print 'El usuario con el id '+convert(char,@idU)+' no esta registrado en la BDD';
		commit tran
end try
begin catch
	rollback tran
	print ('Ups ha ocurrido un error: '+error_message());
end catch

sp_modU 1000,'Jorge','001809','Gerencia','22095543','sistemas1234@example.com','De la calle de los riquitiki dos cuadras al norte',1;

select * from usuario

-->Buscar usuarios
create or alter proc sp_busquedaU
	@idUser int
as
declare @id as int;
set @id=(select id from usuario where id=@idUser);
begin try
		if(@idUser=@id)
			select * from usuario where id=@idUser;
		else
			print 'Usuario no encontrado en la BDD';
end try
begin catch
	print 'Error:  '+error_message();
end cATCH

sp_busquedaU 1000

-->Usuarios Activos
	create proc sp_usuariosA
	as
	begin	
		if exists(select * from usuario where estado=1)
			select * from usuario where estado=1;
		else
			print 'No hay usuarios activos en la BDD';
	end

	sp_usuariosA
-->Usuarios Inactivos
create proc sp_usuariosI
	as
	begin	
		if exists(select * from usuario where estado=0)
			select * from usuario where estado=0;
		else
			print 'No hay usuarios inactivos en la BDD';
	end

	sp_usuariosI
--select  * from empleados where nombre like 'p%'; Crear un procedimiento almacenado el cual el haga 
--todas la filtraciones que el usuario desee de tal forma que habrá un condicional que filtrara
-- ya sea por nombre, direccion, o id. (Agregar mas campos para ser filtrados de ser necesarios). 

				-->		Módulo para el proveedor	<--

create table proveedor (--Este proveedor no puede ser extrangero solo proveedores de la región
	id int identity(1,1) primary key,
    nombre varchar (100) not null,
	dni nvarchar(16) not null check(dni like '[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][A-Z]'),--Documento Nacional de Identificación (Cédula)
	ruc char(15) not null,
	tel char(8) check(tel like '[2|5|7|8][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	direccion nvarchar (150) not null,--El proveedor no lleva lo que es una direccion bien estricta ya que solo requiero su información básica.
	email nvarchar(100),
    sitioWeb varchar(100) default 'No tiene sitio web',
    estado bit default 1 not null
);

create table tipo_proveedor(
	id int identity(1,1) primary key,
	tipo varchar(100) not null,
	proveedor_id int foreign key references proveedor(id),
);

-->Insercion de un proveedor
create proc sp_insertProveedor
@nombre nvarchar,
@dni nvarchar(16),
@ruc char(15),
@tel char(8),
@direccion nvarchar(150),
@email nvarchar(100),
@sitioWeb varchar(100),
@msj nvarchar(80) output
as
begin 
	declare 
	@pdt char(1),
	@numeroTel bit=0;--Valor booleano (False)
	set @pdt=(SUBSTRING(@tel,1,1));

	if(@nombre='' or @dni='' or @ruc='' or @direccion='')
	begin
		set @msj='Los campos no pueden ser nulos';
		return;
	end
	
	if(@pdt in('2','5','7','8') and len(@tel)=8)
	begin 
		set @numeroTel=1;
	end
	else
	begin
		set @msj='El numero debe empezar con 2,5,7, u 8 y su tamaño debe de ser de 8 caracteres';
		return;
	end

	begin try
		if(@numeroTel=1)
		begin 
			begin transaction
					insert into proveedor values (@nombre,@dni,@ruc,@tel,@direccion,@email,@sitioWeb,default);
			commit transaction
		end 
	end try
	begin catch
		rollback transaction;
		set @msj= 'Error: '+ERROR_MESSAGE();
	end catch
end

declare @msjS as nvarchar(80);
exec sp_insertProveedor 'Coca-Cola','001-1587898-1022B','J0310000005354 ','88788777','Casa de los encajes 3C al norte','cocanic@examplecompany.com','cocanicaragua.com',@msjS output;
select @msjS as mensajeSalida;

-->Dar de baja a  un proveedor
create proc sp_darBajaProveedor
@idP int,
@msj varchar(100) output
as
begin
	declare @id as int =(select id from proveedor where id=@idP);
	begin try
		begin transaction
		if(@idP=@id)
		begin
			update proveedor set estado=0 where id=@idP;
		end
		else 
		begin
			set @msj='Proveedor no registrado en la BDD';
			return;	--Si el usuario no existe en la BDD retornar su valor inmediatamente
		end
		commit transaction	--Confirmar la transaccion si todo va bien
	end try
	begin catch
		rollback transaction	--Si ocurre un error capturarlo y revertir los cambios realizados en la BDD.-
		set @msj='Error: '+error_message();
	end catch
end

declare @msjS varchar(100);
exec sp_darBajaProveedor 1000, @msj output;
select @msjS as MensajeSalida	--Cual sea el msj se muestre a nivel de BDD o en una interfaz.

-->Modificar los datos de un proveedor
create or alter proc sp_modProveedor
@idProveedor int,
@nombreEmpresa varchar(100),
@tel char(8),
@direccion nvarchar(150),
@email nvarchar(100),
@sitioWeb varchar(100),
@estado bit,
@msjE varchar(100) output
as
begin
	declare @pdt as char=(substring(@tel,1,1));
	declare @id as int =(select id from proveedor where id=@idProveedor);
	declare @numeroTel as bit=0; --Simulando un valor booleano
		
		if(@pdt in ('2','5','7','8') and len(@tel)=8)
		begin	
			set @numeroTel=1; --Si cumple con los requerimientos se le asigna el valor de true(1).
		end
		else
		begin
			set @msjE='El numero de telefono debe empezar con 2,5,7 u 8 y su tamaño debe de ser de 8 caracteres';
			return;	--En caso que de error retornar su valor para que no siga ejecutando ningun script en la BDD
		end


	begin try 
		if(@numeroTel=1)	--Significa que ha cumplido con lo solicitado en el numero de telefono. 
		begin
			if(@idProveedor=@id)
			begin
				begin tran	--Si la transacción se realiza exitosamente entonces							---	|
					update proveedor set nombre=@nombreEmpresa, tel=@tel, direccion=@direccion, email=@email,-- |
					sitioWeb=@sitioWeb, estado=@estado where id= @idProveedor;								--  |
				commit tran	--Confirmar que se quieren mandar los  datos a la BDD						<--------
			end
			else
			begin
				set @msjE= 'Proveedor no registrado en la BDD';
				return;
			end
		end
	end try
	begin catch
		rollback tran
		set @msjE='Error: '+error_message();
	end catch
end

declare @msjS varchar(100);
exec sp_modProveedor 1000,'Yummy','22445579','Casa de los encajes 3C al norte','yummynicaragua@examplecompany.com','yummynicaragua.com',1,@msjS output;
select @msjS as "Mensaje de salida";

select * from proveedor;


---------------------Segunda tabla referenciando al proveedor------------------------------
/*Validar datos si, si el usuario desea asignarle un tipo de proveedor que no pueda hasta que conozca el id asignado al proveedor*/
--Mismo procedimiento almacenado para la inserción de un proveedor.
create proc sp_insertProveedor2
@tipo varchar(100),--Al ser una segunda tabla se puede insertar los primeros datos y luego se modifica el tipo de proveedor que es
@proveedor_id int
as
begin
end
/*
!Important
Generar reporte: Se tendrán que generar dos reportes dentro de  la interfaz  
	->Reporte de compra del producto
	->Reporte de venta del producto
	Ver ejemplo de como realizarlo anivel de interfaz (UI)
*/


/*
Esta tabla de servicio no va al menos que el sistema
se piense de una manera escalable.

create table servicio(
	id int PRIMARY KEY,
    nombre varchar(100) not null,
	descripcion varchar(500),
   	id_tipo int foreign key references tipo_servicio(id)
);*/

create proc msjError
@i int,
@msjE nvarchar(20) output
as
begin
	if(@i=1)
		set @msjE='Exito';
	else
		set @msjE='Error';
end

declare @msjS nvarchar(20);
exec msjError 3,@msjS output;
select @msjS as mensajeOutput;
/*
Visualizar el precio de un producto mediante un procedimiento almacenado
el cual me calculará eso

create table precio_producto(
 	id int primary key,
	id_costo int foreign key references costo_producto(id) not null,
	gasto decimal(9,2) not null,
	margen_ganancia decimal(9,2) not null,
	precio_venta decimal(9,2) not null, 
	estado int foreign key references estado(id) not null,
	id_producto int foreign key references producto(id) not null
);*/

create table venta_producto(
	id int identity(1,1) primary key,
	fecha datetime default getdate() not null,
	id_sucursal int foreign key references sucursal(id) not null,
	estado bit default 1 not null	
);

create table detalle_venta_producto(
    id int identity(1,1) primary key,
	cantidad int not null,
    precio_unitario money not null,
	descuento money not null,
	impuesto money not null,
    total money not null,
	subtotal  money not null,
    id_venta int foreign key references venta_producto(id),
	id_producto int foreign key references producto(id)
);

--El inventario sacarlo por medio de un SP en donde se vincule multiples tablas.
--							|
--						  \\//
--							|
--create table inventario(
--	id int primary key,
--	id_producto int foreign key references producto(id) not null,
--	existencia_actual int not null,
--	disponibilidad int not null,
--	stock_min int,
--	stock_max int,
--	id_sucursal int foreign key references sucursal(id) not null
--);

/*
Las promociones discutirlo si es buena idea ya que ese módulo es un poco complejo

create table promocion (
	id int primary key,
	nombre varchar(100),
	fecha_inicio datetime,
	fecha_fin datetime,
    id_estado bit default 0 not null,
	id_tipo int foreign key references tipo_promo(id) not null,
	valor_prom float,
	codigo_descuento varchar(10)
);*/

---Si se piensa crear un esquema personalizado para que la BDD trabaje sobre ese esquema
---create schema sisPOS;

---18 tb.
