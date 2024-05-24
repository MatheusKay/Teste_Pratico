function contar() {
    let ini = document.getElementById('text1')
    let fim = document.getElementById('textf')
    let passos = document.getElementById('textp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        res.innerHTML = `Impossivel contar`
    } else{
        res.innerHTML = `Contando... <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if (p <= 0){
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }

        if (i < f) {
           //Contagem crecente.
            for(let c = 1; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else{
            //Contagem decresente.
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}` //emoji no JS
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}