import bannerImage from './../../assets/BannerImge.png'
function Banner() {
  return (
    <div className="w-11/12 mx-auto py-10 my-10">
      <div className="md:flex flex-row justify-around items-center">
        <div>
          <h1 className="text-7xl font-bold my-7">Books to freshen  <br />
          up your bookshelf</h1>
          <a className="btn btn-primary bg-[#59C6D2] text-white font-semibold border-none hover:bg-[#23BE0A]">
          View The List
        </a>
        </div>
        <img
          src={bannerImage}
          className="w-[500px] rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Banner;
