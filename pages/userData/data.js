export function getPosts(id){
    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]

        if(id){
            return details.filter(post => post.id==id)
        }

        return details
    
}


    
