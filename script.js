function somaArray(arr) {
  const soma = arr.reduce((total, num) => total + num, 0)
  return soma
}

function maiorNumero(arr) {
  const maiorNumero = Math.max(...arr)
  return maiorNumero
}

function mediaArray(arr) {
  const soma = arr.reduce((total, num) => total + num, 0)
  const media = soma / arr.length
  return media
}

function contarPropriedades(objeto) {
  const quantidadePropriedades = Object.keys(objeto).length
  return quantidadePropriedades
}

function juntarObjetos(objeto1, objeto2) {
  const informacoesPessoais = Object.assign(objeto1, objeto2)
  return informacoesPessoais
}

function encontrarPropriedade(objeto, chave) {
  const valor = objeto[chave]
  return valor
}

function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promessa resolvida após 1 segundo")
    }, 1000)
  })
}

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://api.github.com/users/DarioKlein")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na solicitação HTTP")
        }
        return response.json()
      })
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function gerarNumeroAleatorio() {
  const numero = Math.floor(Math.random() * 10)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero)
    }, 2000)
  })
}

function executarAposTempo(callback) {
  setTimeout(callback, 500)
}

function cancelarExecucao(identificadorTimeout) {
  clearTimeout(identificadorTimeout)
}

function intervaloPersonalizado(callback, tempo) {
  setTimeout(() => {
    callback()
  }, tempo)
}

function contadorInterval() {
  let contador = 1
  const intervalID = setInterval(() => {
    console.log(contador)
    contador++
    if (contador > 10) {
      clearInterval(intervalID)
    }
  }, 1000)
}

function pararContador(intervalID) {
  clearInterval(intervalID)
}

function gerarNumerosAleatorios() {
  setInterval(() => {
    const numeroAleatorio = Math.random()
    console.log(numeroAleatorio)
  }, 500)
}

function primeiroEUltimo(arr) {
  const [primeiro, , , , ultimo] = arr
  const novoArrat = [primeiro, ultimo]
  return novoArrat
}

function extrairInfo(arrObj) {
  const [{ idade1: idade1 }, { idade2: idade2 }] = arrObj
  const novoArray = [{ idade: idade1 }, { idade: idade2 }]
  return novoArray
}

function separarArrays(arr) {
  const [, par1, , par2] = arr
  const pares = [par1, par2]

  const [impar1, , impar2, , impar3] = arr
  const impares = [impar1, impar2, impar3]

  return pares, impares
}

function infoPessoa(obj) {
  const { nome, idade, cidade } = obj
  return `nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`
}

function desestruturarUsuario(objetoAi) {
  const { id, email } = objetoAi
  const novoObj = {
    id,
    email,
  }
  return novoObj
}

function informacoesLivro(objetoDoLivro) {
  const { titulo, autor, ano } = objetoDoLivro
  return `O livro ${titulo} foi escrito por ${autor} em ${ano} `
}

function concatenarArrays(...arrays) {
  const resultado = [...arrays]
  return resultado
}

function somaNumeros(...numeros) {
  const resultado = numeros.reduce((total, numero) => total + numero, 0)
  return resultado
}

function mesclarObjetos(...objetos) {
  let objetoMesclado = {}
  for (const obj of objetos) {
    objetoMesclado = { ...objetoMesclado, ...obj }
  }

  return objetoMesclado
}
