"use client";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";

// Property Data
const properties = [
    {
        id: 1,
        title: "Garnett Segment",
        location: "Yadadri",
        developer: "Jsr Suncity",
        area: "14 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "P02000002101",
        detailsType: "Rera Number",
        price: "On Request",
        image: "residential-plot-1",
        status: null,
    },
    {
        id: 2,
        title: "Landmark Agastya Pride",
        location: "Yadadri",
        developer: "Landmark Group",
        area: "100 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "Loan Facility",
        detailsType: "Loan Facility",
        price: "On Request",
        image: "residential-plot-2",
    },
    {
        id: 3,
        title: "Sunrise Infra Nature Gold",
        location: "Shadnagar",
        developer: "Sunrise Infra",
        area: "5 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "183 Sq.Yrd",
        detailsType: "Plot Size From",
        price: "On Request",
        image: "commercial-plot-1",
    },
    {
        id: 4,
        title: "MP Hill Ridge",
        location: "Maheshwaram",
        developer: "MOP Infra Developers",
        area: "58 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "12346",
        detailsType: "Rera Number",
        price: "On Request",
        image: "residential-plot-1",
        status: "Up Comming",
    },
       {
        id: 5,
        title: "Garnett Segment",
        location: "Yadadri",
        developer: "Jsr Suncity",
        area: "14 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "P02000002101",
        detailsType: "Rera Number",
        price: "On Request",
        image: "residential-plot-1",
        status: null,
    },
    {
        id: 6,
        title: "Landmark Agastya Pride",
        location: "Yadadri",
        developer: "Landmark Group",
        area: "100 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "Loan Facility",
        detailsType: "Loan Facility",
        price: "On Request",
        image: "residential-plot-2",
    },
    {
        id: 7,
        title: "Sunrise Infra Nature Gold",
        location: "Shadnagar",
        developer: "Sunrise Infra",
        area: "5 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "183 Sq.Yrd",
        detailsType: "Plot Size From",
        price: "On Request",
        image: "commercial-plot-1",
    },
       {
        id: 8,
        title: "Garnett Segment",
        location: "Yadadri",
        developer: "Jsr Suncity",
        area: "14 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "P02000002101",
        detailsType: "Rera Number",
        price: "On Request",
        image: "residential-plot-1",
        status: "Completed",
    },
    {
        id: 9,
        title: "Landmark Agastya Pride",
        location: "Yadadri",
        developer: "Landmark Group",
        area: "100 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "Loan Facility",
        detailsType: "Loan Facility",
        price: "On Request",
        image: "residential-plot-2",
    },
    {
        id: 10,
        title: "Sunrise Infra Nature Gold",
        location: "Shadnagar",
        developer: "Sunrise Infra",
        area: "5 Acres",
        type: "DTCP",
        propertyType: "Residential",
        details: "183 Sq.Yrd",
        detailsType: "Plot Size From",
        price: "On Request",
        image: "commercial-plot-1",
    },
];


// Main Page
const Projects = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    // Filtering + Searching
    const filteredProperties = properties.filter((p) => {
        const matchesFilter =
            filter === "All" ||
            (filter === "Ongoing" && !p.status) ||
            (filter === "Completed" && p.status === "Completed") ||
            (filter === "Up Comming" && p.status === "Up Comming");

        const matchesSearch =
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.location.toLowerCase().includes(search.toLowerCase()) ||
            p.developer.toLowerCase().includes(search.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <section id="resale-plots" className="py-16  text-[#000] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        🔍 Best Open Plot Ventures in Hyderabad
                    </h2>
                    <div className="text-lg mb-4">{filteredProperties.length} Results Found</div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center space-x-4 mb-8 flex-wrap">
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
                    </div>

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
                    {filteredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Projects;