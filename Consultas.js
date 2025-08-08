//3.      Agregar las siguientes propiedades a los documentos de los estudiantes:
//- Nombre: active, valor: true
//- Nombre: modalidad, valor: Virtual
db.Students.updateMany({}, { $set: { active: true } });
db.Students.updateMany({}, { $set: { modalidad: "Virtual"} });

//4.      Actualizar los datos de los siguientes estudiantes:
//code: 6503, actualizar edad a 20
db.Students.updateOne({ code: 6503 }, { $set: { age: 20 } })

//code: 6714, actualizar la ciudad de residencia a Barranquilla.
db.Students.updateOne({ code: 6714 }, { $set: { "place.city": "Barranquilla" } })

//code: 3875, agregar un nuevo hobby, Volleyball.
db.Students.updateOne({ code: 3875 }, { $push: { hobbies: "Volleyball" } })

//code: 2354, agregar los siguientes hobbies, Lectura y Música.
db.Students.updateOne({ code: 2354 }, { $push: { hobbies: "Lectura" } })
db.Students.updateOne({ code: 2354 }, { $push: { hobbies: "Música" } })

//name: Hilary Lee, actualizar el correo electrónico a hilarylee09@pearlessa.com
db.Students.updateOne({ name: "Hilary Lee" }, { $set: { email: "hilarylee09@pearlessa.com" } })

