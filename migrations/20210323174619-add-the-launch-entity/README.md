# Migration `20210323174619-add-the-launch-entity`

This migration has been generated at 3/23/2021, 11:46:19 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Launch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "launchDate" DATETIME NOT NULL,
    "payloadWeight" REAL NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210323174619-add-the-launch-entity
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+  output = "../server/node_modules/.prisma/client"
+}
+
+model Launch {
+    id Int @id @default(autoincrement())
+  name String
+  launchDate DateTime
+  payloadWeight Float
+}
+
```


