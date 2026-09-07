import {NextResponse} from "next/server";
import {connectDB}  from "@/lib/mongodb";
import {ObjectId}  from  "mongodb";

//GET API
export async function  GET(){
    const db =await connectDB();

    const users = await db
    .collection("js-tutorial.users")
    .find({})
    .toArray();

   return NextResponse.json(users);
}
//POST API
export async function POST(req) {

    const db =await connectDB();
    const body =await req.json();

    const result = await db.collection("js-tutorial.users").insertOne(body);

    return NextResponse.json({
        message: "user created successfully",
        data:result
    });
    
}
//PUT API
export async function PUT(req) {

    
 const db =await connectDB();
    const body =await req.json();

    const {id,name,email}=body
      const result = await db.collection("js-tutorial.users").updateOne(
        {_id : new ObjectId(id)},
        {
            $set:{
            name,
            email
        }
    }
    );
    return NextResponse.json({
        message:"users update put api successfully",
        data:result
    });
}

//PATCH API
export async function PATCH(req) {

    const db =await connectDB();
    const body =await req.json();

    const{id,...updatedFields} = body;

     if (!id) {
       return NextResponse.json({error:"ID Required"} , {status:400});
    }
      const result = await db.collection("js-tutorial.users").updateOne(
        {_id : new ObjectId(id)},
           {$set:{ updatedFields},
        }
    );
    return NextResponse.json({
        message:"users update Patch api successfully",
        data:result
    });
}
//DELETE API
export async function DELETE(req) {
    try{
    const db = await connectDB();
    const body = await req.json();

    const {id}=body;
    const result =await db.collection("js-tutorial.users").deleteOne({
        _id: new ObjectId(id)
    });
    if (result.deletedCount === 0){
        return NextResponse.json({
            message:"user not found"
        })
    }
    return NextResponse.json({
        message:"user delete successfully"
    })
    
    }       catch(error){
            return NextResponse.json({
            message:"error deleting user",
            error: error.message

        })
    }   
}