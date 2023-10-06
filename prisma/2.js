const marca = await prisma.marca.findUnique({
    where: {
        id: marcaId,
    },
    include: {
        proveedores: true,
        garantias: true,
    },
});

const proveedor = await prisma.marca.findUnique({
    where: {
        id: marcaId,
    },
    include: {
        proveedores: true,
        garantias: true,
    },
});
const garantia = await prisma.marca.findUnique({
    where: {
        id: marcaId,
    },
    include: {
        proveedores: true,
        garantias: true,
    },
});