"use client";

import { useState } from "react";

interface BMC {
  problem?: string;
  solution?: string;
  customer_segments?: string[];
  value_proposition?: string;
  channels?: string[];
  revenue_streams?: string[];
  cost_structure?: string[];
  key_activities?: string[];
  key_resources?: string[];
  key_partners?: string[];
}

export default function GeneratePage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    targetMarket: "",
    resources: "",
    costs: "",
    revenueModel: "",
    competitors: "",
    goals: "",
  });

  const [loading, setLoading] = useState(false);
  const [bmc, setBmc] = useState<BMC | null>(null);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setBmc(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to generate Business Model");
      const data = await res.json();
      setBmc(data.output);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const renderList = (title: string, items?: string[]) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mb-3">
        <h4 className="font-semibold text-md mb-1">{title}</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderCard = (title: string, content: string | string[] | undefined) => {
    if (!content || (Array.isArray(content) && content.length === 0)) return null;
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-bold mb-2 border-b pb-1 border-blue-100">{title}</h3>
        {Array.isArray(content) ? (
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-sm">{content}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Generate Your Business Model
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg space-y-6"
      >
        <div>
          <label className="block font-medium mb-1">Project/Idea Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Target Market</label>
            <input
              type="text"
              name="targetMarket"
              value={formData.targetMarket}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Resources</label>
            <input
              type="text"
              name="resources"
              value={formData.resources}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Costs</label>
            <input
              type="text"
              name="costs"
              value={formData.costs}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Revenue Model</label>
            <input
              type="text"
              name="revenueModel"
              value={formData.revenueModel}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Competitors</label>
            <input
              type="text"
              name="competitors"
              value={formData.competitors}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Special Goals</label>
            <input
              type="text"
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-black font-semibold rounded-xl hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Business Model"}
        </button>
      </form>

      {/* Error */}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}

      {/* BMC Display */}
      {bmc && (
        <section className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
          {renderCard("Problem", bmc.problem)}
          {renderCard("Solution", bmc.solution)}
          {renderCard("Customer Segments", bmc.customer_segments)}
          {renderCard("Value Proposition", bmc.value_proposition ? [bmc.value_proposition] : [])}
          {renderCard("Channels", bmc.channels)}
          {renderCard("Revenue Streams", bmc.revenue_streams)}
          {renderCard("Cost Structure", bmc.cost_structure)}
          {renderCard("Key Activities", bmc.key_activities)}
          {renderCard("Key Resources", bmc.key_resources)}
          {renderCard("Key Partners", bmc.key_partners)}

          {/* Buttons full width on grid */}
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button className="px-6 py-3 rounded-xl bg-green-600 text-black font-semibold hover:bg-green-700">
              Save to Dashboard
            </button>
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-black font-semibold hover:bg-blue-700">
              Download PDF
            </button>
            <button className="px-6 py-3 rounded-xl bg-gray-600 text-black font-semibold hover:bg-gray-700">
              Download Word
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
