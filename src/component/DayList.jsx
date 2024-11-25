import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function DayList() {
    const days = useFetch('http://localhost:3010/days');

    return (
        <ul className='list_day'>
            {days.map(item => {
                return <li key={item.id}>
                    <Link to={`/day/${item.day}`} >
                        Day {item.day}
                    </Link>
                </li>
            })}
        </ul >
    );
}

export default DayList;