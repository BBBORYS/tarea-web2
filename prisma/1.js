const nuevoMarca = await prisma.marca.create({
    data: {
        id: "124548795",
        nombre: "epson",

    },
});

const proveedor = await prisma.marca.create({
    data: {
        id: "1254874595",
        nombre: "epson",

    },
});

const garantia = await prisma.marca.create({
    data: {
        id: "1254879455",
        nombre: "epson",

    },
});