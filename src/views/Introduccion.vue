<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") La teoría del consumidor y del productor, es un pilar fundamental de la microeconomía, porque permite comprender cómo los agentes económicos, tanto individuos como empresas, toman decisiones para optimizar su satisfacción o beneficios, en un entorno de recursos limitados. En esta unidad, se profundizará sobre los conceptos básicos que explican estas dinámicas, sentando las bases para analizar el comportamiento de los mercados y su impacto en la economía global.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El resultado de aprendizaje de esta unidad es que se logre comprender las decisiones de consumo y producción, desde un enfoque analítico y práctico, reconociendo cómo estas influyen en la formación de precios, la asignación de recursos y la competitividad en diferentes contextos económicos.
        
        p.text-bold Para facilitar el estudio de estos conceptos, la unidad se organiza en tres temas principales:

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/intro/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Preferencias y restricciones presupuestarias")
            p En este tema, analizaremos cómo los consumidores enfrentan decisiones de compra bajo limitaciones de ingreso y precios, explorando las preferencias individuales y las combinaciones de bienes posibles.

          .div(titulo="Maximización de la utilidad")
            p Este segmento se centra en cómo los consumidores buscan maximizar su satisfacción, considerando sus restricciones y los cambios en precios e ingresos.

          .div(titulo="Producción y costos")
            p Finalmente, estudiamos cómo las empresas planifican su producción y gestionan sus costos en el corto y largo plazo, elementos claves para garantizar su competitividad y sostenibilidad.

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/5.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") Al finalizar esta unidad, se habrán aprehendido las herramientas esenciales para interpretar decisiones económicas desde una perspectiva, tanto individual como empresarial, y podrás aplicar estos conceptos, a situaciones prácticas como la planificación de presupuestos o el análisis de estrategias de mercado.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Lo invitamos a participar activamente en este recorrido, por la teoría del consumidor y del productor, reflexionando sobre cómo estos principios se relacionan con su entorno cotidiano y profesional. Su compromiso y dedicación serán claves para fortalecer sus habilidades analíticas, en el fascinante mundo de la microeconomía.
        
        
</template>
