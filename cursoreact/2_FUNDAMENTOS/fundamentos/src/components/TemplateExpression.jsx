

const TemplateExpression = () => {
    const name = "Renan";

    const data = {
        age: 20,
        job: "Programador"
    }
  return (
    <div>
        <p>A soma é {2+2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} e você é um {data.job}</p>
        <div className = "estilo">
            <p>Teste</p>
        </div>
    </div>
  )
}

export default TemplateExpression