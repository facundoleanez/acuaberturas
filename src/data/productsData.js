import abrir from '../images/products/abrir.jpg';
import corrediza from '../images/products/corrediza.jpg';
import fija from '../images/products/fija.jpg';
import oscilobatiente from '../images/products/oscilobatiente.jpg';
import bandolera from '../images/products/bandolera.jpg';
import ventiluz from '../images/products/ventiluz.jpg';
import stopsol from '../images/products/stopsol.jpg';
import float from '../images/products/float.jpg';
import fantasia from '../images/products/fantasia.jpg';
import curvo from '../images/products/curvo.jpg';
import ahumado from '../images/products/ahumado.jpg';
import dvh from '../images/products/dvh.jpg';
import ibm from '../images/products/ibm.jpg';
import piel from '../images/products/piel.jpg';
import pabrir from '../images/products/pabrir.jpg';
import pcorrediza from '../images/products/pcorrediza.jpg';
import templada from '../images/products/templada.jpg';
import desplazable from '../images/products/desplazable.jpg';

const productsData = [
    {
        id : "v1",
        category : "ventana",
        title : "Ventana Desplazable",
        description : "Este tipo de ventanas es utilizada en lugares donde no queremos perder espacio, ya que se abre hacia afuera, la diferencia con la ventana ventiluz es que cuenta con brazos metálicos, los cuales aumentan su apertura a más del doble",
        src : desplazable,
        lines:["R","M","+60"]
    },
    {
        id : "v2",
        category : "ventana",
        title : "Ventana de Abrir",
        description : " Permite Ventilación de un 100% cuando está abierta. Es posible la limpieza del cristal por ambas caras desde el interior. Ofrece excelente aislamiento a largo plazo. Recomendable para espacios grandes",
        src : abrir,
        lines:["H","R","M","+60"]
    },
    {
        id : "v3",
        category : "ventana",
        title : "Ventana Corrediza",
        description : "Ahorra espacio. Ideal para colocar mosquiteros o rejas exteriores. Proporciona mejores vistas. La apertura es del 50% ya que una parte permanece fija.",
        src : corrediza,
        lines:["H","R","M","+60"]
    },
    {
        id : "v4",
        category : "ventana",
        title : "Ventana Fija",
        description : "Ahorra espacio. Ideal para optimizar la iluminación natural. Proporciona mejores vistas. Restringe al 100% el flujo de aire.",
        src : fija,
        lines:["H","R","M","+60"]
    },
    {
        id : "v6",
        category : "ventana",
        title : "Ventana Oscilobatiente",
        description : " Prácticas y versátiles. Dos tipos de apertura: banderola (manija para arriba permite una pequeña entrada de aire) y clásica (similar a una ventana de abrir)",
        src : oscilobatiente,
        lines:["R","M","+60"]
    },
    {
        id : "v7",
        category : "ventana",
        title : "Ventana Bandolera",
        description : "Ideal para baños, vestidores o lugares que necesiten poca corriente de aire. Apertura de hoja en 45°. Económicas y prácticas",
        src : bandolera,
        lines:["H","R","M","+60"]
    },
    {
        id : "v8",
        category : "ventana",
        title : "Ventiluz",
        description : " Prácticas. Hoja rebatible. Ideal para baños y cocinas",
        src : ventiluz,
        lines:["H","R","M","+60"]
    },
    {
        id : "p2",
        category : "puerta",
        title : "Puerta de Abrir",
        description : "Puerta de tipo estandar. La más elegida por la gente. Se puede utilizar en todo tipo de espacios y siempre queda bien",
        src : pabrir,
        lines:["H","R","M","+60"]
    },
    {
        id : "p3",
        category : "puerta",
        title : "Puerta Corrediza",
        description : "Ahorra espacio. Ideal para colocar mosquiteros o rejas exteriores. Proporciona mejores vistas. La apertura es del 50% ya que una parte permanece fija.",
        src : pcorrediza,
        lines:["H","R","M","+60"]
    },
    {
        id : "p4",
        category : "puerta",
        title : "Puerta Templada",
        description : "Puerta ideal para locales comerciales, oficinas, consultorios. Muy segura y resistente. De diseño corporativo e inovador",
        src : templada,
        lines:["","","",""]
    },
    {
        id : "g1",
        category : "vidrio",
        title : "Vidrio Float",
        description : "El vidrio más usado en la construcción consiste en una plancha de vidrio fabricada haciendo flotar el vidrio fuindido sobre una capa de estaño fundido. Eso le proporciona un grosor uniforme y una superficie muy plana, además de una transparencia perfecta.",
        src : float,
        lines:[]
    },
    {
        id : "g2",
        category : "vidrio",
        title : "Vidrio Stopsol",
        description : "Stopsol es un vidrio reflectante constituido por una luna flotada incolora o coloreada de bronce, gris, verde o azul oscuro. Una de las caras ha sido cubierta mediante un proceso pirolítico con una fina capa transparente de óxidos metálicos.",
        src : stopsol,
        lines:[]
    },
    {
        id : "g3",
        category : "vidrio",
        title : "Vidrio de Fantasía",
        description : "También conocido como coverglass, es un vidrio puntado en una de sus caras y que impide la visión a través del mismo. Cuentan con una amplia gama de colores que brindan una agradable sensación reflejando la luz de manera inusual. El permanente diálogo con la luz crea un sublime juego de delicados efectos",
        src : fantasia,
        lines:[]
    },
    {
        id : "g4",
        category : "vidrio",
        title : "Vidrio Curvo",
        description : "Los vidrios curvos se obtienen mediante el calentamiento del vidrio plano hasta su punto de plasticidad, dándole la forma deseada mediante moldes. Estos vidrios los comercializamos a pedido y tienen una demora mayor",
        src : curvo,
        lines:[]
    },
    {
        id : "g5",
        category : "vidrio",
        title : "Vidrio Ahumado",
        description : "Constituye una lámina plana de vidrio, sometida al humo de la llama de una vela de tal manera que una superficie de la lámina quede cubierta de una capa de residuos de humo. Podés pedirla en colores bronce o gris.",
        src : ahumado,
        lines:[]
    },
    {
        id : "g6",
        category : "vidrio",
        title : "DVH no es lo mismo que laminado",
        description : "El DVH (doble vidrio hermético) es un componente prefabricado compuesto por un conjunto de dos o más vidrios planos parelelos separados por un espaciador que están sellados herméticamente a lo largo de todo su perímetro",
        src : dvh,
        lines:[]
    },

    {
        id : "m1",
        category : "muro",
        title : "Sistema IBM",
        description : " Diseño comercial por excelencia. Permite acentuar la horizontalidad o verticalidad según el proyecto. Proporciona mejores vistas. Crea un diseño moderno y atractivo",
        src : ibm,
        lines:[]
    },
    {
        id : "m2",
        category : "muro",
        title : "Sistema Piel de Vidrio",
        description : "Diseño corporativo y financiero por excelencia. Permite acentuar la horizontalidad o verticalidad según el proyecto. Diseño más utilizado en todo el país",
        src : piel,
        lines:[]
    },
]
export default productsData;