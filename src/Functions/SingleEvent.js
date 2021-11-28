import client from "../ApolloClient.js"
import { gql } from '@apollo/client'
async function getEvents(slug) {
    const data = await client.query({
        query: gql`
        query{
            event (where : {slug: "${slug}"}){
              id,
              title,
              date,
              content{
                  markdown
              },
              coverPhoto {
                id,
                url
              }
            }
          }
        `
    })

    return data.data.event[0];

}

export default getEvents;