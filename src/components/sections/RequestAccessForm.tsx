import { useState } from "react";

export default function RequestAccessForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch(
      "https://formspree.io/f/xblnnpjy",
      {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      }
    );

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-[#0C2437] p-6 rounded-2xl">
      <h2 className="text-xl font-semibold text-white mb-4">
        Request Access
      </h2>

      {success && (
        <p className="text-green-400 mb-3">
          Request submitted successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="name"
          required
          placeholder="Full Name"
          className="p-3 rounded-lg bg-[#061925] text-white"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="p-3 rounded-lg bg-[#061925] text-white"
        />

        <input
          name="company"
          placeholder="Company / Organization"
          className="p-3 rounded-lg bg-[#061925] text-white"
        />

        <textarea
          name="message"
          placeholder="What are you requesting SeedRush for?"
          className="p-3 rounded-lg bg-[#061925] text-white"
          rows={4}
        />

        <button
          disabled={loading}
          className="bg-[#06E7ED] text-black py-3 rounded-lg font-semibold"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
