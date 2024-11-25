import React from 'react';
import dummy from '../db/data.json'
import { useParams } from 'react-router-dom';
import Word from './Word';

function Day() {
    const day = useParams().param_day
    const wordList = dummy.words.filter(item => {
        return item.day === Number(day)
    })
    return (
        <table>
            <tbody>
                <tr>
                    <td></td>
                    <td>영단어</td>
                    <td>뜻</td>
                    <td>뭔가하는박스</td>
                </tr>
                {wordList.map(item => {
                    return <Word key={item.id} item={item} />
                })}
            </tbody>
        </table>
    );
}

export default Day;