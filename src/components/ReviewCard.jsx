import { star } from "../assets/icons";

const ReviewCard = ({ customerName, imgURL, feedback, rating }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img
        src={imgURL}
        alt="customer pfp"
        width={120}
        height={120}
        className="rounded-full object-cover shadow-md shadow-slate-gray"
      />
      <p className=" info-text  mt-6 max-w-sm text-center">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>

      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
