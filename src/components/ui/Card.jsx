const Card = ({ key, title, icon: Icon, description, color, platform }) => {
  const colorClasses = {
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      border: "border-emerald-200",
    },
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
      border: "border-indigo-300",
    },
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-600",
      border: "border-amber-300",
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-700",
      border: "border-teal-100",
    },

    rose: {
      bg: "bg-rose-100",
      text: "text-rose-600",
      border: "border-rose-300",
    },

    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-300",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-600",
      border: "border-pink-300",
    },
  };

  const selectedColor = colorClasses[color] || colorClasses.emerald;

  return (
    <div
      key={key}
      className={`group p-6 bg-white rounded-2xl hover:bg-gray-50 shadow hover:shadow-xl transition-all duration-300 border hover:border-gray-100 ${selectedColor.border}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-14 h-14 rounded-xl ${selectedColor.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
        >
          {Icon && (
            <Icon
              className={`w-7 h-7 ${selectedColor.text} transition duration-400 group-hover:rotate-6 hover:scale-105`}
            />
          )}
        </div>

        {platform && (
          <span
            className={`text-xs font-semibold px-2 py-1 ${selectedColor.bg} ${selectedColor.text} rounded-full`}
          >
            {platform}
          </span>
        )}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
