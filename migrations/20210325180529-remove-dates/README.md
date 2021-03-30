# Migration `20210325180529-remove-dates`

This migration has been generated at 3/25/2021, 12:05:29 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Launch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "payloadWeight" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
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
migration 20210323174619-add-the-launch-entity..20210325180529-remove-dates
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
@@ -11,8 +11,8 @@
 model Launch {
     id Int @id @default(autoincrement())
   name String
-  launchDate DateTime
   payloadWeight Float
+  createdAt DateTime @default(now())
 }
```


