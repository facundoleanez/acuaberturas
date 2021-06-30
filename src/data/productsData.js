import guillotina from '../images/products/guillotina.jpg';
import abrir from '../images/products/abrir.jpg';
import corrediza from '../images/products/corrediza.jpg';
import fija from '../images/products/fija.jpg';
import oscilobatiente from '../images/products/oscilobatiente.jpg';
import plegadiza from '../images/products/plegadiza.jpg';
import bandolera from '../images/products/bandolera.jpg';
import ventiluz from '../images/products/ventiluz.jpg';
import stopsol from '../images/products/stopsol.jpg';
import float from '../images/products/float.jpg';
import fantasia from '../images/products/fantasia.jpg';
import curvo from '../images/products/curvo.jpg';
import ahumado from '../images/products/ahumado.jpg';
import dvh from '../images/products/dvh.jpg';

const productsData = [
    {
        id : "v1",
        category : "ventana",
        title : "Ventana Guillotina",
        description : "Ideal para espacios reducidos. Ideal para habitaciones que necesiten buena ventilación. Recomendable para baño, cocina, oficinas, etc",
        src : guillotina,
    },
    {
        id : "v2",
        category : "ventana",
        title : "Ventana de Abrir",
        description : " Permite Ventilación de un 100% cuando está abierta. Es posible la limpieza del cristal por ambas caras desde el interior. Ofrece excelente aislamiento a largo plazo. Recomendable para espacios grandes",
        src : abrir,
    },
    {
        id : "v3",
        category : "ventana",
        title : "Ventana Corrediza",
        description : "Ahorra espacio. Ideal para colocar mosquiteros o rejas exteriores. Proporciona mejores vistas. La apertura es del 50% ya que una parte permanece fija.",
        src : corrediza,
    },
    {
        id : "v4",
        category : "ventana",
        title : "Ventana Fija",
        description : "Ahorra espacio. Ideal para optimizar la iluminación natural. Proporciona mejores vistas. Restringe al 100% el flujo de aire.",
        src : fija,
    },
    {
        id : "v5",
        category : "ventana",
        title : "Ventana Plegadiza",
        description : "Permiten excelente ventilación sin un ángulo de apertura. Ideal para cocinas, sobre mesadas.",
        src : plegadiza,
    },
    {
        id : "v6",
        category : "ventana",
        title : "Ventana Oscilobatiente",
        description : " Prácticas y versátiles. Dos tipos de apertura: banderola (manija para arriba permite una pequeña entrada de aire) y clásica (similar a una ventana de abrir)",
        src : oscilobatiente,
    },
    {
        id : "v7",
        category : "ventana",
        title : "Ventana Bandolera",
        description : "Ideal para baños, vestidores o lugares que necesiten poca corriente de aire. Apertura de hoja en 45°. Económicas y prácticas",
        src : bandolera,
    },
    {
        id : "v8",
        category : "ventana",
        title : "Ventiluz",
        description : " Prácticas. Hoja rebatible. Ideal para baños y cocinas",
        src : ventiluz,
    },
    {
        id : "p",
        category : "puerta",
        title : "",
        description : "",
        src : fija,
    },
    {
        id : "g1",
        category : "vidrio",
        title : "Vidrio Float",
        description : "El vidrio más usado en la construcción consiste en una plancha de vidrio fabricada haciendo flotar el vidrio fuindido sobre una capa de estaño fundido. Eso le proporciona un grosor uniforme y una superficie muy plana, además de una transparencia perfecta.",
        src : float,
    },
    {
        id : "g2",
        category : "vidrio",
        title : "Vidrio Stopsol",
        description : "Stopsol es un vidrio reflectante constituido por una luna flotada incolora o coloreada de bronce, gris, verde o azul oscuro. Una de las caras ha sido cubierta mediante un proceso pirolítico con una fina capa transparente de óxidos metálicos.",
        src : stopsol,
    },
    {
        id : "g3",
        category : "vidrio",
        title : "Vidrio de Fantasía",
        description : "También conocido como coverglass, es un vidrio puntado en una de sus caras y que impide la visión a través del mismo. Cuentan con una amplia gama de colores que brindan una agradable sensación reflejando la luz de manera inusual. El permanente diálogo con la luz crea un sublime juego de delicados efectos",
        src : fantasia,
    },
    {
        id : "g4",
        category : "vidrio",
        title : "Vidrio Curvo",
        description : "Los vidrios curvos se obtienen mediante el calentamiento del vidrio plano hasta su punto de plasticidad, dándole la forma deseada mediante moldes. Estos vidrios los comercializamos a pedido y tienen una demora mayor",
        src : curvo,
    },
    {
        id : "g5",
        category : "vidrio",
        title : "Vidrio Ahumado",
        description : "Constituye una lámina plana de vidrio, sometida al humo de la llama de una vela de tal manera que una superficie de la lámina quede cubierta de una capa de residuos de humo. Podés pedirla en colores bronce o gris.",
        src : ahumado,
    },
    {
        id : "g6",
        category : "vidrio",
        title : "DVH no es lo mismo que laminado",
        description : "El DVH (doble vidrio hermético) es un componente prefabricado compuesto por un conjunto de dos o más vidrios planos parelelos separados por un espaciador que están sellados herméticamente a lo largo de todo su perímetro",
        src : dvh,
    },

    {
        id : "m",
        category : "muro",
        title : "",
        description : "",
        src : fija,
    },
    {
        id : "e",
        category : "especial",
        title : "",
        description : "",
        src : fija,
    },
]
export default productsData;