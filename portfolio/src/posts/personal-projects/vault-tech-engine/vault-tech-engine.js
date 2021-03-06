import React from "react"

import Post from '../../../components/post'

import img  from './images/0.jpg'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'

const VaultTechEngine = () => (
    <Post
        title={'Vault-Tech Engine'}
        date={'March 2014 – April 2015'}

        youTubeVideo={'https://www.youtube.com/embed/2-Xu3tAL6gs'}
        description={`Description: Vault-Tech was the first game engine that I built on top of XNA using C#. The engine supported multi-threaded A* path-finding using my own job system. The engine supported tiled based rendering and has a tilemap editor. The engine only rendered what is present on the screen. 
        
The engine supported both TCP and UDP protocols which were used with a client/server architecture to allow network play. The engine supported SQL to upload data to a database.

Technology: XNA/MonoGame, Winsock2, SQL, C#
        
Platforms: Windows`}

        slideImages={[
            img,
            img1,
            img2,
            img3,
            img4,
            img5
        ]}

        links={[
            {
                name: 'GitHub',
                url: 'https://github.com/FantasyVII/Vault-Engine'
            }
        ]}
    />
)

export default VaultTechEngine