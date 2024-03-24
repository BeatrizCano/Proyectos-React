import './app.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true,
        },
        {
            userName: 'pheralb',
            name: 'Pablo Hernández',
            isFollowing: false,
        },
        {
            userName: 'GijonTurismo',
            name: ' Visita Gijón/Xixón',
            isFollowing: true,
        },
        {
            userName: 'TMChein',
            name: 'Tomas',
            isFollowing:false,
        }
    ]


export function App () {

    return (
        <div className="App">

            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsfollowing={isFollowing}
                            >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }



            {/* <TwitterFollowCard  userName="miau" initialIsfollowing={true}> 
                Don Gato
            </TwitterFollowCard>     

            <TwitterFollowCard  userName="vecinosdegijon" initialIsfollowing={false}> 
                EL COMERCIO Gijón
            </TwitterFollowCard>     
            

            <TwitterFollowCard  userName="midudev" initialIsfollowing={true}>
                Miguel Ángel Durán
            </TwitterFollowCard> 
            
            <TwitterFollowCard  userName="GijonTurismo" initialIsfollowing={false}>
                Visita Gijón/Xixón
            </TwitterFollowCard>  */}

        </div>
       
    )
}