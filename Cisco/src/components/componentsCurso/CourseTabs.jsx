export default function CourseTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-around border-white mb-3 px-4 m-6">
      <button
        onClick={() => setActiveTab("materials")}
        className={`font-semibold mx-8 text-white ${activeTab === "materials" ? "border-b-7 border-white rounded-sm" : "text-white"}`}
      >
        Materiales
      </button>
      <button
        onClick={() => setActiveTab("reviews")}
        className={`font-semibold mx-10 text-white ${activeTab === "reviews" ? "border-b-7 border-white rounded-sm" : "text-white"}`}
      >
        Reviews
      </button>
    </div>
  );
}