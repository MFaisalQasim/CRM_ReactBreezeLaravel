export default function Coloured({ className = '', ...props }) {
    return (
        <div>
            <Coloured
                {...props}
                className='text-success '
            />
        </div>
    );
}
