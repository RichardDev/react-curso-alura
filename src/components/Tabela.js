import React, {Component} from 'react';

//Sub-components com Function Component
const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}
//Sub-components com Function Component
// Passando props e mapeando os valores
const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (            
            <tr key={ index }>
                <td> { linha.nome } </td>
                <td> { linha.livro } </td>
                <td> { linha.preco } </td>
                <td><button onClick={ () => props.removerAutor(index)} >Remover</button></td>
            </tr>            
        );
    });
    
    return (
        <tbody>
            { linhas }
        </tbody>
    )
}

class Tabela extends Component {
    render() {
        const { autores, removerAutor } = this.props;
        return (            
            <table width="960px" align="center">
                <TableHead />                
                <TableBody autores = { autores }  removerAutor = { removerAutor }/>
            </table>
        ); 
    }
}

export default Tabela;