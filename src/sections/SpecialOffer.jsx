import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import TheButton from "../components/NewButton.jsx";
const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-container max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <TheButton label="Shop Now" iconurl={arrowRight} />
          <TheButton
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            iconurl={arrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
