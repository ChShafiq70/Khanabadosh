import {NotebookText,  Headset,IdCard, } from "lucide-react"; 

const cards = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-3">
      
      {/* Card 1 - Activate Help Button */}
        {/* Card 2 - Speak With Specialist (Now White) */}
        <div className="text-white bg-[#b22222] p-16 rounded-lg shadow-md text- border transition duration-300 hover:bg-[#b22222] hover:text-white">
        <div className="flex justify-left">
          <NotebookText  className="text-4xl mb-4 w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Activate Your Help Button</h3>
        <p className="text-white  text-sm">
        Simply press the help button on your pendant or bracelet, which should be worn at all times for easy access.
        </p>
      </div>

      {/* Card 2 - Speak With Specialist (Now White) */}
      <div className="bg-white text-[#b22222] p-16 rounded-lg shadow-md text- border transition duration-300 hover:bg-[#b22222] hover:text-white">
        <div className="flex justify-left">
          <Headset className="text-4xl mb-4 w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Speak With A Response Specialist</h3>
        <p className="text-gray-700 text-sm">
          GetMedicalAlert is highly trained specialists are available 24/7, 365 days a year, ready to assist you.
        </p>
      </div>

      {/* Card 3 - Receive Assistance (Same White Style) */}
       {/* Card 2 - Speak With Specialist (Now White) */}
       <div className="bg-white text-[#b22222] p-16 rounded-lg shadow-md text- border transition duration-300 hover:bg-[#b22222] hover:text-white">
        <div className="flex justify-left">
          <IdCard className="text-4xl mb-4 w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Receive the Right Assistanc</h3>
        <p className="text-gray-700 text-sm">
        Our specialists assess your situation and immediately reach out to the most suitable emergency contact.
        </p>
      </div>

    </div>
  );
};

export default cards;
