import axios from "axios";
import client from "../ApolloClient.js"
import { gql } from '@apollo/client'
async function getEvents() {
    const data = await client.query({
        query: gql`
        query{
            event{
              id,
              title,
              date,
              slug
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
    console.log("Events")
    console.log(data.data.event);
    const info = data.data.event;

    const today = new Date()
    const upcoming = []
    const previous = []
    info.forEach(data => {
        if (new Date(data.date) >= today)
            upcoming.push(data)
        else
            previous.push(data)
    });

    return ({
        upcoming: upcoming,
        previous: previous,
        state: true
    })
}

export default getEvents;