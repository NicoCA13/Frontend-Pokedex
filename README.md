# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Empezamos con las rutas del sitio web

-La URL "http://localhost:3000/" nos lleva al listado original de Pokemones donde se puede ver la imagen, el numero, el/los elementos y el nombre de cada Pokemon.

-Tambien podes ver mas detalles de cada pokemon haciendo click en uno de ellos.

-Para elminiar o agregar un Pokemon debes logearte dando click en el boton "iniciar" que te lleva a la URL "http://localhost:3000/login", donde pones el mail y la password con la que te registraste.

-Si no estas registrado lo haces dando click en el boton "Click to Register" que te lleva a la URL "http://localhost:3000/registrar", donde pones tu nombre, mail y password.

# Seguimos con las rutas de nuestro backend

-La ruta principal de nuestro backend es "http://localhost:6789/" (Desde Postman o cualquier aplicacion que permita realizar pruebas API), desde ahi nos vamos a dirigir a las siguientes rutas dependiendo que queramos hacer (GET, POST, PUT, DELETE):

    -Ver listado de Pokemones:
        -router.get("/Pokemons", getPokemons);
        -"http://localhost:6789/pokemons"

    -Agregar Pokemon al listado original:
        -router.post("/Pokemons", verifyToken, postPokemons);
        -"http://localhost:6789/pokemons"

    -Ver un Pokemon especifico:
        -router.get("/Pokemons/:id",verifyToken, getPokemon);
        -http://localhost:6789/pokemons/id

    -Actualizar datos de un Pokemon:
        -router.put("/Pokemons/:id", verifyToken, putPokemons);
        -http://localhost:6789/pokemons/id

    -Eliminar un Pokemon de la lista:
        -router.delete("/Pokemons/:id", verifyToken, deletePokemons);
        -http://localhost:6789/pokemons/id
