"use client";
import React, { useState, useEffect } from 'react'

export default function AdminBookingsPage() {
  return <AdminBookings />
}

function AdminBookings() {
  const [authed, setAuthed] = useState(false)
  const [input, setInput] = useState('')
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const password = 'admin123'

  useEffect(() => {
    if (authed) {
      setLoading(true)
      fetch('/api/booking/list')
        .then(res => res.json())
        .then(data => {
          setBookings(data.bookings || [])
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [authed])

  if (!authed) {
    return (
      <div style={{ maxWidth: 320, margin: '100px auto', textAlign: 'center' }}>
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="border px-3 py-2 rounded w-full mb-3"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={() => { if (input === password) setAuthed(true) }}
        >
          Login
        </button>
        <div className="text-xs text-gray-500 mt-2">(Default password: admin123)</div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Bookings Admin</h1>
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : (
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td className="p-2 border">{b.name}</td>
                <td className="p-2 border">{b.phone}</td>
                <td className="p-2 border">{b.email}</td>
                <td className="p-2 border">{b.message}</td>
                <td className="p-2 border">{new Date(b.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
} 