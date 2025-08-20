"use client";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import DeveloperCard from "../components/DeveloperCard";

// Property Data
const developers = [
    {
        id: 1,
        name: "Suchir India",
        location: "Banjara Hills, Hyderabad",
        established: "2006",
        totalProjects: "15"
    },
    {
        id: 2,
        name: "Silpa Infratech",
        location: "Jubilee Hills, Hyderabad",
        established: "2010",
        totalProjects: "12"
    },
    {
        id: 3,
        name: "MOP Infra Developers",
        location: "Kothaguda, Hyderabad",
        established: "1997",
        totalProjects: "8"
    },
      {
        id: 4,
        name: "Pavan Infra pvt ltd",
        location: "Deshmukhi, Hyderabad",
        established: "2001",
        totalProjects: "5"
    }
];



// Main Page
const Developers = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    // Filtering + Searching
    const filteredProperties = developers.filter((p) => {
        
        const matchesSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.location.toLowerCase().includes(search.toLowerCase()) 


        return matchesSearch;
    });

    return (
        <section id="resale-plots" className="py-16  text-[#000] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        🏛️ Best Open Plot Developers in Hyderabad
                    </h2>
                    <div className="text-lg mb-4">{filteredProperties.length} Results Found</div>

                    {/* Filter Tabs */}
                    {/* <div className="flex justify-center space-x-4 mb-8 flex-wrap">
                        {["All", "Ongoing", "Completed", "Up Comming"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-6 py-2 rounded-full ${filter === tab ? "bg-white text-primary" : "bg-primary-light text-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div> */}

                    {/* Search + Sort */}
                    <div className="flex justify-center items-center space-x-4 mb-8 flex-wrap">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name, location, developer..."
                            className="px-4 py-2 rounded-md text-gray-700 w-[500px] border-2 border-[#000000]"
                        />
                        <button className="bg-primary-light hover:bg-primary-dark text-white px-6 py-2 rounded-lg">
                            Search
                        </button>
                        <select className="px-4 py-2 rounded-lg text-gray-700 border-2 border-gray-500">
                            <option>Sort By</option>
                            <option>Title A-Z</option>
                            <option>Title Z-A</option>
                        </select>
                    </div>
                </div>

                {/* Property Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProperties.map((developer) => (
                        <DeveloperCard key={developer.id} developer={developer} />
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Developers;