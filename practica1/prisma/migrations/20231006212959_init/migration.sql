-- CreateTable
CREATE TABLE "Marca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Proveedor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Garantia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "periodo" INTEGER NOT NULL,
    "marcaId" INTEGER NOT NULL,
    CONSTRAINT "Garantia_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MarcaToProveedor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MarcaToProveedor_A_fkey" FOREIGN KEY ("A") REFERENCES "Marca" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MarcaToProveedor_B_fkey" FOREIGN KEY ("B") REFERENCES "Proveedor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_MarcaToProveedor_AB_unique" ON "_MarcaToProveedor"("A", "B");

-- CreateIndex
CREATE INDEX "_MarcaToProveedor_B_index" ON "_MarcaToProveedor"("B");
