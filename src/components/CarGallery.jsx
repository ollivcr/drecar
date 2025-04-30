import React from 'react';

function CarGallery() {
  return (
    <section id="car-gallery" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Carros Disponíveis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="/assets/images/car1.jpg" alt="Carro 1" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-bold">Carro 1</h3>
          <p className="text-gray-700">Descrição do Carro 1.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="/assets/images/car2.jpg" alt="Carro 2" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-bold">Carro 2</h3>
          <p className="text-gray-700">Descrição do Carro 2.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="/assets/images/car3.jpg" alt="Carro 3" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-bold">Carro 3</h3>
          <p className="text-gray-700">Descrição do Carro 3.</p>
        </div>
      </div>
    </section>
  );
}

export default CarGallery;