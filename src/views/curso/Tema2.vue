<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Maximización de la utilidad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La <b>maximización de la utilidad</b> es un concepto central en la teoría del consumidor, el cual establece que las personas buscan asignar sus recursos limitados de la manera más eficiente para obtener el mayor nivel de satisfacción posible.

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-3.mb-3
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") En este proceso, cada consumidor toma decisiones basadas en sus preferencias personales, las restricciones presupuestarias que enfrenta y los precios de los bienes disponibles en el mercado. Este análisis permite comprender cómo los consumidores optimizan sus elecciones para equilibrar sus deseos con sus recursos, logrando así el máximo de utilidad. 

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este enfoque tiene implicaciones importantes para la economía y la política pública. Por ejemplo, permite analizar cómo los cambios en los precios o en el ingreso, afectan las decisiones de consumo.
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-1.order-lg-2.mb-3
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Así mismo, proporciona herramientas para evaluar el impacto de impuestos, subsidios, proporciona herramientas para evaluar el impacto de impuestos, subsidios y otras políticas económicas en el bienestar de los consumidores.
        p(data-aos="fade-left") En suma, la maximización de la utilidad es un marco fundamental para comprender el comportamiento de los consumidores y la dinámica de los mercados en el contexto de la microeconomía (Antelo Suárez, 2015). 

  
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Conceptos y tipos de utilidad
    
    p.mb-5 Para comenzar con el estudio de la temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h2(data-aos="fade-right") Diferencias claves entre ambos enfoques

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p(data-aos="fade-left").p-4.bg-color-5 Mientras que la utilidad cardinal proporciona un marco cuantitativo para comparar preferencias, la utilidad ordinal se centra en clasificaciones cualitativas. 
        p(data-aos="fade-right") Ambos enfoques son complementarios y su uso depende del contexto del análisis. En la práctica, la utilidad ordinal se emplea más comúnmente, debido a su simplicidad y adaptabilidad para analizar las decisiones del consumidor (Salas Velasco, 2018).
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Funciones de utilidad
    
    p.mb-5 Las funciones de utilidad representan, matemáticamente, las preferencias del consumidor y cómo estas se reflejan en su satisfacción al consumir distintas combinaciones de bienes. A continuación, se describen los tipos fundamentales de funciones de utilidad, ampliamente utilizadas en la teoría microeconómica.


    .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
      table
        tbody
          tr
            td.bg-color-1(width="25%").p-4.text-bold Función Cobb-Douglas (X1, X2 > 0)

            td.bg-color-6.p-4 
              p La función Cobb-Douglas es una de las más utilizadas en microeconomía, debido a su flexibilidad y capacidad para representar preferencias en diversos contextos. Su forma general es:
              p.text-center U(X<sub>1</sub>,X<sub>2</sub> ) = A • X<sub>1</sub><sup>α</sup> • X<sub>2</sub><sup>β</sup>  donde X<sub>1</sub>,X<sub>2</sub>  > 0
              p Donde A es el factor de escala que no afecta la elección del consumidor, pero ajusta la magnitud de la utilidad.
              p Donde X1, X2 son las cantidades consumidas de los bienes 1 y 2.
              p Donde <b>α, β</b> son los parámetros positivos que reflejan la importancia relativa de cada bien en la utilidad del consumidor.
          tr
            td.bg-color-1.p-4(colspan="2") 
              p.text-bold Propiedades:
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.bg-color-4
                  p.mb-0 La función Cobb-Douglas muestra una relación de sustituibilidad entre los bienes.
                li.d-flex.mb-0
                  i.fas.fa-check-circle.bg-color-4
                  p.mb-0 Se cumple la condición de rendimientos marginales decrecientes, es decir, cada unidad adicional de un bien incrementa la utilidad, pero a un ritmo decreciente.
                li.d-flex
                  i.fas.fa-check-circle.bg-color-4
                  p.mb-0 Es ideal para analizar bienes normales y cómo los consumidores distribuyen su ingreso entre ellos.
          tr.bg-color-6
            td.p-4.text-bold Función tipo Leontief (X1, X2 > = 0)

            td.p-4 
              p En el caso de los bienes complementarios perfectos, el consumidor busca maximizar su utilidad, pero esta está restringida por su presupuesto y por la naturaleza de la función de la utilidad que se utiliza. La función tipo Leontief, definida como U (X1, X2) = min (X1, X2), describe situaciones en las que los bienes deben ser consumidos en proporciones fijas para maximizar la satisfacción.
              p El consumidor enfrenta una restricción presupuestaria expresada por: 
              p.text-bold.text-center P1 * X1 + P2 * X2 = I
          tr
            td.bg-color-1.p-4(colspan="2") 
              p.text-bold Donde:
              ul.lista-ul
                li.d-flex.mb-0
                  i.fas.fa-check-circle.bg-color-4
                  p.mb-0 P1 y P 2 son los precios de los bienes X1 y X2.
                li.d-flex.mb-0
                  i.fas.fa-check-circle.bg-color-4
                  p.mb-0 I es el ingreso disponible.
                li.d-flex
                  i.fas.fa-check-circle.bg-color-4
                  p.mb-0 X1 y X2 son las cantidades consumidas de cada bien.
              p El consumidor debe gastar todo su ingreso para maximizar su utilidad, cumpliendo simultáneamente con la proporción fija, establecida por la función tipo Leontief.
            
          
    h2(data-aos="fade-right").mb-5 Solución analítica del problema

    p.mb-5 Dado que la función min (X1, X2) no es diferenciable, no se puede usar el método de Lagrange. En cambio, la solución se determina analíticamente. El punto óptimo ocurre cuando la restricción presupuestaria “Toca” el vértice de la función de utilidad, es decir, cuando las demandas de los dos bienes son iguales o proporcionales, lo que refleja la complementariedad perfecta entre ellos.


    .titulo-figura.mb-4
      h5 Figura 1. 
      span Demanda ordinaria óptima en el caso <em>Leontief</em>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/6.svg", data-aos="zoom-in")
          img.d-flex.d-lg-none(src="@/assets/curso/tema2/6-1.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Pulido Castrillón (2021). 
    
    p.mb-5 La solución analítica está dada por la fórmula:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/7.svg", data-aos="zoom-in")


    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .bg-full-width.bg-color-5.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Esta ecuación indica que las cantidades óptimas de consumo para ambos bienes, dependen directamente del ingreso (I) del consumidor y de la suma de los precios de los bienes.

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Proporciones fijas
                p.mb-0 El consumidor solo maximiza su utilidad si consume los bienes en proporciones fijas. Por ejemplo, si X1 y X2 son llantas y autos, no tiene sentido comprar más llantas si no hay autos para usarlas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Complementariedad perfecta
                p.mb-0 La demanda de un bien depende no solo de su precio e ingreso, sino también del precio del otro bien. Si P1 aumenta, el consumo de ambos bienes disminuye porque el consumidor no puede adquirir las proporciones óptimas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Vértice de la función
                p.mb-0 El óptimo ocurre en el punto donde la restricción presupuestaria intercepta el vértice de las curvas de indiferencia, lo que garantiza que el consumidor está utilizando su ingreso de la manera más eficiente posible para maximizar su utilidad.


    h2(data-aos="fade-right").mb-5 Función lineal (X1, X2 > = 0)

    p La función de utilidad lineal, definida como U (X1, X2) = X1 + X2, describe una situación en la que los bienes X1 y X2 son sustitutos perfectos. Es decir, el consumidor percibe ambos bienes como equivalentes en términos de satisfacción, pudiendo sustituir uno por el otro sin alterar su nivel de utilidad.
    p.mb-5.text-bold El consumidor enfrenta una restricción presupuestaria expresada por: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.p-3.bg-color-3
        p.mb-0.text-center P1 * X1 + P2 * X2 = I


    .row.mb-5
      .col-lg-6.bg-color-6.p-4.px-5.align-content-center(data-aos="fade-left")
        p.text-bold Donde:
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 P1 y P 2 son los precios de los bienes X1 y X2.
          li.d-flex.mb-0
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 I es el ingreso disponible.
          li.d-flex
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 X1 y X2 son las cantidades consumidas de cada bien. 
      .col-lg-6.bg-color-1.p-4.px-5(data-aos="fade-right")
        p.text-bold Solución del problema:
        p <b>a</b>. Si P1 < P2, el consumidor compra únicamente X1, lo que se expresa como: 
        .row
          .col-lg-8
            figure
              img(src="@/assets/curso/tema2/12.svg", data-aos="zoom-in")
    
    p.mb-5 El objetivo del consumidor es maximizar su utilidad dentro de esta restricción, decidiendo cuál bien consumir en mayor cantidad según su precio.

    .titulo-figura.mb-4
      h5 Figura 2. 
      span Caso P1< P2

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/13.svg", data-aos="zoom-in")
          img.d-flex.d-lg-none(src="@/assets/curso/tema2/13-1.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Pulido Castrillón (2021). 

    p.mb-5 <b>b</b>. Si P2 < P1, el consumidor compra únicamente X2, lo que se expresa como: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.p-3.bg-color-3
        figure
          img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")

    .titulo-figura.mb-4
      h5 Figura 3. 
      span Caso P2 < P1

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/15.svg", data-aos="zoom-in")
          img.d-flex.d-lg-none(src="@/assets/curso/tema2/15-1.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Pulido Castrillón (2021).  


    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p.mb-5 Y su interpretación económica es:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Sustituibilidad perfecta
                p.mb-0 El consumidor siempre elegirá consumir exclusivamente el bien más barato, ya que ambos bienes generan la misma utilidad.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Preferencia por el costo más bajo
                p.mb-0 El precio de cada bien determina la elección del consumidor. Por ejemplo, si el precio de X1 es menor que el de X2, toda la demanda se centra en X1.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/18.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Curvas de indiferencia lineales
                p.mb-0 Las curvas de indiferencia asociadas con esta función de utilidad, son líneas rectas con una pendiente constante. Esto refleja que el consumidor está dispuesto a sustituir una unidad de un bien por una unidad del otro sin importar las cantidades iniciales.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Ley de la utilidad marginal decreciente

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/19.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La ley de la utilidad marginal decreciente establece que, a medida que se consume más unidades de un bien o servicio, la satisfacción adicional que se obtiene de cada unidad adicional, conocida como <b>utilidad marginal (UM)</b>, disminuye. Este principio es fundamental para entender las decisiones de consumo, porque describe cómo los individuos distribuyen sus recursos limitados entre diferentes bienes para maximizar su bienestar (Salas Velasco, 2018).

    h2(data-aos="fade-right").mb-5 Relación con la maximización de la utilidad:

    p.mb-5 Un consumidor racional busca asignar su ingreso de manera que la utilidad marginal por unidad monetaria gastada (UM/P) sea igual para todos los bienes que consumen. Esto se formula matemáticamente como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.p-3.bg-color-3
        figure
          img(src="@/assets/curso/tema2/20.svg", data-aos="zoom-in")

    .row.mb-5
      .col-lg-6.bg-color-6.p-4.px-5.align-content-center(data-aos="fade-left")
        p.text-bold Donde:
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 UMx es la utilidad marginal del bien X.
          li.d-flex.mb-0
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 Px es el precio del bien x
          li.d-flex
            i.fas.fa-check-circle.bg-color-4
            p.mb-0 UMy es la utilidad marginal del bien y, y así sucesivamente para los demás bienes. 
      .col-lg-6.bg-color-1.p-4.px-5.align-content-center(data-aos="fade-right")
        p.mb-0 Esta condición garantiza que el consumidor alcanza el equilibrio al maximizar su utilidad total, dentro de su restricción presupuestaria. En este punto, toda la renta disponible se ha gastado, y no hay incentivos para redistribuir el gasto entre los bienes.

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-right").mb-5 Efecto del precio sobre la utilidad marginal

        p Cuando el precio de un bien aumenta, su cociente UMx/Px disminuye en comparación con otros bienes. Para volver al equilibrio, el consumidor reduce la cantidad demandada del bien más caro, lo que incrementa su utilidad marginal. Este ajuste continúa hasta que se iguala nuevamente la utilidad marginal por unidad monetaria gastada entre todos los bienes. Este comportamiento es consistente con la pendiente negativa de la curva de demanda: al aumentar el precio, la cantidad demandada disminuye.
        p.mb-5.text-bold Las implicaciones de la ley, son:


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/21.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Distribución del ingreso
                p.mb-0 La ley explica cómo los consumidores optimizan su gasto en bienes y servicios para maximizar la satisfacción.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/22.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Pendiente de la curva de demanda
                p.mb-0 Refleja la relación inversa entre el precio de un bien y su cantidad demandada, lo que justifica la pendiente negativa.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/23.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Decisiones en mercados reales
                p.mb-0 Los consumidores priorizan bienes con mayor relación beneficio-precio, adaptándose constantemente a cambios en precios e ingresos.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105577" target="_blank" rel="noopener noreferrer") Salas Velasco, M. (2018). Microeconomía: conceptos teóricos y aplicaciones. Ediciones Pirámide. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/221245?page=23" target="_blank" rel="noopener noreferrer") Pulido Castrillón, Á. A. (2021). Microeconomía del equilibrio general. Ediciones Unisalle.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/170085" target="_blank" rel="noopener noreferrer") Antelo Suárez, M. (2015). Microeconomía intermedia en casos. Delta Publicaciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.canva.com/" target="_blank" rel="noopener noreferrer") Canva.com.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
