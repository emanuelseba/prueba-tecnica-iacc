# Entrega Prueba Técnica - Emanuel Inostroza
## Parte 1: Configuración

#### Base de datos a utilizar:
* Postgresql
    - Crear dabase de datos con nombre: iacc
    - en el fichero server/src/database/database.js Ajustar parametro a conveniencia
    
#### Backend:
* NodeJS
#### Frontend:
* React
#

#### Configuración y arranque server y client:
#### Server:
     npm install
     npm run start
#### Client:
    npm install
    npm run start
#

![image](https://user-images.githubusercontent.com/5326824/227522767-f5ae5836-4ba5-490a-a6fd-b383c3ca9b92.png)

#

## Parte 2: Invocaciones Curl

##### Creación token 
```
curl -k -X POST -H "Content-Type: application/json" -d '{"username": "einostru", "password": "Emanuel"}' http://localhost:4000/api/token
```

##### POST estudiante
```
curl -k -X POST -H "Content-Type: application/json" -d '{"name": "Javier Soto","rut": "5775757575‑2","email":"javerparedezsoto@gmail.com","carId": 2}' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVpbm9zdHJ1IiwicGFzc3dvcmQiOiJFbWFudWVsIiwiaWF0IjoxNjc5NjA1ODY2fQ.q0gqp1vel5VcJdKhNzc8OjyFzDey7GcHUkpjjJ9RAcg" http://localhost:4000/api/students
```

##### GET estudiante
```
curl -k -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVpbm9zdHJ1IiwicGFzc3dvcmQiOiJFbWFudWVsIiwiaWF0IjoxNjc5NjA1ODY2fQ.q0gqp1vel5VcJdKhNzc8OjyFzDey7GcHUkpjjJ9RAcg" http://localhost:4000/api/students/1
```

##### PUT estudiante
```
curl -k -X PUT -H "Content-Type: application/json" -d '{"name": "Emanuel Torres","rut": "987654321‑2","email":"javerparedezsoto@gmail.com"}' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVpbm9zdHJ1IiwicGFzc3dvcmQiOiJFbWFudWVsIiwiaWF0IjoxNjc5NjA1ODY2fQ.q0gqp1vel5VcJdKhNzc8OjyFzDey7GcHUkpjjJ9RAcg" http://localhost:4000/api/students/1
```

##### DELETE estudiante
```
curl -k -X DELETE -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVpbm9zdHJ1IiwicGFzc3dvcmQiOiJFbWFudWVsIiwiaWF0IjoxNjc5NjA1ODY2fQ.q0gqp1vel5VcJdKhNzc8OjyFzDey7GcHUkpjjJ9RAcg" http://localhost:4000/api/students/1
```

##### listar todos estudiantes
```
curl -k -X GET -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVpbm9zdHJ1IiwicGFzc3dvcmQiOiJFbWFudWVsIiwiaWF0IjoxNjc5NjA1ODY2fQ.q0gqp1vel5VcJdKhNzc8OjyFzDey7GcHUkpjjJ9RAcg" http://localhost:4000/api/students
```

##### GET carreras
```
curl -k -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVpbm9zdHJ1IiwicGFzc3dvcmQiOiJFbWFudWVsIiwiaWF0IjoxNjc5NjA1ODY2fQ.q0gqp1vel5VcJdKhNzc8OjyFzDey7GcHUkpjjJ9RAcg" http://localhost:4000/api/careers/
```

##### listar todos los estudiantes por carrera
```
curl -k -X GET -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVpbm9zdHJ1IiwicGFzc3dvcmQiOiJFbWFudWVsIiwiaWF0IjoxNjc5NjA1ODY2fQ.q0gqp1vel5VcJdKhNzc8OjyFzDey7GcHUkpjjJ9RAcg" http://localhost:4000/api/careers/1/students
```

## Parte 3: Prueba de stress

<img width="1536" alt="Listado de estudiantes por carrera" src="https://user-images.githubusercontent.com/5326824/227519943-928e1be7-20de-4136-afdc-61ca361b4a05.png">

<img width="1536" alt="View Results Tree" src="https://user-images.githubusercontent.com/5326824/227519966-9d2cc817-dccf-4df9-979c-69340bb5f9c0.png">

<img width="1536" alt="View Results in Table" src="https://user-images.githubusercontent.com/5326824/227519989-bf34639d-1b42-45bb-9b2a-22e34bf1e5c4.png">

* Fichero testeo jmetter:
[Jmx](https://github.com/emanuelseba/prueba-tecnica-iacc/blob/master/jmeter/Listado%20de%20estudiante%20por%20carrera.jmx)
