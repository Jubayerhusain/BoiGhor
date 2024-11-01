import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/localStore";

function BookDetail() {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const loadeData = useLoaderData();

  const bookDetail = loadeData.find((data) => data.bookId === id);
  console.log(bookDetail);

  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = bookDetail;

  const hundleMarkReadList = (id)=>{
    addToStoredReadList(id)
  }
  return (
    <div className=" bg-gray-100 text-gray-700 w-11/12 mx-auto my-24 rounded-3xl">
      <div className="xl:flex lg:flex md:flex-rows flex-rows justify-around items-center">
        <figure className="w-auto h-auto bg-cyan-50 rounded-2xl p-5 md:p-14 md:m-10 m-5 shadow-md flex items-center justify-center">
          <img
            src={image}
            className="md:w-[1800px]  md:h-full w-auto h-[400px] rounded-lg shadow-2xl"
          />
        </figure>
        <div className="p-24">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <h1 className="text-xl font-semibold my-2">By: {author}</h1>
          <div className="border-b-2 my-3 border-dashed"></div>
          <p className="text-lg font-semibold">Fiction</p>
          <div className="border-b-2 my-3 border-dashed"></div>
          <div>
            <p>
              <span className="text-md font-semibold text-gray-800">
                Review:
              </span>
              {review}
            </p>
          </div>
          <div className="space-x-5 font-semibold items-center my-3">
            Tags:
            {tags.map((tag, idx) => (
              <a
                key={idx}
                className="px-3 py-2 rounded-2xl text-green-600 ml-2 bg-green-100"
              >
                #{tag}
              </a>
            ))}
          </div>
          <div className="flex w-3/12 justify-between text-gray-600 my-1">
            <p className="mr-10 text-md">Number Of Page: </p>
            <p className="text-md font-semibold ">{totalPages}</p>
          </div>
          <div className="flex w-4/12 justify-between text-gray-600 my-1">
            <p className="mr-10 text-md">Publisher: </p>
            <p className="text-md font-semibold">{publisher}</p>
          </div>
          <div className="flex w-3/12 justify-between text-gray-600 my-1">
            <p className="mr-10 text-md">Year Of Publishing: </p>
            <p className="text-md font-semibold">{yearOfPublishing}</p>
          </div>
          <div className="flex w-3/12 justify-between text-gray-600 my-1">
            <p className="mr-10 text-md">Rating: </p>
            <p className="text-md font-semibold">{rating}</p>
          </div>
          <div className="space-x-4 my-5">
            <button onClick={()=>{hundleMarkReadList(bookId)}} className="btn btn-primary border-[#23BE0A] text-gray-900 hover:border-none bg-white hover:bg-cyan-300">
              Read
            </button>
            <button className="btn text-white btn-primary bg-[#23BE0A] border-none hover:bg-cyan-400">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
