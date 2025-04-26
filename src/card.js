export default function App() {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">Product Search Trends</h1>
        {Object.entries(data).map(([section, items]) => (
          <section key={section} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 capitalize">{section.replace('_', ' ')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((item, idx) => (
                <Card key={idx} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }