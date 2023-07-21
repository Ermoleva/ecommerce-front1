
import NextAuth, { getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from "@next-auth/mongodb-adapter"
import clientPromise from '../../../lib/mongodb'


export const authOptions={
  secret: proccess.env.SECRET,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_FRONT_ID,
        clientSecret: process.env.GOOGLE_FRONT_SECRET
      }),
    ],
     
    adapter: MongoDBAdapter(clientPromise) ,
    
  }


export default NextAuth(authOptions)