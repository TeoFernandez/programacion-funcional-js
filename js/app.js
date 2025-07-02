let autos=[
    {patente: "ABC121", kilometraje: 230000, anio: 2010, marca: "FIAT"},
    {patente: "ABC122", kilometraje: 130000, anio: 2025, marca: "FORD"},
    {patente: "ABC123", kilometraje: 100000, anio: 2022, marca: "RENAULT"},
    {patente: "ABC124", kilometraje: 80000, anio: 2018, marca: "FORD"},
    {patente: "ABC125", kilometraje: 30000, anio: 2008, marca: "FIAT"},
    {patente: "ABC126", kilometraje: 40000, anio: 2010, marca: "FIAT"},
    {patente: "ABC127", kilometraje: 160000, anio: 2012, marca: "PEUGEOT"},
    {patente: "ABC128", kilometraje: 190000, anio: 2015, marca: "FIAT"},
    {patente: "ABC129", kilometraje: 120000, anio: 2006, marca: "RENAULT"},
    {patente: "ABC130", kilometraje: 130000, anio: 2020, marca: "FORD"}
]

// Ejercicios
/*
    1. filtrar todos los vehiculos con kilometraje mayor a 100000
    2. Traer las marcas de todos los vehiculos
    3. Cual es el año de fabricacion mas nuevo
    4. Traer el vehiculo con patente ABC129
    5. Devolver la patente y la marca de cada vehiculo
    6. Devolver la antiguedad (es decir los años que tiene) cada vehiculo
    7. En base al punto 6) devolver un json nuevo por cada vehiculo que indique patente, marca y antiguedad
*/

addEventListener("DOMContentLoaded", ()=>{

    btnKiloMay.addEventListener("click",funcionKiloMay);
    btnMarcas.addEventListener("click",funcionMarcas);
    btnAnioNuevo.addEventListener("click",funcionAnioNuevo);
    btnPatente.addEventListener("click",funcionPatente);
    btnPatenteYMarca.addEventListener("click",funcionPatenteYMarca);
    btnModelo.addEventListener("click",funcionModelo);

})

//Punto 1
function funcionKiloMay(){
    let vectorRet = autos.filter(auto =>auto.kilometraje>100000);
    console.log(vectorRet);
}
