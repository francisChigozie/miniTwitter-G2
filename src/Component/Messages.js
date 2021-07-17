import { Container, Header, Content, Footer, List } from "rsuite"

export default function Messages ({twitts}) {



    return(
        
        <List className='messages'>
        {twitts.map((item, index) => (
          <List.Item className='p_messages' key={index} index={index}>
            {item.text}
          </List.Item>
        ))}
      </List>
      
        
        
    )
}