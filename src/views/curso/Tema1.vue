<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Preferencias y restricciones presupuestarias'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La capacidad para tomar decisiones como consumidor, está influenciada por las preferencias y los recursos disponibles. En este tema, se entenderá la forma en que los individuos eligen entre diferentes alternativas de consumo para maximizar su bienestar, considerando las limitaciones económicas que enfrentan. Este análisis es fundamental en la microeconomía, dado que ayuda a comprender cómo se forman las elecciones en el mundo de los recursos limitados.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Preferencias del consumidor: conceptos y representación gráfica

    p.mb-5 El estudio de las preferencias del consumidor es fundamental para comprender cómo las personas toman decisiones sobre el uso de recursos limitados frente a una variedad de opciones en el mercado. Este análisis permite identificar los factores que influyen en las elecciones de consumo, como los gustos, necesidades y restricciones económicas.

    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Preferencias del consumidor 
            p.mb-4(data-aos="fade-right") En microeconomía, las preferencias del consumidor se representan mediante modelos matemáticos que explican cómo se priorizan diferentes combinaciones de bienes y servicios. El PDF <b>Preferencias del consumidor</b>, profundiza en las principales teorías y representaciones gráficas de estas preferencias, como las curvas de indiferencia y las funciones de utilidad, proporcionando una base teórica y práctica para entender la lógica detrás de las decisiones de consumo. A través de ejemplos y conceptos extraídos de la teoría económica, se explorarán los tipos de bienes, sus relaciones y las implicaciones de las elecciones racionales en contextos de limitaciones económicas.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Preferencias del consumidor.

          .col-md-8.col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Restricciones presupuestarias: ingresos, precios y combinaciones posibles

    p.mb-5 Este subtema aborda un aspecto crucial de la toma de decisiones económicas: cómo los consumidores, con recursos limitados, eligen entre diferentes bienes o servicios, para maximizar su satisfacción. Esta restricción presupuestaria combina tres elementos fundamentales (Pulido Castrillón, 2021):

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Ingresos del consumidor")
            p El ingreso del consumidor representa el límite de poder adquisitivo que tiene una persona durante un periodo específico. Este ingreso establece cuánto puede gastar el consumidor al elegir entre diferentes combinaciones de bienes y servicios. Si el ingreso es bajo, las opciones de consumo están más restringidas; si es alto, el consumidor tendrá mayor flexibilidad para diversificar su cesta de consumo.

          .div(titulo="Precios y demanda de los bienes")
            p La elección de los bienes que componen la cesta de consumo, está condicionada por los precios establecidos en el mercado. Estos precios reflejan la interacción entre los oferentes y demandantes bajo las condiciones de competencia perfecta. La relación entre los precios y las cantidades demandadas de cada bien, está directamente ligada a la capacidad de gasto del consumidor. Por ejemplo, si un producto tiene un precio elevado, el consumidor deberá ajustar su cesta de consumo, adquiriendo menos unidades de ese bien o priorizando bienes más económicos.

          .div(titulo="Ecuación de la recta presupuestaria")
            p Esta se expresa matemáticamente, como: <b>p1 x 1 + p2 x 2 ≤ I</b>
            p Aquí: 
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 P1 y P2 representan los precios de los bienes 1 y 2, respectivamente.
              li.d-flex.mb-0
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 X1 y X2 son las cantidades consumidas de cada bien.
              li.d-flex
                i.fas.fa-check-circle.bg-color-4
                p.mb-0 I es el ingreso disponible del consumidor.
            p La desigualdad indica que el gasto total del consumidor no puede exceder sus ingresos. Sin embargo, para maximizar la satisfacción o utilidad, se supone que el consumidor agota todo su ingreso, por lo que la ecuación se convierte en una igualdad:
            p.text-bold P1 X 1 + P2 X 2 = I

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Equilibrio del consumidor: interacción entre preferencias y restricciones

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/4.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El equilibrio del consumidor es un concepto fundamental en la microeconomía que describe la situación en la cual un consumidor maximiza su utilidad, dadas sus preferencias y restricciones presupuestarias. Este equilibrio ocurre cuando el consumidor elige la combinación óptima de bienes y servicios que le proporciona la mayor satisfacción posible, considerando su ingreso limitado y los precios de los bienes (Antelo-Suárez, 2015).

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8.order-1
        h2(data-aos="fade-right") Preferencias y utilidad
        p(data-aos="fade-left").p-4.bg-color-3 El punto de partida del equilibrio del consumidor, es la representación de las preferencias, a través de curvas de indiferencia, que muestran todas las combinaciones de bienes que proporcionan el mismo nivel de utilidad. Estas curvas son convexas hacia el origen, reflejando la tasa marginal de sustitución decreciente (TMS), que indica la cantidad de un bien que el consumidor está dispuesto a sacrificar, para obtener una unidad adicional de otro bien, manteniendo el mismo nivel de satisfacción.
        p(data-aos="fade-right") Por ejemplo, si el consumidor tiene dos bienes, <b>X1</b> (alimentos) y <b>X2</b> (ropa), las curvas de indiferencia ilustran cómo valora estas combinaciones, dependiendo de sus preferencias. A medida que aumenta la cantidad de <b>X1</b>, el consumidor está dispuesto a renunciar a menos unidades de <b>X2</b> para obtener más <b>X1</b>, reflejando la tasa marginal de sustitución decreciente TMS.
        
    h2(data-aos="fade-right").mb-5 Restricciones presupuestarias en el equilibrio del consumidor

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El problema de la elección del consumidor se centra en la búsqueda de una cesta de consumo óptima que le permita maximizar su utilidad (satisfacción) al enfrentar una restricción presupuestaria. 

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta situación implica que el consumidor debe decidir cómo asignar sus recursos limitados entre diferentes bienes, para obtener el mayor beneficio posible, sin exceder su ingreso disponible (Salas Velasco, 2018).

    p.mb-5 El análisis se divide en dos enfoques complementarios: el problema PRIMAL y el problema DUAL, cada uno, con un objetivo y una metodología distinta:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-lg-1
              h5 Problema PRIMAL: maximización de la utilidad, sujeta a la restricción presupuestaria
              p Este enfoque parte de la premisa que el consumidor busca obtener el máximo nivel de satisfacción o utilidad (U) utilizando su ingreso limitado (M). Matemáticamente, el problema se plantea como:
              P max⁡ <em>U (x,y)      sujeto a:M = p <sub>x</sub> x + p <sub>y</sub> y</em>
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check-circle.bg-color-4
                  p.mb-0 U (X, Y): función de utilidad que mide el nivel de satisfacción, obtenido por consumir las cantidades <b>X</b> y <b>Y</b> de dos bienes.
                li.d-flex.mb-0
                  i.fas.fa-check-circle.bg-color-4
                  p.mb-0 M: ingreso del consumidor.
                li.d-flex
                  i.fas.fa-check-circle.bg-color-4
                  p.mb-0 Px y Py: precios de los bienes <b>X</b> y <b>Y</b>, respectivamente.
              p La solución óptima, denominada (<b>X*, Y*</b>), representa la cantidad de cada bien que maximiza la utilidad del consumidor. En este punto, el ingreso del consumidor se gasta completamente en su cesta de consumo, alcanzando el nivel de satisfacción más alto posible (<b>U*</b>) dado su presupuesto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-lg-1
              h5 Problema DUAL: minimización del gasto para alcanzar un nivel de utilidad dado
              p Este enfoque aborda el problema desde la perspectiva inversa: el consumidor busca minimizar el gasto necesario para alcanzar un nivel de utilidad específico. Matemáticamente, se plantea como: 
              p min <em>M = p <sub>x</sub> x + p <sub>y</sub> y.     sujeto a: U = U (x,y)</em>
              p En este caso, la solución óptima también es la cesta de consumo (<b>X*, Y*</b>), pero el objetivo es determinar el gasto mínimo (<b>M*</b>) requerido para alcanzar un nivel de satisfacción predeterminado (<b>U*</b>).

    h2(data-aos="fade-right").mb-5 Relación entre los problemas PRIMAL y DUAL

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p(data-aos="fade-left") Ambos enfoques conducen a la misma solución en términos de cantidades óptimas de los bienes consumidos (X*, Y*), lo que refleja la interdependencia entre el nivel de satisfacción y los recursos disponibles.

        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En condiciones normales (preferencias regulares), el consumidor elige una cesta de consumo que incluye algo de cada bien, logrando el equilibrio al maximizar su utilidad o minimizar su gasto.
        p Este análisis no solo destaca la interacción entre las preferencias del consumidor y las restricciones presupuestarias, sino que también subraya la importancia de los precios relativos en la decisión de consumo. Los precios de los bienes (Px y Py) determinan las pendientes de la recta presupuestaria y, por ende, influyen en la combinación óptima de bienes.


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
              a(href="https://mapify.so/es/app/7a9cfefd-95b6-4c7a-b7d5-63a6a55ce5da" target="_blank" rel="noopener noreferrer") Mapify. 
           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=xAzVw5D3q9M" target="_blank" rel="noopener noreferrer") SoloPapelyBoli. (2023). Propiedades de las preferencias.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=RocS7eFFA44" target="_blank" rel="noopener noreferrer") SoloPapelyBoli. (2023). Preferencias de tipo Cobb Douglas Preferencias regulares o usuales. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rD0DFd1mNU0" target="_blank" rel="noopener noreferrer") Montero Espinosa. (SPyB). (2020). Equilibrio del consumidor.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=o3iiZrUcRSo" target="_blank" rel="noopener noreferrer") Montero Espinosa. (SPyB). (2020). Gráfica del equilibrio del consumidor.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
