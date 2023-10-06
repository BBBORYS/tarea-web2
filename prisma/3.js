const marcaActualizada = await prisma.marca.update({
    where: {
        id: marcaId,
    },
    data: {
        id: "125487895",
        nombre: "hojas",

    },
});

const proveedorActualizada = await prisma.marca.update({
    where: {
        id: marcaId,
    },
    data: {
        id: "1254438795",
        nombre: "tinta",

    },
});
const garantiaActualizada = await prisma.marca.update({
    where: {
        id: marcaId,
    },
    data: {
        id: "1253248795",
        nombre: "colores",

    },
});