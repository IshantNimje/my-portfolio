
export default function Card({ title, image, description }) {
  return (
    <div className="group perspective">
      <div className="relative bg-white rounded-lg shadow-lg transform transition-transform duration-300 group-hover:rotateY-6 group-hover:-translate-y-2">
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-40 object-contain rounded mb-3 transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <p className="text-gray-600 text-sm text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
