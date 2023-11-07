import {} from 'react'
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme} from 'victory'
import {EstatEstilo} from '../css/estilo'

function Estatistica(){

    const dados =[
        {Produto:1, Valor:2000},
        {Produto:2, Valor:1200},
        {Produto:3, Valor:1100},
        {Produto:4, Valor:1000},

    ]


    return(
        <EstatEstilo>
        <div className='estatistica'>
        <VictoryChart
            theme={VictoryTheme.material} 
            domainPadding={30}
        >
        <VictoryAxis
            tickValues={[1,2,3,4]}
            tickFormat={["Produto 1", "Produto 2", "Produto 3", "Produto 4"]}
        />

        <VictoryAxis
            dependentAxis
            tickFormat={(x)=>(`R$ ${x / 100}`)}
        />
            <VictoryBar
            data={dados}
            x = "Produto"
            y = "Valor"
            />
        </VictoryChart>
        </div>
        </EstatEstilo>
    )
}

export default Estatistica