## Devlog

Initially running server locally, seeing where problems are
1 - session.user.name causing problems, commenting out to see what the data looks like before fixing
2 - added github auth local environment variables and DB connection URL. committing to deploy to vercel
3 - created supabase tables from schema.sql
4 - successfully deployed to vercel with supabase URI transaction pooler
5 - in the schema, line 79 is commented out. I accidentally fixed (I think) the mutliple vote problem by including that when creating my tables
