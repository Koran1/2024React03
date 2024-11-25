import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';

function Day() {
    const day = useParams().param_day
    const words = useFetch(`http://localhost:3010/words?day=${day}`);
    console.log(words.length)
    return (
        <table>
            <tbody>
                {words.length === 0 ? (<tr>
                    <td colSpan={4}><h2>가져올 데이터가 없습니다!</h2></td>
                </tr>) : (
                    <>
                        <tr>
                            <td></td>
                            <td>영단어</td>
                            <td>뜻</td>
                            <td></td>
                        </tr>
                        {words.map(item => {
                            return <Word key={item.id} item={item} />
                        })}
                    </>)}
            </tbody>
        </table>
    );
}

export default Day;