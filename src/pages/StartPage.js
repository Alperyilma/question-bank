import React from 'react'
import { Embed, Header } from 'semantic-ui-react'


export default function StartPage() {

  return (
    <div>
    <Header>Motivation video of this week</Header>

    <Embed
    autoplay={false}
    color='white'
    hd={false}
    id='gJscrxxl_Bg'
    iframe={{
      allowFullScreen: true,
      style: {
        padding: 10,
      },
    }}
    placeholder src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenius.com%2FShia-labeouf-just-do-it-motivational-speech-annotated&psig=AOvVaw2ImbdVSkNgk4mhJCBBW1oH&ust=1644854925569000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCEhaGI_fUCFQAAAAAdAAAAABAD'
    source='youtube'
  />
    </div>
  )
}
