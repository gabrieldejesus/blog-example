import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'

// utils
import prisma from '../../../lib/prisma'

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
}

const autoHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default autoHandler
