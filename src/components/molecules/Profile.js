import './Profile.css'

export default function Profile({host}) {
    const firstName = host.name.split(' ')[0]
    const lastName = host.name.split(' ')[1]
    return(
        <>
            <div className="profileContainer">
                <div className="nameContainer">
                    <span className="name">{firstName}</span>
                    <span className="name">{lastName}</span>
                </div>
                <img className="hostPicture" src={host.picture}/>
            </div>
        </>
    )
}