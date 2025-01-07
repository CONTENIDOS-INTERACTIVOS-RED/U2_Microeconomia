export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Teoría del consumidor y del productor',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Preferencias y restricciones presupuestarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Preferencias del consumidor: conceptos y representación gráfica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Restricciones presupuestarias: ingresos, precios y combinaciones posibles',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Equilibrio del consumidor: interacción entre preferencias y restricciones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Maximización de la utilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos y tipos de utilidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Funciones de utilidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ley de la utilidad marginal decreciente',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Producción y costos: corto y largo plazo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Producción en el corto plazo: producto total, medio y marginal',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Producción en el largo plazo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Estructura de costos: costos fijos, variables y totales',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Salas Velasco, M. (2018). Microeconomía: conceptos teóricos y aplicaciones. Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/105577',
    },
    {
      referencia:
        'Pulido Castrillón, Á. A. (2021). Microeconomía del equilibrio general. Ediciones Unisalle.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/221245?page=23',
    },
    {
      referencia:
        'Antelo Suárez, M. (2015). Microeconomía intermedia en casos. Delta Publicaciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170085',
    },
    {
      referencia:
        'Rodríguez Galván, J. Y. (2022). Microeconomía: teoría y ejercicios. Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/224089 ',
    },
  ],
  glosario: [
    {
      termino: 'Costos fijos',
      significado:
        'Gastos que permanecen constantes en el corto plazo, independientemente del nivel de producción, como el alquiler o los salarios administrativos.',
    },
    {
      termino: 'Costos variables',
      significado:
        'Gastos que cambian proporcionalmente con el nivel de producción, como el costo de materias primas o energía utilizada en el proceso productivo.',
    },
    {
      termino: 'Elasticidad de la demanda',
      significado:
        'Medida de la sensibilidad de la cantidad demandada de un bien, ante cambios en su precio, en el ingreso del consumidor o en el precio de bienes relacionados.',
    },
    {
      termino: 'Maximización de utilidad',
      significado:
        'Proceso mediante el cual un consumidor elige la combinación óptima de bienes que le proporcionan la mayor satisfacción posible, dentro de su restricción presupuestaria.',
    },
    {
      termino: 'Producción',
      significado:
        'Proceso mediante el cual los factores productivos (tierra, trabajo y capital), se combinan para generar bienes o servicios destinados al consumo o la venta.',
    },
    {
      termino: 'Producto marginal',
      significado:
        'Incremento en la producción total, generado por la adición de una unidad extra de un factor productivo, manteniendo las demás constantes.',
    },
    {
      termino: 'Preferencias del consumidor',
      significado:
        'Descripción de los gustos y prioridades de los consumidores, al elegir entre diferentes bienes o servicios, representados gráficamente, mediante curvas de indiferencia.',
    },
    {
      termino: 'Restricción presupuestaria',
      significado:
        'Límite impuesto por el ingreso del consumidor y los precios de los bienes, que define las combinaciones probables de consumo, dentro de sus posibilidades económicas.',
    },
    {
      termino: 'Utilidad marginal',
      significado:
        'Incremento en la satisfacción que experimenta un consumidor al adquirir una unidad adicional de un bien, manteniendo constantes las demás variables.',
    },
  ],
}
