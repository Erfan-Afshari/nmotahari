import { NextResponse } from "next/server"
import news from "./server.json"

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://nmotahari.netlify.app/'

export async function GET(request) {
    return NextResponse.json(news)
}
