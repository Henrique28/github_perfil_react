import { useState } from "react"

const Formulario = () => {

    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    const resultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3
        let resultado;

        if (media >= 7) {
            resultado = "Você foi aprovado";
        } else {
            resultado = "Você foi reprovado";
        }

        return resultado
    }

    return (
        <form>
            <input type="number" placeholder="Nota A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            <p>{resultado()}</p>
        </form>
    )
}

export default Formulario