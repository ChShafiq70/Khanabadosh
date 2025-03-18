import { Home, Leaf,Users, } from "lucide-react"; 

const feacture = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 py-14">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border-2 border-[#b22222] rounded-lg p-12 text-center">
  <div className="flex justify-center">
    <Home className="text-[#b22222] w-12 h-12 mb-4" />
  </div>
  <h2 className="text-[#b22222] text-xl font-semibold">Put Your Safety First</h2>
  <p className="text-gray-600 mt-2">
    Select your alert system wisely. Begin by looking for a medical alert system that meets your specific needs.
  </p>
</div>
<div className="border-2 border-[#b22222] rounded-lg p-12 text-center">
  <div className="flex justify-center">
    <Leaf className="text-[#b22222] w-12 h-12 mb-4" />
  </div>
  <h2 className="text-[#b22222] text-xl font-semibold">A Setup Tailored To Your Lifestyle</h2>
  <p className="text-gray-600 mt-2">
    A variety of systems to choose from, with a personalized response plan to reach the right person when needed.
  </p>
</div>
        <div className="border-2 border-[#b22222] rounded-lg p-10 text-center">
  <div className="flex justify-center">
    <Users className="text-[#b22222] w-12 h-12 mb-4" />
  </div>
  <h2 className="text-[#b22222] text-xl font-semibold">Stay Connected Always</h2>
  <p className="text-gray-600 mt-2">
    Reliable medical alert systems ensure constant connectivity, keeping your loved ones informed during emergencies.
  </p>
</div>

      </div>
    </div>
  );
};

export default feacture;
