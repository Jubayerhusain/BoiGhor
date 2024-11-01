import { Link } from "react-router-dom";

function Book({ book }) {
  const { bookId, image, tags, bookName, author } = book;
  return (
    <Link to={`/book/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl mx-auto py-5">
      <figure className="bg-green-100 py-8 rounded-2xl">
        <img className="w-[134px] h-[166px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="space-x-5">
          {tags.map((tag,idx) => (
            <a key={idx} className="px-3 py-2 rounded-2xl bg-green-100">{tag}</a>
          ))}
        </div>
        <h2 className="card-title my-2 text-xl">
          {bookName}
          <div className="badge badge-secondary ">NEW</div>
        </h2>
        <p>{author}</p>
        <div className="border-b-2 my-5 border-dashed"></div>
        <div className="card-actions justify-between items-center">
          <div className="btn btn-primary bg-[#59C6D2] text-white font-semibold border-none hover:bg-[#23BE0A]">Details</div>
          <div>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Book;
