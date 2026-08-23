document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Seguimiento de Egresados y Ocupación Laboral - Doctorado en Ciencias Agropecuarias (DCA)
   */
  const DATA_SEGUIMIENTO_DCA = [
    {
        "alumno": "Ayala Tafoya Felipe",
        "cohorte": "2011-2015",
        "director": "Dr. Leopoldo Partida Ruvalcaba",
        "email": "tafoya@uas.edu.mx",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "García Sañudo Juan Ángel",
        "cohorte": "2011-2015",
        "director": "Dr. Pedro Sánchez Peña",
        "email": "garcia.sañudo@gmail.com",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "López España Ricardo Guillermo",
        "cohorte": "2011-2015",
        "director": "Dr. Sergio Hernández Verdugo",
        "email": "ricardo-le@hotmail.com",
        "ocupacion": "Profesor-investigador, Universidad Tecnológica de Culiacán"
    },
    {
        "alumno": "Parra Delgado Juan Martín",
        "cohorte": "2011-2015",
        "director": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "email": "martinparra2004@yahoo.es",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Valenzuela López Marino",
        "cohorte": "2011-2015",
        "director": "Dr. Tomás Díaz Valdés,",
        "email": "marinova6@hotmail.com",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "López Pérez Héctor Manuel",
        "cohorte": "2011-2015",
        "director": "Dra. Soila Maribel Gaxiola Camacho",
        "email": "malopere@gmail.com",
        "ocupacion": "Profesor e investigador, FMVZ_UAS"
    },
    {
        "alumno": "Rubio Robles Mario César",
        "cohorte": "2011-2015",
        "director": "Dra. Soila Maribel Gaxiola Camacho",
        "email": "mariocesarrubio@hotmail.com",
        "ocupacion": "Profesor e Investigador, Facultad de Medicina Veterinaria y Zootecnia-UAS"
    },
    {
        "alumno": "Castro Carvajal José Manuel",
        "cohorte": "2012-2015",
        "director": "Dr. Raúl Parra Terrazas",
        "email": "jmc_carv@hotmail.com",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Cruz Ortega Jacobo Enrique",
        "cohorte": "2012-2016",
        "director": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "email": "cobicruz@hotmail.com",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Medina López Raymundo",
        "cohorte": "2012-2016",
        "director": "Dr. Leopoldo Partida Ruvalcaba",
        "email": "raymedinalop@hotmail.com",
        "ocupacion": "Docente 30 hrs base, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Oliva Ortiz Luz Del Carmen",
        "cohorte": "2012-2016",
        "director": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "email": "lolivao@hotmail.com",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Palacios Mondaca César Arturo",
        "cohorte": "2012-2016",
        "director": "Dr. Tomás Díaz Valdés",
        "email": "cesar_palaciosm@hotmail.com",
        "ocupacion": "Docente-Facultad de Agricultura del Valle del Fuerte"
    },
    {
        "alumno": "Retes Manjarrez Jesús Enrique",
        "cohorte": "2012-2016",
        "director": "Dr. Antonio Garzón Tiznado",
        "email": "retesmje@hotmail.com",
        "ocupacion": "Gerente de Investigación y Desarrollo, Wholesum Harvest"
    },
    {
        "alumno": "Sánchez Portillo Juan Fernando",
        "cohorte": "2012-2016",
        "director": "Dr. Gabriel Antonio Lugo García",
        "email": "fernando.sanchez@uas.edu.mx",
        "ocupacion": "Docente-Facultad de Agricultura del Valle del Fuerte"
    },
    {
        "alumno": "Sauceda Acosta Carlos Patricio",
        "cohorte": "2012-2016",
        "director": "Dr. Gabriel Antonio Lugo García",
        "email": "saucedap@uas.edu.mx",
        "ocupacion": "Docente-Facultad de Agricultura del Valle del Fuerte"
    },
    {
        "alumno": "Valenzuela Escoboza Fernando Alberto",
        "cohorte": "2012-2016",
        "director": "Dr. Álvaro Reyes Olivas",
        "email": "fernando.vzla@favf.mx",
        "ocupacion": "Director-Facultad de Agricultura del Valle del Fuerte"
    },
    {
        "alumno": "Yáñez Juárez Moisés Gilberto",
        "cohorte": "2012-2016",
        "director": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "email": "moisesyj@uas.edu.mx",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Félix Camacho Silvia Alicia",
        "cohorte": "2012-2016",
        "director": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "email": "lunazulosa@hotmail.com",
        "ocupacion": "Profesora e investigadora, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Cuén Beltrán Ramón Antonio",
        "cohorte": "2012-2016",
        "director": "Dra. Soila Maribel Gaxiola Camacho",
        "email": "cuen.ramon@gmail.com",
        "ocupacion": "Empresa propia de Salud Animal-Clínica Hospital de Especialidades Veterinarias Culiacán(HEVC)"
    },
    {
        "alumno": "Rojas Rojas Pedro Alberto",
        "cohorte": "2013-2017",
        "director": "Dr. Saúl Parra Terraza",
        "email": "ingpedro_rojas@hotmail.com",
        "ocupacion": "Universidad Tecnológica de Culiacán"
    },
    {
        "alumno": "López Avendaño Jesús Enrique",
        "cohorte": "2013-2017",
        "director": "Dr. Tomás Díaz Valdés",
        "email": "profe.jesus@uas.edu.mx",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Linares Holguín Orlando Omer",
        "cohorte": "2013-2017",
        "director": "Dr. Pedro Sánchez Peña",
        "email": "orlandomer@hotmail.com,",
        "ocupacion": "Investigación y desarrollo, Azteca Lighting S.A. de C.V en Mazatlán"
    },
    {
        "alumno": "Beltrán Millán Justo Christian",
        "cohorte": "2013-2017",
        "director": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "email": "jchristianbm@gmail.com",
        "ocupacion": "Empresa de Agroquímicos"
    },
    {
        "alumno": "Martínez Gallardo José Ángel",
        "cohorte": "2013-2017",
        "director": "Dr. Tomás Díaz Valdés,",
        "email": "jose_angel_13@hotmail.com",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Quintana Quiroz José Guadalupe",
        "cohorte": "2013-2017",
        "director": "Dr. Gabriel Antonio Lugo García",
        "email": "quintanajosegpe@gmail.com",
        "ocupacion": "Gerente de Desarrollo, en el Estado de Sonora, Valent de México, Compañía de Agroquímicos"
    },
    {
        "alumno": "Avendaño Meza Fabián",
        "cohorte": "2013-2017",
        "director": "Dr. Saúl Parra Terrazas Saúl",
        "email": "fabian@uas.edu.mx",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Salomón Montijo Vladimir",
        "cohorte": "2013-2017",
        "director": "Dr. Álvaro Reyes Olivas",
        "email": "vladimir.salomon@uas.edu.mx",
        "ocupacion": "Profesor en la Facultad de Biología UAS"
    },
    {
        "alumno": "Casillas Álvarez Pedro",
        "cohorte": "2013-2017",
        "director": "Dr. Álvaro Reyes Olivas",
        "email": "casillas.al@hotmail.com",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Hernández Espinal Luis Alberto",
        "cohorte": "2013-2017",
        "director": "Dra. Idalia Enríquez Verdugo Idalia",
        "email": "luis_albertohernandez@yahoo.com.mx",
        "ocupacion": "Profesor investigador, Centro de bachillerato tecnológico agropecuario No. 294"
    },
    {
        "alumno": "Moghaddam Gheslagh Ahmad",
        "cohorte": "2013-2017",
        "director": "Dr. Leopoldo Partida Ruvalcaba",
        "email": "ahmad.moghaddam@yahoo.com",
        "ocupacion": "Empresa propia"
    },
    {
        "alumno": "Aguilar Trejo Carlos Martín",
        "cohorte": "2013-2017",
        "director": "Dr. Javier Alonso Romo Rubio",
        "email": "caguilar@itson.edu.mx",
        "ocupacion": "Profesor e Investigador. Instituto Tecnológico de Sonora"
    },
    {
        "alumno": "Jiménez Leyva Diego",
        "cohorte": "2013-2017",
        "director": "Dr. Rubén Barajas Cruz",
        "email": "diegojiml@hotmail.com",
        "ocupacion": "Profesor e Investigador, Facultad de Medicina Veterinaria y Zootecnia-UAS"
    },
    {
        "alumno": "Pérez Corrales José Ascensión",
        "cohorte": "2013-2017",
        "director": "Dra. Soila Gaxiola Camacho Maribel",
        "email": "japerez04@gmail.com",
        "ocupacion": "Profesor e Investigador, Facultad de Medicina Veterinaria y Zootecnia-UAS"
    },
    {
        "alumno": "Heras Sierra Teresa de Jesús",
        "cohorte": "2013-2017",
        "director": "Dr. Rubén Barajas Cruz",
        "email": "tete852609@gmail.com",
        "ocupacion": "SAGARPA"
    },
    {
        "alumno": "Mariscal Castro José Ángel",
        "cohorte": "2013-2017",
        "director": "Dra. Idalia Enríquez Verdugo",
        "email": "mariscal.87@hotmail.com",
        "ocupacion": "Comités de Sanidad Animal, Gobierno del Estado de Sinaloa"
    },
    {
        "alumno": "Castro del Campo Nohemí",
        "cohorte": "2013-2017",
        "director": "Dra. Soila Gaxiola Camacho Maribel",
        "email": "ncastro@uas.edu.mx",
        "ocupacion": "Profesora e Investigadora, Facultad de Medicina Veterinaria y Zootecnia-UAS"
    },
    {
        "alumno": "Castro Tamayo Carlos Bell",
        "cohorte": "2013-2017",
        "director": "Dr. Jesús José Portillo Loera",
        "email": "castrotamayo@uas.edu.mx",
        "ocupacion": "Profesor e Investigador, Facultad de Medicina Veterinaria y Zootecnia-UAS"
    },
    {
        "alumno": "Hernández Ramírez Carlos Víctor",
        "cohorte": "2013-2017",
        "director": "Dra. Soila Maribel Gaxiola Camacho",
        "email": "mvzhernandez_sin@hotmail.com",
        "ocupacion": "Secretaría de Salud, SSA"
    },
    {
        "alumno": "Coronel Burgos Francisco",
        "cohorte": "2013-2017",
        "director": "Dr. Alfredo Estrada Angulo",
        "email": "coronel_bf@hotmail.com",
        "ocupacion": "Docente en UADO, Empresa de Nutrición animal"
    },
    {
        "alumno": "Esquer Miranda Edgar",
        "cohorte": "2013-2017",
        "director": "Dr. Mario Nieves Soto",
        "email": "edgard.esquer@gmail.com",
        "ocupacion": "Profesor en la Universidad Estatal de Sonora"
    },
    {
        "alumno": "Obregón Burgueño Yerico Belkis",
        "cohorte": "2014-2018",
        "director": "Dra. Teresa de Jesús Velázquez Alcara",
        "email": "yeko744@hotmail.com",
        "ocupacion": "Colaborador en la oficina de campaña y poscampaña del Gobernador Dr. Rubén Rocha Moya"
    },
    {
        "alumno": "Cárdenas Flores Antonio",
        "cohorte": "2014-2018",
        "director": "Dr. Saúl Parra Terraza,",
        "email": "acardenasfa@hotmail.com",
        "ocupacion": "Docente-Universidad Tecnológica de Culiacán"
    },
    {
        "alumno": "Leal Sandoval Alfredo",
        "cohorte": "2014-2018",
        "director": "Dr. Pedro Sánchez Peña",
        "email": "lealsan@gmail.com",
        "ocupacion": "Docente, Facultad de Biología-UAS"
    },
    {
        "alumno": "Félix Ortiz José Adán",
        "cohorte": "2014-2018",
        "director": "Dr. Nicolás Castañeda Lomas",
        "email": "feocabo@yahoo.com.mx",
        "ocupacion": "Profesor e Investigador, Facultad de Ciencias del Mar- UAS"
    },
    {
        "alumno": "León Cañedo Jesús Armando",
        "cohorte": "2014-2018",
        "director": "Dr. Tomás Díaz Valdéz",
        "email": "Leoncanedo_facimar@uas.edu.mx",
        "ocupacion": "Docente, Facultad de Ciencias del Mar- UAS"
    },
    {
        "alumno": "Romo Valdez Juan Manuel",
        "cohorte": "2014-2018",
        "director": "Dr. Javier Alonso Romo Rubio",
        "email": "romo_14@hotmail.com",
        "ocupacion": "Profesor FMVZ-Universidad Autónoma de Sinaloa , Profesor CBETA Recoveco Sinaloa"
    },
    {
        "alumno": "Vázquez López Yessica Viridiana",
        "cohorte": "2014-2018",
        "director": "Dra. Soila Maribel Gaxiola Camacho",
        "email": "yessica.vazquez@uas.edu.mx",
        "ocupacion": "Docente. Encargada del Laboratorio de Análisis de Alimentos-FMVZ_UAS"
    },
    {
        "alumno": "Fierro Sañudo Juan Francisco",
        "cohorte": "2014-2018",
        "director": "Dr. Gustavo Alejandro Rodríguez Montes de Oca",
        "email": "jf.fierro26@gmail.com",
        "ocupacion": "Investigador posdoctoral, Universidad de Pisa"
    },
    {
        "alumno": "Coronado Trejo Carmen Gabriela",
        "cohorte": "2014-2018",
        "director": "Dra. Idalia Enríquez Verdugo",
        "email": "gabrielacoronado@hotmail.com",
        "ocupacion": "Vet Clinic-Especialidades Vetetrinarias"
    },
    {
        "alumno": "Vargas Nava Alexis Israel",
        "cohorte": "2014-2018",
        "director": "Dra. Soila Maribel Gaxiola Camacho",
        "email": "catalexis19@hotmail.com",
        "ocupacion": "Desarrolla actividades de docencia e investigación - FMVZ-UAS"
    },
    {
        "alumno": "Abdo de la Parra María Isabel",
        "cohorte": "2014-2018",
        "director": "Dr. Gustavo Alejandro Rodríguez Montes de Oca",
        "email": "abdo@ciad.mx",
        "ocupacion": "Profesor-Investigador Titular A, Centro de Investigación en Alimentación y Desarrollo, Unidad Mzt. (CIAD)"
    },
    {
        "alumno": "Quintín Armando Ayala Armenta",
        "cohorte": "2015-2019",
        "director": "Dr. Hugo Beltrán Peña",
        "email": "Qaaa-4@hotmail.com",
        "ocupacion": "Profesor Facultad de Agricultura del Valle del Fuerte-UAS"
    },
    {
        "alumno": "Cipriano Fuentes Verduzco",
        "cohorte": "2015-2019",
        "director": "Dr. Miguel Ángel Apodaca Sánchez",
        "email": "inge_cip_@live.com.mx",
        "ocupacion": "Docente-Facultad de Agricultura del Valle del Fuerte"
    },
    {
        "alumno": "Elida Concepción González López",
        "cohorte": "2015-2019",
        "director": "Dr. Gabriel Lugo García",
        "email": "elida_1989@hotmail.com",
        "ocupacion": "Programa Sembrando Vida, Secrtearia del Bienestar"
    },
    {
        "alumno": "Carlos Eduardo Ornelas Ramírez",
        "cohorte": "2015-2019",
        "director": "Dr. Sergio Hernández Verdugo",
        "email": "carlios_reyes@hotmail.com",
        "ocupacion": "Agroindustrias del Norte,"
    },
    {
        "alumno": "José Manuel Osuna Rodríguez",
        "cohorte": "2015-2019",
        "director": "Dr. Sergio Hernández Verdugo",
        "email": "manuelmx123@gmail.com",
        "ocupacion": "Administrativo, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "César Romero Higareda",
        "cohorte": "2015-2019",
        "director": "Dr. Sergio Hernández Verdugo",
        "email": "cesar_romero_47@uas.edu.mx",
        "ocupacion": "Docente, Facultad de Biología-UAS"
    },
    {
        "alumno": "Jesús del Rosario Ruelas Islas Chuyita",
        "cohorte": "2015-2019",
        "director": "Dr. Álvaro Reyes Olivas",
        "email": "chuyitaruelas@esavf.edu.mx",
        "ocupacion": "Docente-Facultad de Agricultura del Valle del Fuerte"
    },
    {
        "alumno": "Tomás Aarón Vega Gutiérrez",
        "cohorte": "2015-2019",
        "director": "Dr. Carlos Alfonso López Orona",
        "email": "taa_gutierrez@hotmail.com",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Marcela Hernández Covarrubias",
        "cohorte": "2015-2019",
        "director": "Dr. Francisco Gerardo Ríos Rincón",
        "email": "marzhelach@gmail.com",
        "ocupacion": "Granja Porcina La Huerta,"
    },
    {
        "alumno": "Felipe de Jesús Gamboa del Real",
        "cohorte": "2015-2019",
        "director": "Dra. Beatriz Isabel Castro Pérez",
        "email": "felix_gam6@hotmail.com",
        "ocupacion": "Empresa privada, Clínica de especies"
    },
    {
        "alumno": "Alberto Garfio Romero",
        "cohorte": "2015-2019",
        "director": "Dra. Gabriela Silva Hidalgo",
        "email": "agarfio571@gmail.com",
        "ocupacion": "DOCENTE DE ASIGNATURA, FMVZ, UAS"
    },
    {
        "alumno": "Sarahí de Jesús Heras Sierra",
        "cohorte": "2015-2019",
        "director": "Dr. Jesús José Portillo Loera",
        "email": "sara_heras7@hotmail.com",
        "ocupacion": "Docente en UADO, Asesora en Lombricompostaje"
    },
    {
        "alumno": "Karla Hildeliza Leyva Medina",
        "cohorte": "2015-2019",
        "director": "Dr. Juan Carlos Robles Estrada",
        "email": "karla-hlm@hotmail.com",
        "ocupacion": "Empresa Privada (clínica de pequeñas especies)"
    },
    {
        "alumno": "Alejandro Rivera Villegas",
        "cohorte": "2015-2019",
        "director": "Dr. Alfredo Estrada Angulo",
        "email": "a-rivera-v@hotmail.com",
        "ocupacion": "Docente, en FMVZ de la Universidad Autónoma de Zacatecas"
    },
    {
        "alumno": "Luis Antonio Rojas Román",
        "cohorte": "2015-2019",
        "director": "Dra. Beatriz Isabel Castro Pérez",
        "email": "larr.mvz@gmail.com",
        "ocupacion": "Rancho El Álamo, Criador de Ovinos Kathadin"
    },
    {
        "alumno": "Jaime Noé Sánchez Pérez",
        "cohorte": "2015-2019",
        "director": "Dr. Horacio Dávila Ramos",
        "email": "jnsanchez25@gmail.com",
        "ocupacion": "Maestro de asignatura, FMVZ-UAS"
    },
    {
        "alumno": "Jorge Luis Miranda Camacho",
        "cohorte": "2015-2019",
        "director": "Dra. Idalia Enríquez Verdugo",
        "email": "eltermis@hotmail.es",
        "ocupacion": "Empresa Pecuaria Los Azabaches"
    },
    {
        "alumno": "Rebeca Flores Castro",
        "cohorte": "2015-2019",
        "director": "Dra. Soila Maribel Gaxiola Camacho",
        "email": "rebeca_ca12@hotmail.com",
        "ocupacion": "DOCENTE DE ASIGNATURA B, FMVZ, UAS"
    },
    {
        "alumno": "Alberto Iribe Zazueta",
        "cohorte": "2015-2019",
        "director": "Dr. Héctor Manuel López Pérez",
        "email": "alberto_iribe@hotmail.com",
        "ocupacion": "Empresa Pecuaria La Gallera"
    },
    {
        "alumno": "Eva Xitlalic Murillo Ayala",
        "cohorte": "2015-2019",
        "director": "Dr. Rubén Barajas Cruz",
        "email": "xitla.muri@gmail.com",
        "ocupacion": "Auto empleo"
    },
    {
        "alumno": "Melissa Belem Corona Palazuelos",
        "cohorte": "2015-2019",
        "director": "Dr. Rubén Barajas Cruz",
        "email": "Corona_melissa@hotmail.com",
        "ocupacion": "Técnico Pecuario, Sukarne"
    },
    {
        "alumno": "César Noé Badilla Medina",
        "cohorte": "2015-2019",
        "director": "Dra. Idalia Enríquez Verdugo",
        "email": "cesarnbadilla@gmail.com",
        "ocupacion": "Universidad Politécnica del Mar y la Sierra"
    },
    {
        "alumno": "Olivas Salazar Raquel",
        "cohorte": "2015-2019",
        "director": "Dr. Alfredo Estrada Angulo",
        "email": "ros2410@hotmail.com",
        "ocupacion": "Profesora e Investigadora, Universidad Autónoma Agraria Antonio Narro"
    },
    {
        "alumno": "Mario Martín Peraza Yee",
        "cohorte": "2016-2020",
        "director": "Dr. Mario Nieves Soto",
        "email": "mmpyee@gmail.com",
        "ocupacion": "Supervisor de calidad. En la producción de harina y aceite de pescado, Mazinza, Maz Industrial, sa de cv."
    },
    {
        "alumno": "Ricardo Castro López",
        "cohorte": "2016-2020",
        "director": "Dr. Moisés Gilberto Yáñez Juárez",
        "email": "ricardo_castro_lopez_100@hotmail.com",
        "ocupacion": "Profesor, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Cinthya Beatriz Romo Barrón",
        "cohorte": "2016-2020",
        "director": "Dr. Jesús José Portillo Loera",
        "email": "cinthya.romo.fmvz@uas.edu.mx",
        "ocupacion": "Auto empleo"
    },
    {
        "alumno": "Víctor Hugo Núñez Benítez.",
        "cohorte": "2016-2020",
        "director": "Dra. Beatriz Isabel Castro Pérez",
        "email": "mvzvictor_07@hotmail.com",
        "ocupacion": "Jede De Producción, Agropecuaria JS SA DE CV"
    },
    {
        "alumno": "Olivia Vanesa Encines Chaidez",
        "cohorte": "2016-2020",
        "director": "Dr. Felipe Ayala Tafoya",
        "email": "vanexa_07@hotmail.com",
        "ocupacion": "Auto empleo"
    },
    {
        "alumno": "Martín Abraham Tirado Ramírez.",
        "cohorte": "2016-2020",
        "director": "Dr. Carlos Alfonso López Orona",
        "email": "martin.tirado@uas.edu.mx",
        "ocupacion": "Docente Suelos y agua, Facultad de Agronmía-UAS"
    },
    {
        "alumno": "María Alejandra Payán Arzapalo",
        "cohorte": "2016-2020",
        "director": "Dr. Mosés Gilberto Yáñez Juárez",
        "email": "ingeniera_arzapalo@hotmail.com",
        "ocupacion": "Docente, Facultad de AgronomíaUAS"
    },
    {
        "alumno": "Luz Llarely Cázares Flores",
        "cohorte": "2016-2020",
        "director": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "email": "llare_luz@hotmail.com",
        "ocupacion": "Profesor e investigador, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Norma Delia Zazueta Torres",
        "cohorte": "2016-2020",
        "director": "Dr. Felipe Ayala Tafoya",
        "email": "norma_zazueta2812@hotmail.com",
        "ocupacion": "Docente, Instituto Tecnológico Superior de Eldorado"
    },
    {
        "alumno": "Daniel Mendoza Medrano",
        "cohorte": "2016-2020",
        "director": "Dr. Carlos Alfonso López Orona",
        "email": "daniel.mendoza2508@gmail.com",
        "ocupacion": "Profesor, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Gilberto Quevedo Rocha",
        "cohorte": "2016-2020",
        "director": "Dra. Soila Maribel Gaxiola Camacho",
        "email": "quevedo-10@live.com.mx",
        "ocupacion": "Docente de Tiempo Completo Titular &ldquo;C&rdquo;, Dirección General de Educación Tecnológica Agropecuaria y de Ciencias del Mar"
    },
    {
        "alumno": "José Antonio Aguilar Quiñonez",
        "cohorte": "2016-2020",
        "director": "Dr. Rubén Barajas Cruz",
        "email": "palomo_98@hotmail.com",
        "ocupacion": "Profesor, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Arnulfo Vicente Pérez",
        "cohorte": "2016-2020",
        "director": "Dr. Rubén Barajas Cruz",
        "email": "arnulfo.montero@uas.edu.mx",
        "ocupacion": "Profesor, Facultad de Agronomía-UAS"
    },
    {
        "alumno": "Alejandro Ramos Suárez",
        "cohorte": "2016-2020",
        "director": "Dr. Rubén Barajas Cruz",
        "email": "ars10101981@gmail.com",
        "ocupacion": "Área de nutrición, empresa particular"
    },
    {
        "alumno": "Mendoza Gómez Aurelia",
        "cohorte": "2016-2020",
        "director": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "email": "aurelia.mendoza@uabc.edu.mx",
        "ocupacion": "PROFESORA E INVESTIGADORA, FACULTAD DE INGENIERÍA Y NEGOCIOS SAN QUINTÍN"
    },
    {
        "alumno": "Cárcamo Aréchiga Roberto Carlos",
        "cohorte": "2016-2020",
        "director": "Dr. Álvaro Reyes Olivas",
        "email": "roberto.carcamoa@uas.edu.mx",
        "ocupacion": "Docente, Facultad de Biología-UAS"
    },
    {
        "alumno": "Flores Dueñas César Augusto",
        "cohorte": "2016-2020",
        "director": "Dra. Soila Maribel Gaxiola Camacho",
        "email": "cesardvm@hotmail.com",
        "ocupacion": "Profesor-Investigador, Instituto de Investigaciones en Ciencias Veterinarias, UABC"
    },
    {
        "alumno": "Zamudio Vázquez Vicente Paul",
        "cohorte": "2016-2020",
        "director": "Dr. José Antonio Garzón Tiznado",
        "email": "paulzamudio@icloud.com",
        "ocupacion": "Syngenta, Corporativo, Culiacán"
    },
    {
        "alumno": "Borbón Gracia Alberto",
        "cohorte": "2016-2020",
        "director": "Dr. Gabriel Antonio Lugo García",
        "email": "borbongracia@hotmail.com",
        "ocupacion": "Investigador en INIFAP-Obregón"
    }
];

  const searchInput = document.getElementById("busquedaSeguimientoDCA");
  const cohorteFilter = document.getElementById("filtroCohorteSeguimientoDCA");
  const tbody = document.querySelector("#tablaSeguimientoDCA tbody");
  const paginationUl = document.getElementById("paginacionSeguimientoDCA");

  const rowsPerPage = 10;
  let currentPage = 1;
  let filteredData = [...DATA_SEGUIMIENTO_DCA];

  function populateCohorteFilter() {
    const cohortes = [...new Set(DATA_SEGUIMIENTO_DCA.map(item => item.cohorte))].sort().reverse();
    cohortes.forEach(cohorte => {
      const option = document.createElement('option');
      option.value = cohorte;
      option.innerText = cohorte;
      cohorteFilter.appendChild(option);
    });
  }

  function renderTable() {
    tbody.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = filteredData.slice(start, end);

    if (paginatedData.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-muted">No se encontraron resultados para los filtros seleccionados.</td></tr>';
      return;
    }

    paginatedData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="text-center">${item.cohorte}</td>
        <td><strong>${item.alumno}</strong></td>
        <td>${item.director}</td>
        <td>${item.email !== 'N/D' ? '<a href="mailto:' + item.email + '">' + item.email + '</a>' : '<span class="text-muted">N/D</span>'}</td>
        <td>${item.ocupacion}</td>
      `;
      tbody.appendChild(row);
    });
  }

  function setupPagination() {
    paginationUl.innerHTML = '';
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (totalPages <= 1) return;

    const addBtn = (text, targetPage, active = false, disabled = false) => {
      const li = document.createElement('li');
      li.className = `page-item ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`;
      li.innerHTML = `<a class="page-link" href="#">${text}</a>`;
      if (!disabled && !active) {
        li.onclick = (e) => {
          e.preventDefault();
          currentPage = targetPage;
          renderTable();
          setupPagination();
        };
      }
      paginationUl.appendChild(li);
    };

    addBtn('&laquo;', currentPage - 1, false, currentPage === 1);

    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    if (start > 1) {
      addBtn(1, 1);
      if (start > 2) addBtn('...', null, false, true);
    }

    for (let i = start; i <= end; i++) {
      addBtn(i, i, i === currentPage);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) addBtn('...', null, false, true);
      addBtn(totalPages, totalPages);
    }

    addBtn('&raquo;', currentPage + 1, false, currentPage === totalPages);
  }

  function applyFiltersAndRender() {
    const q = searchInput.value.toLowerCase().trim();
    const c = cohorteFilter.value;

    filteredData = DATA_SEGUIMIENTO_DCA.filter(d => 
      (!c || c === 'todos' || d.cohorte === c) &&
      (!q || Object.values(d).some(v => String(v).toLowerCase().includes(q)))
    );

    currentPage = 1;
    renderTable();
    setupPagination();
  }

  populateCohorteFilter();
  applyFiltersAndRender();

  searchInput.addEventListener('input', applyFiltersAndRender);
  cohorteFilter.addEventListener('change', applyFiltersAndRender);
});
