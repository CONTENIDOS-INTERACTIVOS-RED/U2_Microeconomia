<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Producción y costos: corto y largo plazo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 El análisis de producción y costos es fundamental en microeconomía, para comprender cómo las empresas deciden qué, cuánto y cómo producir, al mismo tiempo que optimizan sus recursos. Este tema nos introduce a las decisiones que enfrentan los productores al evaluar la relación entre insumos y productos, así como los costos asociados a diferentes niveles de producción (Rodríguez Galván, 2022).
    
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p(data-aos="fade-left") El estudio se divide en <b>dos perspectivas temporales:</b>  
        div.mb-3.p-4.px-5.bg-color-1
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-4
              p.mb-0 Corto plazo, donde ciertos factores de producción son fijos.
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-4
              p.mb-0 Largo plazo, donde todos los factores son variables. 
        p Estas dos perspectivas permiten analizar cómo las empresas pueden ajustarse a los cambios en la demanda, tecnología o recursos disponibles (Antelo Suárez, 2015).
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A lo largo de este tema, se explorará cómo las empresas buscan maximizar su eficiencia, minimizando costos y adaptando sus estrategias a las limitaciones y oportunidades de su entorno. Al finalizar, se tendrá una comprensión más profunda de cómo operan las empresas en mercados reales y de los fundamentos que sustentan su competitividad y sostenibilidad económica.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Producción en el corto plazo: producto total, medio y marginal

    p.mb-5 Para poder empezar a hablar de producción en una empresa, se debe saber en sí que es <b>la producción</b>; Rodríguez Galván en su libro “Microeconomía: teoría y ejercicios” dice que:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.mb-5.justify-content-center
          .col-md-8.col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.p-4.mb-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Son todos los gastos en que incurre una empresa y que son esenciales para la producción de sus bienes (p 81).
            p La producción se refiere al proceso mediante el cual los insumos o factores productivos se transforman en bienes y servicios que satisfacen las necesidades del mercado. En este contexto, los factores productivos desempeñan un papel esencial, debido a que son los recursos empleados por las empresas para llevar a cabo este proceso. 
            p.mb-5.text-bold Los principales factores productivos son:
        

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tierra (T)
                p.mb-0 Son los recursos naturales que pueden ser utilizados en el proceso productivo.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Trabajo (L)
                p.mb-0 Es la cantidad de personas y el tiempo que dedican a la producción.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Capital (K)
                p.mb-0 Son los bienes durables que son utilizados para fabricar otros bienes o servicios.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En la producción de corto plazo, uno o más de estos factores son fijos, mientras que otros son variables, lo que determinan cómo las empresas ajustan su nivel de producción ante cambios en la demanda o las condiciones del mercado.

    h2(data-aos="fade-right").mb-5 Producto total, medio y marginal

    p.mb-5 En el análisis de la producción, se estudian tres indicadores claves que ayudan a evaluar el rendimiento de los factores productivos.

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p(data-aos="fade-left") <b>a.	Producto total (PT)</b>. Representa la cantidad total de bienes o servicios producidos por una empresa, utilizando una combinación específica de factores productivos. Es la base para medir el desempeño general de la producción.
        p(data-aos="fade-left") <b>b.	Producción media (PMe)</b>. Es el resultado promedio obtenido por cada unidad de un factor productivo. Se calcula dividiendo el producto total entre la cantidad de unidades, del factor utilizado. Por ejemplo, el producto medio del trabajo se define como:
    
        .row.mb-5
          .col-lg-6.bg-color-6.p-4.align-content-center
            .row.justify-content-center
              .col-md-10.col-lg-8
                figure
                  img(src="@/assets/curso/tema3/10.svg", data-aos="zoom-in")
          .col-lg-6.bg-color-1.p-4
            p.text-bold Donde:
            ul.lista-ul
              li.d-flex.mb-0
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 PMe = Producto medio
              li.d-flex.mb-0
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 PT = Producto total
              li.d-flex
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 L = Número de trabajadores
    
    .titulo-figura.mb-4
      h5 Figura 4. 
      span Producción media

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/11.svg", data-aos="zoom-in")
          img.d-flex.d-lg-none(src="@/assets/curso/tema3/11-1.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Rodríguez Galván (2022). 

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p(data-aos="fade-left") <b> c.	Producto Marginal (PMg)</b>. Mide el cambio en el producto total como resultado de emplear una unidad adicional de un factor productivo, manteniendo constantes los demás factores. 
        p(data-aos="fade-left") Este concepto es fundamental para determinar en qué punto añadir más unidades de un factor el cual deja de ser rentable debido a rendimientos decrecientes.
        p.mb-5.text-bold Su expresión matemática es: 
    
        .row.mb-5
          .col-lg-6.bg-color-6.p-4.align-content-center
            .row.justify-content-center
              .col-md-10.col-lg-8
                figure
                  img(src="@/assets/curso/tema3/13.svg", data-aos="zoom-in")
          .col-lg-6.bg-color-1.p-4
            p.text-bold Donde:
            ul.lista-ul
              li.d-flex.mb-0
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 PMg = Producto marginal
              li.d-flex.mb-0
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 PT1 = Producción total anterior
              li.d-flex
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 PT2 =Producción total actual
              li.d-flex
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 L1 = Número anterior de trabajadores
              li.d-flex
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 L2 = Número actual de trabajadores
    
    .titulo-figura.mb-4
      h5 Figura 5. 
      span Producto marginal

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/14.svg", data-aos="zoom-in")
          img.d-flex.d-lg-none(src="@/assets/curso/tema3/14-1.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Rodríguez Galván (2022).  

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Producción en el largo plazo

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
      .col-lg-8.order-1
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La <b>producción a largo plazo</b>, se caracteriza por la capacidad de ajustar todos los factores productivos, puesto que ninguno de ellos es fijo. 
        p(data-aos="fade-left") En este horizonte temporal, las empresas pueden modificar sus instalaciones, adquirir nuevas maquinarias o cambiar su fuerza laboral, para optimizar su proceso productivo. Este enfoque permite a las organizaciones alcanzar mayores niveles de eficiencia, adaptarse a las condiciones cambiantes del mercado y responder estratégicamente a las demandas del entorno (Antelo-Suárez, 2015).
    
    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/17.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3.tarjeta(x="2.4%" y="82%" numero="+")
                  h5 1. Elasticidad de sustitución
                  p En el largo plazo, las empresas tienen la posibilidad de sustituir un factor productivo por otro, dependiendo de su disponibilidad y costo relativo. Por ejemplo, pueden optar por automatizar procesos reemplazando trabajo humano con maquinaria, siempre que la tecnología lo permita y sea económicamente viable.

                .bg-color-white.box-shadow.p-3.tarjeta(x="3.5%" y="41%" numero="+")
                  h5 2. Economías de escala
                  p La característica esencial de la producción a largo plazo, es el aprovechamiento de las economías de escala, que ocurren cuando el costo promedio de producción, disminuye al aumentar el volumen de producción. Esto puede lograrse mediante:
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-check-circle.bg-color-4
                      p.mb-0 Especialización del trabajo.
                    li.d-flex.mb-0
                      i.fas.fa-check-circle.bg-color-4
                      p.mb-0 Uso eficiente de la tecnología.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-4
                      p.mb-0 Descuentos en la compra de insumos, al adquirirlos en grandes cantidades.

                .bg-color-white.box-shadow.p-3.tarjeta(x="6%" y="10%" numero="+")
                  h5 3. Curva de producción a largo plazo
                  p Representa la relación entre la producción y las combinaciones de factores productivos óptimas, a diferentes niveles de output. A diferencia del corto plazo, en el largo plazo, la empresa puede ajustar tanto la cantidad de trabajo como la cantidad de capital para alcanzar el máximo nivel de eficiencia.

                .bg-color-white.box-shadow.p-3.tarjeta(x="81.6%" y="10%" numero="+")
                  h5 4. Retornos a escala
                  p En el análisis de la producción a largo plazo, es importante comprender los retornos a escala, que describen cómo cambia el nivel de producción al incrementar proporcionalmente, todos los factores productivos:

                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-check-circle.bg-color-4
                      p.mb-0 Crecientes. La producción aumenta en una proporción mayor que el incremento en los insumos.

                    li.d-flex.mb-0
                      i.fas.fa-check-circle.bg-color-4
                      p.mb-0 Constantes. La producción aumenta en la misma proporción que los insumos.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-4
                      p.mb-0 Decrecientes. La producción aumenta en una proporción menor que el incremento en los insumos.

                .bg-color-white.box-shadow.p-3.tarjeta(x="97.7%" y="41%" numero="+")
                  h5 5. Aplicaciones en la estrategia empresarial
                  p La producción a largo plazo, permite a las empresas diseñar estrategias a medida, para optimizar su estructura operativa. Por ejemplo, una empresa manufacturera puede decidir construir una planta más grande o invertir en tecnologías de producción más avanzadas, para reducir costos y aumentar la calidad del producto.
                .bg-color-white.box-shadow.p-3.tarjeta(x="97.5%" y="82%" numero="+")
                  h5 6. Importancia del análisis a largo plazo
                  p El estudio de la producción a largo plazo es crucial para entender cómo las decisiones estratégicas impactan en la competitividad y sostenibilidad de las empresas. Permite identificar oportunidades de expansión, analizar los efectos de las decisiones tecnológicas y garantizar que la empresa pueda responder de manera efectiva, a los cambios del mercado en el futuro.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Estructura de costos: costos fijos, variables y totales

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in")
      .col-lg-8
        p Rodríguez Galván en su libro Microeconomía: teoría y ejercicios define los costos de producción así: 
        .bloque-texto-c.bg-color-3.p-4.mb-3
          i.fas.fa-quote-right
          h3.mb-2 Es el valor monetario del gasto en materiales, insumos, y otros procesos empleados en la producción de bienes o servicios” (p 90).
          span  Rodríguez Galván  (p 90). 
        p En cualquier proceso productivo, la comprensión de los costos es esencial para la toma de decisiones estratégicas y operativas. La estructura de los costos permite a las empresas evaluar su desempeño financiero y planificar de manera eficiente maximizando sus beneficios y optimizando recursos.

    h2(data-aos="fade-right").mb-5 Tipos de costos

    p <b>a. Costos fijos.</b> Los costos fijos son aquellos que no cambian con el nivel de producción, en el corto plazo. Estos costos permanecen constantes independientemente de si la empresa produce mucho, poco o nada. Ejemplos comunes incluyen:

    .row.mb-5
      .col-lg-6.bg-color-6.p-4.px-5.align-content-center(data-aos="fade-right")
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 Alquiler de instalaciones.
          li.d-flex.mb-0
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 Salarios de personal administrativo.
          li.d-flex
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 Depreciación de maquinaria.
          
      .col-lg-6.bg-color-1.p-4(data-aos="fade-left")
        p <b>Importancia.</b> Los costos fijos son inevitables y deben ser cubiertos para que la empresa permanezca operativa. Sin embargo, una mayor producción puede diluir su impacto, reduciendo el costo promedio por unidad.
    
    .titulo-figura.mb-4
      h5 Figura 6. 
      span Costo fijo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/19.svg", data-aos="zoom-in")
          img.d-flex.d-lg-none(src="@/assets/curso/tema3/19-1.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Rodríguez Galván (2022). 
    
    p.mb-5 <b>b. Costos variables.</b> Los costos variables fluctúan directamente con el nivel de producción. A mayor cantidad de bienes producidos, mayores serán estos costos. Ejemplos comunes incluyen:

    .row.mb-5
      .col-lg-6.bg-color-6.p-4.px-5.align-content-center(data-aos="fade-right")
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 Materias primas.
          li.d-flex.mb-0
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 Mano de obra directa.
          li.d-flex
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 Energía consumida en el proceso productivo.
          
      .col-lg-6.bg-color-1.p-4(data-aos="fade-left")
        p <b>Importancia.</b> Los costos variables permiten a las empresas ajustar sus gastos de acuerdo con la demanda, ofreciendo flexibilidad en la gestión operativa.
    
    .titulo-figura.mb-4
      h5 Figura 7. 
      span Costo variable

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/20.svg", data-aos="zoom-in")
          img.d-flex.d-lg-none(src="@/assets/curso/tema3/20-1.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Rodríguez Galván (2022). 
    
    p.mb-5 <b>c. Costo total.</b> El costo total (CT), representa la suma de todos los costos incurridos en el proceso de producción. Incluye, tanto los costos fijos como los variables:

    .row.mb-5
      .col-lg-6.bg-color-6.p-4.px-5.align-content-center(data-aos="fade-right")
        p.mb-0 Costo total = Costos fijos + Costos variables
          
      .col-lg-6.bg-color-1.p-4(data-aos="fade-left")
        p <b>Importancia.</b> El costo total refleja el monto total de recursos que una empresa necesita para mantener su operación en un periodo determinado. Evaluarlo es fundamental para determinar su la producción es rentable.
    
    .titulo-figura.mb-4
      h5 Figura 8. 
      span Costo total

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/21.svg", data-aos="zoom-in")
          img.d-flex.d-lg-none(src="@/assets/curso/tema3/21-1.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Rodríguez Galván (2022).

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/170085" target="_blank" rel="noopener noreferrer") Antelo Suárez, M. (2015). Microeconomía intermedia en casos. Delta Publicaciones.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/224089" target="_blank" rel="noopener noreferrer") Rodríguez Galván, J. Y. (2022). Microeconomía: teoría y ejercicios. Grupo Editorial Éxodo. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.hubspot.es/sales/costos-variables" target="_blank" rel="noopener noreferrer") Torres, D. (2024).Qué son los costos variables, cómo calcularlos y ejemplos. Hubspot.es. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.hubspot.es/sales/costos-fijos" target="_blank" rel="noopener noreferrer") Gasbarrino, S. (2021). ¿Qué son y cómo calcular los costos fijos? (incluye ejemplos). Hubspot.es.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer") ChatGPT 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=jqNlkJ_9qbE" target="_blank" rel="noopener noreferrer") Apuntes de Microeconomía. (2021). Tema 4.5 - Costes a Corto Plazo.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Rtwh8F8vp6I" target="_blank" rel="noopener noreferrer") Apuntes de Microeconomía. (2021). Tema 4.6 - Costes a Corto Plazo. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=sK2kZwwUutM" target="_blank" rel="noopener noreferrer") Accounting Instruction, Help, & How To (Financial & Managerial) .(2024). Clasificaciones de costos 20 Contabilidad Gerencial.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
