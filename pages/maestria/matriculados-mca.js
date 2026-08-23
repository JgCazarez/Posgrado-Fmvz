document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Estudiantes Matriculados - Maestría en Ciencias Agropecuarias (MCA)
   */
  const DATA_MATRICULADOS_MCA = [
    {
        "cohorte": "2008-2010",
        "alumno": "Banda Perea Rosario Celene",
        "tutor": "Dr. Tomás Díaz Valdés",
        "tesis": "Uso eficiente del nitrógeno , el agua y producción de maíz con cinco dosis de nitrógeno"
    },
    {
        "cohorte": "2008-2010",
        "alumno": "Espino García Marco Antonio",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "Efecto de la adición de propionato de cromo a la dieta en la respuesta inmune y desempeño productivo de toretes en engorda intensiva"
    },
    {
        "cohorte": "2008-2010",
        "alumno": "Borboa Olivas Jesús Alejandro",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Producción de anticuerpos policlonales para antígenos de Micobacterium bovis"
    },
    {
        "cohorte": "2008-2010",
        "alumno": "Miguel Ángel Rodríguez Gaxiola (SNI)",
        "tutor": "Dr. Javier Alonso Romo Rubio",
        "tesis": "Respuesta de la adición de zinc orgánico al alimento en la calidad seminal de ovinos de pelo"
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Angulo Castro Azareel",
        "tutor": "Dr. Manuel Villarreal Romero",
        "tesis": "Producción de biomasa, fijación de N2 y actividad microbiana del suelo bajo cultivo de cobertura con Mucuna pruriens"
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Gerardo García Juan José",
        "tutor": "Dr. Sergio Hernández Verdugo",
        "tesis": "Patrones de variación morfológica en chile silvestre ( Capsicum annuum var glabriusculum ) del noroeste de México"
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Menchaca Ceja Felipe",
        "tutor": "Dra. Teresa De Jesús, Velázquez Alcaraz",
        "tesis": "Crecimiento y rendimiento de grano de sorgo en respuesta al paclobutrazol aplicado en semilla o follaje"
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Mendoza Medrano Daniel",
        "tutor": "Dr. Tomás Díaz Valdés",
        "tesis": "Comportamiento del maíz (Z ea mays L.) baja diferentes fechas de siembra"
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Retes Manjarrez Jesús Enrique",
        "tutor": "Dr. Leopoldo Partida Ruvalcaba",
        "tesis": "Detección de genotipos de solanum lycopersicum l. resistentes al permanente del tomate ( Candidatus liberibacter solanacearum )"
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Cuén Beltrán Ramón Antonio",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Identificación de Mycobacterium avium subespecie paratuberculosis en ovinos de Culiacán, Sinaloa"
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Félix Camacho Silvia Alicia",
        "tutor": "Dr. Javier Alonso Romo Rubio",
        "tesis": "Respuesta reproductiva de la cerda en anestro lactacional al consumo adicional de cromo orgánico y aplicación de GNRH-A"
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Ortiz López Briceida",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "Efecto de implantes con zeranol y trenbolona + estradol en la respuesta productiva de ovinos de pelo en engorda intensiva."
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Camacho Castellanos Alejandro",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "Influencia de la adición de extracto de taninos a la dieta en la respuesta reproductiva y características de la canal de toretes en engorda intensiva"
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Cárdenas Dávila Pedro Edgardo",
        "tutor": "Dr. Gustavo Alejandro Rodríguez Montes de Oca",
        "tesis": "Descripción del crecimiento y supervivencia de la tilapia roja ( Oreochromis spp ) cultivada en jaulas flotantes en ambiente marino."
    },
    {
        "cohorte": "2009-2011",
        "alumno": "Lugo Melchor Rafael",
        "tutor": "N/D",
        "tesis": "Etnobotánica y variación molecular en poblaciones de maíces nativos de Culiacán, Sinaloa, México."
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Mendivil Trujillo Héctor Ramiro",
        "tutor": "Dr. Leopoldo Partida Ruvalcaba",
        "tesis": "Identificación molecular de razas fisiológicas de Fusarium oxysporum f. sp. licopercici en el estado de Sinaloa, México"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Iñiguez Torres Karina Janeth",
        "tutor": "MC Moisés Barajas Ortiz",
        "tesis": "Análisis metodológico para determinar resistencia en genotipo de tomate ( Solanum licopersicum l. ) a Candidatos liberibacter solanacearum"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Cervantes Romero Benjamín",
        "tutor": "Dra. Teresa De Jesús Velázquez Alcaraz",
        "tesis": "Crecimiento y rendimiento de del frijol cultivado con fertilizante nitrogenado y paclobutrazol aplicado foliarmente"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Valdez Rubio Nallely",
        "tutor": "Dr. Leopoldo Partida Ruvalcaba",
        "tesis": "Identificación de especies de Fusarium presentes en el cultivo del maíz en regiones de Sinaloa"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Linares Holguín Orlando Omer",
        "tutor": "Dr. Pedro Sánchez Peña",
        "tesis": "Análisis de la diversidad genética de Pholisma culiacanum"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Ramírez Soto Milagros",
        "tutor": "Dr. Leopoldo Partida Ruvalcaba",
        "tesis": "Propiedades físicas, agronómicas y contenido de proteína de genotipos de garbanzo en ambientes del noroeste de México"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Pérez López Oscar",
        "tutor": "Dr. Álvaro Reyes Olivas",
        "tesis": "Viviparidad de Pachycereus pecten aboriginum ( cactaceae ) y sus implicaciones en germinación y supervivencia."
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Cárdenas Flores Antonio",
        "tutor": "Dra. Saúl Parra Terraza",
        "tesis": "Respuesta al cloro y sodio en la solución nutritiva, producción de plántulas y rendimiento de tomate hidropónico"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Castro López Ricardo",
        "tutor": "Dr. Leopoldo Partida Ruvalcaba",
        "tesis": "Alternativas para el manejo de Meloidogyne spp en el cultivo de pepino bajo condiciones de invernadero"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Vega Gutiérrez Tomás Aarón",
        "tutor": "Dr. Tomás Díaz Valdés,",
        "tesis": "Influencia del estrés hídrico en variables fenotípicas e incidencia de plagas en maíz"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "López Aispuro Carlos Vladimir",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Identificación de Anaplasma phagocytophilum por PCR anidado en equinos de Culiacán, Sinaloa."
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Mariscal Castro José Ángel",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Identificación de las especies de Anaplasma en bovinos por técnicas moleculares."
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Covarrubias Hernández Marcela",
        "tutor": "Dr. Javier Alonso Romo Rubio",
        "tesis": "Efecto del consumo adicional de cromo en cerdas prepúberes en el desempeño reproductivo posterior"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Aréchiga Castillo Sergio Candelario",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "Efecto del tiempo consumiendo extracto de taninos sobre el nitrógeno ureico en plasma, respuesta productiva y características de la canal de toretes en engorda intensiva"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Montoya Torrero Antonino Darío",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "Influencia de la adición de metionina de cromo y taninos en la respuesta productiva y características de la canal de bovinos en engorda intensiva"
    },
    {
        "cohorte": "2010-2012",
        "alumno": "González González Daniel",
        "tutor": "Dr. Javier Alonso Romo Rubio",
        "tesis": "Influencia de la edad de corte, densidad de siembra y arreglo de surco en la producción de forraje de las variedades Humaya y Tainung-2 de Kenaf cultivadas en el valle de Culiacán, Sinaloa."
    },
    {
        "cohorte": "2010-2012",
        "alumno": "Ramos Acosta Heribier",
        "tutor": "Dra. Idalia Enríquez Verdugo",
        "tesis": "Efecto de la duración de la suplementación energética en la actividad ovárica de vacas para carne"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Heras Sierra Teresa de Jesús",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "Influencia de la adición de extracto de taninos en la presencia de Escherichia col i, en las heces de bovinos en engorda."
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Martínez Gallardo José Ángel",
        "tutor": "Dr. Tomás Díaz Valdés",
        "tesis": "Identificación y cuantificación de nemátodos fitoparásitos en el cultivo de papaya y su interacción con características edáficas."
    },
    {
        "cohorte": "2011-2013",
        "alumno": "López Cuén Pedro Iván",
        "tutor": "Dr. Leopoldo Partida R",
        "tesis": "Compatibilidad del paclobutrazol con insecticidas, fungicidas, fertilizantes foliares y reguladores del crecimiento"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Félix Ortiz José Adán",
        "tutor": "Dr. Nicolás Casteñeda Lomas",
        "tesis": "Variabilidad ambiental y su efecto sobre la abundancia de postlarvas de camarón Penaidae en dos zonas del Pacífico mexicano"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Ayala Armenta Quintín Armando",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Efectividad de fungicidas para el control del moho blanco Sclerotiorum (Lib) de Bary en frijól"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Encines Chaidez Olivia Vanessa",
        "tutor": "Dr. Tomás Díaz Valdez",
        "tesis": "Producción de tomate con uso de sustratos orgánicos y diferentes soluciones nutritivas en invernadero"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "González Canizales Jesús Francisco",
        "tutor": "Dr. Leopoldo Partida R",
        "tesis": "Respuesta de genotipos de tomate ( Solanum lycopersicum ) al virus del Tomato Yellow leaf curt virus (TYLCV)"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "López Molina Ramón",
        "tutor": "Dr. Leopoldo Partida R",
        "tesis": "Análisis de multiresistencia genética de variedades de garbanzo generadas en el noroeste de México a la fusariocis vascular y pudrición radicular"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Millán Chaidez Reynaldo",
        "tutor": "Dr. Leopoldo Partida R",
        "tesis": "Determinación de transmisión transovárica y retención de de Candidatus liberibacter solanacearum por paratrioza (Bactericera cockerelli Sulc .)"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Molina Cárdenas Lorena",
        "tutor": "Dr. Leopoldo Partida R",
        "tesis": "Búsqueda de fuentes de resistencia en genotipos de garbanzo generados en Sonora a la pudrición radicular ocasionado por Fusarium solani"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Tirado Ramírez Martín Abraham",
        "tutor": "Dr. Díaz Valdés Tomás",
        "tesis": "Estimación de la evapotranspiración real en maíz utilizando la técnica del cintilómetro y el método de la FAO penman- monteith"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Zamora Galván Francisco",
        "tutor": "Dr. Leopoldo Partida R",
        "tesis": "Búsqueda de la resistencia genética en genotipo de garbanzo generados en Sinaloa a la fusariosis vascular ocasionada por la raza 5 de foc."
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Romo Valdez Juan Manuel",
        "tutor": "Dr. Javier Alonso Romo Rubio",
        "tesis": "Efecto de la aplicación intrauterina de semen adicionado con oxitocina en la respuesta productiva de cerdas servidas durante el verano y otoño"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Vargas Nava Alexis Israel",
        "tutor": "Dra. Gaxiola Camacho Soila Maribel",
        "tesis": "Prevalencia y viabilidad de Toxocara canis en parques públicos de la ciudad de Culiacán, Sinaloa."
    },
    {
        "cohorte": "2011-2013",
        "alumno": "Verdugo Insúa Moisés",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "Influencia de la adición de metionina de zinc y clorhidrato de zilpaterol en la respuesta productiva y características de la canal de toretes en finalización"
    },
    {
        "cohorte": "2011-2013",
        "alumno": "López López Ramón Cristino",
        "tutor": "Dr. Tomás Díaz Valdez",
        "tesis": "Efecto del paclobutrazol en el desarrollo de caña de azúcar en la fase de aclimatación"
    },
    {
        "cohorte": "2012-2014",
        "alumno": "Gómez Martínez José Rigoberto (TP)",
        "tutor": "Dra. Velázquez Alcaraz Teresa de Jesús",
        "tesis": "Conductancia estomática, bióxido de carbono asimilado, transpiración y producción del tomate cultivado en tres ambientes"
    },
    {
        "cohorte": "2012-2014",
        "alumno": "Coronado Trejo Carmen Gabriela",
        "tutor": "Dra. Enríquez Verdugo Idalia",
        "tesis": "Identificación de Anaplasma phagocytophilum mediante la técnica de PCR en perros de Culiacán, Sinaloa."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Zazueta Torres Norma Delia",
        "tutor": "Dra. Velázquez Alcaraz Teresa de Jesús",
        "tesis": "Respuesta del melón y sandía al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Quintero Morales María Alejandra",
        "tutor": "Teresa de Jesús Partida Ruvalcaba Leopoldo",
        "tesis": "Respuesta del algodón y ajonjolí al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Cázares Flores Luz Llarelly",
        "tutor": "Dra. Velázquez Alcaraz Teresa de Jesús",
        "tesis": "Efecto que ocasiona el paclobutrazol aplicado foliarmente en plantas de pepino y calabaza"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Almada Ruiz Víctor Gabriel",
        "tutor": "Dr. Lugo García Gabriel A",
        "tesis": "Actividad biológica de extractos etanólicos de meliáceas en Diaphorina citri Kuwayama 1908 (hemiptera: liviidae) en ambientes controlados."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Ornelas Ramírez Carlos Eduardo",
        "tutor": "Dr. Hernández Verdugo Sergio",
        "tesis": "Colecta y estimación de la variación genética y morfológica de poblaciones silvestres y criollos de chile ( Capsicum sp. ) del noroeste de México"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "González López Elida Concepción",
        "tutor": "Dr. Hernández Verdugo Sergio",
        "tesis": "Búsqueda de resistencia a virus huasteco de la vena amarilla en chile (Phyvv) en poblaciones silvestres y criollas de chile ( Capsicum spp.)."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Román Román Leonardo",
        "tutor": "Dr. López Avendaño Jesús Enrique",
        "tesis": "Cálculo de la evapotranspiración en chile ( Capsicum annuum L.) mediante los métodos penman-monteiht y el cintilómetro"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Osuna Pérez Marco Antonio",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "Efecto de la adición de extracto de Macleaya cordata a la dieta con alto riesgo de acidosis subaguda en ovinos en finalización."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Sánchez Pérez Jaime Noé",
        "tutor": "Dr. Horacio Dávila Ramos",
        "tesis": "Influencia de NNP de liberación lentaCon niveles de zeolita en respuesta productiva, características de canal y metabolitos sanguíneos de ovinos en finalización."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Camacho González Luis Roberto",
        "tutor": "Dr. Horacio Dávila Ramos",
        "tesis": "Evaluación de la adición de una fuente de NNP de liberación controlada (Optigen 1200®) en dietas integrales sobre comportamiento productivo y niveles de nitrógeno en leche (MUN) para vacas productoras de leche en el trópico seco."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Aguirre Meza Rubén",
        "tutor": "Dr. Romo Rubio Javier Alonso",
        "tesis": "Efecto del consumo adicional de extracto de taninos en la respuesta productiva de cerdos en crecimiento-finalización"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Castro Flores Rebeca",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Detección de Lentivirus en pequeños rumiantes (LVPR) hatos mixtos de ovinos y caprinos en Culiacán, Sinaloa"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Romo Barrón Cinthya Beatriz",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "Comportamiento reproductivo de vacas Holstein en lactación utilizando diferentes protocolos de sincronización de estro en trópico seco"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Badilla Medina Cesar Noé",
        "tutor": "Dra. Idalia Enríquez Verdugo",
        "tesis": "Identificación de Gen MSP4 de Anaplasma ovis de pequeños rumiantes."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Iribe Zazueta Alberto",
        "tutor": "Dra. Enríquez Verdugo Idalia",
        "tesis": "Caracterización de genes de la membrana externa del sistema de secreción tipo iv de Anaplasma marginale."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Miranda Camacho Jorge Luis",
        "tutor": "Dra. Enríquez Verdugo Idalia",
        "tesis": "Tipificación molecular del gen IS900 de Mycobacterium avium subsp. paratuberculosis en ovinos y caprinos en Culiacán, Sinaloa."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Murillo Ayala Eva Xitlalic",
        "tutor": "Dr. Barajas Cruz Rubén",
        "tesis": "Influencia de la adición de extracto de taninos condensados en la producción de gas in vitro de las heces de bovinos en engorda"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Rojas Román Luis Antonio",
        "tutor": "Dra. Beatriz Isabel Castro Pérez",
        "tesis": "Efecto de la adición de zeolita (Clinoptilolita) en la respuesta productiva y características de la canal de ovinos de pelo en dietas de finalización"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Leyva Medina Karla Hildeliza",
        "tutor": "Dr. Juan Carlos Robles Estrada",
        "tesis": "Método de suministro del clorhidrato de zilpaterol en ovinos: crecimiento, características de la canal y calidad de la carne."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Corona Palazuelos Melissa Belem",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "Influencia de la adición de extracto de taninos en la carga por nematodos en becerros recién llegados al corral de engorda"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Quintero Beltrán Denisse Carmina",
        "tutor": "Dr. Jesús José Portillo Loera",
        "tesis": "Eficiencia reproductiva de borregas pelibuey de acuerdo a la época de empadre y la restricción del amamantamiento"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Bonilla Valverde Elmer Benjamín",
        "tutor": "Dr. Romo Rubio Javier Alonso",
        "tesis": "Influencia del consumo adicional de taninos en la respuesta productiva de corderos en engorda"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Robles Camargo Tirzo",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "Efecto de diferentes protocolos de sincronización del estro e inseminación artificial a tiempo fijo en la respuesta reproductiva de vacas Holstein x Gyr explotadas en el trópico seco."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Heras Sierra Sarahí de Jesús",
        "tutor": "Dr. Horacio Dávila Ramos",
        "tesis": "Efecto de la dinámica del crecimiento y producción de la lombriz roja californiana ( Eisenia foetida .) bajo la influencia de tres sustratos diferentes a base de estiércol de origen animal."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Sauceda Luna Rosa María de Jesús",
        "tutor": "Dr. Nicolás Castañeda Lomas",
        "tesis": "Exploración y validación de marcas de crecimiento de estructuras duras de jaiba azul Callinectes arcuatus (ORDWAY 1863) en Sinaloa."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Sauceda Acosta Raúl Hipólito",
        "tutor": "Dr. Lugo García G. Antonio",
        "tesis": "Fertilización nitrogenada en garbanzo ( Cicer arietinum L.) en el norte de Sinaloa."
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Acosta López Ruth Desiré",
        "tutor": "Dra. Velázquez Alcaraz Teresa de Jesús",
        "tesis": "Respuesta del ajo y papa al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Caro López Eder",
        "tutor": "Dra. Velázquez A. Teresade Jesús",
        "tesis": "Manejo de picudo de chile Anthonomus eugenii cano usando tierra de diatomea, en Culiacán, Sinaloa"
    },
    {
        "cohorte": "2013-2015",
        "alumno": "Soto Moreno Luis Esteban (TP)",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "Influencia de la adición de extracto de Macleaya cordata en la presencia de Escherichia coli en bovinos de engorda"
    },
    {
        "cohorte": "2015-2017",
        "alumno": "Mayra Gisell López Salazar",
        "tutor": "Dra. Gabriela Silva Hidalgo",
        "tesis": "Efecto de diferentes protocolos de sincronización del estro e inseminación artificial a tiempo fijo en la respuesta reproductiva de vacas Holstein x Gyr explotadas en el trópico seco."
    },
    {
        "cohorte": "2015-2017",
        "alumno": "Marlie Guadalupe Beltrán Minjarez",
        "tutor": "Dr. Horacio Dávila Ramos",
        "tesis": "Efecto de la dinámica del crecimiento y producción de la lombriz roja californiana ( Eisenia foetida .) bajo la influencia de tres sustratos diferentes a base de estiércol de origen animal."
    },
    {
        "cohorte": "2015-2017",
        "alumno": "Mariano Llanes González",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "Exploración y validación de marcas de crecimiento de estructuras duras de jaiba azul Callinectes arcuatus (ORDWAY 1863) en Sinaloa."
    },
    {
        "cohorte": "2015-2017",
        "alumno": "Salomón Buelna Tarín",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Fertilización nitrogenada en garbanzo ( Cicer arietinum L.) en el norte de Sinaloa."
    },
    {
        "cohorte": "2015-2017",
        "alumno": "Quevedo Soto Gilberto",
        "tutor": "Dr. Velázquez Alcaraz Teresa de Jesús",
        "tesis": "Respuesta del ajo y papa al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas"
    },
    {
        "cohorte": "2016-2018",
        "alumno": "Miguel Antonio Cárdenas Contreras",
        "tutor": "Dr. Jesús José Portillo Loera.",
        "tesis": "La inclusión de extracto de ajo y cebolla en el alimento de gallinas reduce la presencia de Salmonella enteritidis en el huevo."
    },
    {
        "cohorte": "2016-2018",
        "alumno": "Natalia Heredia Burgos",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Detección babesia spp en Rhipicephalus sanguineus de caninos en culiacán, sinaloa."
    },
    {
        "cohorte": "2016-2018",
        "alumno": "Ana Citlaly Zazueta Gutiérrez",
        "tutor": "Dr. Francisco Gerardo Ríos Rincón",
        "tesis": "Valoración de indicadores de bienestar animal en bovinos productores de carne en finalización intensiva."
    },
    {
        "cohorte": "2016-2018",
        "alumno": "Jesús Alfonso Quintero Díaz.",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Detección de Theileria equi y Bebesia caballi en equinos en culiacán, sinaloa"
    },
    {
        "cohorte": "2016-2018",
        "alumno": "Erick Gabriel Ríos Jiménez",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Grados Brix, su relación con plagas y enfermedades encapsicum annuum l. en Sinaloa, México"
    },
    {
        "cohorte": "2016-2018",
        "alumno": "Oriandy Mabel Perea Longoria",
        "tutor": "Dr. Tomás Díaz Valdés",
        "tesis": "Identificación y distribución de especies del nematodo agallador ( meloidogyne spp.) En chile ( capsicum annuum l.) En el estado de Sinaloa."
    },
    {
        "cohorte": "2016-2018",
        "alumno": "Juan Carlos Cordero Armenta",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "Efecto de la temperatura en el rendimiento del cultivo de cebolla blanca ( Allium cepa L.) en el Valle de Culiacán, Sinaloa"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Beltrán Lucas Luis Andrés",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Efecto de la biofertilización con hongos micorrízicos en granos de maíz ( Zea mays , L.)"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Briseyda Jatzel Félix Leyva",
        "tutor": "Dr. Horacio Dávila Ramos",
        "tesis": "Frecuencia, factores de riesgo e impacto económico de las contusiones en la canal de bovinos productores de carne en Culiacán, Sinaloa, México"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "González Alfaro Arturo",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Psílidos (Hemiptera: Psylloidea) asociados a cultivos agrícolas y arvenses en el norte de Sinaloa."
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Ana Mireya Romo Valdez",
        "tutor": "Dr. Francisco Gerardo Ríos Rincón",
        "tesis": "Mitigación del impacto ambiental en la respuesta productiva y calidad de la carne en bovinos en finalización intensiva"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Kinzú Berenice Castro Valdez",
        "tutor": "DR. CARLOS ALFONSO LÓPEZ ORONA",
        "tesis": "Análisis del comportamiento In vitro de Fusarium oxysporum f. sp. lycopersici en medios salinos sólidos y líquidos."
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Julián Alberto Galavíz Lara (TP)",
        "tutor": "Dr. Pedro Sánchez Peña",
        "tesis": "SELECCIÓN DE CEPAS DE BACILUS spp. Y TRICHODERMA spp. Y SU APLICACIÓN CON COMPOSTAS PARA El ONTROL DE LA RABIA EN GARBANZO BLANCO ( Cícer arietinum L.)"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Lugo Luján Jonathan Misael",
        "tutor": "Dr. José Antonio Garzón Tiznado",
        "tesis": "Detección de resistencia a mosca blanca en genotipos silvestres y criollos de Solanum spp."
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Alan Douriet Angulo",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "Identificación de especies de Fusarium causantes de pudrición de grano de maíz (Zea mayz) en el estado de Sinaloa"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Walter Arturo Rubio Aragón",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "Identificación de resistencia genética de genotipos de chile (Capsicum annuum) al picudo (Anthonomus eugenii)"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Juan Gaxiola Félix (TP)",
        "tutor": "Dr. Álvaro Reyes Olivas",
        "tesis": "Estudio Florístico de la Planicie y arroyo El Aguaje de la Sierra de Barobampo, municipio de Ahorne, Sinaloa, México"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Marquéz Zequera Isidro (TP)",
        "tutor": "Dr. José Antonio Garzón Tiznado",
        "tesis": "Identificación y caracterización de la bacteria Clavibacter michiganensis subsp. michiganensis."
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Diana Zuleika Velázquez Valdez",
        "tutor": "Dra. Gabriela Silva Hidalgo",
        "tesis": "INCIDENCIA E IDENTIFICACION MOLECULAR DE Salmonella spp AISLADA DE UNA GRANJA PORCINA DE CICLO COMPLETO EN CULIACÁN, SINALOA."
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Jorge Alberto Edeza Urias",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "Análisis de resistencia genética de genotipos de garbanzo (Cicer arietinum L.) a razas de Fusarium oxysporum f. sp. ciceris de Sinaloa"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Valeria Gómez Pérez",
        "tutor": "Dr. Pedro Sánchez Peña",
        "tesis": "Valoración In situ y uso de poblaciones de maíces nativos de Sinaloa, México."
    },
    {
        "cohorte": "2017-2019",
        "alumno": "llse Anahi Medina Armenta",
        "tutor": "Dra. Beatriz Isabel Castro Pérez",
        "tesis": "Evaluación de distintos tipos de corral para la mitigación de estrés calórico y bienestar animal durante las etapas de crecimiento y finalización de bovinos: respuesta productiva y características de canal"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Claudia Leonor Barraza Tizoc (TP)",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Homología en poblaciones de garrapatas Riphicephalus ( Boophilus ) microplus"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Jesús Daniel Solís Carrasco (TP)",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Efecto de la fermentación anaeróbica en las excretas de cerdo sobre los huevos de Ascaris suum como organismo indicador de la eliminación de patógenos."
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Lucio Ricardo Ibáñez Garduño (TP)",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "ANAPLASMOSIS EN VENADO COLA BLANCA (Odocoileus virqinianus) Y SU POSIBLE INTERACCIÓN EN EL GANADO BOVINO EN EL MUNICIPIO DE CULIACÁN, SINALOA."
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Jesús Antonio Ceballos Rubio",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Patrón de fermentación de protozoarios en rumiantes"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Guillermo Gómez González",
        "tutor": "Dr. Roberto Gastélum Luque",
        "tesis": "Efecto de diferentes densidades de nematodo agallador (Meloidogyne spp.) en el cultivo de pepino {Cucumis sativus L.)"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Lucila Guillermina Beltrán Vega",
        "tutor": "Dra. Idalia Enríquez Verdugo",
        "tesis": "Identificación Molecular de la Babesia spp en pequeños rumiantes"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Noyra Cristina Corona Soto",
        "tutor": "Dra. Idalia Enríquez Verdugo",
        "tesis": "ENFERMEDADES TRANSMITIDAS POR VECTORES: DETECCIÓN DE Mycoplasma haemocanis"
    },
    {
        "cohorte": "2017-2019",
        "alumno": "Francisca Zatarain lrigoyen",
        "tutor": "Dra. Idalia Enríquez Verdugo",
        "tesis": "Tipificación de Anap/asma spp. en Equinos (Equus caballus)."
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Paixao Guzmán Anabel",
        "tutor": "Dr. Javier Alonso Romo Rubio, Jesús José Portillo Loera, Christian de Jesús Urías Castro, Juan Manuel Romo Valdez, Héctor Raúl Guemez Gaxiola.",
        "tesis": "Efecto de la administración de ecg y gnrh-análogo en el desempeño reproductivo de cerdas primíparas destetadas bajo condiciones de alta carga calórica."
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Valenzuela Romero Mario Humberto",
        "tutor": "Dr. Sergio Hernández Verdugo, Dr. Antonio Pacheco Olvera, Dr. Jesús Enrique Retes Manjarrez, MC. César Enrique Romero Higareda, MC. José Manuel Osuna Rodríguez",
        "tesis": "Colecta y variación genética en la germinación de semillas de poblaciones de chile ( Capsicum annuum ) silvestre del noroeste de México"
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Osuna Ramos Yesenia",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho, MC. José Ascención Pérez Corrales, Dra. Idalia Enríquez Verdugo, Dra. Nohemí Castro del Campo, Dr. Miguel Angel Rodríguez Gaxiola.",
        "tesis": "Uso de aparato de fijación esquelética externa en osteosíntesis de fracturas del cuerpo del ilion en perros."
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Pérez Meza Nieves Briceida",
        "tutor": "Dr. Guadalupe Alfonso López Urquídez, Dr. César San Martin Hernández, Dra. Ma. Dolores Muy Rangel, Dr. Carlos Alfonso López Orona, Dr. Felipe Ayala Tafoya",
        "tesis": "Impacto de la dosis de N, P y K en la producción y calidad poscosecha de mango cv . “Haden” y “Tommy atkins” cultivado en Paracuaro, Michoacán"
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Sánchez García Dulce Carolina",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dr. Efrén Díaz Aparicio, Dr. Carlos Víctor Hernández Ramírez",
        "tesis": "Estudio serológico y bacteriológico de brucella spp. en ganado caprino en el norte del estado de sinaloa."
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Calderón Alonso Alma Carolina",
        "tutor": "Dr. Francisco Gerardo Ríos Rincon, Jesús David Urías Estrada, Alfredo Estrada Angulo, Jesús José Portillo Loera, Beatriz Isabel Castro Pérez.",
        "tesis": "Indicadores conductuales asociados al bienestar de ganado bovino de reciente arribo al corral de engorda."
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Zúñiga Villegas Jessica Berenice",
        "tutor": "Dr. Alfredo Estrada Angulo, Dra. Beatriz Isabel Castro Pérez, Dr. Jesús José Portillo Loera, Dr. Francisco G. Ríos Rincón, Dr. Jesús David Urías Estrada",
        "tesis": "Características de la canal y cortes primarios de ovinos finalizados con dietas adicionadas de aceites esenciales."
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Zatarain Daniel Eduardo",
        "tutor": "Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, Dra. Nohemí Castro del Campo, Dr. Carlos Vladimir López aispuro",
        "tesis": "Identificación morfológica y genética de piojos presentes en caprinos."
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Molina Gámez Gamaliel",
        "tutor": "Dr. Horacio Dávila Ramos, Dr. José Adrian Félix Bernal, Dr. Juan Carlos Robles Estrada, Dr. Jesús José Portillo Loera",
        "tesis": "Evaluación de la condición del implante anabólico y desempeño productivo de bovinos en finalización."
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Lugo García Cynthia Guadalupe",
        "tutor": "Dr. Bardo Heleodoro Sánchez Soto, Dr. Juan Fernando Sánchez Portillo, Dr. Álvaro Reyes Olivas, MC. Víctor Alfonso Cuate Mozo.",
        "tesis": "Especies de picudos (coléoptera: curculionidae) del norte de sinaloa, méxico"
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Vidales Quintero Roberto Eder",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho, MC. José Ascención Pérez Corrales, MC. Rodrigo Rocha Tirado, Dra. Nohemí Castro del Campo, Dr. Miguel Ángel Rodríguez Gaxiola",
        "tesis": "Osteosíntesis de fracturas diafisiarias de tibia en perros, utilizando clavo centromedular con aparato de fijación esquelética externa. (AFEE)"
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Armenta López Arturo Rafael (TP)",
        "tutor": "Dr. Gabriel Antonio Lugo García, Juan Fernando Sánchez Portillo, Víctor Gabriel Almada Ruíz, Bardo Heleodoro Sánchez Soto.",
        "tesis": "Alternativas biorracionales para el manejo del picudo del maíz Sitophilus zeamais Motschulsky ."
    },
    {
        "cohorte": "2018-2020",
        "alumno": "Contreras Martínez Rosalba (TP)",
        "tutor": "Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Felipe Ayala Tafoya, Dr. Manuel Alonso Báez Sañudo, Dr. Carlos Alfonso López Orona, Dr. Moisés Gilberto Yáñez Juárez",
        "tesis": "Paquete tecnológico en poscosecha de mango kent (mangifera indica) para su transporte a mercados distantes."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Beltrán Soberanes Perla Elizabeth",
        "tutor": "Dr. Javier Alonso Romo Rubio, Dra. Nohemí Castro del Campo, Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo Dr. Miguel Angel Rodríguez Gaxiola",
        "tesis": "La tierra de diatomea como desparásitante natural con enfoque a cryptosporidium spp en caprinos."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Cervantes Jacobo Miguel Demetrio",
        "tutor": "Dra. Idalia Enríquez Verdugo, Dr. Vladimir López Aispuro, Dra. Soila Maribel Gaxiola Camacho, Dra. Nohemí Castro del Campo MC. Higinio Cepeda Quintero",
        "tesis": "Resistencia de Haemophillus spp . en gallinas de postura y pollos de engorda en Culiacán, Sinaloa."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Félix Inzunza Jesús Fernando",
        "tutor": "Dr. Felipe Ayala Tafoya, Dr. Moisés Gilberto Yáñez Juárez, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. tomás Díaz Valdés, Dr. Marino Valenzuela López",
        "tesis": "Crecimiento de plantas de pepino (cucumis sativus l.) en respuesta a la cantidad y calidad de luz emitida por leds blancos, azules y rojos."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Gallegos Santiago Mario Alberto",
        "tutor": "Dr.José Adrián Félix Bernal, Dr. Horacio Dávila Ramos, Dr. Juan Carlos Robles Estrada, Dr. José Jesús Portillo Loéra.",
        "tesis": "Difosfato de tiamina en dietas de finalización energéticamente diferentes sobre respuesta productiva de ovinos de pelo."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Gómez González Carlos Arsenio",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho Dr. Miguel Angel Rodríguez Gaxiola, Dra. Nohemí Castro del Campo, Dr. Arnulfo Montero Pardo",
        "tesis": "Comparación de 3 diluyentes comerciales para congelación de semen bovino utilizando método manual y digital de criopreservación."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "González Rueda Leslie Zelibeth",
        "tutor": "Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús José Portillo Loera, Dr. Miguel Ángel Rodríguez Gaxiola, Dr. Mario Alejandro Mejía Delgadillo, MC. Cinthya Beatriz Romo Barrón",
        "tesis": "Valoración de indicadores de bienestar y parámetros reproductivos de caprinos bóer y nubia en semiestabulación en el trópico seco."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Gutiérrez Leyva Leticia Elena",
        "tutor": "Dra. Beatriz Isabel Castro Pérez, Dr. Jesús David Urías Estrada, Dr. Alfredo Estrada Angulo, Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús José Portillo Loera",
        "tesis": "Efecto de la adición de diferentes niveles de grasas de trampa en la respuesta productiva y energética de la dieta en ovinos de pelo en finalización."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Ibarra Villanueva Lizbeth Kareli",
        "tutor": "Dra. Idalia Enríquez Verdugo , Dra. Soila Maribel Gaxiola Camacho, Dra. Nohemí Castro del Campo, MC. Claudia Barraza Tizoc, MC. Higinio Cepeda Quintero.",
        "tesis": "Resistencia antimicrobiana de bacterias aisladas en albergues de perros y gatos."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Lizárraga Roa Amizdky Aracely",
        "tutor": "Dra. Nohemí Castro del Campo, Soila Maribel Gaxiola Camacho, Dra. Nohelia Castro del Campo, Dra. Idalia Enríquez Verdugo, Dr. Miguel Angel Rodríguez Gaxiola.",
        "tesis": "Uso de tierra de diatomeas como antibacteriano en caprinos."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Llanes Cruz Genaro",
        "tutor": "Dr. Gabriel Antonio Lugo García, Dr. Bardo Heleodoro Sanchez Soto, Mc. Salomon Buelna Tarin, Dr. Celia Selene Romero Félix",
        "tesis": "Plántulas de limón (citrus aurantifolia swingle) inoculadas con micorriza arbuscular (glomus intraradices)."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Nieblas López Esmeralda",
        "tutor": "Dr. Alfredo Estrada Angulo, Dra. Beatriz Isabel Castro Pérez, Dr. Jesús David Urías Estrada, Dr. Francisco Gerardo Ríos Rincón, Dr. Claudio Angulo Montoya",
        "tesis": "Efecto de la suplementación de grasa de vertedero en las características de la canal, cortes primarios y composición tisular de ovinos de pelo alimentados con dietas de finalización"
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Ontiveros Castro Roberto",
        "tutor": "Dr. Alfredo Estrada Angulo, Jesús David Urías Estrada, Beatriz Isabel Castro Pérez, Claudio Angulo Montoya, Jesús José Portillo Loera.",
        "tesis": "Efecto de diferentes tamaños de partícula de zeolitas naturales en la respuesta productiva y características de la canal de ovinos de pelo en finalización."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Oropeza Velázquez Héctor Javier",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho, Dra. Nohemí Castro del Campo, Dra. Nohelia Castro del Campo, Dr. Miguel Angel Rodríguez Gaxiola, MC. Jesús Daniel Solís Carrasco",
        "tesis": "La tierra de diatomea como reductora parasitaria en caprinos."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Ortiz Carrillotes Patricia Guadalupe",
        "tutor": "Dr. Jesús José Portillo Loera, Dra. Idalia Enríquez Verdugo, Dr. Samuel Campista León, Dra. Nohelia Castro del Campo",
        "tesis": "La iguana verde (iguana iguana) como reservorio de salmonella spp."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Reyes Morales Uriel",
        "tutor": "Dr. Felipe Ayala Tafoya, Dr. Moisés Gilberto Yáñez Juárez, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Tomás Díaz Valdés, Dr. Marino Valenzuela López",
        "tesis": "Análisis del crecimiento de planta de tomate (solanum lycopersicum l.) cultivada con luz emitida por leds blancos, azules y rojos"
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Rocha García Abraham Abimael",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dra. Nohemí Castro del Campo, Dr. Miguel Angel Rodríguez Gaxiola, MC. Daniel Solís Carrasco.",
        "tesis": "Prevalencia de mycobacterium bovis en lesiones granulomatosas de bovinos de matanza regular en rastros tif y municipales del estado de Sinaloa"
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Sauceda Martínez Flor Catalina",
        "tutor": "Dr. Carlos Alfonso López Orona, MC. José Armando Carrillo Fasio, Dr. Guadalupe Alfonso López Urquídez, Dr. José Ángel Martínez Gallardo, MC. Tomás Aarón Vega Gutiérrez",
        "tesis": "Caracterización molecular y patogenecidad de Fusarium spp. en el cultivo de trigo del noroeste de México"
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Vásquez Sarabia Fredy",
        "tutor": "Dr. Horacio Dávila Ramos, Dr. Juan Carlos Robles Estrada, Jesús José Portillo Loera, Dr. José Adrian Félix Bernal",
        "tesis": "Caracterización e inclusión de bagazo de jasminum officinale en la alimentación de ovinos en comportamiento productivo."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "García Sandoval Valente",
        "tutor": "Dr. Pedro Sánchez Peña, M.C Valeria Gómez Pérez, Dr. Saúl Parraterraza",
        "tesis": "“Caracterización Agromorfológica Racial de Maíces Nativos de México\"."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Fajardo Armenta Diana Nayeli",
        "tutor": "Dr. Guadalupe Alfonso López Urquidez, Dr. Jesús Enrique Retes Manjarrez, Dr. Carlos Alfonso López Orona, Dr. Raymundo Medina López, M.C. Tomas Aarón Vega Gutiérrez",
        "tesis": "Distribución y abundancia de Trips en el cultivo de cebolla en Sinaloa"
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Peñuelas Montoya Francisco",
        "tutor": "Dr. Juan Fernando Sánchez Portillo, Dr. Patricio Sauceda Acosta, Oliver Leal Ayala, Benjamín Rodríguez López, Nicolás Beltrán.",
        "tesis": "Rendimiento y calidad del arándano(vaccinium corymbosum l.) cv. biloxi bajo mallas sombreadoras en el norte de Sinaloa."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Miranda Valdez Jaime Antonio",
        "tutor": "Dr. Juan Fernando Sánchez Portillo, Carlos Patricio Sauceda Acosta, José Nicolás Beltrán Burboa, Oliver Leal Ayala, Benjamín Rodríguez López.",
        "tesis": "Diversidad y distribución de nematodos asociados al cultivo de arándano (vaccinium corymbosum l.) c.v biloxi, en el valle del fuerte"
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Vizcarra Soto Ricardo",
        "tutor": "Dr. Carlos Alfonso López Orona, Dr. Azareel Angulo Castro, Dr. Guadalupe Alfonso López Urquídez, Dr. Moisés Gilberto Yáñez Juárez, MC. Tomás Aarón Vega Gutiérrez",
        "tesis": "Identificación molecular y patogenicidad del agente causal de la fusariosis en cucurbitáceas del estado de Sinaloa."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Amarillas Chicuate Juan de Dios",
        "tutor": "Dr. Fernando Alberto Valenzuela Escoboza, Dr. Edgardo Cortez Mondaca, Raymundo Medina Lopez, Dr. Jesús Perez Marquez",
        "tesis": "Distribución espacial de Diaphorina citri (Hemjíptera:Liviidae), en limón persa y limón mexicano en el norte de Sinaloa."
    },
    {
        "cohorte": "2019-2021",
        "alumno": "Lugo Tovares José Jesús",
        "tutor": "Dr. Blanca Elvira López Valenzuela, Dr. Jesús José Portillo Loera, Dra. Soila Maribel Gaxiola Camacho, Dr. Carlos Bell Castro Tamayo, MC. Vladimir Martínez Cruz",
        "tesis": "Efecto de la relación treonina/lisina en respuesta productiva y características de canal en Codorniz Japonesa."
    }
];

  const searchInput = document.getElementById("busquedaMatriculadosMCA");
  const cohorteFilter = document.getElementById("filtroCohorteMatriculadosMCA");
  const tbody = document.querySelector("#tablaMatriculadosMCA tbody");
  const paginationUl = document.getElementById("paginacionMatriculadosMCA");

  const limit = 10;
  let currentPage = 1;
  let filteredData = [...DATA_MATRICULADOS_MCA];

  // Poblar selector de generación
  [...new Set(DATA_MATRICULADOS_MCA.map(d => d.cohorte))].sort().reverse().forEach(c => {
    cohorteFilter.add(new Option(c, c));
  });

  function renderTable() {
    tbody.innerHTML = '';
    const slice = filteredData.slice((currentPage - 1) * limit, currentPage * limit);
    if (!slice.length) {
      tbody.innerHTML = '<tr><td colspan="4" class="text-center py-4 text-muted">No se encontraron resultados para los filtros seleccionados.</td></tr>';
      return;
    }
    slice.forEach(d => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="text-center">${d.cohorte}</td>
        <td><strong>${d.alumno}</strong></td>
        <td>${d.tutor}</td>
        <td>${d.tesis}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function renderPagination() {
    paginationUl.innerHTML = '';
    const totalPages = Math.ceil(filteredData.length / limit);
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
          renderPagination();
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

  function applyFilter() {
    const q = searchInput.value.toLowerCase().trim();
    const c = cohorteFilter.value;
    filteredData = DATA_MATRICULADOS_MCA.filter(d => 
      (!c || c === 'todos' || d.cohorte === c) &&
      (!q || Object.values(d).some(v => String(v).toLowerCase().includes(q)))
    );
    currentPage = 1;
    renderTable();
    renderPagination();
  }

  searchInput.addEventListener('input', applyFilter);
  cohorteFilter.addEventListener('change', applyFilter);

  applyFilter();
});
