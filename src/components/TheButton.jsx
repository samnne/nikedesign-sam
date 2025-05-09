const TheButton = ({
  label,
  iconurl: IconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-slate-400`
          : "text-white border-coral-red bg-coral-red  hover:bg-red-600"
      }  items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full transition-all  ${
        fullWidth && "w-full"
      } `}
    >
      {label}
      {IconUrl && (
        <img src={IconUrl} alt="" className="ml-2 rounded-full w-5 h-5 " />
      )}
    </button>
  );
};

export default TheButton;
