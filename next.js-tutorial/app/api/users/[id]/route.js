import { connectDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function PUT(req, { params }) {
    try {
        await connectDB();
        const resolvedParams = await params;
        const id = resolvedParams.id;
        const body = await req.json();
        const updatedUser = await User.findByIdAndUpdate(
            id,
            body,
            { new: true, runValidators: true }
        );
        return NextResponse.json({
            message: "user updated successfully",
            data: updatedUser
        })
    } catch (err) {
        return NextResponse.json({
            message: "Error creating user",
            error: err.message
        });
    }
}
//delete 
export async function DELETE(req, { params }) {
    try {
        await connectDB();

        const {id} = await params;
        

        const deleteUser = await User.findByIdAndDelete(id);

        return NextResponse.json({
            message: "user deleted successfully",
            data: deleteUser        })
    } catch (err) {
        return NextResponse.json({
            message: "Error deleting user",
            error: err.message
        });
    }
}
