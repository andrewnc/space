# Migration `20210325235330-test`

This migration has been generated at 3/25/2021, 5:53:30 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Launch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "payloadWeight" REAL NOT NULL
);
INSERT INTO "new_Launch" ("id", "name", "payloadWeight") SELECT "id", "name", "payloadWeight" FROM "Launch";
DROP TABLE "Launch";
ALTER TABLE "new_Launch" RENAME TO "Launch";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210325180529-remove-dates..20210325235330-test
--- datamodel.dml
+++ datamodel.dml
@@ -1,8 +1,8 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -12,7 +12,6 @@
 model Launch {
     id Int @id @default(autoincrement())
   name String
   payloadWeight Float
-  createdAt DateTime @default(now())
 }
```


