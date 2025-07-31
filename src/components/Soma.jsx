import { useState } from "react"

function Soma() {
    const [soma, setSoma] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    
    return(
        <section>
            <h1>SOMA</h1>
            <input type="number" placeholder="Digite o primeiro número:" onChange={(e) => setNum1(e.target.valueAsNumber)}/>
            <input type="number" placeholder="Digite o segundo número:"  onChange={(e) => setNum2(e.target.valueAsNumber)}/>
            <button onClick={() => setSoma(num1 + num2)}>Somar</button>
            <h1>{soma}</h1>
        </section>
    )
}

export default Soma 