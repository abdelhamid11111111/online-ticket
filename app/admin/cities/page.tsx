"use client";

import { useState } from "react";
import Sidebar from "@/app/components/admin/Sidebar";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import AddModal from "@/app/components/modals/manageCities/AddModal";

// ==================== TYPES ====================
interface City {
  id: number;
  name: string;
}

// ==================== CONSTANTS ====================
const CITIES: City[] = [
  {
    id: 1,
    name: "New York",
  },
  {
    id: 2,
    name: "London",
  },
  {
    id: 3,
    name: "Tokyo",
  },
  {
    id: 4,
    name: "Paris",
  },
  {
    id: 5,
    name: "Austin",
  },
];

// ==================== SINGLE COMPONENT ====================
export default function ManageCities() {
  const [cities] = useState<City[]>(CITIES);

  return (
    <div className="min-h-screen bg-[#f6f6f8]">
      <div className="flex h-screen overflow-hidden">
        {/* ---------- SIDEBAR ---------- */}
        <Sidebar />

        {/* ---------- MAIN CONTENT ---------- */}
        <main className="flex flex-1 flex-col overflow-hidden pl-64">
        

          {/* Content Area */}
          <div className="flex-1 overflow-auto p-6 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* ----- PAGE HEADER ----- */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                    Manage Cities
                  </h1>
                  <p className="mt-1.5 text-sm text-gray-500">
                    A list of all the cities where active venues and events are
                    hosted.
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center gap-3">
                  <AddModal/>
                </div>
              </div>

              {/* ----- SEARCH BAR ----- */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cities..."
                  className="w-full h-10 pl-10 pr-4 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none  focus:ring-none"
                />
              </div>

              {/* ----- CITIES GRID - CARDS ----- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cities.map((city) => (
                  <div
                    key={city.id}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
                  >
                    <div className="p-5">
                      {/* City Name and Actions */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {city.name}
                          </h3>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-1">
                          <button className="p-2 text-[#135bec] text-3xl rounded-lg hover:bg-gray-100 transition-colors">
                            <Edit className="text-3xl" />
                          </button>
                          <button className="p-2 text-red-600 text-xl rounded-lg hover:bg-gray-100 transition-colors">
                            <Trash2 className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
