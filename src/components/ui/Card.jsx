const Card = ({ key, title, icon: Icon, description, color }) => {
  const colorClasses = {
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
    // Add more colors as needed
  };

  const selectedColor = colorClasses[color] || colorClasses.emerald;

  return (
    <div
      key={key}
      className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
    >
      <div
        className={`w-14 h-14 rounded-xl ${selectedColor.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        {Icon && (
          <Icon
            className={`w-6 h-6 ${selectedColor.text} transition duration-400 group-hover:rotate-6 hover:scale-105`}
          />
        )}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
