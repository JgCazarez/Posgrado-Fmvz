document.addEventListener("DOMContentLoaded", function () {
  const DATA_REPOSITORIO_MCA = [
  {
    "alumno": "Melissa de Jesús Contreras Madueña",
    "tema": "FORMACIÓN DE BIOFILM DE Staphylococcus spp. AISLADOS DE LECHE MASTÍTICA BOVINA DE CULIACÁN, SINALOA Y SU RELACIÓN CON LA RESISTENCIA A ANTIBIÓTICOS..",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2023-2025/TESIS MCA-CONTRERAS MADUEÑA MELISSA.pdf",
    "comite": "Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, M.C. Higinio Cepeda Quintero, M.C. Daniel Eduardo Zatarain, M.C. Claudia Leonor Barraza Tizoc.",
    "cohorte": "2023-2025",
    "anio": "2025"
  },
  {
    "alumno": "Quezada Rubio Jesús Aarón",
    "tema": "Nivel de energía en la dieta y la suplementación con clorhidrato de zilpaterol sobre el rendimiento productivo, la energía dietética y características de la canal en ovinos de pelo",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2023-2025/TESIS MCA-ESPINOZA AGUIRRE.pdf",
    "comite": "Dr. Alfredo Estrada Angulo, Dra. Beatriz Isabel Castro Pérez, Dr. Alejandro Plascencia Jorquera, Dr. Jesús David Urías Estrada Dra. Elizama Ponce Barraza",
    "cohorte": "2023-2025",
    "anio": "2025"
  },
  {
    "alumno": "Velázquez Valdez Miguel Ángel",
    "tema": "IDENTIFICACIÓN, ABUNDANCIA Y BIODIVERSIDAD DE NEMATODOS FITOPARÁSITOS ASOCIADOS A BERENJENA CHINA (Solanum melongena L.) Y SU RELACIÓN CON FACTORES EDÁFICOS",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2023-2025/TESIS-MCA-VELAZQUEZ VALDEZ MIGUEL ANGEL.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, José Ángel Martínez Gallardo, Dra. Soila Maribel Gaxiola Camacho, Dra. Nohelia Castro del campo, Dra. Nohemí Castro del Campo",
    "cohorte": "2023-2025",
    "anio": "2025"
  },
  {
    "alumno": "Atondo Pacheco José Mario",
    "tema": "Prevalencia y factores de riesgo asociados a la presencia de Ehrlichia spp. En caninos procedentes de propietarios con antecedentes a rickettsiosis en Culiacán, Sinaloa, México.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2022-2024/TESIS-MCA-ATONDO PACHECO.pdf",
    "comite": "Dra. Nohemí Castro del Campo, Dra. Soila Maribel Gaxiola Camacho, Dr. Rosalino Flores Rocha, Dra. María de Jesús López López, Dra. Idalia Enríquez Verdugo",
    "cohorte": "2022-2024",
    "anio": "2024"
  },
  {
    "alumno": "Espinoza Aguirre Laura Francisca",
    "tema": "Efecto del extracto de ajo, tiempo de refrigeración y diluyentes comerciales en bacterias aisladas a partir de semen caprino",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2022-2024/TESIS MCA-ESPINOZA AGUIRRE.pdf",
    "comite": "Dr. Miguel Ángel Rodríguez Gaxiola, Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, Dra. Nohelia Castro del campo, Dra. Nohemí Castro del Campo",
    "cohorte": "2022-2024",
    "anio": "2024"
  },
  {
    "alumno": "Gerardo López Daniela",
    "tema": "Efecto del extracto de ajo, tiempo de refrigeración y diluyentes comerciales en bacterias aisladas a partir de semen capri",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2022-2024/TESIS MCA-GERARDO LOPEZ.pdf",
    "comite": "Dr. Miguel Ángel Rodríguez Gaxiola, Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, Dra. Nohelia Castro del campo, Dra. Nohemí Castro del Campo",
    "cohorte": "2022-2024",
    "anio": "2024"
  },
  {
    "alumno": "Osuna Salas Luis Fernando",
    "tema": "Bacterias fitopatógenas asociadas al cultivo de maíz (Zea mays L.) en el norte de Sinaloa, México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2022-2024/TESIS MCA-OSUNA SALAS.pdf",
    "comite": "Dra. Celia Selene Romero Félix, MC Araceli Ruiz Fierro, Dr. Gabriel Antonio Lugo García, MC Gabriel Herrera Rodríguez",
    "cohorte": "2022-2024",
    "anio": "2024"
  },
  {
    "alumno": "Ruiz Ramírez Jesús Fortunato",
    "tema": "Zaprionus indianus: EFICACIA DE CEBOS, FLUJO POBLACIONAL Y PATOGENICIDAD DE HONGOS ENTOMOPATÓGENOS",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2022-2024/TESIS MCA-RUIZ RAMIREZ.pdf",
    "comite": "Dr. Everardo López Bautista, Dr. Fortunato Ruiz Martínez, Dr. Fernando Alberto Valenzuela Escoboza, Dr. Carlos Patricio Illescas Riquelme",
    "cohorte": "2022-2024",
    "anio": "2024"
  },
  {
    "alumno": "Torres Cruz José David",
    "tema": "Efecto de sarolaner en el microbioma intestinal de perros de la Ciudad de México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2022-2024/TESIS MCA-TORRES CRUZ.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Ariadna Flores Ortega, Dr. Camilo Romero Núñez, Dra. Nohemí Castro Del Campo",
    "cohorte": "2022-2024",
    "anio": "2024"
  },
  {
    "alumno": "Arellano Reyes Juan Carlos",
    "tema": "DETERMINACIÓN DE LA ESPERANZA DE VIDA DEL GUSANO COGOLLERO Spodoptera frugiperda (J. E. Smith) EN EL AGROECOSISTEMA DE MAÍZ",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2021-2023/TESIS MCA-ARELLANO REYES.pdf",
    "comite": "Dr. Guadalupe Alfonso López Urquídez, Dr. Carlos Alfonso López Orona",
    "cohorte": "2021-2023",
    "anio": "2023"
  },
  {
    "alumno": "Casas Gómez Alondra",
    "tema": "EFECTO DE LA SUPLEMENTACIÓN DE ACEITES ESENCIALES, 25-HIDROXI-VIT-D3 Y CLORHIDRATO DE ZILPATEROL EN DIETAS DE FINALIZACIÓN DE OVINOS: CALIDAD DE LA CARNE",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2021-2023/TESIS MCA-CASAS GOMEZ.pdf",
    "comite": "Dra. Beatriz Isabel Castro Pérez, Dr. Octavio Carrillo Muro, Dr. Alfredo Estrada Angulo, Dr. Jesús David Urías Estrada, Dr. Francisco Gerardo Ríos Rincón",
    "cohorte": "2021-2023",
    "anio": "2023"
  },
  {
    "alumno": "Espinoza Galaviz Jesús Yassir",
    "tema": "ESTRÉS SALINO Y BIOESTIMULANTES EN DOS VARIEDADES DE FRIJOL",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2021-2023/TESIS MCA-ESPINOZA GALAVIZ.pdf",
    "comite": "Dr. Bardo Heleodoro Sánchez Soto, Dra. Celia Selene Romero Félix, Dr. Gabriel Antonio Lugo García, Dr. Alfredo Rodríguez Delfín",
    "cohorte": "2021-2023",
    "anio": "2023"
  },
  {
    "alumno": "Gaxiola Serrano Fausto",
    "tema": "EFECTO DE CUBIERTA DE AGRIBÓN (POLIPROPILENO) EN EL CONTROL DE ENFERMEDADES EN EL CULTIVO DE CEBOLLA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2021-2023/TESIS MCA-GAXIOLA SERRANO FAUSTO.pdf",
    "comite": "Dr. Guadalupe Alfonso López Urquídez, Dr. Martín Abraham Tirado Ramírez, Dra. Lorena Molina Cárdenas, Dr Tomas Aarón Vega Gutiérrez, Dr. Azareel Angulo Castro",
    "cohorte": "2021-2023",
    "anio": "2024"
  },
  {
    "alumno": "Rivera Luna Geovanny",
    "tema": "Efecto antibacteriano del extracto de ajo (Allium sativum), en patógenos hemolíticos del sistema respiratorio de aves de corral",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2021-2023/TESIS MCA-RIVERA LUNA GEOVANNY.pdf",
    "comite": "Dr. Alfredo Estrada Angulo, Dra. Elizama Ponce Barraza, Dra. Beatriz Isabel Castro Pérez, Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús José Portillo Loera.",
    "cohorte": "2021-2023",
    "anio": "2024"
  },
  {
    "alumno": "Patrón López Oscar Alejandro",
    "tema": "Efecto antibacteriano del extracto de ajo (Allium sativum), en patógenos hemolíticos del sistema respiratorio de aves de corral",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2021-2023/TESIS MCA-PATRON LOPEZ OSCAR A.pdf",
    "comite": "Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, Dr. Carlos Bell Castro Tamayo Mc Higinio Cepeda Quintero Mc Daniel Eduardo Zatarain.",
    "cohorte": "2021-2023",
    "anio": "2024"
  },
  {
    "alumno": "Valenzuela Cuadras, Edgar",
    "tema": "Cepas de Trichoderma spp. y Bacillus spp. con efecto antagonista y promoción de crecimiento en Arándano (Vaccinium corymbosum L.)",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2021-2023/TESIS MCA-VALENZUELA CUADRAS.pdf",
    "comite": "Dra. Blanca Elvira López Valenzuela, Dr. Quintín Armando Ayala Armenta, Dr. Fernando Alberto Valenzuela Escoboza, Dra. Alma Armenta Medina, Dr. Oliver Gabriel Leal Ayala",
    "cohorte": "2021-2023",
    "anio": "2024"
  },
  {
    "alumno": "Vizcarra Chávez, Claudia Angélica",
    "tema": "Detección de resistencia a mosca blanca en genotipos silvestres y criollos de Solanum spp .",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2021-2023/tesis mca-vizcarra chavez.pdf",
    "comite": "Dra. Beatriz Isabel Castro Pérez, Dr. Alfredo Estrada Angulo, Dra. Soila Maribel Gaxiola Camacho, Dr. Jesús José Portillo Loera, Dra. Elizama Ponce Barraza",
    "cohorte": "2021-2023",
    "anio": "2023"
  },
  {
    "alumno": "Arellano Piña Pablo Carlos",
    "tema": "USO DEL SELENIO EN LA CALIDAD ESPERMÁTICA EN ÉPOCA DE BAJA PRODUCTIVIDAD EN OVINOS DORPER Y PELIBUEY",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-ARELLANO PIÑA.pdf",
    "comite": "Dr. Miguel Ángel Gastélum Delgado, Dr. Guadalupe Alfonso López Urquidez, Dra. Silvia Alicia Félix Camacho, Dr. Carlos Vladimir López Aispuro, Dr. José Antonio Aguilar Quiñonez",
    "cohorte": "2020-2022",
    "anio": "2024"
  },
  {
    "alumno": "Armenta Ayala José Oscar",
    "tema": "TEXTURA DEL SUELO: INFLUENCIA EN EL RENDIMIENTO Y CALIDAD DEL CULTIVO DE CEBOLLA (Allium cepa L.)",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-ARMENTA AYALA.pdf",
    "comite": "Dr. Guadalupe Alfonso López Urquídez, Dr. Azareel Angulo Castro, Dr. Carlos Alfonso López Orona, Dr. Martín Abraham Tirado Ramírez, MC Jorge Enrique Zazueta López",
    "cohorte": "2020-2022",
    "anio": "2023"
  },
  {
    "alumno": "Beltrán Félix Jesús Alejandro",
    "tema": "DESEMPEÑO DE ASPERSORES EN RIEGO POR ASPERSIÓN FIJA, APOYADO CON PROGRAMACIÓN INTEGRAL EN PAPA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-BLETRAN FELIX ALEJANDRO.pdf",
    "comite": "Dra. Blanca Elvira López Valenzuela, Dr. Ernesto Sifuentes Ibarra, Dra. Jesús del Rosario Ruelas Islas, Dr. Quintín Armando Ayala Armenta",
    "cohorte": "2020-2022",
    "anio": "2023"
  },
  {
    "alumno": "Cruz Bojórquez Jesús Enrique",
    "tema": "INFLUENCIA DE LA TEMPERATURA Y HUMEDAD RELATIVA EN LA PRESENCIA DEL MILDIU Peronospora destructor EN CEBOLLA EN EL VALLE DE CULIACÁN, SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-CRUZ BOJORQUEZ.pdf",
    "comite": "Dr. Guadalupe Alfonso López Urquídez, Dr. Carlos Alfonso López Orona, Dra. Mitzi Dayanira Estrada Acosta, MC José Armando",
    "cohorte": "2020-2022",
    "anio": "2022"
  },
  {
    "alumno": "Islas Valenzuela Miguel Ángel",
    "tema": "EVALUACIÓN DE CEPAS DE Trichoderma spp. NATIVAS DEL NORTE DE SINALOA COMO PROMOTORAS DE CRECIMIENTO EN EL CULTIVO DE MAÍZ (Zea mays L.)&rdquo;",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-ISLAS VALENZUELA.pdf",
    "comite": "Dra. Blanca Elvira López Valenzuela, Dr. Adolfo Dagoberto Armenta Bojórquez, Dr. Quintín Armando Ayala Armenta, Dr. Cipriano Fuentes Verduzco, MC. Julián Alberto Galaviz Lara",
    "cohorte": "2020-2022",
    "anio": "2024"
  },
  {
    "alumno": "Lara Murrieta Praxedes",
    "tema": "RELACIÓN NITRATO-AMONIO Y LUZ EN EL CRECIMIENTO Y CONTENIDO NUTRIMENTAL DE LECHUGA (Lactuca sativa L.) CULTIVADA EN SISTEMA HIDROPÓNICO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-LARA MURRIETA.pdf",
    "comite": "Dr. Felipe Ayala Tafoya, Dr. Azareel Angulo Castro, Dr. Moisés Gilberto Yáñez Juárez, Dr. Carlos Alfonso López Orona",
    "cohorte": "2020-2022",
    "anio": "2022"
  },
  {
    "alumno": "López Uriarte Norma Alicia",
    "tema": "EFECTO DE LA CALIDAD DEL AGUA DE BEBIDA EN LA RESPUESTA PRODUCTIVA DE OVINOS DE PELO EN FINALIZACIÓN Y EN LA EFICIENCIA ENERGÉTICA DE LA DIETA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-LOPEZ URIARTE.pdf",
    "comite": "Dr. Alfredo Estrada Angulo, Dra. Beatriz Isabel Castro Pérez, Dr. Alejandro Plascencia Jorquera, Dr. Jesús David Urías Estrada, Dra Elizama Ponce Barraza",
    "cohorte": "2020-2022",
    "anio": "2023"
  },
  {
    "alumno": "Loredo Vega Jesús Guadalupe",
    "tema": "IControl Biológico vs Control Químico de Sclerotium rolfssi Sacc., en frijol en el Norte de Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-LOREDO VEGA.pdf",
    "comite": "Dr. Fernando Alberto Valenzuela Escoboza, Dra. Blanca Elvira López Valenzuela, Dr. Quintín Armando Ayala Armenta, Dr. Hugo Beltrán Peña",
    "cohorte": "2020-2022",
    "anio": "2024"
  },
  {
    "alumno": "Medina Rodríguez Sandra Berenice",
    "tema": "Prevalencia de nematodos gastrointestinales zoonóticos y su asociación a factores de riesgo en caninos domésticos de colonias en situación de vulnerabilidad del municipio de Culiacán, Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-MEDINA RODRIGUEZ.pdf",
    "comite": "Dra. Nohemí Castro del Campo, Dra. Soila Maribel Gaxiola Camacho, Dr. Jesús José Portillo Loera, MC. Jesús Daniel Solís Carrasco, Dra. Nohelia Castro del Campo.",
    "cohorte": "2020-2022",
    "anio": "2022"
  },
  {
    "alumno": "Montiel Reyes Alejandro",
    "tema": "DIVERSIDAD Y ABUNDANCIA DE LA ENTOMOFAUNA DEL CULTIVO DE CHILE EN EL NORTE DE SINALOA.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-MONTIEL REYES ALEJANDRO.pdf",
    "comite": "Dr. Fernando Alberto Valenzuela Escoboza, Dr. Quintín Armando Ayala Armenta, Dra. Blanca Elvira López Valenzuela, MC Karen Rábago Zavala",
    "cohorte": "2020-2022",
    "anio": "2024"
  },
  {
    "alumno": "Nájera Navarro Carolina",
    "tema": "INCORPORACIÓN DE LAS TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIÓN (TIC) EN EL PROCESO DE APRENDIZAJE DE LOS ESTUDIANTES DE MEDICINA VETERINARIA Y ZOOTECNIA, DURANTE Y DESPUÉS DE LA CONTINGENCIA SANITARIA POR COVID- 19",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-NAJERA NAVARRO CAROLINA.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, MC Yazmín Edith Villalba Robles, Dr. Jesús José Portillo Loera, Dra. Nohemí Castro del Campo, Dra. Idalia Enríquez Verdugo",
    "cohorte": "2020-2022",
    "anio": "2024"
  },
  {
    "alumno": "Ortiz Quintero Alexander",
    "tema": "Caracterización agromorfológica de poblaciones de maíces nativos de Badiraguato y El Fuerte, Sinaloa, México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-ORTIZ QUINTERO.pdf",
    "comite": "Dr. Pedro Sánchez Peña, MC. Valeria Gómez Pérez, Dr. Saúl Parra Terrazas, Dr. Guadalupe Alfonso López Urquídez, Dr. Miguel Ángel Angulo Escalante",
    "cohorte": "2020-2022",
    "anio": "2023"
  },
  {
    "alumno": "María Fernanda Ureña Zatarain",
    "tema": "Efecto del diseño de corral, clase de ganado y temporada del año en la respuesta productiva en bovinos de corral de engorda en el trópico seco",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-UREÑA ZATARAIN MARÍA FERNANDA.pdf",
    "comite": "Dr. Francisco Gerardo Ríos Rincón, Dra. Armida Sánchez Escalante, Dr. Jesús José Portillo Loera, Dr. Gastón Ramón Torrescano Urrutia, Dr. Alfredo Estrada Angulo",
    "cohorte": "2020-2022",
    "anio": "2024"
  },
  {
    "alumno": "Valdez Velázquez Guadalupe",
    "tema": "CARACTERIZACIÓN AGROMORFOLÓGICA Y GENOTÍPICA DE POBLACIONES DE LA RAZA DE MAÍZ CHAPALOTE",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-VALDEZ VELAZQUEZ.pdf",
    "comite": "Dr. Pedro Sánchez Peña , Dr. Cesar Daniel Petroli, Dra. Soila Maribel Gaxiola Camacho, MC Valeria Gómez Pérez",
    "cohorte": "2020-2022",
    "anio": "2022"
  },
  {
    "alumno": "Vidaca Valdez Gema Zaharina",
    "tema": "Determinación de resistencia a antimicrobianos en bacteria aisladas en semen de ganado bovino post congelación en los estados de Sinaloa y Durango",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-VIDACA VALDEZ.pdf",
    "comite": "Dra. Idalia Enríquez Verdugo, Dr. Miguel Ángel Rodríguez Gaxiola, Dra. Soila Maribel Gaxiola Camacho, MC Higinio Cepeda Quintero, MC Claudia Leonor Barraza Tizoc, MC Daniel Eduardo Zatarain",
    "cohorte": "2020-2022",
    "anio": "2022"
  },
  {
    "alumno": "Zatarain Alvarado María Isabel",
    "tema": "Evaluación de diferentes niveles de proteína y lípidos dietéticos en índices productivos de juveniles de robalo",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2020-2022/TESIS MCA-ZATARAIN ALVARADO.pdf",
    "comite": "Dr. Gustavo Alejandro Rodríguez Montes de Oca, Dra. María Isabel Abdo de la Parra, MC Luz Estela Rodríguez Ibarra, Dr. Emyr Saúl Peña",
    "cohorte": "2020-2022",
    "anio": "2023"
  },
  {
    "alumno": "Amarillas Chicuate Juan de Dios",
    "tema": "DISTRIBUCIÓN DEL PSILIDO ASIÁTICO DE LOS CÍTRICOS Diaphorina citri KUWAYAMA EN HUERTAS COMERCIALES DEL VALLE DEL CARRIZO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA_AMARILLAS CHICUATE.pdf",
    "comite": "Dr. Fernando Alberto Valenzuela Escoboza, Dr. Edgardo Cortez Mondaca, Dr. Quintín Armando Ayala Armenta, Dr. Everardo López Bautista, Mc. Juan Luis Pérez Mora",
    "cohorte": "2019-2021",
    "anio": "2023"
  },
  {
    "alumno": "Lizárraga Roa Amizdky Aracely",
    "tema": "Perfil de microbiota vaginal y sensibilidad a los antimicrobianos en cabras de sistemas extensivos",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA_AMIZDKY ARACELY LIZARRAGA ROA.pdf",
    "comite": "Dra. Nohemí Castro Del Campo, Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, MC. Daniel Eduardo Zatarain, MC. Higinio Zepeda Quintero",
    "cohorte": "2019-2021",
    "anio": "2024"
  },
  {
    "alumno": "Beltrán Soberanes Perla Elizabeth",
    "tema": "PREVALENCIA, CUANTIFICACIÓN Y FACTORES DE RIESGO asociados a Cryptosporidium spp EN CABRAS BAJO SISTEMA DE PRODUCCIÓN EXTENSIVO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA_BELTRAN SOBERANES PERLA ELIZABETH.pdf",
    "comite": "Dra. Nohemí Castro Del Campo, Dra. Soila Maribel Gaxiola Camacho, MC Jesús Daniel Solis Carrasco, Dr. Miguel Ángel Rodríguez Gaxiola, MC Claudia Leonor Barraza Tizoc",
    "cohorte": "2019-2021",
    "anio": "2024"
  },
  {
    "alumno": "Gutiérrez Leyva Leticia Elena",
    "tema": "Efecto de la adición de diferentes fuentes de grasas en la respuesta productiva y energética de la dieta en ovinos de pelo en finalización",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/Tesis MCA_GUTIERREZ LEYVA.pdf",
    "comite": "Dra. Beatriz Isabel Castro Pérez, Dr. Alfredo Estrada Angulo, Dr. Jesús David Urías Estrada, Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús José Portillo Loera",
    "cohorte": "2019-2021",
    "anio": "2022"
  },
  {
    "alumno": "González Rueda Leslie Zelibeth",
    "tema": "Caracterización de canales bovinas conforme a madurez ósea, marmoleo y predominancia fenotípica Bos indicus",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA-GONZALEZ RUEDA.pdf",
    "comite": "Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús José Portillo Loera, Dr. Alfredo Estrada Angulo, Dra. Beatriz Isabel Castro Pérez,Dr. Jesús David Urías Estrada.",
    "cohorte": "2019-2021",
    "anio": "2025"
  },
  {
    "alumno": "Miranda Valdez Jaime Antonio",
    "tema": "FITONEMATODOS ASOCIADOS AL CULTIVO DE ZARZAMORA (Rubus fruticosus L.) EN LOS REYES, MICHOACÁN, MÉXICO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA_MIRANDA VALDEZ.pdf",
    "comite": "Dr. Juan Fernando Sánchez Portillo, Dra. Soila Maribel Gaxiola Camacho, M.C. Benjamín Rodríguez López",
    "cohorte": "2019-2021",
    "anio": "2022"
  },
  {
    "alumno": "Nieblas López Esmeralda",
    "tema": "Efecto de la suplementación de diferentes fuentes de grasas sobre las características de la canal, composición tisular y peso de cuerpo vacío en ovinos alimentados con dietas de finalización",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA_NIEBLAS LOPEZ ESMERALDA.pdf",
    "comite": "Dra. Beatriz Isabel Castro Pérez, Dr. Jesús David Urías Estrada, Dr. Alfredo Estrada Angulo, MC. Jorge Luis Ramos Méndez, Dr. Francisco Gerardo Ríos Rincón",
    "cohorte": "2019-2021",
    "anio": "2023"
  },
  {
    "alumno": "Oropeza Velázquez Héctor Javier",
    "tema": "PREVALENCIA DE PARÁSITOS GASTROINTESTINALES EN CAPRINOS BAJO SISTEMA DE PRODUCCIÓN EXTENSIVO.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA_OROPEZA VELAZQUEZ.pdf",
    "comite": "Dra. Nohemí Castro del Campo, Dra. Soila Maribel Gaxiola Camacho, MC Sandra Berenice Medina Rodríguez, MC Jesús Daniel Solis Carra, Dra. Idalia Enríquez Verdugo",
    "cohorte": "2019-2021",
    "anio": "2024"
  },
  {
    "alumno": "Peñuelas Montoya Francisco",
    "tema": "RENDIMIENTO Y CALIDAD DEL FRUTO DE ARÁNDANO (Vaccinium corymbosum L.) cv. BILOXI BAJO MALLAS FOTOSELECTIVAS EN EL NORTE DE SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA_PEÑUELAS MONTOYA.pdf",
    "comite": "Dr. Juan Fernando Sánchez Portillo, Dra. Soila Maribel Gaxiola Camacho, MC Benjamín Rodríguez López",
    "cohorte": "2019-2021",
    "anio": "2022"
  },
  {
    "alumno": "Rocha García Abraham Abimael",
    "tema": "Prevalencia de Mycobacterium spp. en lesiones granulomatosas de bovinos sacrificados mediante matanza regular en rastros del estado de Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA_ROCHA GARCIA.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Manrique Ojeda Ayala, Dr. Jesús José Portillo Loera, MC. Claudia Leonor Barraza Tizoc, Dr. Juan Carlos Sainz Hernández",
    "cohorte": "2019-2021",
    "anio": "2024"
  },
  {
    "alumno": "Vásquez Sarabia Fredy",
    "tema": "Composición nutricional y digestibilidad in situ del residuo industrial de té de jazmín",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2019-2021/TESIS MCA_VASQUEZ SARABIA.pdf",
    "comite": "Dr. Horacio Dávila Ramos, Dr. Juan Carlos Robles Estrada, Dr. Jesús José Portillo Loera, Dr. José Adrián Félix Bernal, Dr. Jaime Noé Sánchez Pérez",
    "cohorte": "2019-2021",
    "anio": "2022"
  },
  {
    "alumno": "Armenta López Arturo Rafael",
    "tema": "Alternativas biorracionales para el manejo del picudo del maíz Sitophilus zeamais Motchulsky, 1855 (coleoptera: curculionidae) en condiciones de laboratorio",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS MCA-ARMENTA LOPEZ ARTURO RAFAEL.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Dr. Eusebio Nava Pérez, Dr. Bardo Heleodoro Sánchez Soto, MC. Víctor Gabriel Almada Ruíz",
    "cohorte": "2018-2020",
    "anio": "2020"
  },
  {
    "alumno": "Calderón Alonso Alma Carolina",
    "tema": "Efecto de las variables climáticas y densidad de carga en indicadores de bienestar y merma del ganado bovino productor de carne durante el transporte",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS_MCA_CALDERON ALONSO.pdf",
    "comite": "Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús David Urías Estrada, Dr. Alfredo Estrada Angulo, Dr. Jesús José Portillo Loera, Dra. Beatriz Isabel Castro Pérez",
    "cohorte": "2018-2020",
    "anio": "2020"
  },
  {
    "alumno": "Contreras Martínez Rosalba",
    "tema": "Atmósferas modificadas en poscosecha de mango &lsquo;Kent&rsquo; ( Mangifera indica L.) para su trasporte a mercados distantes",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS MCA_CONTRERAS MARTINEZ.pdf",
    "comite": "Dra. Teresa de Jesús Velázquez Alcaraz, MC. Manuel Alonzo Báez Sañudo, Dr. Felipe Ayala Tafoya, Dr. Carlos Alfonso López Orona, Dr. Moisés Gilberto Yáñez Juárez",
    "cohorte": "2018-2020",
    "anio": "2021"
  },
  {
    "alumno": "Molina Gámez Gamaliel",
    "tema": "Prevalencia y factores de riesgo asociados a la incorrecta aplicación del implante anabólico en bovinos en finalización intensiva",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS MCA-MOLINA GAMEZ GAMALIEL.pdf",
    "comite": "Dr. Horacio Dávila Ramos, Dr. José Adrián Félix Bernal, Dr. Jesús José Portillo Loera, Dr. Juan Carlos Robles Estrada, Dr. Arnulfo Montero Pardo",
    "cohorte": "2018-2020",
    "anio": "2020"
  },
  {
    "alumno": "Osuna Ramos Yesenia",
    "tema": "Uso de aparato de fijación esquelética externa en osteosíntesis de fracturas iliacas en perros",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS MCA_OSUNA RAMOS.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, MC José Ascención Pérez Corrales, Dra. Nohemí Castro del Campo, Dra. Yessica Viridiana Vázquez López, Dr. Miguel Ángel Rodríguez Gaxiola",
    "cohorte": "2018-2020",
    "anio": "2021"
  },
  {
    "alumno": "Pérez Meza Nieves Briceida",
    "tema": "Extracción mineral y calidad del fruto de mango &lsquo;Ataulfo&rsquo;, &lsquo;Manila&rsquo;, &lsquo;Haden&rsquo; y &lsquo;Criollo&rsquo; producido en la Costa Chica de Guerrero",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS MCA-PEREZ MEZA.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. Cesar San Martín Hernández, Dra. María Dolores Muy Rangel, Dr. José Ángel Martínez Gallardo, Dr. Felipe Ayala Tafoya",
    "cohorte": "2018-2020",
    "anio": "2021"
  },
  {
    "alumno": "Sánchez García Dulce Carolina",
    "tema": "Estudio serológico y bacteriológico de Brucella spp. en ganado caprino de los municipios de Sinaloa de Leyva y El Fuerte, Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS MCA-SANCHEZ GARCIA.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Carlos Víctor Hernández Ramírez, Dr. Efrén Díaz Aparicio, Dra. Idalia Enríquez Verdugo, Dr. Ignacio Osuna Ramírez",
    "cohorte": "2018-2020",
    "anio": "2020"
  },
  {
    "alumno": "Valenzuela Romero Mario Humberto",
    "tema": "Variación genética entre y dentro de poblaciones en la capacidad de germinación de chile silvestre del noroeste de México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS MCA-VALENZUELA ROMERO.pdf",
    "comite": "Dr. Sergio Hernández Verdugo, Dr. Antonio Pacheco Olvera, Dr. Jesús Enrique Retes Manjarrez, Dr. Tomas Osuna Enciso, Dr. Carlos Alfonso López Orona",
    "cohorte": "2018-2020",
    "anio": "2021"
  },
  {
    "alumno": "Vidales Quintero Roberto Eder",
    "tema": "Osteosíntesis de fractura diafisaria de tibia en perros, utilizando clavo centromedular con AFEE",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS MCA_VIDALES QUINTERO.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, MC José Ascención Pérez Corrales, Dra. Nohemí Castro del Campo, Dr. Miguel Ángel Rodríguez Gaxiola",
    "cohorte": "2018-2020",
    "anio": "2021"
  },
  {
    "alumno": "Zatarain Daniel Eduardo",
    "tema": "Identificación morfológica, georreferenciación y factores de riesgo de piojos presentes en caprinos",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2018-2020/TESIS MCA-ZATARAIN DANIEL EDUARDO.pdf",
    "comite": "Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, Dra. Nohemí Castro del Campo, Dr. Miguel Ángel Rodríguez Gaxiola, MC. Claudia Leonor Barraza Tizoc",
    "cohorte": "2018-2020",
    "anio": "2020"
  },
  {
    "alumno": "Beltrán Lucas Luis Andrés",
    "tema": "Efecto de la biofertilización con hongos micorrízicos en granos de maíz ( Zea mays , L.).",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/101. Luis Andres Beltran Lucas.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Guadalupe Arlene Mora Romero, Bardo Heleodoro Sánchez Soto",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Briseyda Jatzel Félix Leyva",
    "tema": "Frecuencia, factores de riesgo e impacto económico de las contusiones en la canal de bovinos productores de carne en Culiacán, Sinaloa, México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/102. BRISEYDA JATZEL FELIX LEYVA.pdf",
    "comite": "Dr. Horacio Dávila Ramos, Dr. Juan Carlos Robles Estrada, Dr. José Adrián Félix Bernal, Dr. Francisco Gerardo Ríos Rincón",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "González Alfaro Arturo",
    "tema": "Psílidos ( Hemiptera: Psylloidea ) asociados a cultivos agrícolas y arvenses en el norte de Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/103. ARTURO GONZALEZ ALFARO.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Dra. Laura Elena Ortega Atrenas, Dr. Álvaro Reyes Olivas, Dr. Juan Fernando Sánchez Portillo.",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Ana Mireya Romo Valdez",
    "tema": "Mitigación del impacto ambiental en la respuesta productiva y calidad de la carne en bovinos en finalización intensiva.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/104. Ana Mireya Romo Valdez.pdf",
    "comite": "Dr. Francisco Gerardo Ríos Rincón, Dra. Beatriz Isabel Castro Pérez, Dr. Alfredo Estrada Angulo, Dr. Jesús José Portillo Loera, Dr. David Urías Estrada.",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Kinzú Berenice Castro Valdez",
    "tema": "Análisis del comportamiento In vitro de Fusarium oxysporum f. sp . lycopersici en medios salinos sólidos y líquidos.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/105. Kinzu Berenice Castro Valdez.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dra. Mitzi Dayanira Estrada Acosta, Dr. Tomas Diaz Valdez, Dra. Teresa De Jesus Velazquez Alcaraz, Dr. Felipe Ay Ala Tafoya.",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Julián Alberto Galavíz Lara",
    "tema": "SELECCIÓN DE CEPAS DE BACILUS spp. Y TRICHODERMA spp. Y SU APLICACIÓN CON COMPOSTAS PARA El ONTROL DE LA RABIA EN GARBANZO BLANCO ( Cícer arietinum L.).",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/106. Julian Alberto Galaviz Lara.pdf",
    "comite": "Dr. Pedro Sánchez Peña, Dr, Adolfo Dagoberto Armenta Bojorquez, Dra. Blanca Elvira López Valenzuela, Dr. Saúl Parra Terraza.",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Lugo Luján Jonathan Misael",
    "tema": "Detección de resistencia a mosca blanca en genotipos silvestres y criollos de Solanum spp .",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/107. Jonathan Misal Lugo Lujan.pdf",
    "comite": "Dr. José Antonio Garzón Tiznado, Dr. Jesús Enrique Retes Manjarrez, Dr. Sixto Velarde Félix, Dr. Raymundo Medina López, Dr. Jesús José Portillo Loera",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Alan Douriet Angulo",
    "tema": "Identificación de especies de Fusarium causantes de pudrición de grano de maíz (Zea mayz) en el estado de Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/108. Alan Douriet Angulo.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. Sixto Velarde Felix, Dr. Tomas Díaz Valdez, Dr. Felipe Avala Tafoya, Dra. Mitzi Dayanira Estrada Acosta.",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Walter Arturo Rubio Aragón",
    "tema": "Identificación de resistencia genética de genotipos de chile (Capsicum annuum) al picudo (Anthonomus eugenii).",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/109. Walter Arturo Rubio Aragon.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. Jesus Enrique Retes Manjarrez, Dr. Jacobo Enrique Cruz Ortega, Dr. Fabian Avendaño Meza, Dr. Miguel Lopez Meza.",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Juan Gaxiola Félix",
    "tema": "Estudio Florístico de la Planicie y arroyo El Aguaje de la Sierra de Barobampo, municipio de Ahorne, Sinaloa, México.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/110. Juan Gaxiola Felix.pdf",
    "comite": "Dr. Álvaro Reyes Olivas, Dr. Bardo Heleodoro Sánchez Soto, Dr. Rito Vega Aviña, M.C. Pedro Casillas Álvarez.",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Marquéz Zequera Isidro",
    "tema": "Identificación y caracterización de la bacteria Clavibacter michiganensis subsp. michiganensis.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/111. Marquez Zequera Isidro.pdf",
    "comite": "Dr. José Antonio Garzón Tiznado, Dr. Raymundo Saúl García Estrada, Dra. Idalia Enríquez verdugo.",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Diana Zuleika Velázquez Valdez",
    "tema": "INCIDENCIA E IDENTIFICACION MOLECULAR DE Salmonella spp AISLADA DE UNA GRANJA PORCINA DE CICLO COMPLETO EN CULIACÁN, SINALOA.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/112. Diana Zuleika Velazquez Valdez.pdf",
    "comite": "Dra. Gabriela Silva Hidalgo, MC. Martin López Valenzuela, Dr. Javier Alonso Romo Rubio, Dr. Horacio Dávila Ramos, Dra. Nora María Cárcamo Aréchiga.",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Jorge Alberto Edeza Urias",
    "tema": "Análisis de resistencia genética de genotipos de garbanzo (Cicer arietinum L.) a razas de Fusarium oxysporum f. sp. ciceris de Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/113. Jorge Alberto Edeza Urias.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. Sixto Velarde Felix, Dr. Victor Valenzuela Herrera, Dr. Guadalupe Alfonso López Urquidez, Dr. Jesus Enrique Retes Manjarrez.",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Valeria Gómez Pérez",
    "tema": "Valoración In situ y uso de poblaciones de maíces nativos de Sinaloa, México.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/114. Valeria Gomez Perez.pdf",
    "comite": "Dr. Pedro Sánchez Peña, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Saúl Parra Terraza, Dra. Libia Iris Trejo Tellez.",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "llse Anahi Medina Armenta",
    "tema": "Evaluación de distintos tipos de corral para la mitigación de estrés calórico y bienestar animal durante las etapas de crecimiento y finalización de bovinos: respuesta productiva y características de canal.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/115. llse Anahi Medina Armenta.pdf",
    "comite": "Dra. Beatriz Isabel Castro Pérez, Dr. Francisco Gerardo Ríos Rincón, Dr. Alfredo Estrada Angulo, Dr. Alejandro Plascencia Jorquera, Dr. Carlos Raúl Rivera Méndez",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Claudia Leonor Barraza Tizoc",
    "tema": "Identificación morfológica, genética y georreferenciación de la garrapata Rhipicephalus microplus en Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/116. Claudia Barraza Tizoc.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. María Teresa Quintero Martínez, MC Jaime Eleazar Borbolla !barra, MC Nohemí Castro del Campo, Dra. Idalia Enríquez Verdugo",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Jesús Daniel Solís Carrasco",
    "tema": "Efecto de la fermentación anaeróbica en las excretas de cerdo sobre los huevos de Ascaris suum como organismo indicador de la eliminación de patógenos.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/117. Jesus Daniel Solis Carrasco.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, MC Nohemí Castro del Campo, Dra. Idalia Enríquez Verdugo, MC Jaime Eleazar Borbolla Ibarra",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Lucio Ricardo Ibáñez Garduño",
    "tema": "Caracterización molecular de Anaplasma spp . en venados cola blanca ( Odocoileus virginianus ) en cautiverio, en Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/118. Lucio Ibañez Garduño.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, MC Nohemí Castro del Campo, MC Jaime Eleazar Borbolla Ibarra, MC José Ascención Pérez Corrales.",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Jesús Antonio Ceballos Rubio",
    "tema": "Evaluación del efecto de diferentes métodos de desinfección y la reultilización de un dispositivo intravaginal a base de silicona (CIDR) Sobre la microbiota vaginal.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/119. Jesus Antonio Ceballos.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Miguel Ángel Rodríguez Gaxiola, MC Nohemí Castro del Campo, Dra. Idalia Enríquez Verdugo, MC Jaime Eleazar Borbolla Ibarra.",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Guillermo Gómez González",
    "tema": "Efecto de diferentes densidades de nematodo agallador (Meloidogyne spp.) en el cultivo de pepino {Cucumis sativus L.)",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/120. Guillermo Gomez Gonzalez.pdf",
    "comite": "Dr. Roberto Gastélum Luque, Dr. Tirzo Paúl Godoy Angula, Dr. Juan Eulogio Guerra Liera, Dr. Moisés Gilberto Yáñez Juárez, Dr. Jorge Fabio lnzunza Castro.",
    "cohorte": "2017-2019",
    "anio": "2019"
  },
  {
    "alumno": "Lucila Guillermina Beltrán Vega",
    "tema": "Identificación Molecular de la Babesia spp en pequeños rumiantes.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/121. Lucila Guillermina Beltrán Vega.pdf",
    "comite": "Dra. Idalia Enríquez Verdugo, M. en C. Jaime Eleazar Borbolla lbarra, Dra. Soila Maribel Gaxiola Camacho, Dr. Rubén Barajas Cruz, Dr. Vicente Olimón Andalón.",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Noyra Cristina Corona Soto",
    "tema": "Determinación de Mycoplasma haemocanis en sangre de caninos de Culiacán, Sinaloa, México.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/122. Noyra Cristina Corona Soto.pdf",
    "comite": "Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, Dr. Mario Cesar Rubio Robles, MC. Nohemí Castro del Campo, M C. José Ascención Pérez Corrales.",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Francisca Zatarain lrigoyen",
    "tema": "Tipificación de Anap/asma spp. en Equinos (Equus caballus).",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2017-2019/123. Francisca Zatarain Irigoyen.pdf",
    "comite": "Dra. Idalia Enríquez Verdugo, M C. Nohemí Castro Del Campo, Dra. Soila Maribel Gaxiola Camacho, Dr. Christian Urías Castro, M C. Carlos Vladimir López Aispuro.",
    "cohorte": "2017-2019",
    "anio": "2020"
  },
  {
    "alumno": "Miguel Antonio Cárdenas Contreras",
    "tema": "La inclusión de extracto de ajo y cebolla en el alimento de gallinas reduce la presencia de Salmonella enteritidis en el huevo.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2016-2018/94. Miguel Angel Cardenas Contreras.pdf",
    "comite": "Dr. Jesús José Portillo Loera, Dr. Francisco Gerado Ríos Rincón, Dr. Ramón Ignacio Castillo López. MC Carlos Bell Castro Tamayo.",
    "cohorte": "2016-2018",
    "anio": "2018"
  },
  {
    "alumno": "Natalia Heredia Burgos",
    "tema": "Detección babesia spp en Rhipicephalus sanguineus de caninos en culiacán, sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2016-2018/95. Natalia Heredia Burgos.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, MC José Ascención Pérez Corrales, Dra. Idalia Enríquez Verdugo",
    "cohorte": "2016-2018",
    "anio": "2018"
  },
  {
    "alumno": "Ana Citlaly Zazueta Gutiérrez",
    "tema": "Valoración de indicadores de bienestar animal en bovinos productores de carne en finalización intensiva.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2016-2018/96. Ana Citlaly Zazueta Gutiérrez.pdf",
    "comite": "Dr. Francisco Gerardo Ríos Rincón, Dr. Horacio Dávila Ramos, Jesús José Portillo Loera, Dr. Juan Carlos Robles Estrada",
    "cohorte": "2016-2018",
    "anio": "2018"
  },
  {
    "alumno": "Juan Carlos Cordero Armenta",
    "tema": "Efecto de la temperatura en el rendimiento del cultivo de cebolla blanca ( Allium cepa L.) en el Valle de Culiacán, Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2016-2018/100. Juan Carlos Cordero Armenta.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. Guadalupe Alfonso López Urquídez, Dr. Tomás Díaz Valdés, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Ángel Roberto Martínez Campos",
    "cohorte": "2016-2018",
    "anio": "2019"
  },
  {
    "alumno": "Milton Cabada Florez",
    "tema": "Comportamiento reproductivo de vaquillas holstein y cruzas con gyr desarrolladas en estabulación en trópico seco.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/81. Milton Cabada Florez.pdf",
    "comite": "Dr.Jesús José Portillo Loera, Dr.Omar Salvador Acuña Meléndez, Dr. Francisco Coronel Burgos, Dr. Miguel Ángel Rodríguez Gaxiola.",
    "cohorte": "2015-2017",
    "anio": "2019"
  },
  {
    "alumno": "Jeidy Valeria Soto López",
    "tema": "Efecto de la suplementación con vitamina d3 en ovinos alimentada con dietas con zilpaterol en la calidad de la carne.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/82. Jeidy Valeria Soto Lopez.pdf",
    "comite": "Juan Carlos Robles Estrada, Francisco Gerardo Ríos Rincón, Horacio Dávila Ramos, Jesús José Portillo Loera.",
    "cohorte": "2015-2017",
    "anio": "2018"
  },
  {
    "alumno": "Blanca Esthela López Gallegos",
    "tema": "Identificación de ehrlichia canis en caninos y garrapatas de culiacán, sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/83. BLANCA ESTHELA LOPEZ GALLEGOS.pdf",
    "comite": "Idalia Enríquez Verdugo, Soila Maribel Gaxiola Camacho, Nohemí Castro del Campo, Mario Cesar Rubio Robles",
    "cohorte": "2015-2017",
    "anio": "2020"
  },
  {
    "alumno": "Vladimir Martínez Cruz",
    "tema": "Efecto de la proporción de Omega-6 y Omega-3 en el alimento sobre la respuesta productiva y características del semen de gallos Rhode island.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/84. Vladimir Martinez Cruz.pdf",
    "comite": "Jesús José Portillo Loera, Ramón Ignacio Castillo López Francisco Gerardo Ríos Rincón, Carlos Bell Castro Tamayo, Miguel Ángel Rodríguez Gaxiola.",
    "cohorte": "2015-2017",
    "anio": "2019"
  },
  {
    "alumno": "Abril Corona Cárdenas",
    "tema": "Caracterización de perfiles de resistencia antimicrobiana en cepas de salmonella spp de fauna en cautiverio.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/85. Abril Corona Cardenas.pdf",
    "comite": "Gabriela Silva Hidalgo, Felipe Juárez Barranco, Héctor Samuel López Moreno, José Guadalupe Rendón Maldonado, Martín López Valenzuela.",
    "cohorte": "2015-2017",
    "anio": "2018"
  },
  {
    "alumno": "José de Jesús Campos Sánchez",
    "tema": "Identificación de anaplasma spp en moscas hematófagas de bovinos en sistema estabulado.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/86. JOSE DE JESUS CAMPOS SANCHEZ.pdf",
    "comite": "Idalia Enríquez Verdugo, Juan Joel Mosqueda Gualito, Soila Maribel Gaxiola Camacho, Nohemí Castro del Campo.",
    "cohorte": "2015-2017",
    "anio": "2020"
  },
  {
    "alumno": "Claudia Berenice De Dios",
    "tema": "Viabilidad de cryptosporidium spp en aguas superficiales del municipio de Culiacán, Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/87. Claudia Berenice De Dios.pdf",
    "comite": "Soila Maribel Gaxiola Camacho, Nohemi Castro del Campo, Idalia Enríquez Verdugo, Nohelia Castro del Campo.",
    "cohorte": "2015-2017",
    "anio": "2018"
  },
  {
    "alumno": "Mayra Gisell López Salazar",
    "tema": "Identificación de genes de patogenicidad en cepas de Salmonella entéricaaisladas de fauna silvestre en cautiverio en Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/89. Mayra Gisell Lopez Salazar.pdf",
    "comite": "Gabriela Silva Hidalgo2, Felipe Juárez Barranco2, Héctor Samuel López Moreno3, José Guadalupe Rendón Maldonado3, Martin López Valenzuela2.",
    "cohorte": "2015-2017",
    "anio": "2018"
  },
  {
    "alumno": "Mariano Llanes González",
    "tema": "Efecto de la adición de clorhidrato de zilpaterol genérico en la respuesta productiva, características de la canal de ovinos de pelo en finalización.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/91. Mariano Llanes Gonzalez.pdf",
    "comite": "Alfredo Estrada Angulo, Beatriz Isabel Castro Pérez, Alejandro Plasencia Jorquera, Germán Contreras Pérez, Claudio Angulo Montoya.",
    "cohorte": "2015-2017",
    "anio": "2017"
  },
  {
    "alumno": "Salomón Buelna Tarín",
    "tema": "Nutrición equilibrada en plántulas de hortalizas en el norte de Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/92. Salomon Buelna Tarin.pdf",
    "comite": "Gabriel Antonio Lugo García, Bardo Heleodoro, Sánchez Soto, Álvaro Reyes Olivas.",
    "cohorte": "2015-2017",
    "anio": "2018"
  },
  {
    "alumno": "Quevedo Soto Gilberto",
    "tema": "Efecto del paclobutrazol en el desarrollo y rendimiento del chile jalapeño ( Capsicum annum L. ) aplicado en diferentes fechas después de la siembra",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2015-2017/93. Gilberto Quevedo Soto.pdf",
    "comite": "Velázquez Alcaraz Teresa de Jesús, Partida Ruvalcaba Leopoldo, Ayala Tafoya Felipe1, Díaz Valdés Tomás",
    "cohorte": "2015-2017",
    "anio": "2020"
  },
  {
    "alumno": "Zazueta Torres Norma Delia",
    "tema": "Respuesta del melón y sandía al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/52. Norma Delia Zazueta Torres.pdf",
    "comite": "Dra. Velázquez Alcaraz Teresa de Jesús*, Dr. Partida Ruvalcaba Leopoldo, Dr. Díaz Valdés Tomás, Dr. Felipe Ayala Tafoya, Dra. Velázquez Alcaraz.",
    "cohorte": "2013-2015",
    "anio": "2016"
  },
  {
    "alumno": "Quintero Morales María Alejandra",
    "tema": "Respuesta del algodón y ajonjolí al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/53. QUINTERO MORALES MARIA ALEJANDRA.pdf",
    "comite": "Dra. Velázquez Alcaraz Teresa de Jesús* Partida Ruvalcaba Leopoldo, Díaz Valdés Tomás, Ayala Tafoya Felipe, Lizárraga Jiménez Ramón",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Cázares Flores Luz Llarelly",
    "tema": "Efecto que ocasiona el paclobutrazol aplicado foliarmente en plantas de pepino y calabaza",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/54. LUZ LLARELY CAZAREZ FLORES.pdf",
    "comite": "Dra. Velázquez Alcaraz Teresa de Jesús* Dr. Partida Ruvalcaba Leopoldo, Dr. Díaz Valdés Tomás, Dr. Ayala Tafoya Felipe, Dr. Parra Delgado Juan Martín",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Almada Ruiz Víctor Gabriel",
    "tema": "Actividad biológica de extractos etanólicos de meliáceas en Diaphorina citri Kuwayama 1908(hemiptera: liviidae) en ambientes controlados.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/55. Victor Almada Ruiz.pdf",
    "comite": "Dr. Lugo García Gabriel A*, Dra. Ortega Arenas Laura D., Dr. Sánchez Soto Bardo, Dr. Reyes Olivas Álvaro",
    "cohorte": "2013-2015",
    "anio": "2016"
  },
  {
    "alumno": "Ornelas Ramírez Carlos Eduardo",
    "tema": "Colecta y estimación de la variación genética y morfológica de poblaciones silvestres y criollos de chile ( Capsicum sp. ) del noroeste de México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/56. Carlos Eduardo Ornelas Ramirez.pdf",
    "comite": "Dr. Hernández Verdugo Sergio*, Dr. Pacheco Olvera Antonio Dr. Parra Delgado Saúl, Dr. López España Ricardo Guillermo",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "González López Elida Concepción",
    "tema": "Búsqueda de resistencia a virus huasteco de la vena amarilla en chile (Phyvv) en poblaciones silvestres y criollas de chile ( Capsicum spp.).",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/57. Elida Concepcion Gonzalez Lopez.pdf",
    "comite": "Dr. Hernández Verdugo Sergio*, Dr. Pacheco Olvera Antonio, Dr. Parra Delgado Saúl, MC. Retes Manjarrez Jesús Enrique",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Román Román Leonardo",
    "tema": "Cálculo de la evapotranspiración en chile ( Capsicum annuum L.) mediante los métodos penman-monteiht y el cintilómetro",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/58. Leonardo Roman Roman.pdf",
    "comite": "Dr. Díaz Valdés Tomás*, MC López Avendaño Jesús Enrique, Dr. Ayala Tafoya Felipe, Dra. Velázquez Alcaraz Teresa de Jesús",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Osuna Pérez Marco Antonio",
    "tema": "Efecto de la adición de extracto de Macleaya cordata a la dieta con alto riesgo de acidosis subaguda en ovinos en finalización.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/59. Marco Antonio Osuna Perez.pdf",
    "comite": "Dr. Alfredo Estrada Angulo*; Dr. Horacio Dávila Ramos, Dr. Juan Carlos Robles Estrada Dra. Isabel Castro Pérez",
    "cohorte": "2013-2015",
    "anio": "2016"
  },
  {
    "alumno": "Sánchez Pérez Jaime Noé",
    "tema": "Influencia de NNP de liberación lentaCon niveles de zeolita en respuesta productiva, características de canal y metabolitos sanguíneos de ovinos en finalización.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/60. Jaime Noe Sanchez Perez.pdf",
    "comite": "Dr. Horacio Dávila Ramos* Dr. Juan Carlos Robles Estrada, Dr. Francisco Gerardo Ríos Rincón",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Camacho González Luis Roberto",
    "tema": "Evaluación de la adición de una fuente de NNP de liberación controlada (Optigen 1200®) en dietas integrales sobre comportamiento productivo y niveles de nitrógeno en leche (MUN) para vacas productoras de leche en el trópico seco.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/61. Luis Roberto Camacho Gonzalez.pdf",
    "comite": "Dr. Horacio Dávila Ramos*, Dr. Miguel alberto Luque Agúndes, Dra. Beatriz Isabel Castro Pérez",
    "cohorte": "2013-2015",
    "anio": "2016"
  },
  {
    "alumno": "Aguirre Meza Rubén",
    "tema": "Efecto del consumo adicional de extracto de taninos en la respuesta productiva de cerdos en crecimiento-finalización >",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/62. Ruben Aguirre Meza.pdf",
    "comite": "Dr. Romo Rubio Javier Alonso*, Dr. Barajas Cruz Rubén, MC.Güémez Gaxiola Héctor Raúl, MC Romo Valdez Juan Manuel",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Castro Flores Rebeca",
    "tema": "Detección de Lentivirus en pequeños rumiantes (LVPR) hatos mixtos de ovinos y caprinos en Culiacán, Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/63. REBECA CASTRO FLORES.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho*, Dr. Efrén Díaz Aparicio (CENID microbiología Animal-INIFAP-Méx) Dra. Idalia Enríquez Verdugo, MC Luis Gómez Núñez (CENID microbiología Animal-INIFAP-Méx)",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Romo Barrón Cinthia Beatriz",
    "tema": "Comportamiento reproductivo de vacas Holstein en lactación utilizando diferentes protocolos de sincronización de estro en trópico seco",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/64. Cinthia Beatriz Romo Barron.pdf",
    "comite": "Dr. Alfredo Estrada Angulo*; Dr. Miguel Alberto Luque Agundes; Dra. Beatriz Isabel Castro Pérez; Dr. Germán Contreras Pérez; Dr. Claudio Angulo Montoya",
    "cohorte": "2013-2015",
    "anio": "2016"
  },
  {
    "alumno": "Badilla Medina Cesar Noé",
    "tema": "Identificación de Gen MSP4 de Anaplasma ovis de pequeños rumiantes.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/65. Cesar Noe Badilla Medina.pdf",
    "comite": "Dra. Idalia Enríquez Verdugo*, Dra. Soila Maribel Gaxiola Camacho, MC Jaime Eleazar Borbolla Ibarra, MC Nohemí Castro del Campo",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Iribe Zazueta Alberto",
    "tema": "Caracterización de genes de la membrana externa del sistema de secreción tipo iv de Anaplasma marginale.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/66. Alberto Iribe Zazueta.pdf",
    "comite": "Dra. Enríquez Verdugo Idalia*, Dra. Gaxiola Camacho Soila Maribel, Dr. Romo Rubio Javier Alonso MC Nohemí Castro del Campo",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Miranda Camacho Jorge Luis",
    "tema": "Tipificación molecular del gen IS900 de M ycobacterium avium subsp. paratuberculosis en ovinos y caprinos en Culiacán, Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/67. Jorge Luis Miranda Camacho.pdf",
    "comite": "Dra. Enríquez Verdugo Idalia*, MC. López Pérez Héctor Manuel Dra. Gaxiola Camacho Soila Maribel Dr. Rubén Barajas Cruz",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Murillo Ayala Eva Xitlalic",
    "tema": "Influencia de la adición de extracto de taninos condensados en la producción de gas i n vitro de las heces de bovinos en engorda",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/68. Eva Xitlalic Murillo Ayala.pdf",
    "comite": "Dr.Barajas Cruz Rubén* Dr. Javier Alonso Romo Rubio Dra. Idalia Enríquez Verdugo",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Rojas Román Luis Antonio",
    "tema": "Efecto de la adición de zeolita (Clinoptilolita) en la respuesta productiva y características de la canal de ovinos de pelo en dietas de finalización",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/69. LUIS ANTONIO ROJAS ROMAN.pdf",
    "comite": "Dra. Beatriz Isabel Castro Pérez*; Dr. Alfredo Estrada Angulo; Dra. María Andrea Cerrillo Soto (UJED-DGO); Dr. Germán Contreras Pérez; Dr. Francisco Gerardo Ríos Rincón",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Leyva Medina Karla Hildeliza",
    "tema": "Método de suministro del clorhidrato de zilpaterol en ovinos: crecimiento, características de la canal y calidad de la carne.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/70. Karla Hideliza Leyva Medina.pdf",
    "comite": "Dr. Juan Carlos Robles Estrada*; Dr. Horacio Dávila Ramos; Dr. Francisco Gerardo Ríos Rincón; Dr. Jesús José Portillo Loera",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Corona Palazuelos Melissa Belem",
    "tema": "Influencia de la adición de extracto de taninos en la carga por nematodos en becerros recién llegados al corral de engorda",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/71. Melissa Belem Corona Palazuelos.pdf",
    "comite": "Dr. Rubén Barajas Cruz*; Dra. Soila Maribel Gaxiola Camacho; Dr. Javier Alonso Romo Rubio",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Quintero Beltrán Denisse Carmina",
    "tema": "Eficiencia reproductiva de borregas pelibuey de acuerdo a la época de empadre y la restricción del amamantamiento",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/72. Denisse Carmina Quinero Medina.pdf",
    "comite": "Dr. Jesús José Portillo Loera*; MC María Teresa Espinoza León; Dr. Miguel Alberto Luque Agundes",
    "cohorte": "2013-2015",
    "anio": "2016"
  },
  {
    "alumno": "Bonilla Valverde Elmer Benjamín",
    "tema": "Influencia del consumo adicional de taninos en la respuesta productiva de corderos en engorda",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/73. Elmer Benjamin Bonilla Valverde.pdf",
    "comite": "Dr. Romo Rubio Javier Alonso*, Dr. Flores Aguirre Leopoldo Raúl Dr. Barajas Cruz Rubén, MC Lomelí Gómez Juan José",
    "cohorte": "2013-2015",
    "anio": "2016"
  },
  {
    "alumno": "Robles Camargo Tirzo",
    "tema": "Efecto de diferentes protocolos de sincronización del estro e inseminación artificial a tiempo fijo en la respuesta reproductiva de vacas Holstein x Gyr explotadas en el trópico seco.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/74. Robles Camargo Tirzo.pdf",
    "comite": "Dr. Alfredo Estrada Angulo, Dr. Miguel Alberto Luque Agundes; Dra. Beatriz Isabel Castro Pérez; Dr. Germán Contreras Pérez",
    "cohorte": "2013-2015",
    "anio": "2016"
  },
  {
    "alumno": "Heras Sierra Sarahí de Jesús",
    "tema": "Efecto de la dinámica del crecimiento y producción de la lombriz roja californiana ( Eisenia foetida .) bajo la influencia de tres sustratos diferentes a base de estiércol de origen animal.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/75. Sarahí de Jesus Heras Sierra.pdf",
    "comite": "Dr. Horacio Dávila Ramos*; Dr. Jesús José Portillo Loera; Dr. Juan Carlos Robles Estrada MC Martín Parra Delgado",
    "cohorte": "2013-2015",
    "anio": "2015"
  },
  {
    "alumno": "Sauceda Luna Rosa María de Jesús",
    "tema": "Exploración y validación de marcas de crecimiento de estructuras duras de jaiba azul Callinectes arcuatus (ORDWAY 1863) en Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/76. ROSA MARIA DE JESUS SAUCEDA LUNA.pdf",
    "comite": "Dr. Nicolás Castañeda Lomas; Dr. Guillermo Rodríguez Domínguez; Dr. Jorge Saúl Ramírez Pérez; MC Adán Félix Ortiz",
    "cohorte": "2013-2015",
    "anio": "2017"
  },
  {
    "alumno": "Sauceda Acosta Raúl Hipolito",
    "tema": "Fertilización nitrogenada en garbanzo ( Cicer arietinum L.) en el norte de Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/77. Raul Sauceda Acosta.pdf",
    "comite": "Dr. Lugo García G. Antonio* , Dr. Rodríguez Cota Franklin G Dr. Álvaro Reyes Olivas Dr. Sánchez Soto Bardo",
    "cohorte": "2013-2015",
    "anio": "2017"
  },
  {
    "alumno": "Caro López Eder",
    "tema": "Manejo de picudo de chile Anthonomus eugenii cano usando tierra de diatomea, en Culiacán, Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/79. Eder Caro Lopez.pdf",
    "comite": "Dra. Velázquez A. Teresa de Jesús*, Dr. Partida R. Leopoldo.; Dr. Caro Macias P.H., MC. García Quintero J.R.",
    "cohorte": "2013-2015",
    "anio": "2017"
  },
  {
    "alumno": "Soto Moreno Luis Esteban",
    "tema": "Influencia de la adición de extracto de Macleaya cordata en la presencia de Escherichia coli en bovinos de engorda",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2013-2015/80. Luis Esteban Soto Moreno.pdf",
    "comite": "Dr. Rubén Barajas Cruz*; Dra. Soila Maribel Gaxiola Camacho; Dr. Javier Alonso Romo Rubio; Dr. Leopoldo Raúl Flores Aguirre",
    "cohorte": "2013-2015",
    "anio": "2020"
  },
  {
    "alumno": "Gómez Martínez José Rigoberto",
    "tema": "Conductancia estomática, bióxido de carbono asimilado, transpiración y producción del tomate cultivado en tres ambientes",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2012-2014/50. Jose Rigoberto Gomez Martinez.pdf",
    "comite": "Dra. Velázquez Alcaraz Teresa de Jesús, Dr. Partida Ruvalcaba Leopoldo, Dr. Díaz Valdés Tomás,Dr. Ayala Tafoya Felipe",
    "cohorte": "2012-2014",
    "anio": "2015"
  },
  {
    "alumno": "Coronado Trejo Carmen Gabriela",
    "tema": "Identificación de Anaplasma phagocytophilum mediante la técnica de PCR en perros de Culiacán, Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2012-2014/51. Carmen Coronado Trejo.pdf",
    "comite": "Dra. Enríquez Verdugo Idalia Dra. Gaxiola Camacho Soila Maribel, MC Castro del Campo Nohemí, MC Cota Guajardo Silvia del Carmen",
    "cohorte": "2012-2014",
    "anio": "2014"
  },
  {
    "alumno": "Heras Sierra Teresa de Jesús",
    "tema": "Influencia de la adición de extracto de taninos en la presencia de Escherichia col i, en las heces de bovinos en engorda.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/34. TESIS TERESA DE JESUS HERAS SIERRA.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dra. Idalia Enríquez Verdugo, Dra. Soila M. Gaxiola C., Dr. Javier A. Romo Rubio",
    "cohorte": "2011-2013",
    "anio": "2013"
  },
  {
    "alumno": "Martínez Gallardo José Ángel",
    "tema": "Identificación y cuantificación de nemátodos fitoparásitos en el cultivo de papaya y su interacción con características edáficas.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/35. Jose Angel Martinez Gallardo.pdf",
    "comite": "Dr. Tomás Díaz Valdés, MC José Armando Carrillo Facio, Dr. Leopoldo Partida R., Dr. Raúl Allende Molar, Dr. José Benigno Valdez Torres",
    "cohorte": "2011-2013",
    "anio": "2013"
  },
  {
    "alumno": "López Cuén Pedro Iván",
    "tema": "Compatibilidad del paclobutrazol con insecticidas, fungicidas, fertilizantes foliares y reguladores del crecimiento",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/36.Pedro Ivan Lopez Cuen.pdf",
    "comite": "Dr. Leopoldo Partida R, Dr. Tomás Díaz Valdés, MC Felipe Ayala Tafoya, MC Ramón Lizárraga Jiménez",
    "cohorte": "2011-2013",
    "anio": "2013"
  },
  {
    "alumno": "Félix Ortiz José Adán",
    "tema": "Variabilidad ambiental y su efecto sobre la abundancia de postlarvas de camarón Penaidae en dos zonas del Pacífico mexicano",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/37. Jose Adan Felix Ortiz.pdf",
    "comite": "Dr. Nicolás Casteñeda Lomas, Dr. Eugenio Alberto Aragón Noriega, MC Manuel Efrén Siu Quevedo, Dr. Gustavo Alejandro Rodríguez Montes de Oca",
    "cohorte": "2011-2013",
    "anio": "2013"
  },
  {
    "alumno": "Ayala Armenta Quintín Armando",
    "tema": "Efectividad de fungicidas para el control del moho blanco S clerotiorum (Lib) de Bary en frijól",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/38.Quintin Ayala Armenta.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Dr. Edgardo Cortéz Mondáca, Dr. Víctor Manuel Leal León, Dr. Álvaro Reyes Olivas, Dr. Miguel Ángel Apodaca Sánchez",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "Encines Chaidez Olivia Vanessa",
    "tema": "Producción de tomate con uso de sustratos orgánicos y diferentes soluciones nutritivas en invernadero",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/39. Vanessa Encines Chaidez.pdf",
    "comite": "Dr. Tomás Díaz Valdez, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Leopoldo Partida R., MC Marino Valenzuela López",
    "cohorte": "2011-2013",
    "anio": "2015"
  },
  {
    "alumno": "González Canizales Jesús Francisco",
    "tema": "Respuesta de genotipos de tomate ( Solanu m lycopersicum ) al virus del Tomato Yellow leaf curt virus (TYLCV)",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/40. Jesus Francisco Gonzalez Canizalez.pdf",
    "comite": "Dr. Leopoldo Partida R, Dr. José Antonio Garzón Tiznado, Dr. Jesús José Portillo Loera, Dr. Tomás Díaz Valdés, MC Jesús Enrique Retes Manjarrez",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "López Molina Ramón",
    "tema": "Análisis de multiresistencia genética de variedades de garbanzo generadas en el noroeste de México a la fusariocis vascular y pudrición radicular",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/41. Ramon Lopez Molina.pdf",
    "comite": "Dr. Leopoldo Partida R., MC Sixto Velarde Félix, Dra. Teresa de Jesús Velázquez Alcaraz",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "Millán Chaidez Reynaldo",
    "tema": "Determinación de transmisión transovárica y retención de de Candidatus liberibacter solanacearum por paratrioza (Bactericera cockerelli Sulc .)",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/42. REYNALDO MILLAN CHAIDEZ.pdf",
    "comite": "Dr. Leopoldo Partida R., Dr. Garzón Tiznado José Antonio, MC Retes Manjarrez Jesús Enrique, Dra. Melgoza Villagómez Claudia",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "Molina Cárdenas Lorena",
    "tema": "Búsqueda de fuentes de resistencia en genotipos de garbanzo generados en Sonora a la pudrición radicular ocasionado por Fusarium solani",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/43. Lorena Molina Cardenas.pdf",
    "comite": "Dr. Leopoldo Partida R. , MC Sixto Velarde Félix, Dra. Teresa de Jesús Velázquez Alcaraz",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "Tirado Ramírez Martín Abraham",
    "tema": "Estimación de la evapotranspiración real en maíz utilizando la técnica del cintilómetro y el método de la FAO penman-monteith",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/44. Martin Abraham Tirado Ramirez.pdf",
    "comite": "Dr. Díaz Valdés Tomás, Dr. Partida Ruvalcaba Leopoldo, MC Lizárraga Jiménez Ramón, MC López Avendaño Jesús Enrique",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "Zamora Galván Francisco",
    "tema": "Búsqueda de la resistencia genética en genotipo de garbanzo generados en Sinaloa a la fusariosis vascular ocasionada por la raza 5 de foc.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/45. Francisco Zamora Galvan.pdf",
    "comite": "Dr. Leopoldo Partida R., MC Sixto Velarde Félix, Dr. Díaz Valdés Tomás",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "Romo Valdez Juan Manuel",
    "tema": "Efecto de la aplicación intrauterina de semen adicionado con oxitocina en la respuesta productiva de cerdas servidas durante el verano y otoño",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/46. Juan Manuel Romo.pdf",
    "comite": "Dr. Javier Alonso Romo Rubio, Dr. Rubén Barajas Cruz, Dr. Leopoldo Raúl Flores Aguirre, MC Héctor Raúl Güémez Gaxiola",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "Vargas Nava Alexis Israel",
    "tema": "Prevalencia y viabilidad de Toxocara canis en parques públicos de la ciudad de Culiacán, Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/47. Alexis Israel Vargas Nava.pdf",
    "comite": "Dra. Gaxiola Camacho Soila Maribel, Dra. Enríquez Verdugo Idalia, MC Castro del Campo Nohemí",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "Verdugo Insúa Moisés",
    "tema": "Influencia de la adición de metionina de zinc y clorhidrato de zilpaterol en la respuesta productiva y características de la canal de toretes en finalización",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/Cohorte 2011-2013/48. Moises Verdugo Insua.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dr. Javier Alonso Romo Rubio, Dr. Leopoldo Raúl Flores Aguirre, MC Alejandro Camacho Castellano",
    "cohorte": "2011-2013",
    "anio": "2014"
  },
  {
    "alumno": "Mendívil Trujillo Héctor Ramiro",
    "tema": "Identificación molecular de razas fisiológicas de Fusarium oxysporum f. sp. licopercici en el estado de Sinaloa, México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/17. HECTOR RAMIRO MENDIVIL TRUJILLO.pdf",
    "comite": "Dr. Pedro Sánchez Peña, Dr. Ignacio Eduardo Maldonado Mendoza, MC Rey David Nuñéz Cebreros, Dr. Saúl Parra Terraza, Dr. Manuel Villarreal Romero",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Iñiguez Torres Karina Janeth",
    "tema": "Análisis metodológico para determinar resistencia en genotipo de tomate ( Solanum licopersicum l. ) a Candidatos liberibacter solanacearum",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/18. KARINA JANETH INIGUEZ TORRES.pdf",
    "comite": "Dr. Leopoldo Partida Ruvalcaba, Dr. José Antonio Garzón Tiznado, Dr. Jesús José Portillo Loera, MC Moisés Barajas Ortiz",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Cervantes Romero Benjamín",
    "tema": "Crecimiento y rendimiento de del frijol cultivado con fertilizante nitrogenado y paclobutrazol aplicado foliarmente",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/19. BENJAMIN CERVANTES ROMERO.pdf",
    "comite": "Dra. Teresa De Jesús Velázquez Alcaraz*, Dr. Leopoldo Partida Ruvalcaba, Dr. Tomás Díaz Valdez, MC Felipe Ayala Tafoya, MC Marino Valenzuela López",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Valdez Rubio Nallely",
    "tema": "Identificación de especies de Fusarium presentes en el cultivo del maíz en regiones de Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/20. NALLELY VALDEZ RUBIO.pdf",
    "comite": "Dr. Leopoldo Partida Ruvalcaba, MC Sixto Velarde Félix, Dr. José Antonio Garzón Tiznado, Dra. Teresa de Jesús Velázquez Alcaraz",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Linares Holguín Orlando Omer",
    "tema": "Análisis de la diversidad genética de P holisma culiacanum Y .",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/21. ORLANDO OMER LINARES HOLGUIN.pdf",
    "comite": "Dr. Pedro Sánchez Peña, Dr. Sergio Hernández Verdugo, Dr. José Antonio Garzón Tiznado",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Ramírez Soto Milagros",
    "tema": "Propiedades físicas, agronómicas y contenido de proteína de genotipos de garbanzo en ambientes del noroeste de México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/22. MILAGROS RAMIREZ SOTO.pdf",
    "comite": "Dr. Leopoldo Partida Ruvalcaba, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Tomás Díaz Valdés",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Pérez López Oscar",
    "tema": "Viviparidad de Pachycereus pecten aboriginum ( cactaceae ) y sus implicaciones en germinación y supervivencia.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/23. OSCAR PEREZ LOPEZ.pdf",
    "comite": "Dr. Álvaro Reyes Olivas, Dr. Gabriel Antonio Lugo García, Dr. Bardo Eleodoro Sánchez Soto, MC Pedro Casillas Álvarez",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Cárdenas Flores Antonio",
    "tema": "Respuesta al cloro y sodio en la solución nutritiva, producción de plántulas y rendimiento de tomate hidropónico",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/24. ANTONIO CARDENAS FLORES.pdf",
    "comite": "Dra. Saúl Parra Terraza, Dr. Manuel Villarreal Romero, Dr. Sergio Hernández Verdugo, Dr. Pedro Sánchez Peña",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Castro López Ricardo",
    "tema": "Alternativas para el manejo de Meloidogyne spp en el cultivo de pepino bajo condiciones de invernadero",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/25. RICARDO CASTRO LOPEZ.pdf",
    "comite": "Dr. Leopoldo Partida Ruvalcaba, Dr. Tirso Paúl Godoy Angulo, Dr. Roberto Gastélum Luque, Dra. Teresa De Jesús Velázquez Alcaraz, MC Moisés Gilberto Yáñez Juárez",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Vega Gutiérrez Tomás Aarón",
    "tema": "Influencia del estrés hídrico en variables fenotípicas e incidencia de plagas en maíz",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/26. TOMAS AARON VEGA GUTIERREZ.pdf",
    "comite": "Dr. Tomás Díaz Valdés, MC Guadalupe Alfonso López Urquídez, Dr. Leopoldo Partida Ruvalcaba, Dra. Teresa De Jesús Velázquez Alcaraz, MC Ramón Lizárraga Jiménez",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "López Aispuro Carlos Vladimir",
    "tema": "Identificación de Anaplasma phagocytophilum por PCR anidado en equinos de Culiacán, Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/27. CARLOS VLADIMIR LOPEZ AISPURO.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, MC Nohemí Castro del Campo, MC Silvia del Carmen Cota Guajardo",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Mariscal Castro José Ángel",
    "tema": "Identificación de las especies de Anaplasma en bovinos por técnicas moleculares.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/28. JOSE ANGEL MARISCAL CASTRO.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, MC Jaime Eleazar Borbolla Ibarra, MC Nohemí Castro del Campo",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Covarrubias Hernández Marcela",
    "tema": "Efecto del consumo adicional de cromo en cerdas prepúberes en el desempeño reproductivo posterior",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/29. MARCELA COVARRUBIAS HERNANDEZ.pdf",
    "comite": "Dr. Javier Alonso Romo Rubio, Dr. Rubén Barajas Cruz, MC Héctor Raúl Güémez Gaxiola, MC Juan Manuel Uriarte López",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Aréchiga Castillo Sergio Candelario",
    "tema": "Efecto del tiempo consumiendo extracto de taninos sobre el nitrógeno ureico en plasma, respuesta productiva y características de la canal de toretes en engorda intensiva",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/30. SERGIO CANDELARIO ARECHIGA CASTILLO.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dr. Javier Alonso Romo Rubio, Dr. Leopoldo Raúl Flores Aguirre, Dra. Idalia Enríquez Verdugo, Dra. Soila M. Gaxiola Camacho",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "Montoya Torrero Antonino Darío",
    "tema": "Influencia de la adición de metionina de cromo y taninos en la respuesta productiva y características de la canal de bovinos en engorda intensiva",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/31. ANTONIO DARIO MONTOYA TORRERO.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dr. Javier Alonso Romo Rubio, Dr. Leopoldo Raúl Flores Aguirre, Dra. Idalia Enríquez Verdugo, Dra. Soila M. Gaxiola Camacho",
    "cohorte": "2010-2012",
    "anio": "2013"
  },
  {
    "alumno": "González González Daniel",
    "tema": "Influencia de la edad de corte, densidad de siembra y arreglo de surco en la producción de forraje de las variedades Humaya y Tainung-2 de Kenaf cultivadas en el valle de Culiacán, Sinaloa.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2010-2012/32. DANIEL GONZALEZ GONZALEZ.pdf",
    "comite": "Dr. Javier Alonso Romo Rubio, Dr. Rubén Barajas Cruz, Dr. Leopoldo Partida Ruvalcaba, Dr. Leopoldo Raúl Flores Aguirre",
    "cohorte": "2010-2012",
    "anio": "2014"
  },
  {
    "alumno": "Angulo Castro Azareel",
    "tema": "Producción de biomasa, fijación de N2 y actividad microbiana del suelo bajo cultivo de cobertura con Mucuna pruriens",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/6. Azareel Angulo Castro.pdf",
    "comite": "Dr. Manuel Villarreal Romero, Dr. Saúl Parra Terraza, Dr. Rogelio Sosa Pérez, Dr. Pedro Sánchez Peña, Dr. Sergio Hernández Verdugo",
    "cohorte": "2009-2011",
    "anio": "2011"
  },
  {
    "alumno": "Gerardo García Juan José",
    "tema": "Patrones de variación morfológica en chile silvestre ( Capsicum annuum var glabriusculum ) del noroeste de México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/7. Juan Jose Garcia Gerardo.pdf",
    "comite": "Dr. Sergio Hernández Verdugo, Dr. Saúl Parra Terraza, Dr. Manuel Villarreal Romero",
    "cohorte": "2009-2011",
    "anio": "2012"
  },
  {
    "alumno": "Menchaca Ceja Felipe",
    "tema": "Crecimiento y rendimiento de grano de sorgo en respuesta al paclobutrazol aplicado en semilla o follaje",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/8. Felipe Menchaca Ceja.pdf",
    "comite": "Dra. Teresa De Jesús Velázquez Alcaraz, Dr. Juan Francisco Ponce Medina, Dr. Leopoldo Partida Ruvalcaba, Dr. Tomás Días Valdés, MC Felipe Ayala Tafoya",
    "cohorte": "2009-2011",
    "anio": "2011"
  },
  {
    "alumno": "Mendoza Medrano Daniel",
    "tema": "Comportamiento del maíz (Z ea mays L.) baja diferentes fechas de siembra",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/9. Daniel Mendoza Medrano.pdf",
    "comite": "Dr. Tomás Díaz Valdés, Dr. Leopoldo Partida R., Dra. Teresa de Jesús Velázquez Alcaraz, MC Marino Valenzuela López, MC Ramón Lizárraga Jiménez",
    "cohorte": "2009-2011",
    "anio": "2012"
  },
  {
    "alumno": "Retes Manjarrez Jesús Enrique",
    "tema": "Detección de genotipos de solanum lycopersicum l. resistentes al permanente del tomate ( Candidatus liberibacter solanacearum )",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/10. JESUS ENRIQUE RETES MANJARREZ.pdf",
    "comite": "Dr. Leopoldo Partida Ruvalcaba, Dr. José Antonio Garzón Tiznado, Dr. Jesús José Portillo Loera, Dr. José Guadalupe Rendón Maldonado, Dra. Claudia del Rosario León Sicairos",
    "cohorte": "2009-2011",
    "anio": "2011"
  },
  {
    "alumno": "Cuén Beltrán Ramón Antonio",
    "tema": "Identificación de Mycobacterium avium subespecie paratuberculosis en ovinos de Culiacán, Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/11. Ramon Antonio Cuen Beltran.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, MC Nohemí Castro del Campo, MC Silvia del Carmen Cota Guajardo, MC Héctor Manuel López Pérez",
    "cohorte": "2009-2011",
    "anio": "2012"
  },
  {
    "alumno": "Félix Camacho Silvia Alicia",
    "tema": "Respuesta reproductiva de la cerda en anestro lactacional al consumo adicional de cromo orgánico y aplicación de GNRH-A",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/12. Silvia Alicia Felix Camacho.pdf",
    "comite": "Dr. Javier Alonso Romo Rubio, Dr. Rubén Barajas Cruz, Dr. Leopoldo Raúl Flores Aguirre, MC Héctor Raúl Güémez Gaxiola",
    "cohorte": "2009-2011",
    "anio": "2012"
  },
  {
    "alumno": "Ortiz López Briceida",
    "tema": "Efecto de implantes con zeranol y trenbolona + estradol en la respuesta productiva de ovinos de pelo en engorda intensiva.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/13. BRICEIDA ORTIZ LOPEZ.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dr. Javier A. Romo R., Dr. Leopoldo Raúl Flores Aguirre, MC Juan José Lomelí Gómez",
    "cohorte": "2009-2011",
    "anio": "2012"
  },
  {
    "alumno": "Camacho Castellanos Alejandro",
    "tema": "Influencia de la adición de extracto de taninos a la dieta en la respuesta reproductiva y características de la canal de toretes en engorda intensiva",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/14. Alejandro Camacho Castellanos.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dr. Javier A. Romo R., Dr. Leopoldo Raúl Flores Aguirre, MC Juan José Lomelí Gómez.",
    "cohorte": "2009-2011",
    "anio": "2012"
  },
  {
    "alumno": "Cárdenas Dávila Pedro Edgardo",
    "tema": "Descripción del crecimiento y supervivencia de la tilapia roja ( O reochromis spp ) cultivada en jaulas flotantes en ambiente marino.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2009-2011/15. Pedro Edgardo Cardenas Davila.pdf",
    "comite": "Dr. Gustavo Alejandro Rodríguez Montes de Oca, Dra. Martha María Gpe. Zarain Herzberg, Dr. Manuel Valdez López, Dr. Hervey Rodríguez González",
    "cohorte": "2009-2011",
    "anio": "2012"
  },
  {
    "alumno": "Banda Perea Rosario Celene",
    "tema": "Uso eficiente del nitrógeno , el agua y producción de maíz con cinco dosis de nitrógeno",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2008-2010/1. Rosario Celene Banda Perea.pdf",
    "comite": "Dr. Tomás Díaz Valdés, MC. Marino Valenzuela López, Dr. Leopoldo Partida Ruvalcaba, Dra. Teresa de Jesús Velázquez Alcaraz",
    "cohorte": "2008-2010",
    "anio": "2011"
  },
  {
    "alumno": "Hernández Valdez Gloria",
    "tema": "Crecimiento y rendimiento del maíz en respuesta al paclobutrazol aplicado hasta en tres etapas fenológicas",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2008-2010/2. Gloria Hernandez Valdez.pdf",
    "comite": "Dr. Leopoldo Partida Ruvalcaba, Dra. Teresa de Jesús Velázquez Alcaraz, Dr Tomás Díaz Valdés MC. Marino Valenzuela López",
    "cohorte": "2008-2010",
    "anio": "2011"
  },
  {
    "alumno": "Espino García Marco Antonio",
    "tema": "Efecto de la adición de propionato de cromo a la dieta en la respuesta inmune y desempeño productivo de toretes en engorda intensiva",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2008-2010/3. Marco Antonio Espino Garcia.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dr. Javier Alonso Romo Rubio, Dr. Felipe Juárez Barranco",
    "cohorte": "2008-2010",
    "anio": "2011"
  },
  {
    "alumno": "Borboa Olivas Jesús Alejandro",
    "tema": "Producción de anticuerpos policlonales para antígenos de Micobacterium bovis",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2008-2010/4. Jesus Alejandro Borboa Olivas.pdf",
    "comite": "Dra.Soila Maribel Gaxiola Camacho, MC Héctor Manuel López Pérez, Dra. Idalia Enríquez Verdugo",
    "cohorte": "2008-2010",
    "anio": "2011"
  },
  {
    "alumno": "Miguel Ángel Rodríguez Gaxiola (SNI)",
    "tema": "Respuesta de la adición de zinc orgánico al alimento en la calidad seminal de ovinos de pelo",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/Tesis/COHORTE 2008-2010/5. Miguel Angel Rodriguez.pdf",
    "comite": "Dr. Javier Alonso Romo Rubio, Dr. Rubén Barajas Cruz, Dra. Soila Maribel Gaxiola Camacho, MC Jaime E. Borbolla Ibarra",
    "cohorte": "2008-2010",
    "anio": "2011"
  }
];

  const tbody = document.querySelector("#tablaRepositorioMCA tbody");
  const searchInput = document.getElementById("busquedaRepositorioMCA");
  const cohorteFilter = document.getElementById("filtroCohorteRepositorioMCA");
  const paginationUl = document.getElementById("paginacionRepositorioMCA");

  if (!tbody || !searchInput || !cohorteFilter || !paginationUl) return;

  const cohorts = [...new Set(DATA_REPOSITORIO_MCA.map(d => d.cohorte))].filter(Boolean);
  cohorts.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = "Cohorte " + c;
    cohorteFilter.appendChild(opt);
  });

  let currentPage = 1;
  const limit = 10;
  let filteredData = [...DATA_REPOSITORIO_MCA];

  function renderTable() {
    tbody.innerHTML = "";
    const slice = filteredData.slice((currentPage - 1) * limit, currentPage * limit);
    if (!slice.length) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-muted">No se encontraron tesis para los filtros seleccionados.</td></tr>';
      return;
    }
    slice.forEach(d => {
      const tr = document.createElement("tr");
      const pdfCell = d.pdf 
        ? `<a href="${d.pdf}" target="_blank" rel="noopener noreferrer" class="btn-pdf-doc" title="Descargar / Ver Tesis en PDF">
             <svg width="26" height="30" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M3 3C3 1.89543 3.89543 1 5 1H18L25 8V29C25 30.1046 24.1046 31 23 31H5C3.89543 31 3 30.1046 3 29V3Z" fill="#FFFFFF" stroke="#DC2626" stroke-width="2"/>
               <path d="M18 1V8H25" fill="#FEE2E2" stroke="#DC2626" stroke-width="2" stroke-linejoin="round"/>
               <rect x="2" y="14" width="22" height="12" rx="3" fill="#DC2626"/>
               <text x="13" y="23.2" font-family="'Inter', system-ui, sans-serif" font-weight="900" font-size="8.5" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">PDF</text>
             </svg>
           </a>`
        : `<span class="text-muted small">—</span>`;

      tr.innerHTML = `
        <td class="fw-bold text-dark">${d.alumno}</td>
        <td><div class="fw-semibold text-secondary-emphasis">${d.tema}</div></td>
        <td class="small text-muted">${d.comite}</td>
        <td class="text-center"><span class="badge bg-light text-dark border">${d.cohorte}</span></td>
        <td class="text-center">${pdfCell}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function renderPagination() {
    paginationUl.innerHTML = "";
    const totalPages = Math.ceil(filteredData.length / limit);
    if (totalPages <= 1) return;

    const addBtn = (text, targetPage, active = false, disabled = false) => {
      const li = document.createElement("li");
      li.className = "page-item " + (active ? "active " : "") + (disabled ? "disabled" : "");
      li.innerHTML = '<a class="page-link" href="#">' + text + '</a>';
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

    addBtn("&laquo;", currentPage - 1, false, currentPage === 1);

    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    if (start > 1) {
      addBtn(1, 1);
      if (start > 2) addBtn("...", null, false, true);
    }

    for (let i = start; i <= end; i++) {
      addBtn(i, i, i === currentPage);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) addBtn("...", null, false, true);
      addBtn(totalPages, totalPages);
    }

    addBtn("&raquo;", currentPage + 1, false, currentPage === totalPages);
  }

  function applyFilter() {
    const q = searchInput.value.toLowerCase().trim();
    const c = cohorteFilter.value;
    filteredData = DATA_REPOSITORIO_MCA.filter(d => 
      (!c || c === 'todos' || d.cohorte === c) &&
      (!q || Object.values(d).some(v => String(v).toLowerCase().includes(q)))
    );
    currentPage = 1;
    renderTable();
    renderPagination();
  }

  searchInput.addEventListener("input", applyFilter);
  cohorteFilter.addEventListener("change", applyFilter);

  applyFilter();
});