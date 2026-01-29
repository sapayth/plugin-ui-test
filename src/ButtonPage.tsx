function ButtonPage() {
  return (
    <div className="plugin-ui-test-app">
      <div className="w-full rounded-md p-3 bg-white">
        <h1>Buttons</h1>

        <div className="border border-primary border-dashed p-3 rounded-md">
          <h2>L-Size / Square</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-tertiary">Tertiary</button>
            <button className="btn btn-success">Save Changes</button>
            <button className="btn btn-danger">Delete Item</button>
            <button className="btn btn-info">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;