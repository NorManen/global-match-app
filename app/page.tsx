'use client'
import { useState } from 'react'

export default function Home() {
  const [matches, setMatches] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const findMatches = () => {
    setLoading(true)

    setTimeout(() => {
      const words = input.split(' ').filter(Boolean)

      const generatedMatches = words.map(
        (word, index) => `${word} → Match ${index + 1}`
      )

      setMatches(generatedMatches)
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 gap-4">
      <h1 className="text-3xl font-bold">🌍 Global Match App</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-64"
      />

      <button
        onClick={findMatches}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Find Matches
      </button>

      {loading && <p>Searching the globe… 🔍</p>}

      <ul className="mt-4">
        {matches.map((match, index) => (
          <li key={index} className="border-b py-1">
            {match}
          </li>
        ))}
      </ul>
    </main>
  )
}
