import React, { useEffect, useState } from 'react'
import Node from './Node/Node'
import './PathVisu.css'

function PathVisu() {

    const [nodes, setNodes] = useState([])

    useEffect(() => {
        const nodes = []
        for (let row = 0; row < 20; row++) {
            const currentRow = []
            for (let col = 0; col < 50; col++) {
                const currentNode = {
                    col,
                    row,
                    isStart: row === 10 && col === 5,
                    isFinish: row === 10 && col === 45
                }
                currentRow.push(currentNode)
            }
            nodes.push(currentRow)
        }
        setNodes(nodes)
    }, [])

    return (
        <div className='grid'>
            {nodes.map((row, rowIdx) => {
                return <div key>
                    {row.map((node, nodeIdx) => {
                        const { isStart, isFinish } = node;
                        return (
                            <Node
                                key={nodeIdx}
                                isStart={isStart}
                                isFinish={isFinish}
                                test={'foo'}
                                test={'bar'}
                            ></Node>
                        )
                    })}
                </div>
            })}
        </div>
    )

}

export default PathVisu
