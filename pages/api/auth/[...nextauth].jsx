import axios from "@/lib/axios";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // async authorize(profile) {
      //   console.log(profile);
      //   try {
      //     const userExist = await axios.get(`/api/users/${profile.email}`);
      //     if (userExist.status == 404) {
      //       const response = await axios.post("/api/users/auth/signup", {
      //         name: profile.name,
      //         email: profile.email,
      //         password: profile.email,
      //         image: profile.picture,
      //       });
      //     }

      //     // Return the user object
      //     return profile;
      //   } catch (error) {
      //     throw new Error(error.message);
      //   }
      // },
    }),
    ////.........................................
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email && !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        try {
          const response = await axios.post("/api/auth/login", credentials, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(response);
          const user = response.data;

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          throw new Error(error.response.data.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
    // async signIn({ user, account }) {
    //   if (account.provider === "google") {
    //     const { name, email, picture } = user;
    //         const response = await axios.post("/api/users/auth/signup", {
    //           name: name,
    //           email: email,
    //           password: email,
    //           image: picture,
    //         });
    //   }

    //   return user;
    // },
  },
};

export default NextAuth(authOptions);
