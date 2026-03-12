function sacarAleatorios(lista,cantidad, idElemento){
let resultado = "";

    for (let i = 0; i<cantidad; i++){
            let a=lista.length;
            let b=Math.floor(Math.random()*a)
            let c=lista[b] 
            lista.splice(b,1)
            resultado+=c
        }
        
        let contra = document.getElementById(idElemento);
        contra.innerHTML=`${resultado}`;

        return resultado;

}

function GenerarContrasena(){
let listaLetras= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let listaNumeros= [0,1,2,3,4,5,6,7,8,9];
let listaSimbolos= ["!", "@", "#", "$", "%"];

let contrafinal = sacarAleatorios(listaLetras, 3, 'contrasenaletras')
        + sacarAleatorios(listaNumeros, 3, 'contrasenanumeros')
        + sacarAleatorios(listaSimbolos, 2, 'contrasenasimbolos');

let contrasena = document.getElementById('contrasena');
        contrasena.innerHTML=`${contrafinal}`;    

    // Ocultar placeholder y mostrar resultados
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('charsWrapper').style.display = 'flex';
    document.getElementById('fullPassword').style.display = 'flex';
            

}

function copiar(){
    let contrasena = document.getElementById('contrasena').innerHTML;
    navigator.clipboard.writeText(contrasena);

    let copyBtn = document.getElementById('copyBtn');
    copyBtn.textContent = '¡Copiado! ✦';
    copyBtn.classList.add('copiado');

    setTimeout(() => {
        copyBtn.textContent = 'Copiar ✦';
        copyBtn.classList.remove('copiado');
    }, 2000);
}

