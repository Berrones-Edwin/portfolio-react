export const projectsData = [
  {
    id: 1,
    name: 'Notes App',
    descriptionShort:
      'Aplicación para el manejo de notas.Podemos hacer las acciones básicas (CRUD).',
    description:
      'Es una aplicación para el manejo de notas, donde podemos hacer las acciones básicas (CRUD). Podemos insertar un título, descripción y opcionalmente una imagen. Para usar la app debemos de crearnos una cuenta. La aplicación está construida con React usando el lenguaje TypeScript y se conecta con Firebase. La aplicación está alojada en vercel.',
    image:
      'https://user-images.githubusercontent.com/44040730/121064065-b7ec5600-c78c-11eb-8a14-48895b78b2bd.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://journal-app-react-lovat.vercel.app'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/journal-app-react'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'React'
      },
      {
        id: 2,
        name: 'SASS'
      },
      {
        id: 3,
        name: 'TypeScript'
      },
      {
        id: 4,
        name: 'Firebase'
      }
    ]
  },
  {
    id: 6,
    name: 'Eccomerce',
    descriptionShort: 'Tienda en linea donde se usa la API products.',
    description:
      'Tienda en linea donde nos muestra productos, podemos iniciar sesión, agregar productos a nuestros carritos o a nuestra lista de deseo.',
    image:
      'https://user-images.githubusercontent.com/44040730/136063577-f6ab09c9-e0be-46e6-9ed8-215a01a48243.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://eccomerce-woad.vercel.app'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/eccomerce'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'React'
      },
      {
        id: 2,
        name: 'ChakraUI'
      },
      {
        id: 3,
        name: 'ViteJS'
      },
      {
        id: 4,
        name: 'TypeScript'
      }
    ]
  },
  {
    id: 3,
    name: 'Buscador de canciones',
    descriptionShort:
      'Aplicación que nos permite buscar la información de un artista y la letra de una canción.',
    description:
      'Aplicación que nos permite buscar la información de un artista / grupo musical y ver la letra de una canción.Search song hace uso de dos api; la primera para obtener la información del artista y la segunda para traer la letra de la canción. Está construida con React y para los estilos se usa la librería de ChakraUI y el lenguaje de JavaScript; y alojada en Vercel.',
    image:
      'https://user-images.githubusercontent.com/44040730/121072284-9e500c00-c796-11eb-905b-0d8c96e2b0f8.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://song-search-gamma.vercel.app'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/song-search'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'React'
      },
      {
        id: 2,
        name: 'JavaScript'
      },
      {
        id: 3,
        name: 'ChakraUI'
      }
    ]
  },
  {
    id: 4,
    name: 'Buscador de GIFS',
    descriptionShort:
      'Aplicación para buscar gifs, podemos registrarnos / iniciar sesión y tener una colección de favoritos.',
    description:
      'Aplicación para buscar gifs haciendo uso de la api giphy. Podemos ver las tendencias de los gifs; crear una cuenta y registrarnos haciendo uso de Firebase. Si tenemos una cuenta podemos crear una colección de favoritos. La aplicación está construida con react con el lenguaje de JavaScript, bootstrap 5 para los estilos, firebase para la autenticación y base de datos; y alojado en Vercel.',
    image:
      'https://user-images.githubusercontent.com/44040730/122966339-d33f8f80-d34e-11eb-9a58-c65bf35906d6.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://gifs-iota.vercel.app'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/gifs-app-react'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'React'
      },
      {
        id: 2,
        name: 'Bootstrap'
      },
      {
        id: 3,
        name: 'JavaScript'
      },
      {
        id: 4,
        name: 'Firebase'
      }
    ]
  },
  {
    id: 5,
    name: 'ToDo App',
    descriptionShort:
      'Aplicación para agregar tareas por hacer, podemos completar tareas y eliminarlas.',
    description:
      'Aplicación para crear una lista de tareas, las tareas se pueden marcar / desmarcar; se puede filtrar para ver las tareas que tenemos que realizar y las tareas que ya hemos completado. La lista se guarda en el localstorage. La aplicación está construida con react con el lenguaje de JavaScript, ChakraUI para los estilos, y alojado en Vercel. ',
    image:
      'https://user-images.githubusercontent.com/44040730/121070009-c8ec9580-c793-11eb-97f4-42b591e22b3e.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://todo-app-delta-two.vercel.app'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/ToDo-app-react'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'React'
      },
      {
        id: 2,
        name: 'ChakraUI'
      },
      {
        id: 3,
        name: 'JavaScript'
      }
    ]
  },
  {
    id: 7,
    name: 'Juego Memoria',
    descriptionShort:
      'Juego clásico donde tenemos que buscar cartas que sean pares.',
    description:
      'Juego clásico donde tenemos que buscar cartas que sean pares, con la temática de Mortal Kombat.La aplicación está construida con Javascript, los estilos se usa bootstrap y los resultados se guardan en el LocalStorage. Alojada en GitHub Pages.',
    image:
      'https://user-images.githubusercontent.com/44040730/108284805-89019400-714b-11eb-8f07-37169d9496d6.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://berrones-edwin.github.io/memorama/'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/memorama'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'JavaScript'
      },
      {
        id: 2,
        name: 'Bootstrap'
      }
    ]
  },
  {
    id: 8,
    name: 'Aplicación clima',
    descriptionShort:
      'Aplicación que muestra el clima de tu ciudad actual.',
    description:
      'Aplicación que muestra el clima de tu ciudad actual. Puedes cambiar entre grados °c y °f, buscar ciudades de todo el mundo, ver el clima por hora, guardar lugares favoritos, etc.',
    image:
      'https://user-images.githubusercontent.com/44040730/171038978-a018bdb3-2b6d-4f10-a5ae-f3c31729d232.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://weather-app-lake-eight.vercel.app/'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/weather-app'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'JavaScript'
      },
      {
        id: 2,
        name: 'NextJS'
      },
      {
        id: 3,
        name: 'ChakraUI'
      },
    ]
  },
  {
    id: 9,
    name: 'VideoLLamada',
    descriptionShort:
      'Aplicación para hacer videollamadas',
    description:
      'Aplicación donde podemos crear cuartos y podemos hacer videollamadas. Podemos activar y descactivar el auido y video.',
    image:
      'https://user-images.githubusercontent.com/44040730/165360347-8f9716b6-6d37-4ea8-b535-0441382a8e8a.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://video-call-production.up.railway.app/'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/video-call'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'JavaScript'
      },
      {
        id: 2,
        name: 'NodeJS'
      },
      {
        id: 3,
        name: 'ExpressJs'
      },
      {
        id: 4,
        name: 'BootStrap'
      },
    ]
  },
  {
    id: 10,
    name: 'Editor',
    descriptionShort:
      'Aplicación para crear, editar y descargar imagenes para tus redes sociales.',
    description:
      'Aplicación para crear, editar y descargar imagenes para tus redes sociales. Puedes agregar images, agregar código HTML, CSS, Js. La imagenes se descargan en tu maquina o las puedes subir a la nube.',
    image:
      'https://user-images.githubusercontent.com/44040730/262731404-1d535c75-51cf-4ade-8c47-dcdc20cea836.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://p-editor.vercel.app/'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/p-editor'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'JavaScript'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Firebase'
      },
      {
        id: 4,
        name: 'Cloudinary'
      },
    ]
  },
  {
    id: 11,
    name: 'Company Evaluation',
    descriptionShort:
      'Company Evaluation es un sitio web que te permite compartir facilmente informacion sobre una empresa (cultura, salarios, entrevistas, etc)',
    description:
      'Company Evaluation es un sitio web que te permite compartir facilmente información sobre una empresa (cultura, salarios, entrevistas, etc). Se utilizó google forms y google sheets para recolectar la información y generar informes con ello.',
    image:
      'https://user-images.githubusercontent.com/44040730/241445597-404cc93e-b9a8-4130-b917-987fa475315c.png',
    links: [
      {
        id: 1,
        name: 'Demo',
        url: 'https://hackaton-infojobs-zeta.vercel.app/'
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Berrones-Edwin/hackaton-infojobs'
      }
    ],
    technologies: [
      {
        id: 1,
        name: 'TypeScript'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'NextJS'
      },
      {
        id: 4,
        name: 'Google Forms'
      },
      {
        id: 5,
        name: 'Google Sheet'
      },
    ]
  }
]
