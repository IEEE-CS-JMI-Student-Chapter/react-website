import {
    ApolloClient,
    InMemoryCache

} from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/ckwalwekx2ch201xpcd469y3d/master',
    cache: new InMemoryCache()
  });
  
export default client