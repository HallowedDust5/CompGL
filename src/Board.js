import React from 'react';



export class GameOfLifeBoard extends React.Component {



    render() {
        
        const cellStyle = {
            border: '1px solid #555',
            width: '50px',
            height: '50px',
            lineHeight: '50px',
            textAlign: 'center',
        };

        let tbody =[];
        for(let i = 0;i < ; i++){
            let cells =[];
            for (let j = 0; j < App.G.cells[0]; j++) {
                const id = 3 * i + j;
                cells.push(
                <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
                    {this.props.G.cells[id]}
                </td>
                );
            }
        tbody.push(<tr key={i}>{cells}</tr>);

        }

        return (
            <div>
                <table id="board">
                <tbody>{tbody}</tbody>
                </table>
                {/* {winner} */}
            </div>
        ); 




    }
}