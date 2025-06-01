export default function Reviews() {
    const reviews = [
        {
            name: 'Veronica',
            time: 'hace 1 día',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales mollis tincidunt. Ut lobortis tellus a lacus pretium pharetra.',
            image: 'src/assets/img/Veronica.jpg'
        },
        {
            name: 'Willy',
            time: 'hace 1 día',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales mollis tincidunt. Ut lobortis tellus a lacus pretium pharetra.',
            image: 'src/assets/img/Willy.png'
        },
        {
            name: 'Alfred',
            time: 'hace 1 día',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales mollis tincidunt. Ut lobortis tellus a lacus pretium pharetra.',
            image: 'src/assets/img/Alfredo.png'
        }
    ]
  return (
    <>
    {reviews.map((review, idx) => (
        <div key={idx} className="bg-white/20  bg-opacity-100 rounded-4xl p-6 m-12 flex items-center gap-5 shadow-md border-gray-200 w-[24rem] h-[7rem]">
            <img src={review.image} alt={`${review.name}'s profile`} className="w-12 h-12 rounded-full" />
            <div className="text-white flex flex-col">
                <div className="flex items-center gap-40">
                    <h3 className="text-xs font-semibold">{review.name}</h3>
                    <span className="text-xs text-gray-300">{review.time}</span>
                </div>
                <p className="text-xs mt-2">{review.text}</p>
            </div>
        </div>
    ))}
    </>
  );
}
