export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16))]">
      <h1 className="text-4xl font-bold mb-6">Welcome to CareAI</h1>
      <p className="text-xl mb-8">Select a camera from the sidebar to get started.</p>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Featured Cameras:</h2>
        <ul className="list-disc list-inside">
          <li>Fujifilm XT-30</li>
          <li>Leica M8</li>
        </ul>
      </div>
    </div>
  )
}