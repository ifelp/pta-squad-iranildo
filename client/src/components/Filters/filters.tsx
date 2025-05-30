import React from "react";

interface FiltersProps {
  onSearch: (query: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onSearch }) => {
  return (
    <div className="flex flex-col gap-2 text-sm w-[620px] h-full">
      <label className="text-gray-700 font-semibold">Quem é o médico?</label>
      <div className="flex gap-2 items-center w-full">
        <input
          type="text"
          placeholder="Pesquise aqui..."
          onChange={(e) => onSearch(e.target.value)}
          className="border px-3 py-1 rounded w-full h-[48px] text-sm"
        />
        <button
          className="bg-[#7D1AD7] text-white h-full px-4 py-1.5 rounded-full text-sm hover:bg-purple-800 transition"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Filters;

