import PostMessage from "../models/postMessage.js"

export const getPosts= async(req,res)=>{
    try{
        const postMessages=await postMessage.find();
        // console.log(postMessages)
        res.send(200).json(postMessages)
    }catch(error){
        res.status(404).json({message:error.message})
    }
    res.send("this works")
}

export const createPost= async (req,res)=>{
    const post=req.body;
    const newPost=new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
    }

}