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
    <div className="group flex w-72 flex-col items-center gap-4 cursor-pointer">
      <div className="relative z-10">
        <img
          src={imageUrl}
          alt={name}
          className="h-56 w-56 rounded-full border-4 border-red-900 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="relative w-full rounded-lg border-4 border-red-900 p-6 text-center shadow-xl transition-all duration-300 group-hover:shadow-2xl">
        <div className="absolute inset-0 rounded-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-red-200/40" />

        <div className="relative z-10 flex flex-col items-center gap-2">
          <h3 className="text-xl font-semibold text-red-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;