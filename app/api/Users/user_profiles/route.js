import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongo";

export async function GET (req) {
	const client = await clientPromise;
	let db = client.db('nmotahari');
	let data = await db.collection('Users').find().toArray();
	return NextResponse.json(data)
}

export async function POST (req) {
	const client = await clientPromise;
	let db = client.db('nmotahari');
	const { email, password, name, family } = await req.json();
	let user = await db.collection('Users').insertOne({
		email,
		password,
		name,
		family,
	});

	return NextResponse.json(user)
}