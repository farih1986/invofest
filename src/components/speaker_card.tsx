interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center gap-4">
      <div className="relative z-10">
        <img
          src={imageUrl}
          alt={name}
          className="mx-auto h-64 w-64 rounded-full border-4 border-red-900 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="relative flex h-2/3 w-full flex-col items-center rounded-lg border-4 border-red-900 p-4 py-10 shadow-xl shadow-black/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/40">
        <div className="absolute bottom-0 h-full w-full rounded-lg px-4 py-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-red-200" />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-2 p-4">
          <h3 className="text-2xl font-semibold text-red-900">{name}</h3>
          <p className="text-center text-sm text-gray-600">{role}</p>
        </div>

      </div>

    </div>
  );
};

export default SpeakerCard;