import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return (
        <div className='text-center mb-2'>
            <time 
                dateTime={dateString}
                className=''
            >
                {format(date, 'LLLL d, yyyy')}
            </time>
        </div>
    )
}