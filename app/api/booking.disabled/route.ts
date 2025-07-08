import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message } = await req.json()
    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    const booking = await prisma.booking.create({
      data: { name, phone, email, message }
    })
    return NextResponse.json({ success: true, booking })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
} 