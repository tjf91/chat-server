let messages = []
let id= 0

module.exports={
    create:(req,res)=>{
        messages.push({
            id,
            text:req.body.text,
            time:req.body.time,
        })
        id++
        console.log("bam, message")
        res.status(201).send(messages)
    },
    read:(req,res)=>{
        res.status(200).send(messages)
    },
    update:(req,res)=>{
        let index = null
        messages.forEach((message,i)=>{
            if(message.id===+req.params.id){
                index=i
            }
        })
        messages[index]={
            id:messages[index].id,
            text:req.body.text || messages[index].text,
            time:req.body.time || messages[index].time,
        }
        res.status(200).send(messages)
    },
    delete:(req,res)=>{
            messages.forEach((message,i)=>{
            if(message.id===+req.params.id){
               messages.splice(i,1)
            }

        })
       
        res.status(200).send(messages)
    },
}