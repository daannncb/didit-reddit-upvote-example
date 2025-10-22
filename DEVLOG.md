## Devlog

Initially running server locally, seeing where problems are

- session.user.name causing problems, commenting out to see what the data looks like before fixing
  N.B. this is returning null and needs to be a more appropriate auth check for the component that it is. I checked the documentation and it had a lot of info, need more time to digest that.
- added github auth local environment variables and DB connection URL. committing to deploy to vercel
- created supabase tables from schema.sql
- successfully deployed to vercel with supabase URI transaction pooler
- in the schema, line 79 is commented out. I accidentally fixed (I think) the mutliple vote problem by including that when creating my tables, else this feature was just working as far as I can tell with the limited testing I've done.
